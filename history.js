// MediBridge - Appointment History Module

function loadHistoryList() {
    const user = auth.getCurrentUser();
    if (!user) return;

    const filter = document.getElementById('historyFilter')?.value || 'all';
    let items = [];

    if (filter === 'emergency') {
        items = storage.getEmergenciesByUser(user.id).map(e => ({
            id: e.id,
            type: 'emergency',
            title: `🚨 ${e.type}`,
            date: e.timestamp,
            details: e.description,
            status: e.status
        }));
    } else {
        let appointments;
        if (user.role === 'patient') {
            appointments = storage.getAppointmentsByPatient(user.id);
        } else {
            appointments = storage.getAppointmentsByProvider(user.id);
        }

        items = appointments.map(a => ({
            id: a.id,
            type: 'appointment',
            title: user.role === 'patient' ? a.doctor : a.patientName,
            date: `${a.date} ${a.time}`,
            details: `Type: ${a.type}. Reason: ${a.reason || 'General consultation'}`,
            status: a.status
        }));
    }

    // Apply filters
    if (filter === 'upcoming') {
        items = items.filter(i => {
            if (i.type === 'appointment') {
                const apptDate = new Date(`${i.date.split(' ')[0]}T${i.date.split(' ')[1]}`);
                return apptDate >= new Date();
            }
            return false;
        });
    } else if (filter === 'past') {
        items = items.filter(i => {
            if (i.type === 'appointment') {
                const apptDate = new Date(`${i.date.split(' ')[0]}T${i.date.split(' ')[1]}`);
                return apptDate < new Date();
            }
            return false;
        });
    }

    // Sort by date (newest first)
    items.sort((a, b) => new Date(b.date) - new Date(a.date));

    const list = document.getElementById('historyList');
    if (items.length === 0) {
        list.innerHTML = '<p class="empty-state">No history found</p>';
        return;
    }

    list.innerHTML = items.map(item => `
        <div class="history-card">
            <div class="card-header">
                <div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-meta">${new Date(item.date).toLocaleString()}</p>
                </div>
                <span class="badge" style="background: ${getStatusColor(item.status)}; color: white; padding: 0.5rem 1rem; border-radius: 20px;">
                    ${item.status || 'Recorded'}
                </span>
            </div>
            <div class="card-body">
                <p>${item.details}</p>
            </div>
            <div class="card-footer">
                ${item.type === 'emergency' ?`
                    <button class="btn btn-secondary" onclick="viewEmergencyDetails('${item.id}')">View Details</button>
                ` : `
                    <button class="btn btn-secondary" onclick="viewAppointmentDetails('${item.id}')">View Details</button>
                    <button class="btn btn-secondary" onclick="downloadAppointmentRecord('${item.id}')">Download Record</button>
                `}
            </div>
        </div>
    `).join('');
}

// Filter change listener
document.getElementById('historyFilter')?.addEventListener('change', () => {
    loadHistoryList();
});

// Get status color
function getStatusColor(status) {
    switch (status) {
        case 'completed': return '#28a745';
        case 'cancelled': return '#dc3545';
        case 'active': return '#ff9800';
        case 'scheduled': return '#007bff';
        default: return '#6c757d';
    }
}

// View appointment details
function viewAppointmentDetails(appointmentId) {
    const apt = storage.getAppointmentById(appointmentId);
    if (!apt) return;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'detailsModal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Appointment Details</h2>
                <button class="close-btn" onclick="closeDetailsModal()">&times;</button>
            </div>
            <div class="modal-body">
                <p><strong>Provider:</strong> ${apt.doctor}</p>
                <p><strong>Date & Time:</strong> ${apt.date} at ${apt.time}</p>
                <p><strong>Type:</strong> ${apt.type}</p>
                <p><strong>Reason:</strong> ${apt.reason || 'General consultation'}</p>
                <p><strong>Status:</strong> ${apt.status}</p>
                <p><strong>Booked:</strong> ${new Date(apt.createdAt).toLocaleString()}</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeDetailsModal()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// View emergency details
function viewEmergencyDetails(emergencyId) {
    const emergency = storage.getEmergencies().find(e => e.id === emergencyId);
    if (!emergency) return;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'detailsModal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>🚨 Emergency Alert Details</h2>
                <button class="close-btn" onclick="closeDetailsModal()">&times;</button>
            </div>
            <div class="modal-body">
                <p><strong>User:</strong> ${emergency.userName}</p>
                <p><strong>Time:</strong> ${new Date(emergency.timestamp).toLocaleString()}</p>
                <p><strong>Location:</strong> ${emergency.location}</p>
                <p><strong>Description:</strong> ${emergency.description}</p>
                <p><strong>Status:</strong> ${emergency.status}</p>
                <p><strong>Phone:</strong> ${emergency.userPhone || 'Not provided'}</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeDetailsModal()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Close details modal
function closeDetailsModal() {
    const modal = document.getElementById('detailsModal');
    if (modal) modal.remove();
}

// Download appointment record as PDF/text
function downloadAppointmentRecord(appointmentId) {
    const apt = storage.getAppointmentById(appointmentId);
    if (!apt) return;

    const content = `
APPOINTMENT RECORD
==================
Provider: ${apt.doctor}
Date: ${apt.date}
Time: ${apt.time}
Type: ${apt.type}
Reason: ${apt.reason || 'General consultation'}
Status: ${apt.status}
Booked: ${new Date(apt.createdAt).toLocaleString()}
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `appointment_${apt.id}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    app.showToast('success', 'Appointment record downloaded');
}
