// MediBridge - Quick Appointment Booking Module
// Provides easy appointment scheduling from dashboard

function openQuickAppointmentModal() {
    console.log('📅 Opening quick appointment modal');

    const user = auth?.getCurrentUser();
    if (!user) {
        alert('❌ Please login first');
        return;
    }

    const modal = document.getElementById('quickAppointmentModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('active');

        // Set today as minimum date
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('quickAppointmentDate').value = today;
        document.getElementById('quickAppointmentDate').min = today;

        console.log('✅ Quick appointment modal opened');
    } else {
        console.warn('❌ Quick appointment modal not found');
    }
}

function closeQuickAppointmentModal() {
    console.log('🔒 Closing quick appointment modal');

    const modal = document.getElementById('quickAppointmentModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('active');
        document.getElementById('quickAppointmentForm').reset();
        console.log('✅ Quick appointment modal closed');
    }
}

function bookQuickAppointment() {
    console.log('📅 Booking quick appointment');

    // Get form values
    const doctor = document.getElementById('quickAppointmentDoctor').value.trim();
    const date = document.getElementById('quickAppointmentDate').value;
    const time = document.getElementById('quickAppointmentTime').value;
    const type = document.getElementById('quickAppointmentType').value;
    const reason = document.getElementById('quickAppointmentReason').value.trim();

    // Validate form
    if (!doctor || !date || !time || !type) {
        alert('❌ Please fill all required fields (marked with *)');
        console.warn('Validation failed: Missing required fields');
        return;
    }

    try {
        const user = auth?.getCurrentUser();
        if (!user) {
            alert('❌ Please login first');
            return;
        }

        // Create appointment data
        const appointmentData = {
            patientId: user.id,
            patientName: user.profile.name || user.username,
            doctor: doctor,
            date: date,
            time: time,
            type: type,
            reason: reason || 'General consultation',
            status: 'scheduled'
        };

        console.log('📅 Appointment data:', appointmentData);

        // Add appointment using storage
        if (window.storage && window.storage.addAppointment) {
            const result = window.storage.addAppointment(appointmentData);
            console.log('✅ Appointment added:', result);

            alert(`✅ Appointment scheduled successfully!\n\n📅 Date: ${date}\n⏰ Time: ${time}\n👨‍⚕️ Doctor: ${doctor}\n📍 Type: ${type}`);

            window.app?.showToast('success', '✅ Appointment scheduled successfully!');
            closeQuickAppointmentModal();
        } else {
            console.error('Storage or addAppointment method not found');
            alert('❌ Error saving appointment. Please try again.');
        }
    } catch (error) {
        console.error('❌ Error booking appointment:', error);
        alert('❌ Error booking appointment. Please try again.');
    }
}

// Global function references
window.openQuickAppointmentModal = openQuickAppointmentModal;
window.closeQuickAppointmentModal = closeQuickAppointmentModal;
window.bookQuickAppointment = bookQuickAppointment;

console.log('✅ Quick Appointment Booking System initialized');
