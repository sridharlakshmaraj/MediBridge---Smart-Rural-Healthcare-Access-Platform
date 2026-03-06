// MediBridge - Notifications Module

class NotificationManager {
    constructor() {
        this.requestPermission();
    }

    requestPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }

    sendNotification(title, options = {}) {
        if ('Notification' in window && Notification.permission === 'granted') {
            return new Notification(title, {
                icon: 'assets/icons/icon-192x192.png',
                badge: 'assets/icons/icon-72x72.png',
                tag: 'medibridge-notification',
                ...options
            });
        }
    }

    sendAppointmentReminder(appointment) {
        this.sendNotification(`Appointment Reminder: ${appointment.doctor}`, {
            body: `Your appointment is scheduled for ${appointment.date} at ${appointment.time}`,
            tag: `appointment-${appointment.id}`
        });
    }

    sendEmergencyResponse(emergency) {
        this.sendNotification('🚨 Emergency Response', {
            body: `Emergency alert from ${emergency.userName} at ${emergency.location}`,
            tag: 'emergency-response'
        });
    }

    // Push notification support for PWA
    subscribeToPushNotifications() {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker.ready.then((registration) => {
                registration.pushManager.getSubscription().then((subscription) => {
                    if (!subscription) {
                        const vapidPublicKey = 'YOUR_VAPID_PUBLIC_KEY'; // In production
                        const options = {
                            userVisibleOnly: true,
                            applicationServerKey: vapidPublicKey
                        };
                        registration.pushManager.subscribe(options)
                            .then((subscription) => {
                                console.log('Push subscription successful');
                                localStorage.setItem('push_subscription', JSON.stringify(subscription));
                            })
                            .catch((error) => {
                                console.log('Push subscription failed:', error);
                            });
                    }
                });
            });
        }
    }
}

// Initialize notification manager
const notificationManager = new NotificationManager();

// Test notification function
function sendTestNotification() {
    notificationManager.sendNotification('Test Notification', {
        body: 'This is a test notification from MediBridge'
    });
}
