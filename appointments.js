// MediBridge - Appointments Management Module

// Load appointments list
function loadAppointmentsList() {
    const user = auth.getCurrentUser();
    if (!user) return;

    let appointments;
    if (user.role === 'patient') {
        appointments = storage.getAppointmentsByPatient(user.id);
    } else {
        appointments = storage.getAppointmentsByProvider(user.id);
    }

    const list = document.getElementById('appointmentsList');

    if (appointments.length === 0) {
        list.innerHTML = '<p class="empty-state">No appointments scheduled</p>';
        return;
    }

    list.innerHTML = appointments.map(apt => `
        <div class="appointment-card">
            <div class="card-header">
                <div>
                    <h3 class="card-title">${user.role === 'patient' ? apt.doctor : apt.patientName}</h3>
                    <p class="card-meta">${new Date(apt.date).toLocaleDateString()} at ${apt.time}</p>
                </div>
                <span class="badge" style="background: ${getAppointmentStatusColor(apt.status)}; color: white; padding: 0.5rem 1rem; border-radius: 20px;">
                    ${apt.status || 'Scheduled'}
                </span>
            </div>
            <div class="card-body">
                <p><strong>Type:</strong> ${formatAppointmentType(apt.type)}</p>
                <p><strong>Reason:</strong> ${apt.reason || 'General consultation'}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary" onclick="editAppointment('${apt.id}')">Edit</button>
                ${apt.type !== 'in-person' ? `<button class="btn btn-success" onclick="startCall('${apt.id}')">Start Call</button>` : ''}
                <button class="btn btn-danger" onclick="cancelAppointment('${apt.id}')">Cancel</button>
            </div>
        </div>
    `).join('');
}

function getAppointmentStatusColor(status) {
    switch (status) {
        case 'completed': return '#28a745';
        case 'cancelled': return '#dc3545';
        case 'scheduled': return '#007bff';
        default: return '#17a2b8';
    }
}

function formatAppointmentType(type) {
    const types = {
        'in-person': 'In-Person Visit',
        'telemedicine': 'Video Consultation',
        'voice-call': 'Voice Call'
    };
    return types[type] || type;
}

// Book appointment button
document.getElementById('bookAppointmentBtn')?.addEventListener('click', () => {
    const user = auth.getCurrentUser();
    if (user.role !== 'patient') {
        app.showToast('error', 'Only patients can book appointments');
        return;
    }

    // Populate patient dropdown for providers
    if (user.role === 'provider') {
        const patients = storage.getPatients();
        const select = document.getElementById('appointmentPatient');
        select.innerHTML = '<option value="">Select patient</option>' +
            patients.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    }

    document.getElementById('appointmentForm').reset();
    app.showModal('appointmentModal');
});

// Appointment form submission
document.getElementById('appointmentForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = auth.getCurrentUser();
    const appointmentData = {
        patientId: user.role === 'patient' ? user.id : document.getElementById('appointmentPatient').value,
        patientName: user.role === 'patient' ? user.profile.name : '',
        providerId: user.role === 'provider' ? user.id : '',
        doctor: document.getElementById('appointmentDoctor').value,
        date: document.getElementById('appointmentDate').value,
        time: document.getElementById('appointmentTime').value,
        type: document.getElementById('appointmentType').value,
        reason: document.getElementById('appointmentReason').value,
        status: 'scheduled'
    };

    if (!appointmentData.date || !appointmentData.time || !appointmentData.type) {
        app.showToast('error', 'Please fill all required fields');
        return;
    }

    const result = storage.addAppointment(appointmentData);
    app.showToast('success', 'Appointment booked successfully');
    app.hideModal('appointmentModal');
    loadAppointmentsList();
});

// Edit appointment
function editAppointment(appointmentId) {
    const apt = storage.getAppointmentById(appointmentId);
    if (!apt) return;

    document.getElementById('appointmentDoctor').value = apt.doctor;
    document.getElementById('appointmentDate').value = apt.date;
    document.getElementById('appointmentTime').value = apt.time;
    document.getElementById('appointmentType').value = apt.type;
    document.getElementById('appointmentReason').value = apt.reason || '';

    app.showModal('appointmentModal');
}

// Cancel appointment
function cancelAppointment(appointmentId) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        storage.updateAppointment(appointmentId, { status: 'cancelled' });
        app.showToast('success', 'Appointment cancelled');
        loadAppointmentsList();
    }
}

// Start video/voice call
function startCall(appointmentId) {
    const apt = storage.getAppointmentById(appointmentId);
    if (!apt) return;

    app.showModal('callModal');
    app.showToast('info', 'Initializing call connection...');

    // Initialize call (would connect to WebRTC in production)
    setTimeout(() => {
        app.showToast('success', 'Call connected!');
    }, 2000);
}

// Close appointment modal
document.getElementById('closeAppointmentModal')?.addEventListener('click', () => {
    app.hideModal('appointmentModal');
});

// Close call modal
document.getElementById('closeCall')?.addEventListener('click', () => {
    app.hideModal('callModal');
});

// End call
document.getElementById('endCall')?.addEventListener('click', () => {
    app.hideToast('callModal');
    app.showToast('success', 'Call ended');
});

// Toggle audio/video
document.getElementById('toggleAudio')?.addEventListener('click', function() {
    this.style.opacity = this.style.opacity === '0.5' ? '1' : '0.5';
});

document.getElementById('toggleVideo')?.addEventListener('click', function() {
    this.style.opacity = this.style.opacity === '0.5' ? '1' : '0.5';
});
