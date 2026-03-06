// MediBridge - Storage Management (localStorage abstraction layer)

class MediBridgeStorage {
    constructor() {
        this.version = '1.0';
        this.initializeStorage();
    }

    initializeStorage() {
        if (!localStorage.getItem('medibridge_version')) {
            localStorage.setItem('medibridge_version', this.version);
            this.initializeDefaultData();
        }
    }

    initializeDefaultData() {
        localStorage.setItem('users', JSON.stringify([]));
        localStorage.setItem('patients', JSON.stringify([]));
        localStorage.setItem('appointments', JSON.stringify([]));
        localStorage.setItem('emergencies', JSON.stringify([]));
        localStorage.setItem('messages', JSON.stringify([]));
        localStorage.setItem('chatbot_history', JSON.stringify([]));
    }

    // User Management
    addUser(user) {
        const users = this.getUsers();
        user.id = 'user_' + Date.now();
        user.createdAt = new Date().toISOString();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return user;
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }

    getUserById(id) {
        const users = this.getUsers();
        return users.find(u => u.id === id);
    }

    updateUser(id, updates) {
        const users = this.getUsers();
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updates };
            localStorage.setItem('users', JSON.stringify(users));
            return users[userIndex];
        }
        return null;
    }

    // Patient Management
    addPatient(patient) {
        const patients = this.getPatients();
        patient.id = 'patient_' + Date.now();
        patient.createdAt = new Date().toISOString();
        patients.push(patient);
        localStorage.setItem('patients', JSON.stringify(patients));
        return patient;
    }

    getPatients() {
        return JSON.parse(localStorage.getItem('patients') || '[]');
    }

    getPatientById(id) {
        const patients = this.getPatients();
        return patients.find(p => p.id === id);
    }

    updatePatient(id, updates) {
        const patients = this.getPatients();
        const patientIndex = patients.findIndex(p => p.id === id);
        if (patientIndex !== -1) {
            patients[patientIndex] = { ...patients[patientIndex], ...updates };
            localStorage.setItem('patients', JSON.stringify(patients));
            return patients[patientIndex];
        }
        return null;
    }

    deletePatient(id) {
        let patients = this.getPatients();
        patients = patients.filter(p => p.id !== id);
        localStorage.setItem('patients', JSON.stringify(patients));
        return true;
    }

    searchPatients(query) {
        const patients = this.getPatients();
        const lowerQuery = query.toLowerCase();
        return patients.filter(p =>
            p.name.toLowerCase().includes(lowerQuery) ||
            p.phone.includes(query) ||
            (p.email && p.email.toLowerCase().includes(lowerQuery))
        );
    }

    // Appointment Management
    addAppointment(appointment) {
        const appointments = this.getAppointments();
        appointment.id = 'appt_' + Date.now();
        appointment.createdAt = new Date().toISOString();
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        return appointment;
    }

    getAppointments() {
        return JSON.parse(localStorage.getItem('appointments') || '[]');
    }

    getAppointmentById(id) {
        const appointments = this.getAppointments();
        return appointments.find(a => a.id === id);
    }

    updateAppointment(id, updates) {
        const appointments = this.getAppointments();
        const appointmentIndex = appointments.findIndex(a => a.id === id);
        if (appointmentIndex !== -1) {
            appointments[appointmentIndex] = { ...appointments[appointmentIndex], ...updates };
            localStorage.setItem('appointments', JSON.stringify(appointments));
            return appointments[appointmentIndex];
        }
        return null;
    }

    deleteAppointment(id) {
        let appointments = this.getAppointments();
        appointments = appointments.filter(a => a.id !== id);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        return true;
    }

    getAppointmentsByPatient(patientId) {
        const appointments = this.getAppointments();
        return appointments.filter(a => a.patientId === patientId);
    }

    getAppointmentsByProvider(providerId) {
        const appointments = this.getAppointments();
        return appointments.filter(a => a.providerId === providerId);
    }

    // Emergency Management
    addEmergency(emergency) {
        const emergencies = this.getEmergencies();
        emergency.id = 'emerg_' + Date.now();
        emergency.timestamp = new Date().toISOString();
        emergencies.push(emergency);
        localStorage.setItem('emergencies', JSON.stringify(emergencies));
        return emergency;
    }

    getEmergencies() {
        return JSON.parse(localStorage.getItem('emergencies') || '[]');
    }

    getEmergenciesByUser(userId) {
        const emergencies = this.getEmergencies();
        return emergencies.filter(e => e.userId === userId);
    }

    // Chat/Message Management
    addChatbotMessage(message) {
        const messages = this.getChatMessages();
        message.id = 'msg_' + Date.now();
        message.timestamp = new Date().toISOString();
        messages.push(message);
        localStorage.setItem('chatbot_history', JSON.stringify(messages));
        return message;
    }

    getChatMessages() {
        return JSON.parse(localStorage.getItem('chatbot_history') || '[]');
    }

    clearChatMessages() {
        localStorage.setItem('chatbot_history', JSON.stringify([]));
        return true;
    }

    // Session Management
    setCurrentSession(userId, role) {
        const session = {
            userId,
            role,
            loginTime: new Date().toISOString(),
            token: 'session_' + Date.now()
        };
        localStorage.setItem('current_session', JSON.stringify(session));
        return session;
    }

    getCurrentSession() {
        const session = localStorage.getItem('current_session');
        return session ? JSON.parse(session) : null;
    }

    clearCurrentSession() {
        localStorage.removeItem('current_session');
        return true;
    }

    // Data Export
    exportAllData() {
        return {
            version: this.version,
            exportDate: new Date().toISOString(),
            users: this.getUsers(),
            patients: this.getPatients(),
            appointments: this.getAppointments(),
            emergencies: this.getEmergencies(),
            chatHistory: this.getChatMessages()
        };
    }

    // Data Import
    importData(data) {
        try {
            if (data.users) localStorage.setItem('users', JSON.stringify(data.users));
            if (data.patients) localStorage.setItem('patients', JSON.stringify(data.patients));
            if (data.appointments) localStorage.setItem('appointments', JSON.stringify(data.appointments));
            if (data.emergencies) localStorage.setItem('emergencies', JSON.stringify(data.emergencies));
            if (data.chatHistory) localStorage.setItem('chatbot_history', JSON.stringify(data.chatHistory));
            return true;
        } catch (e) {
            console.error('Import failed:', e);
            return false;
        }
    }

    // Data Management
    clearAllData() {
        const confirmed = confirm('Are you sure you want to clear all data? This cannot be undone.');
        if (confirmed) {
            this.initializeDefaultData();
            this.clearCurrentSession();
            return true;
        }
        return false;
    }

    getStorageStats() {
        return {
            users: this.getUsers().length,
            patients: this.getPatients().length,
            appointments: this.getAppointments().length,
            emergencies: this.getEmergencies().length,
            chatMessages: this.getChatMessages().length
        };
    }
}

// Initialize storage globally
const storage = new MediBridgeStorage();
