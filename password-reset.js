// MediBridge - Password Reset with OTP Module

class PasswordResetManager {
    constructor() {
        this.setupListeners();
        this.otpStorage = new Map(); // Store OTP in memory
    }

    setupListeners() {
        // Forgot password link
        document.getElementById('toggleForgotPassword')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showForgotPasswordPage();
        });

        // Back to login links
        document.getElementById('backToLogin1')?.addEventListener('click', (e) => {
            e.preventDefault();
            app.showPage('login');
        });

        document.getElementById('backToLogin2')?.addEventListener('click', (e) => {
            e.preventDefault();
            app.showPage('login');
        });

        document.getElementById('backToLogin3')?.addEventListener('click', (e) => {
            e.preventDefault();
            app.showPage('login');
        });

        // Forgot password form (step 1)
        document.getElementById('forgotPasswordForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendOTP();
        });

        // Verify OTP form (step 2)
        document.getElementById('verifyOtpForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.verifyOTP();
        });

        // Reset password form (step 3)
        document.getElementById('resetPasswordForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.resetPassword();
        });

        // Resend OTP
        document.getElementById('resendOtp')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.resendOTP();
        });
    }

    showForgotPasswordPage() {
        app.showPage('forgot-password');
        document.getElementById('forgotStep1').style.display = 'block';
        document.getElementById('forgotStep2').style.display = 'none';
        document.getElementById('forgotStep3').style.display = 'none';
        document.getElementById('forgotPasswordForm').reset();
    }

    sendOTP() {
        const email = document.getElementById('forgotEmail').value;

        if (!email) {
            app.showToast('error', 'Please enter your email');
            return;
        }

        // Find user by email
        const users = storage.getUsers();
        const user = users.find(u => u.email === email);

        if (!user) {
            app.showToast('error', 'Email not found in system');
            return;
        }

        // Generate OTP (6 digits)
        const otp = this.generateOTP();
        const expirationTime = Date.now() + (10 * 60 * 1000); // 10 minutes

        // Store OTP with user email and expiration
        this.otpStorage.set(email, {
            otp,
            expiresAt: expirationTime,
            attempts: 0,
            userId: user.id
        });

        // Simulate email sending
        this.simulateSendEmail(email, otp);

        // Show OTP verification step
        this.showOTPVerificationStep(email, expirationTime);
    }

    generateOTP() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    simulateSendEmail(email, otp) {
        // In production, this would send an actual email
        console.log(`📧 OTP sent to ${email}: ${otp}`);

        // Show OTP in a development tooltip
        const message = `OTP Code: ${otp}\n(For testing - normally sent via email)`;
        app.showToast('success', message);
    }

    showOTPVerificationStep(email, expirationTime) {
        document.getElementById('forgotStep1').style.display = 'none';
        document.getElementById('forgotStep2').style.display = 'block';
        document.getElementById('forgotStep3').style.display = 'none';
        document.getElementById('verifyOtpForm').reset();

        // Store email in session for later use
        this.currentEmail = email;

        // Start OTP timer
        this.startOTPTimer(expirationTime);
    }

    startOTPTimer(expirationTime) {
        const timerEl = document.getElementById('otpTimer');

        const updateTimer = () => {
            const now = Date.now();
            const remainingMs = expirationTime - now;

            if (remainingMs <= 0) {
                timerEl.textContent = 'OTP Expired - Please resend';
                timerEl.style.color = '#dc3545';
                document.getElementById('otpCode').disabled = true;
                clearInterval(this.timerInterval);
                return;
            }

            const minutes = Math.floor(remainingMs / 60000);
            const seconds = Math.floor((remainingMs % 60000) / 1000);
            timerEl.textContent = `Valid for ${minutes}:${seconds.toString().padStart(2, '0')}`;
            timerEl.style.color = remainingMs < 60000 ? '#ff9800' : '#999';
        };

        updateTimer();
        this.timerInterval = setInterval(updateTimer, 1000);
    }

    verifyOTP() {
        const otpCode = document.getElementById('otpCode').value;
        const email = this.currentEmail;

        if (!otpCode || otpCode.length !== 6) {
            app.showToast('error', 'Please enter a valid 6-digit OTP');
            return;
        }

        // Check if OTP exists and is valid
        const storedOTP = this.otpStorage.get(email);

        if (!storedOTP) {
            app.showToast('error', 'OTP session expired. Please start over.');
            this.showForgotPasswordPage();
            return;
        }

        if (Date.now() > storedOTP.expiresAt) {
            app.showToast('error', 'OTP has expired. Please resend.');
            this.otpStorage.delete(email);
            this.showForgotPasswordPage();
            return;
        }

        if (storedOTP.attempts >= 3) {
            app.showToast('error', 'Too many attempts. Please resend OTP.');
            this.otpStorage.delete(email);
            this.showForgotPasswordPage();
            return;
        }

        if (otpCode !== storedOTP.otp) {
            storedOTP.attempts++;
            app.showToast('error', `Invalid OTP. ${3 - storedOTP.attempts} attempts remaining`);
            return;
        }

        // OTP verified successfully
        clearInterval(this.timerInterval);
        this.showResetPasswordStep();
        app.showToast('success', 'OTP verified! Now reset your password');
    }

    showResetPasswordStep() {
        document.getElementById('forgotStep1').style.display = 'none';
        document.getElementById('forgotStep2').style.display = 'none';
        document.getElementById('forgotStep3').style.display = 'block';
        document.getElementById('resetPasswordForm').reset();
    }

    resetPassword() {
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const email = this.currentEmail;

        if (!newPassword || !confirmPassword) {
            app.showToast('error', 'Please fill in all fields');
            return;
        }

        if (newPassword.length < 6) {
            app.showToast('error', 'Password must be at least 6 characters');
            return;
        }

        if (newPassword !== confirmPassword) {
            app.showToast('error', 'Passwords do not match');
            return;
        }

        // Find user and update password
        const users = storage.getUsers();
        const user = users.find(u => u.email === email);

        if (!user) {
            app.showToast('error', 'User not found');
            return;
        }

        // Update password
        const hashedPassword = auth.hashPassword(newPassword);
        storage.updateUser(user.id, { password: hashedPassword });

        // Clear OTP
        this.otpStorage.delete(email);
        this.currentEmail = null;

        // Show success and redirect
        app.showToast('success', 'Password reset successfully! Please login with your new password.');
        setTimeout(() => {
            app.showPage('login');
            document.getElementById('loginForm').reset();
        }, 2000);
    }

    resendOTP() {
        const email = this.currentEmail;
        if (!email) {
            app.showToast('error', 'Session expired. Please start over.');
            this.showForgotPasswordPage();
            return;
        }

        // Generate new OTP
        const otp = this.generateOTP();
        const expirationTime = Date.now() + (10 * 60 * 1000);

        this.otpStorage.set(email, {
            otp,
            expiresAt: expirationTime,
            attempts: 0
        });

        this.simulateSendEmail(email, otp);
        this.startOTPTimer(expirationTime);
        app.showToast('success', 'New OTP sent to your email!');
    }
}

// Initialize password reset manager
const passwordResetManager = new PasswordResetManager();

// Toggle password visibility
function togglePasswordVisibility(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);

    if (input.type === 'password') {
        input.type = 'text';
        toggle.innerHTML = '<span class="toggle-icon">👁️‍🗨️</span>';
    } else {
        input.type = 'password';
        toggle.innerHTML = '<span class="toggle-icon">👁️</span>';
    }
}
