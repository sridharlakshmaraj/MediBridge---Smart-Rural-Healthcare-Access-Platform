// MediBridge - E-Prescription Module
// Handles e-prescription creation and PDF download functionality

class EPrescription {
    constructor() {
        console.log('📋 EPrescription constructor called');

        this.modal = document.getElementById('ePrescriptionModal');
        this.form = document.getElementById('ePrescriptionForm');
        this.ePrescriptionBtn = document.getElementById('ePrescriptionBtn');
        this.closeBtn = document.getElementById('closeEPrescription');
        this.cancelBtn = document.getElementById('cancelEPrescription');
        this.downloadBtn = document.getElementById('downloadEPrescription');

        console.log('📋 Modal:', this.modal);
        console.log('📋 Form:', this.form);
        console.log('📋 Button:', this.ePrescriptionBtn);
        console.log('📋 Download Button:', this.downloadBtn);

        this.init();
    }

    init() {
        console.log('📋 EPrescription init started');

        // Open modal when E-Prescription button clicked
        if (this.ePrescriptionBtn) {
            console.log('✅ E-Prescription button found');
            this.ePrescriptionBtn.addEventListener('click', () => {
                console.log('📋 E-Prescription button clicked');
                this.openModal();
            });
        } else {
            console.warn('❌ E-Prescription button NOT found');
        }

        // Close modal
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeModal());
        }

        if (this.cancelBtn) {
            this.cancelBtn.addEventListener('click', () => this.closeModal());
        }

        // Download PDF
        if (this.downloadBtn) {
            console.log('✅ Download button found');
            this.downloadBtn.addEventListener('click', () => {
                console.log('📥 Download button clicked');
                this.downloadPrescription();
            });
        } else {
            console.warn('❌ Download button NOT found');
        }

        // Close modal when clicked outside
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        console.log('✅ EPrescription init completed');
    }

    openModal() {
        // Role-based access control: Only healthcare providers can create prescriptions
        const user = auth?.getCurrentUser();
        if (!user) {
            window.app?.showToast('error', '❌ Please login first');
            return;
        }

        if (user.role !== 'provider') {
            window.app?.showToast('error', '❌ Only healthcare providers can create prescriptions');
            console.warn(`Access denied: User role '${user.role}' cannot create prescriptions`);
            return;
        }

        if (this.modal) {
            console.log('🔓 Opening modal...');
            this.modal.classList.remove('hidden');
            this.modal.classList.add('active');
            // Pre-fill with current date
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('prescDate').value = today;
            // Pre-fill doctor name with logged-in user's name
            document.getElementById('prescDoctorName').value = user.profile.name || user.username;
            console.log('✅ Modal opened');
        }
    }

    closeModal() {
        if (this.modal) {
            console.log('🔒 Closing modal...');
            this.modal.classList.add('hidden');
            this.modal.classList.remove('active');
            this.form.reset();
            console.log('✅ Modal closed');
        }
    }

    getPrescriptionData() {
        return {
            patientName: document.getElementById('prescPatientName').value,
            patientAge: document.getElementById('prescPatientAge').value,
            diagnosis: document.getElementById('prescDiagnosis').value,
            date: document.getElementById('prescDate').value,
            medications: document.getElementById('prescMedications').value,
            instructions: document.getElementById('prescInstructions').value,
            doctorName: document.getElementById('prescDoctorName').value,
            licenseNo: document.getElementById('prescLicenseNo').value
        };
    }

    validateForm() {
        const data = this.getPrescriptionData();
        console.log('📋 Validating form:', data);

        if (!data.patientName.trim()) {
            alert('❌ Please enter patient name');
            console.warn('Validation failed: No patient name');
            return false;
        }
        if (!data.patientAge) {
            alert('❌ Please enter patient age');
            console.warn('Validation failed: No patient age');
            return false;
        }
        if (!data.diagnosis.trim()) {
            alert('❌ Please enter diagnosis');
            console.warn('Validation failed: No diagnosis');
            return false;
        }
        if (!data.medications.trim()) {
            alert('❌ Please enter medications');
            console.warn('Validation failed: No medications');
            return false;
        }
        if (!data.doctorName.trim()) {
            alert('❌ Please enter doctor name');
            console.warn('Validation failed: No doctor name');
            return false;
        }
        if (!data.licenseNo.trim()) {
            alert('❌ Please enter license number');
            console.warn('Validation failed: No license number');
            return false;
        }

        console.log('✅ Form validation passed');
        return true;
    }

    generatePrescriptionHTML(data) {
        const today = new Date();
        const prescriptionDate = new Date(data.date);

        // Parse medications
        const medicationLines = data.medications
            .split('\n')
            .filter(line => line.trim())
            .map(line => `<li>${line.trim()}</li>`)
            .join('');

        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>E-Prescription</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .prescription-container {
            background: white;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border: 2px solid #001f3f;
        }
        .prescription-header {
            text-align: center;
            border-bottom: 3px solid #001f3f;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .hospital-name {
            font-size: 28px;
            font-weight: bold;
            color: #001f3f;
            margin-bottom: 5px;
        }
        .hospital-subtitle {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
        }
        .prescription-title {
            font-size: 24px;
            font-weight: bold;
            color: #001f3f;
            margin-top: 10px;
        }
        .prescription-body {
            margin-top: 30px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            font-size: 14px;
            font-weight: bold;
            color: white;
            background-color: #001f3f;
            padding: 10px 15px;
            margin-bottom: 10px;
            border-radius: 4px;
        }
        .section-content {
            padding: 0 15px;
        }
        .info-row {
            display: flex;
            margin-bottom: 10px;
            font-size: 14px;
        }
        .info-label {
            font-weight: bold;
            color: #001f3f;
            width: 150px;
            margin-right: 20px;
        }
        .info-value {
            flex: 1;
            color: #333;
            word-wrap: break-word;
        }
        .medications-list {
            list-style-type: none;
            padding: 0;
        }
        .medications-list li {
            background-color: #f9f9f9;
            border-left: 4px solid #001f3f;
            padding: 10px 15px;
            margin-bottom: 8px;
            font-size: 14px;
            color: #333;
        }
        .instructions {
            background-color: #f0f8ff;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #333;
            border-radius: 4px;
        }
        .prescription-footer {
            margin-top: 40px;
            border-top: 2px solid #001f3f;
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .doctor-section {
            text-align: center;
        }
        .doctor-name {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 30px;
            color: #001f3f;
        }
        .signature-line {
            border-top: 2px solid #333;
            width: 150px;
            margin-bottom: 5px;
        }
        .signature-label {
            font-size: 12px;
            color: #666;
        }
        .generation-time {
            text-align: center;
            font-size: 11px;
            color: #999;
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
        }
        .watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 60px;
            color: rgba(0, 31, 63, 0.05);
            font-weight: bold;
            pointer-events: none;
            z-index: 0;
        }
        @media print {
            body {
                padding: 0;
                background: white;
            }
            .prescription-container {
                box-shadow: none;
                border: none;
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="watermark">MediBridge</div>
    <div class="prescription-container">
        <!-- Header -->
        <div class="prescription-header">
            <div class="hospital-name">🏥 MediBridge Healthcare</div>
            <div class="hospital-subtitle">Medical Prescription Form</div>
            <div class="prescription-title">E-PRESCRIPTION</div>
        </div>

        <!-- Prescription Body -->
        <div class="prescription-body">
            <!-- Patient Information -->
            <div class="section">
                <div class="section-title">PATIENT INFORMATION</div>
                <div class="section-content">
                    <div class="info-row">
                        <span class="info-label">Name:</span>
                        <span class="info-value">${data.patientName}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Age:</span>
                        <span class="info-value">${data.patientAge} years</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Date:</span>
                        <span class="info-value">${this.formatDate(data.date)}</span>
                    </div>
                </div>
            </div>

            <!-- Medical Information -->
            <div class="section">
                <div class="section-title">MEDICAL INFORMATION</div>
                <div class="section-content">
                    <div class="info-row">
                        <span class="info-label">Diagnosis:</span>
                        <span class="info-value">${data.diagnosis}</span>
                    </div>
                </div>
            </div>

            <!-- Medications -->
            <div class="section">
                <div class="section-title">MEDICATIONS/PRESCRIBED DRUGS</div>
                <div class="section-content">
                    <ul class="medications-list">
                        ${medicationLines}
                    </ul>
                </div>
            </div>

            <!-- Instructions -->
            ${data.instructions.trim() ? `
            <div class="section">
                <div class="section-title">SPECIAL INSTRUCTIONS</div>
                <div class="instructions">
                    <strong>⚠️ Important:</strong><br>${data.instructions}
                </div>
            </div>
            ` : ''}

            <!-- Doctor Information -->
            <div class="section">
                <div class="section-title">PHYSICIAN INFORMATION</div>
                <div class="section-content">
                    <div class="info-row">
                        <span class="info-label">Doctor Name:</span>
                        <span class="info-value">${data.doctorName}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">License No:</span>
                        <span class="info-value">${data.licenseNo}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="prescription-footer">
            <div>
                <p style="font-size: 12px; color: #666; margin-bottom: 10px;">Patient Signature</p>
                <div style="width: 120px; height: 2px; background: #333;"></div>
            </div>
            <div class="doctor-section">
                <div class="signature-line"></div>
                <div class="signature-label">Doctor's Signature & Stamp</div>
            </div>
        </div>

        <!-- Generation Info -->
        <div class="generation-time">
            <p>Generated from MediBridge E-Prescription Platform</p>
            <p>Generated on: ${new Date().toLocaleString()}</p>
            <p>This is a digital prescription and is valid for medical use.</p>
        </div>
    </div>
</body>
</html>
        `;
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    async downloadPrescription() {
        console.log('📥 Starting prescription download...');

        // Role-based access control: Only healthcare providers can download/create prescriptions
        const user = auth?.getCurrentUser();
        if (!user || user.role !== 'provider') {
            this.showNotification('❌ Only healthcare providers can create prescriptions', 'error');
            console.warn('Access denied: User attempted to create prescription without provider role');
            return;
        }

        if (!this.validateForm()) {
            console.warn('❌ Form validation failed');
            return;
        }

        try {
            const data = this.getPrescriptionData();
            console.log('📋 Prescription data:', data);

            const htmlContent = this.generatePrescriptionHTML(data);
            console.log('✅ Prescription HTML generated');

            // Save prescription to localStorage
            this.savePrescriptionToProfile(data);
            console.log('✅ Prescription saved to profile');

            // Create blob
            const blob = new Blob([htmlContent], { type: 'text/html' });
            console.log('✅ Blob created, size:', blob.size);

            // For PDF, we'll create an HTML file downloadable
            // In production, consider using a library like html2pdf or jsPDF
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `prescription_${data.patientName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.html`;
            document.body.appendChild(link);

            console.log('📥 Triggering download...');
            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            // Show success message
            this.showNotification('✅ E-Prescription created and saved to profile!', 'success');
            console.log('✅ Download successful');
            this.closeModal();

        } catch (error) {
            console.error('❌ Error downloading prescription:', error);
            this.showNotification('❌ Error downloading prescription. Please try again.', 'error');
        }
    }

    savePrescriptionToProfile(data) {
        try {
            // Get current user
            const user = auth?.getCurrentUser();
            if (!user) {
                console.warn('User not logged in, prescription not saved to profile');
                return;
            }

            // Create prescription object with ID and timestamp
            const prescription = {
                id: 'presc_' + Date.now(),
                userId: user.id,
                patientName: data.patientName,
                patientAge: data.patientAge,
                diagnosis: data.diagnosis,
                date: data.date,
                medications: data.medications,
                instructions: data.instructions,
                doctorName: data.doctorName,
                licenseNo: data.licenseNo,
                createdAt: new Date().toISOString(),
                status: 'active'
            };

            // Get existing prescriptions
            let prescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];

            // Add new prescription
            prescriptions.push(prescription);

            // Save back to localStorage
            localStorage.setItem('userPrescriptions', JSON.stringify(prescriptions));

            console.log('Prescription saved:', prescription);
        } catch (error) {
            console.error('Error saving prescription to profile:', error);
        }
    }

    showNotification(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icons = {
            success: '✓',
            error: '✕',
            info: 'ℹ'
        };

        toast.innerHTML = `
            <span>${icons[type]}</span>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('📋 DOM loaded, initializing EPrescription...');
        new EPrescription();
    });
} else {
    console.log('📋 DOM already loaded, initializing EPrescription...');
    new EPrescription();
}

/*
USAGE:
1. Click the "E-Prescription" button in the dashboard
2. Fill in the form with:
   - Patient name, age
   - Diagnosis
   - Medications (one per line with format: Drug Name - Dosage - Frequency)
   - Instructions (optional)
   - Doctor name, license number
3. Click "Download PDF" to download the prescription

The prescription will be downloaded as an HTML file with professional formatting.
*/
