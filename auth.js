// MediBridge - Authentication Module

class AuthenticationManager {
    constructor() {
        this.currentUser = null;
        this.loadSession();
    }

    loadSession() {
        const session = storage.getCurrentSession();
        if (session) {
            const user = storage.getUserById(session.userId);
            if (user) {
                this.currentUser = user;
            }
        }
    }

    register(username, email, password, role, additionalData = {}) {
        // Validation
        if (!username || !email || !password || !role) {
            return { success: false, message: 'All fields are required' };
        }

        if (password.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters' };
        }

        // Check if user already exists
        const users = storage.getUsers();
        if (users.find(u => u.username === username || u.email === email)) {
            return { success: false, message: 'Username or email already exists' };
        }

        // Create new user
        const user = {
            username,
            email,
            password: this.hashPassword(password), // Note: In production, use bcrypt
            role,
            profile: {
                name: additionalData.fullName || '',
                phone: additionalData.phone || '',
                address: additionalData.address || '',
                avatar: additionalData.avatar || '👤'
            }
        };

        const newUser = storage.addUser(user);
        this.currentUser = newUser;
        storage.setCurrentSession(newUser.id, newUser.role);

        return {
            success: true,
            message: 'Registration successful',
            user: { id: newUser.id, username: newUser.username, role: newUser.role }
        };
    }

    login(username, password, role) {
        // Validation
        if (!username || !password || !role) {
            return { success: false, message: 'Username, password, and role are required' };
        }

        // Find user
        const users = storage.getUsers();
        const user = users.find(u =>
            (u.username === username || u.email === username) &&
            this.verifyPassword(password, u.password) &&
            u.role === role
        );

        if (!user) {
            return { success: false, message: 'Invalid credentials or role mismatch' };
        }

        // Set current session
        this.currentUser = user;
        storage.setCurrentSession(user.id, user.role);

        return {
            success: true,
            message: 'Login successful',
            user: { id: user.id, username: user.username, role: user.role, name: user.profile.name }
        };
    }

    logout() {
        this.currentUser = null;
        storage.clearCurrentSession();
        return { success: true, message: 'Logged out successfully' };
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    updateProfile(updates) {
        if (!this.currentUser) {
            return { success: false, message: 'Not authenticated' };
        }

        const updated = storage.updateUser(this.currentUser.id, {
            profile: { ...this.currentUser.profile, ...updates }
        });

        if (updated) {
            this.currentUser = updated;
            return { success: true, message: 'Profile updated', user: updated };
        }

        return { success: false, message: 'Failed to update profile' };
    }

    changePassword(oldPassword, newPassword) {
        if (!this.currentUser) {
            return { success: false, message: 'Not authenticated' };
        }

        if (!this.verifyPassword(oldPassword, this.currentUser.password)) {
            return { success: false, message: 'Current password is incorrect' };
        }

        if (newPassword.length < 6) {
            return { success: false, message: 'New password must be at least 6 characters' };
        }

        const updated = storage.updateUser(this.currentUser.id, {
            password: this.hashPassword(newPassword)
        });

        if (updated) {
            this.currentUser = updated;
            return { success: true, message: 'Password changed successfully' };
        }

        return { success: false, message: 'Failed to change password' };
    }

    // Simple password hashing (for demo only - use bcrypt in production)
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return 'hash_' + Math.abs(hash).toString(36);
    }

    verifyPassword(password, hash) {
        return this.hashPassword(password) === hash;
    }

    // Create dummy users for demo
    createDemoUsers() {
        const demoUsers = [
            {
                username: 'patient1',
                email: 'patient1@example.com',
                password: this.hashPassword('password123'),
                role: 'patient',
                profile: {
                    name: 'John Patient',
                    phone: '+1234567890',
                    address: 'Rural Village, District XYZ',
                    avatar: '👨‍⚕️'
                }
            },
            {
                username: 'doctor1',
                email: 'doctor1@example.com',
                password: this.hashPassword('password123'),
                role: 'provider',
                profile: {
                    name: 'Dr. Sarah Provider',
                    phone: '+9876543210',
                    address: 'Medical Center, City ABC',
                    specialization: 'General Medicine',
                    avatar: '👨‍⚕️'
                }
            }
        ];

        demoUsers.forEach(user => {
            const users = storage.getUsers();
            if (!users.find(u => u.username === user.username)) {
                storage.addUser(user);
            }
        });
    }
}

// Initialize auth globally
const auth = new AuthenticationManager();

// Create demo data on first load
(function() {
    const users = storage.getUsers();
    if (users.length === 0) {
        auth.createDemoUsers();
    }
})();
