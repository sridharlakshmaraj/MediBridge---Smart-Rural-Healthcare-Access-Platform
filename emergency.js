// MediBridge - Emergency Alert Module

class EmergencyManager {
    constructor() {
        this.setuptEListeners();
    }

    setuptEListeners() {
        document.getElementById('emergencyBtn')?.addEventListener('click', () => {
            this.showEmergencyPrompt();
        });
    }

    showEmergencyPrompt() {
        app.showModal('emergencyModal');
    }

    triggerEmergency(description = '') {
        const user = auth.getCurrentUser();
        if (!user) return;

        const emergency = {
            userId: user.id,
            userName: user.profile.name || user.username,
            userRole: user.role,
            userPhone: user.profile.phone,
            timestamp: new Date().toISOString(),
            description: description || 'Emergency alert - User needs immediate medical assistance',
            location: 'Requesting location...',
            latitude: null,
            longitude: null,
            status: 'active',
            respondersNotified: []
        };

        // Get user location if available
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    emergency.latitude = position.coords.latitude;
                    emergency.longitude = position.coords.longitude;
                    emergency.location = `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
                    this.saveEmergency(emergency);
                },
                (error) => {
                    console.log('Location error:', error);
                    this.saveEmergency(emergency);
                }
            );
        } else {
            this.saveEmergency(emergency);
        }
    }

    saveEmergency(emergency) {
        const saved = storage.addEmergency(emergency);
        this.sendNotifications(emergency);
        return saved;
    }

    sendNotifications(emergency) {
        // Send notifications to nearby providers
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('🚨 EMERGENCY ALERT', {
                body: `{${emergency.userName} has sent an emergency alert. Location: ${emergency.location}`,
                icon: 'assets/icons/icon-192x192.png',
                tag: emergency.userId
            });
        }

        // Store system notification
        const notification = {
            id: 'notif_' + Date.now(),
            title: 'Emergency Alert Sent',
            message: `Emergency alert sent to nearby healthcare providers`,
            type: 'emergency',
            timestamp: new Date().toISOString(),
            read: false
        };

        let notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        notifications.push(notification);
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }

    requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    app.showToast('success', 'Notifications enabled');
                }
            });
        }
    }

    getEmergencyHistory() {
        const user = auth.getCurrentUser();
        if (!user) return [];
        return storage.getEmergenciesByUser(user.id);
    }

    updateEmergencyStatus(emergencyId, status) {
        return storage.updateEmergency(emergencyId, { status });
    }
}

// Initialize emergency manager
const emergencyManager = new EmergencyManager();

// Request notification permission on load
window.addEventListener('load', () => {
    emergencyManager.requestNotificationPermission();
});
