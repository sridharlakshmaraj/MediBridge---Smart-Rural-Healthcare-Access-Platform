// MediBridge - Profile & Utilities Module

function loadProfilePage() {
    const user = auth.getCurrentUser();
    if (!user) return;

    const profileContent = document.getElementById('profileContent');
    if (!profileContent) return;

    // Get user prescriptions
    const prescriptions = getPrescriptionsForUser(user.id);

    profileContent.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <h3>${user.profile.name || user.username}</h3>
            <p style="color: #666; font-size: 0.9rem;">Role: <strong>${user.role === 'patient' ? 'Patient' : 'Healthcare Provider'}</strong></p>
        </div>

        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; color: #000;">
            <h4 style="color: #000;">Personal Information</h4>
            <p style="color: #000;"><strong>Username:</strong> ${user.username}</p>
            <p style="color: #000;"><strong>Email:</strong> ${user.email}</p>
            <p style="color: #000;"><strong>Phone:</strong> ${user.profile.phone || 'Not provided'}</p>
            <p style="color: #000;"><strong>Address:</strong> ${user.profile.address || 'Not provided'}</p>
            ${user.profile.specialization ? `<p style="color: #000;"><strong>Specialization:</strong> ${user.profile.specialization}</p>` : ''}
        </div>

        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; color: #000; margin-bottom: 1.5rem;">
            <h4 style="color: #000;">Account Statistics</h4>
            <p style="color: #000;"><strong>Member Since:</strong> ${new Date(user.createdAt).toLocaleDateString()}</p>
            <p style="color: #000;"><strong>Appointments:</strong> ${user.role === 'patient' ? storage.getAppointmentsByPatient(user.id).length : storage.getAppointmentsByProvider(user.id).length}</p>
            ${user.role === 'patient' ? `<p style="color: #000;"><strong>Emergency Alerts:</strong> ${storage.getEmergenciesByUser(user.id).length}</p>` : ''}
            <p style="color: #000;"><strong>E-Prescriptions:</strong> ${prescriptions.length}</p>
        </div>

        ${prescriptions.length > 0 ? `
        <div>
            <h4 style="color: white; margin-bottom: 1rem;">
                📋 ${user.role === 'patient' ? 'My E-Prescriptions' : 'E-Prescriptions I Created'} (${prescriptions.length})
            </h4>
            ${prescriptions.map((presc, index) => `
                <div style="background: #1a2555; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid #DC143C;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <strong style="color: #FFD700;">Prescription #${index + 1}</strong>
                        <span style="background: #28a745; color: white; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">${presc.status}</span>
                    </div>
                    ${user.role === 'provider' ? `
                        <p style="color: #e0e0e0;"><strong>Patient:</strong> ${presc.patientName} (Age: ${presc.patientAge})</p>
                    ` : ''}
                    <p style="color: #e0e0e0;"><strong>Diagnosis:</strong> ${presc.diagnosis}</p>
                    <p style="color: #e0e0e0;"><strong>Doctor:</strong> ${presc.doctorName}</p>
                    <p style="color: #e0e0e0;"><strong>Date:</strong> ${new Date(presc.date).toLocaleDateString()}</p>
                    <p style="color: #e0e0e0;"><strong>Medications:</strong></p>
                    <div style="background: #0f1a3d; padding: 0.75rem; border-radius: 4px; margin-top: 0.5rem; color: #a0a0a0; font-size: 0.9rem; white-space: pre-wrap;">
                        ${presc.medications.split('\n').filter(m => m.trim()).map(m => `• ${m}`).join('\n')}
                    </div>
                    ${presc.instructions ? `
                    <p style="color: #ffc107; margin-top: 0.75rem;"><strong>⚠️ Instructions:</strong> ${presc.instructions}</p>
                    ` : ''}
                    <button onclick="viewPrescriptionDetails('${presc.id}')" style="background: #007bff; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; margin-top: 0.75rem;">View Details</button>
                    ${user.role === 'provider' ? `
                        <button onclick="deletePrescription('${presc.id}')" style="background: #dc3545; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; margin-left: 0.5rem; margin-top: 0.75rem;">Delete</button>
                    ` : ''}
                </div>
            `).join('')}
        </div>
        ` : `
        <div style="text-align: center; color: #a0a0a0; padding: 2rem; background: #1a2555; border-radius: 8px;">
            <p>📋 ${user.role === 'patient' ? 'No E-Prescriptions received yet' : 'No E-Prescriptions created yet'}</p>
            <p style="font-size: 0.9rem;">
                ${user.role === 'patient' ? 'Your prescriptions will appear here when a healthcare provider creates them' : 'Create a new e-prescription from the dashboard'}
            </p>
        </div>
        `}
    `;
}

// Get prescriptions for current user (with role-based filtering)
function getPrescriptionsForUser(userId) {
    try {
        const user = auth.getCurrentUser();
        const allPrescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];

        // Filter prescriptions based on user role
        let filteredPrescriptions = [];

        if (user.role === 'patient') {
            // Patients can only see prescriptions where they are the patient
            filteredPrescriptions = allPrescriptions.filter(p =>
                p.patientName && p.patientName.toLowerCase() === (user.profile.name || user.username).toLowerCase()
            );
        } else if (user.role === 'provider') {
            // Providers can only see prescriptions they created
            filteredPrescriptions = allPrescriptions.filter(p => p.userId === userId);
        }

        return filteredPrescriptions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } catch (error) {
        console.error('Error getting prescriptions:', error);
        return [];
    }
}

// View prescription details
function viewPrescriptionDetails(prescriptionId) {
    const user = auth.getCurrentUser();
    const prescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];
    const prescription = prescriptions.find(p => p.id === prescriptionId);

    if (!prescription) {
        alert('Prescription not found');
        return;
    }

    // Role-based access control: Verify user is authorized to view this prescription
    let isAuthorized = false;

    if (user.role === 'patient') {
        // Patients can only view prescriptions where they are the patient
        isAuthorized = prescription.patientName &&
                      prescription.patientName.toLowerCase() === (user.profile.name || user.username).toLowerCase();
    } else if (user.role === 'provider') {
        // Providers can only view prescriptions they created
        isAuthorized = prescription.userId === user.id;
    }

    if (!isAuthorized) {
        alert('❌ You are not authorized to view this prescription');
        console.warn(`Access denied: User ${user.id} attempted to view prescription ${prescriptionId}`);
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'viewPrescriptionModal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <div class="modal-header">
                <h2>📋 Prescription Details</h2>
                <button class="close-btn" onclick="closePrescriptionModal()">&times;</button>
            </div>
            <div class="modal-body" style="background: #1a2555; color: white;">
                <div style="margin-bottom: 1rem;">
                    <p><strong>Patient Name:</strong> ${prescription.patientName}</p>
                    <p><strong>Age:</strong> ${prescription.patientAge}</p>
                    <p><strong>Diagnosis:</strong> ${prescription.diagnosis}</p>
                    <p><strong>Date:</strong> ${new Date(prescription.date).toLocaleDateString()}</p>
                </div>
                <div style="background: #0f1a3d; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">
                    <strong>Medications:</strong>
                    <div style="white-space: pre-wrap; margin-top: 0.5rem; font-size: 0.9rem; color: #e0e0e0;">
                        ${prescription.medications}
                    </div>
                </div>
                ${prescription.instructions ? `
                <div style="background: #2d3d5f; padding: 1rem; border-left: 4px solid #ffc107; border-radius: 4px; margin-bottom: 1rem;">
                    <strong style="color: #ffc107;">⚠️ Special Instructions:</strong>
                    <p style="margin-top: 0.5rem; color: #e0e0e0;">${prescription.instructions}</p>
                </div>
                ` : ''}
                <div>
                    <p><strong>Doctor:</strong> ${prescription.doctorName}</p>
                    <p><strong>License No:</strong> ${prescription.licenseNo}</p>
                    <p><strong>Status:</strong> <span style="background: #28a745; padding: 0.25rem 0.75rem; border-radius: 4px;">${prescription.status}</span></p>
                    <p style="font-size: 0.85rem; color: #a0a0a0;"><strong>Created:</strong> ${new Date(prescription.createdAt).toLocaleString()}</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closePrescriptionModal()">Close</button>
                <button class="btn btn-primary" onclick="downloadPrescriptionDetails('${prescription.id}')">📥 Download</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Close prescription modal
function closePrescriptionModal() {
    const modal = document.getElementById('viewPrescriptionModal');
    if (modal) modal.remove();
}

// Delete prescription
function deletePrescription(prescriptionId) {
    const user = auth.getCurrentUser();
    const prescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];
    const prescription = prescriptions.find(p => p.id === prescriptionId);

    if (!prescription) {
        alert('Prescription not found');
        return;
    }

    // Role-based access control: Only providers can delete prescriptions (only their own)
    if (user.role !== 'provider') {
        alert('❌ Only healthcare providers can delete prescriptions');
        console.warn(`Access denied: User with role '${user.role}' attempted to delete prescription`);
        return;
    }

    if (prescription.userId !== user.id) {
        alert('❌ You can only delete prescriptions you created');
        console.warn(`Access denied: User ${user.id} attempted to delete prescription created by ${prescription.userId}`);
        return;
    }

    if (confirm('Are you sure you want to delete this prescription?')) {
        try {
            let allPrescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];
            allPrescriptions = allPrescriptions.filter(p => p.id !== prescriptionId);
            localStorage.setItem('userPrescriptions', JSON.stringify(allPrescriptions));
            loadProfilePage();
            window.app?.showToast('success', '✅ Prescription deleted successfully');
        } catch (error) {
            console.error('Error deleting prescription:', error);
            alert('Error deleting prescription');
        }
    }
}

// Download prescription details
function downloadPrescriptionDetails(prescriptionId) {
    const prescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];
    const presc = prescriptions.find(p => p.id === prescriptionId);

    if (!presc) {
        alert('Prescription not found');
        return;
    }

    const medicationLines = presc.medications
        .split('\n')
        .filter(line => line.trim())
        .map(line => `<li>${line.trim()}</li>`)
        .join('');

    const htmlContent = `
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
        .prescription-title {
            font-size: 24px;
            font-weight: bold;
            color: #001f3f;
            margin-top: 10px;
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
        }
        .info-value {
            flex: 1;
            color: #333;
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
        @media print {
            body { padding: 0; background: white; }
            .prescription-container { box-shadow: none; border: none; }
        }
    </style>
</head>
<body>
    <div class="prescription-container">
        <div class="prescription-header">
            <div class="hospital-name">🏥 MediBridge Healthcare</div>
            <div class="prescription-title">E-PRESCRIPTION</div>
        </div>

        <div>
            <div class="section">
                <div class="section-title">PATIENT INFORMATION</div>
                <div class="section-content">
                    <div class="info-row">
                        <span class="info-label">Name:</span>
                        <span class="info-value">${presc.patientName}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Age:</span>
                        <span class="info-value">${presc.patientAge} years</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Date:</span>
                        <span class="info-value">${new Date(presc.date).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">MEDICAL INFORMATION</div>
                <div class="section-content">
                    <div class="info-row">
                        <span class="info-label">Diagnosis:</span>
                        <span class="info-value">${presc.diagnosis}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">MEDICATIONS/PRESCRIBED DRUGS</div>
                <div class="section-content">
                    <ul class="medications-list">
                        ${medicationLines}
                    </ul>
                </div>
            </div>

            ${presc.instructions ? `
            <div class="section">
                <div class="section-title">SPECIAL INSTRUCTIONS</div>
                <div style="background-color: #f0f8ff; border-left: 4px solid #ffc107; padding: 15px; font-size: 14px; color: #333;">
                    <strong>⚠️ Important:</strong><br>${presc.instructions}
                </div>
            </div>
            ` : ''}

            <div class="section">
                <div class="section-title">PHYSICIAN INFORMATION</div>
                <div class="section-content">
                    <div class="info-row">
                        <span class="info-label">Doctor Name:</span>
                        <span class="info-value">${presc.doctorName}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">License No:</span>
                        <span class="info-value">${presc.licenseNo}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `prescription_${presc.patientName.replace(/\s+/g, '_')}_${new Date(presc.date).toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    closePrescriptionModal();
}

// Edit profile button
document.getElementById('editProfileBtn')?.addEventListener('click', () => {
    const user = auth.getCurrentUser();
    if (!user) return;

    const form = document.createElement('form');
    form.innerHTML = `
        <div class="form-group">
            <label for="editName">Full Name</label>
            <input type="text" id="editName" value="${user.profile.name || ''}" required>
        </div>
        <div class="form-group">
            <label for="editPhone">Phone</label>
            <input type="tel" id="editPhone" value="${user.profile.phone || ''}">
        </div>
        <div class="form-group">
            <label for="editAddress">Address</label>
            <input type="text" id="editAddress" value="${user.profile.address || ''}">
        </div>
    `;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'editProfileModal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Edit Profile</h2>
                <button class="close-btn" onclick="closeEditProfileModal()">&times;</button>
            </div>
            <div class="modal-body">
                ${form.innerHTML}
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeEditProfileModal()">Cancel</button>
                <button class="btn btn-primary" onclick="saveProfileChanges()">Save Changes</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
});

function closeEditProfileModal() {
    const modal = document.getElementById('editProfileModal');
    if (modal) modal.remove();
}

function saveProfileChanges() {
    const user = auth.getCurrentUser();
    if (!user) return;

    const updates = {
        name: document.querySelector('#editProfileModal #editName')?.value || '',
        phone: document.querySelector('#editProfileModal #editPhone')?.value || '',
        address: document.querySelector('#editProfileModal #editAddress')?.value || ''
    };

    auth.updateProfile(updates);
    app.showToast('success', 'Profile updated successfully');
    closeEditProfileModal();
    loadProfilePage();
}

// Export data button
document.getElementById('exportDataBtn')?.addEventListener('click', () => {
    const data = storage.exportAllData();
    const json = JSON.stringify(data, null, 2);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(json));
    element.setAttribute('download', `medibridge_export_${Date.now()}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    app.showToast('success', 'Data exported successfully');
});

// Global utilities
window.closeTempModal = function() {
    const modal = document.getElementById('tempModal');
    if (modal) modal.remove();
};

window.closeEditProfileModal = closeEditProfileModal;
window.saveProfileChanges = saveProfileChanges;
window.viewPrescriptionDetails = viewPrescriptionDetails;
window.closePrescriptionModal = closePrescriptionModal;
window.deletePrescription = deletePrescription;
window.downloadPrescriptionDetails = downloadPrescriptionDetails;
window.getPrescriptionsForUser = getPrescriptionsForUser;

// App version and info
const APP_VERSION = '1.0.0';
const APP_NAME = 'MediBridge';

console.log(`${APP_NAME} v${APP_VERSION} initialized`);
