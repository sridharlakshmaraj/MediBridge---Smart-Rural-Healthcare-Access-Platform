// MediBridge - Patient Management Module

let editingPatientId = null;

// Load patients list
function loadPatientsList() {
    const user = auth.getCurrentUser();
    if (!user || user.role !== 'provider') {
        document.getElementById('patientsList').innerHTML = '<p class="empty-state">Patients list is only available for healthcare providers</p>';
        return;
    }

    const patients = storage.getPatients();
    const list = document.getElementById('patientsList');

    if (patients.length === 0) {
        list.innerHTML = '<p class="empty-state">No patients found</p>';
        return;
    }

    list.innerHTML = patients.map(patient => `
        <div class="patient-card">
            <div class="card-header">
                <div>
                    <h3 class="card-title">${patient.name}</h3>
                    <p class="card-meta">Age: ${patient.age} years | Phone: ${patient.phone}</p>
                </div>
            </div>
            <div class="card-body">
                <p><strong>Email:</strong> ${patient.email || 'N/A'}</p>
                <p><strong>Medical History:</strong> ${patient.diagnosis || 'No medical history recorded'}</p>
                <p><strong>Added:</strong> ${new Date(patient.createdAt).toLocaleDateString()}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary" onclick="editPatient('${patient.id}')">Edit</button>
                <button class="btn btn-secondary" onclick="viewAppointments('${patient.id}')">View Appointments</button>
                <button class="btn btn-danger" onclick="deletePatientConfirm('${patient.id}')">Delete</button>
            </div>
        </div>
    `).join('');
}

// Search patients
document.getElementById('patientSearch')?.addEventListener('input', (e) => {
    const query = e.target.value;
    const patients = query ? storage.searchPatients(query) : storage.getPatients();
    const list = document.getElementById('patientsList');

    if (patients.length === 0) {
        list.innerHTML = '<p class="empty-state">No patients found</p>';
        return;
    }

    list.innerHTML = patients.map(patient => `
        <div class="patient-card">
            <div class="card-header">
                <div>
                    <h3 class="card-title">${patient.name}</h3>
                    <p class="card-meta">Age: ${patient.age} years | Phone: ${patient.phone}</p>
                </div>
            </div>
            <div class="card-body">
                <p><strong>Email:</strong> ${patient.email || 'N/A'}</p>
                <p><strong>Medical History:</strong> ${patient.diagnosis || 'No medical history recorded'}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary" onclick="editPatient('${patient.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deletePatientConfirm('${patient.id}')">Delete</button>
            </div>
        </div>
    `).join('');
});

// Add/Edit patient button
document.getElementById('addPatientBtn')?.addEventListener('click', () => {
    editingPatientId = null;
    document.getElementById('patientModalTitle').textContent = 'Add Patient';
    document.getElementById('patientForm').reset();
    app.showModal('patientModal');
});

// Patient form submission
document.getElementById('patientForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const patientData = {
        name: document.getElementById('patientName').value,
        age: parseInt(document.getElementById('patientAge').value),
        phone: document.getElementById('patientPhone').value,
        email: document.getElementById('patientEmail').value,
        diagnosis: document.getElementById('patientDiagnosis').value
    };

    if (!patientData.name || !patientData.age || !patientData.phone) {
        app.showToast('error', 'Please fill all required fields');
        return;
    }

    let result;
    if (editingPatientId) {
        result = storage.updatePatient(editingPatientId, patientData);
        app.showToast('success', 'Patient updated successfully');
    } else {
        result = storage.addPatient(patientData);
        app.showToast('success', 'Patient added successfully');
    }

    app.hideModal('patientModal');
    loadPatientsList();
    editingPatientId = null;
});

// Edit patient
function editPatient(patientId) {
    const patient = storage.getPatientById(patientId);
    if (!patient) return;

    editingPatientId = patientId;
    document.getElementById('patientModalTitle').textContent = 'Edit Patient';
    document.getElementById('patientName').value = patient.name;
    document.getElementById('patientAge').value = patient.age;
    document.getElementById('patientPhone').value = patient.phone;
    document.getElementById('patientEmail').value = patient.email || '';
    document.getElementById('patientDiagnosis').value = patient.diagnosis || '';

    app.showModal('patientModal');
}

// Delete patient
function deletePatientConfirm(patientId) {
    if (confirm('Are you sure you want to delete this patient? This action cannot be undone.')) {
        storage.deletePatient(patientId);
        app.showToast('success', 'Patient deleted successfully');
        loadPatientsList();
    }
}

// View appointments for patient
function viewAppointments(patientId) {
    const patient = storage.getPatientById(patientId);
    if (!patient) return;

    const appointments = storage.getAppointmentsByPatient(patientId);
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'tempModal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Appointments - ${patient.name}</h2>
                <button class="close-btn" onclick="closeTempModal()">&times;</button>
            </div>
            <div class="modal-body">
                ${appointments.length === 0 ? '<p>No appointments for this patient</p>' : `
                    ${appointments.map(apt => `
                        <div style="margin-bottom: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 8px;">
                            <p><strong>Date:</strong> ${apt.date} at ${apt.time}</p>
                            <p><strong>Type:</strong> ${apt.type}</p>
                            <p><strong>Provider:</strong> ${apt.doctor}</p>
                            <p><strong>Reason:</strong> ${apt.reason || 'N/A'}</p>
                        </div>
                    `).join('')}
                `}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeTempModal();
    });
}

function closeTempModal() {
    const modal = document.getElementById('tempModal');
    if (modal) modal.remove();
}

// Close patient modal
document.getElementById('closePatientModal')?.addEventListener('click', () => {
    app.hideModal('patientModal');
    editingPatientId = null;
});
