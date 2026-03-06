// MediBridge - Main Application Controller

class MediBridgeApp {
    constructor() {
        this.currentPage = 'login';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupPageNavigation();
        this.checkAuthentication();
    }

    setupEventListeners() {
        // Login/Register Toggle
        document.getElementById('toggleRegister')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showPage('register');
        });

        document.getElementById('toggleLogin')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showPage('login');
        });

        // Login Form
        document.getElementById('loginForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Register Form
        document.getElementById('registerForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister();
        });

        // Logout Button
        document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleLogout();
        });

        // Navigation Links
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                const page = link.getAttribute('data-page');
                if (page) {
                    e.preventDefault();
                    this.showPage(page);
                }
            });
        });

        // Mobile Menu Toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        navToggle?.addEventListener('click', () => {
            navMenu?.classList.toggle('active');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu?.classList.remove('active');
            });
        });

        // Emergency button
        document.getElementById('emergencyBtn')?.addEventListener('click', () => {
            this.showModal('emergencyModal');
        });

        document.getElementById('confirmEmergency')?.addEventListener('click', () => {
            this.handleEmergency();
        });

        document.getElementById('cancelEmergency')?.addEventListener('click', () => {
            this.hideModal('emergencyModal');
        });

        document.getElementById('closeEmergency')?.addEventListener('click', () => {
            this.hideModal('emergencyModal');
        });

        // Role selection for patient fields
        document.getElementById('regRole')?.addEventListener('change', (e) => {
            const patientFields = document.getElementById('patientFields');
            if (patientFields) {
                patientFields.style.display = e.target.value === 'patient' ? 'block' : 'none';
            }
        });
    }

    setupPageNavigation() {
        // Page navigation from nav links
        document.querySelectorAll('.nav-link[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.showPage(page);
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Action buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.getAttribute('data-page');
                if (page) {
                    this.showPage(page);
                }
            });
        });
    }

    checkAuthentication() {
        if (!auth.isAuthenticated()) {
            this.showPage('login');
        } else {
            this.showPage('dashboard');
            this.updateDashboard();
        }
    }

    handleLogin() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const role = document.getElementById('userRole').value;

        if (!username || !password || !role) {
            this.showToast('error', 'Please fill all fields');
            return;
        }

        const result = auth.login(username, password, role);

        if (result.success) {
            this.showToast('success', result.message);
            this.showPage('dashboard');
            this.updateDashboard();

            // Generate and show medicine reminders
            const user = auth.getCurrentUser();
            if (user && typeof medicineReminder !== 'undefined') {
                const reminders = medicineReminder.generateMedicineReminders(user.id);
                if (reminders.length > 0) {
                    setTimeout(() => {
                        medicineReminder.insertRemindersIntoDashboard(reminders);
                        // Show alert popup for urgent reminders
                        if (typeof medicineAlertPopup !== 'undefined') {
                            medicineAlertPopup.showAlertPopupIfNeeded(user.id);
                        }
                    }, 500);
                }
            }

            // Clear form
            document.getElementById('loginForm').reset();
        } else {
            this.showToast('error', result.message);
        }
    }

    handleRegister() {
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const role = document.getElementById('regRole').value;
        const fullName = document.getElementById('fullName').value;

        if (!username || !email || !password || !role) {
            this.showToast('error', 'Please fill all required fields');
            return;
        }

        const result = auth.register(username, email, password, role, { fullName });

        if (result.success) {
            this.showToast('success', result.message);
            this.showPage('dashboard');
            this.updateDashboard();
            document.getElementById('registerForm').reset();
        } else {
            this.showToast('error', result.message);
        }
    }

    handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            auth.logout();
            this.showPage('login');
            document.getElementById('loginForm').reset();
            document.getElementById('registerForm').reset();
            this.showToast('success', 'Logged out successfully');
        }
    }

    handleEmergency() {
        const user = auth.getCurrentUser();
        const emergency = {
            userId: user.id,
            userName: user.profile.name,
            userRole: user.role,
            type: 'emergency_alert',
            description: 'Emergency alert sent by user',
            location: 'Current Location (To be implemented with Geolocation)',
            status: 'active'
        };

        const result = storage.addEmergency(emergency);
        this.hideModal('emergencyModal');
        this.showToast('success', '🚨 Emergency alert sent to nearby healthcare providers!');

        // Log to history
        setTimeout(() => {
            this.showPage('history');
        }, 1000);
    }

    updateDashboard() {
        const user = auth.getCurrentUser();
        if (!user) return;

        // Update welcome message
        const welcomeMsg = document.getElementById('welcomeMessage');
        if (welcomeMsg) {
            const greeting = this.getTimeGreeting();
            welcomeMsg.textContent = `${greeting}, ${user.profile.name || user.username}! Welcome to MediBridge`;
        }

        // Update stats based on role
        if (user.role === 'patient') {
            this.updatePatientStats(user.id);

            // Show medicine reminders for patients
            if (typeof medicineReminder !== 'undefined') {
                const reminders = medicineReminder.generateMedicineReminders(user.id);
                if (reminders.length > 0) {
                    setTimeout(() => {
                        medicineReminder.insertRemindersIntoDashboard(reminders);
                        // Show alert popup for urgent reminders
                        if (typeof medicineAlertPopup !== 'undefined') {
                            medicineAlertPopup.showAlertPopupIfNeeded(user.id);
                        }
                    }, 300);
                }
            }
        } else {
            this.updateProviderStats(user.id);
        }
    }

    updatePatientStats(userId) {
        // Count upcoming appointments
        const appointments = storage.getAppointmentsByPatient(userId);
        const upcoming = appointments.filter(a => {
            const apptDate = new Date(a.date);
            return apptDate >= new Date();
        });

        document.getElementById('appointmentCount').textContent = upcoming.length;
        document.getElementById('messageCount').textContent = '0';
    }

    updateProviderStats(userId) {
        // Count patients
        const appointments = storage.getAppointmentsByProvider(userId);
        const patientsSet = new Set(appointments.map(a => a.patientId));

        document.getElementById('patientCount').textContent = patientsSet.size;
        document.getElementById('appointmentCount').textContent = appointments.length;
        document.getElementById('messageCount').textContent = '0';
    }

    showPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show the requested page
        const pageEl = document.getElementById(`page-${pageName}`);
        if (pageEl) {
            pageEl.classList.add('active');
            this.currentPage = pageName;

            // Load page-specific data
            if (pageName === 'patients') {
                loadPatientsList();
            } else if (pageName === 'appointments') {
                loadAppointmentsList();
            } else if (pageName === 'history') {
                loadHistoryList();
            } else if (pageName === 'profile') {
                loadProfilePage();
            }
        }
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('active');
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('active');
        }
    }

    showToast(type, message, duration = 3000) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, duration);
    }

    getTimeGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    }
}

// Initialize app
const app = new MediBridgeApp();

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
        e.target.classList.remove('active');
    }
});

// Close modal buttons
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('active');
        }
    });
});

// Helper function to open chatbot
function openChatbot() {
    const widget = document.getElementById('chatbotWidget');
    if (widget) {
        widget.classList.remove('hidden');
    }
}
