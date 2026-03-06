// MediBridge - Medicine Alert Popup System
// Shows urgent reminders to users about medicines they need to purchase

class MedicineAlertPopup {
    constructor() {
        this.dismissedAlerts = this.loadDismissedAlerts();
    }

    /**
     * Load dismissed alerts from sessionStorage
     */
    loadDismissedAlerts() {
        try {
            const dismissed = sessionStorage.getItem('dismissedMedicineAlerts');
            return dismissed ? JSON.parse(dismissed) : [];
        } catch (error) {
            console.error('Error loading dismissed alerts:', error);
            return [];
        }
    }

    /**
     * Save dismissed alerts to sessionStorage
     */
    saveDismissedAlerts() {
        try {
            sessionStorage.setItem('dismissedMedicineAlerts', JSON.stringify(this.dismissedAlerts));
        } catch (error) {
            console.error('Error saving dismissed alerts:', error);
        }
    }

    /**
     * Generate medicine alerts from reminders
     */
    generateMedicineAlerts(userId) {
        try {
            const reminders = typeof medicineReminder !== 'undefined'
                ? medicineReminder.generateMedicineReminders(userId)
                : [];

            if (!reminders || reminders.length === 0) {
                return [];
            }

            // Filter out dismissed alerts
            const activeAlerts = reminders.filter(r => !this.dismissedAlerts.includes(r.id));
            return activeAlerts;
        } catch (error) {
            console.error('Error generating medicine alerts:', error);
            return [];
        }
    }

    /**
     * Categorize alerts by urgency
     */
    getCategorizedAlerts(userId) {
        const alerts = this.generateMedicineAlerts(userId);

        const categorized = {
            critical: [],    // not-purchased or expired
            urgent: [],       // expiring within 7 days
            soon: []          // expiring within 30 days
        };

        alerts.forEach(alert => {
            if (alert.type === 'not-purchased') {
                categorized.critical.push(alert);
            } else if (alert.type === 'expired') {
                categorized.critical.push(alert);
            } else if (alert.type === 'expiring-soon') {
                categorized.urgent.push(alert);
            } else if (alert.type === 'refill-soon') {
                categorized.soon.push(alert);
            }
        });

        return categorized;
    }

    /**
     * Check if there are urgent alerts to display
     */
    hasUrgentAlerts(userId) {
        const categorized = this.getCategorizedAlerts(userId);
        return categorized.critical.length > 0 || categorized.urgent.length > 0 || categorized.soon.length > 0;
    }

    /**
     * Dismiss a single alert
     */
    dismissAlert(alertId) {
        if (!this.dismissedAlerts.includes(alertId)) {
            this.dismissedAlerts.push(alertId);
            this.saveDismissedAlerts();
        }
    }

    /**
     * Dismiss all alerts for current session
     */
    dismissAllAlerts(userId) {
        const alerts = this.generateMedicineAlerts(userId);
        alerts.forEach(alert => {
            this.dismissAlert(alert.id);
        });
    }

    /**
     * Show alert popup if there are urgent alerts
     */
    showAlertPopupIfNeeded(userId) {
        if (!this.hasUrgentAlerts(userId)) {
            return false;
        }

        this.showAlertPopup(userId);
        return true;
    }

    /**
     * Display the alert popup modal
     */
    showAlertPopup(userId) {
        const categorized = this.getCategorizedAlerts(userId);

        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'medicineAlertPopup';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 700px;">
                <div class="modal-header" style="background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%); color: white;">
                    <h2 style="color: white; margin: 0;">⚠️ Medicine Reminders</h2>
                    <button class="close-btn" onclick="closeMedicineAlertPopup()" style="color: white; font-size: 2rem;">×</button>
                </div>

                <div class="modal-body" style="background: #1a2555; max-height: 70vh; overflow-y: auto;">
                    <div style="color: white; padding: 1.5rem;">
                        ${categorized.critical.length > 0 ? `
                            <div style="margin-bottom: 1.5rem;">
                                <h3 style="color: #ff0000; margin: 0 0 1rem 0; display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="font-size: 1.5rem;">🔴</span>CRITICAL - ACTION REQUIRED
                                </h3>
                                ${categorized.critical.map(alert => `
                                    <div style="
                                        background: rgba(255, 0, 0, 0.1);
                                        border-left: 4px solid #ff0000;
                                        padding: 1rem;
                                        margin: 0.75rem 0;
                                        border-radius: 4px;
                                    ">
                                        <div style="font-weight: bold; margin-bottom: 0.5rem;">
                                            ${alert.type === 'not-purchased' ? '⚠️ NOT PURCHASED' : '✗ EXPIRED'}
                                        </div>
                                        <div style="font-size: 1.1rem; margin-bottom: 0.5rem; color: #fff;">
                                            💊 ${alert.medicineName}
                                        </div>
                                        <div style="font-size: 0.9rem; color: #a0a0a0; margin-bottom: 0.75rem;">
                                            📋 Dosage: ${alert.dosage}
                                        </div>
                                        ${alert.expiryDate ? `<div style="font-size: 0.9rem; color: #ff0000;">⏰ Expires: ${alert.expiryDate}</div>` : ''}
                                        <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
                                            <button onclick="openAddMedicineModal(); closeMedicineAlertPopup();" style="
                                                flex: 1;
                                                padding: 0.5rem;
                                                background: #28a745;
                                                color: white;
                                                border: none;
                                                border-radius: 4px;
                                                cursor: pointer;
                                                font-weight: bold;
                                            ">💳 Record Purchase</button>
                                            <button onclick="dismissMedicineAlert('${alert.id}')" style="
                                                flex: 1;
                                                padding: 0.5rem;
                                                background: rgba(255, 255, 255, 0.2);
                                                color: white;
                                                border: none;
                                                border-radius: 4px;
                                                cursor: pointer;
                                            ">Dismiss</button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        ${categorized.urgent.length > 0 ? `
                            <div style="margin-bottom: 1.5rem;">
                                <h3 style="color: #ffd43b; margin: 0 0 1rem 0; display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="font-size: 1.5rem;">🟡</span>URGENT - EXPIRING SOON
                                </h3>
                                ${categorized.urgent.map(alert => `
                                    <div style="
                                        background: rgba(255, 212, 59, 0.1);
                                        border-left: 4px solid #ffd43b;
                                        padding: 1rem;
                                        margin: 0.75rem 0;
                                        border-radius: 4px;
                                    ">
                                        <div style="font-weight: bold; margin-bottom: 0.5rem; color: #ffd43b;">
                                            ⏰ EXPIRING IN 7 DAYS
                                        </div>
                                        <div style="font-size: 1.1rem; margin-bottom: 0.5rem; color: #fff;">
                                            💊 ${alert.medicineName}
                                        </div>
                                        <div style="font-size: 0.9rem; color: #a0a0a0; margin-bottom: 0.75rem;">
                                            📋 Dosage: ${alert.dosage}
                                        </div>
                                        ${alert.message ? `<div style="font-size: 0.9rem; color: #ffd43b;">${alert.message}</div>` : ''}
                                        <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
                                            <button onclick="openAddMedicineModal(); closeMedicineAlertPopup();" style="
                                                flex: 1;
                                                padding: 0.5rem;
                                                background: #28a745;
                                                color: white;
                                                border: none;
                                                border-radius: 4px;
                                                cursor: pointer;
                                                font-weight: bold;
                                            ">💳 Record Purchase</button>
                                            <button onclick="dismissMedicineAlert('${alert.id}')" style="
                                                flex: 1;
                                                padding: 0.5rem;
                                                background: rgba(255, 255, 255, 0.2);
                                                color: white;
                                                border: none;
                                                border-radius: 4px;
                                                cursor: pointer;
                                            ">Dismiss</button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        ${categorized.soon.length > 0 ? `
                            <div style="margin-bottom: 1.5rem;">
                                <h3 style="color: #ffaa00; margin: 0 0 1rem 0; display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="font-size: 1.5rem;">🟠</span>SOON - REFILL RECOMMENDED
                                </h3>
                                ${categorized.soon.map(alert => `
                                    <div style="
                                        background: rgba(255, 170, 0, 0.1);
                                        border-left: 4px solid #ffaa00;
                                        padding: 1rem;
                                        margin: 0.75rem 0;
                                        border-radius: 4px;
                                    ">
                                        <div style="font-weight: bold; margin-bottom: 0.5rem; color: #ffaa00;">
                                            📅 REFILL SOON
                                        </div>
                                        <div style="font-size: 1.1rem; margin-bottom: 0.5rem; color: #fff;">
                                            💊 ${alert.medicineName}
                                        </div>
                                        <div style="font-size: 0.9rem; color: #a0a0a0; margin-bottom: 0.75rem;">
                                            📋 Dosage: ${alert.dosage}
                                        </div>
                                        ${alert.message ? `<div style="font-size: 0.9rem; color: #ffaa00;">${alert.message}</div>` : ''}
                                        <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
                                            <button onclick="openAddMedicineModal(); closeMedicineAlertPopup();" style="
                                                flex: 1;
                                                padding: 0.5rem;
                                                background: #28a745;
                                                color: white;
                                                border: none;
                                                border-radius: 4px;
                                                cursor: pointer;
                                                font-weight: bold;
                                            ">💳 Record Purchase</button>
                                            <button onclick="dismissMedicineAlert('${alert.id}')" style="
                                                flex: 1;
                                                padding: 0.5rem;
                                                background: rgba(255, 255, 255, 0.2);
                                                color: white;
                                                border: none;
                                                border-radius: 4px;
                                                cursor: pointer;
                                            ">Dismiss</button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeMedicineAlertPopup()">Close</button>
                    <button class="btn btn-warning" onclick="dismissAllMedicineAlerts('${userId}'); closeMedicineAlertPopup();">
                        🔕 Dismiss All Reminders
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }
}

// Initialize alert popup system
const medicineAlertPopup = new MedicineAlertPopup();

// Global functions
window.closeMedicineAlertPopup = function() {
    const modal = document.getElementById('medicineAlertPopup');
    if (modal) modal.remove();
};

window.dismissMedicineAlert = function(alertId) {
    medicineAlertPopup.dismissAlert(alertId);

    // Refresh popup with remaining alerts
    const user = auth?.getCurrentUser();
    if (user) {
        const modal = document.getElementById('medicineAlertPopup');
        if (modal) modal.remove();

        if (medicineAlertPopup.hasUrgentAlerts(user.id)) {
            medicineAlertPopup.showAlertPopup(user.id);
        }
    }
};

window.dismissAllMedicineAlerts = function(userId) {
    medicineAlertPopup.dismissAllAlerts(userId);
    window.app?.showToast('success', '🔕 All medicine reminders dismissed for this session');
};

window.showMedicineAlertPopupIfNeeded = function() {
    const user = auth?.getCurrentUser();
    if (user && typeof medicineAlertPopup !== 'undefined') {
        medicineAlertPopup.showAlertPopupIfNeeded(user.id);
    }
};

console.log('✅ Medicine Alert Popup System initialized');
