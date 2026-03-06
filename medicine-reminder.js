// MediBridge - Medicine Refill Reminder System
// Tracks medicine purchases and refills, shows reminders on login

class MedicineReminderSystem {
    constructor() {
        this.initializeMedicineTracking();
    }

    initializeMedicineTracking() {
        // Initialize medicine tracking if not exists
        if (!localStorage.getItem('medicinePurchases')) {
            localStorage.setItem('medicinePurchases', JSON.stringify([]));
        }
        if (!localStorage.getItem('medicineReminders')) {
            localStorage.setItem('medicineReminders', JSON.stringify([]));
        }
    }

    /**
     * Extract medicines from prescriptions and track them
     */
    extractPrescribedMedicines(userId) {
        try {
            const prescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];
            const userPrescriptions = prescriptions.filter(p => p.userId === userId);
            const medicines = [];

            userPrescriptions.forEach(presc => {
                // Parse medications (format: "Drug Name - Dosage - Frequency")
                const medicationLines = presc.medications.split('\n').filter(line => line.trim());

                medicationLines.forEach(med => {
                    const parts = med.split('-').map(p => p.trim());
                    if (parts.length >= 1) {
                        medicines.push({
                            id: 'med_' + Date.now() + Math.random(),
                            prescriptionId: presc.id,
                            medicineName: parts[0],
                            dosage: parts[1] || '',
                            frequency: parts[2] || '',
                            prescribedDate: presc.date,
                            createdAt: presc.createdAt,
                            status: 'prescribed', // prescribed, purchased, running-out, refill-needed
                            lastPurchaseDate: null,
                            quantity: 0,
                            expiryDate: null
                        });
                    }
                });
            });

            return medicines;
        } catch (error) {
            console.error('Error extracting medicines:', error);
            return [];
        }
    }

    /**
     * Record medicine purchase/refill
     */
    recordMedicinePurchase(medicineName, dosage, quantity, purchaseDate = new Date().toISOString().split('T')[0]) {
        try {
            const purchases = JSON.parse(localStorage.getItem('medicinePurchases')) || [];
            const user = auth?.getCurrentUser();

            if (!user) {
                console.warn('User not logged in');
                return false;
            }

            const purchase = {
                id: 'purchase_' + Date.now(),
                userId: user.id,
                medicineName: medicineName,
                dosage: dosage,
                quantity: quantity,
                purchaseDate: purchaseDate,
                expiryDate: this.calculateExpiryDate(purchaseDate),
                status: 'active', // active, used-up, expired
                recordedAt: new Date().toISOString()
            };

            purchases.push(purchase);
            localStorage.setItem('medicinePurchases', JSON.stringify(purchases));

            console.log('Medicine purchase recorded:', purchase);
            return true;
        } catch (error) {
            console.error('Error recording purchase:', error);
            return false;
        }
    }

    /**
     * Calculate estimated expiry date (1 year from purchase)
     */
    calculateExpiryDate(purchaseDate) {
        const date = new Date(purchaseDate);
        date.setFullYear(date.getFullYear() + 1);
        return date.toISOString().split('T')[0];
    }

    /**
     * Check medicine status and generate reminders
     */
    generateMedicineReminders(userId) {
        try {
            const prescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];
            const purchases = JSON.parse(localStorage.getItem('medicinePurchases')) || [];
            const userPrescriptions = prescriptions.filter(p => p.userId === userId);
            const reminders = [];
            const today = new Date();

            userPrescriptions.forEach(presc => {
                const medicationLines = presc.medications.split('\n').filter(line => line.trim());

                medicationLines.forEach(med => {
                    const parts = med.split('-').map(p => p.trim());
                    const medicineName = parts[0];
                    const dosage = parts[1] || '';

                    // Check if medicine has been purchased
                    const medicinePurchase = purchases.find(p =>
                        p.userId === userId &&
                        p.medicineName.toLowerCase() === medicineName.toLowerCase()
                    );

                    if (!medicinePurchase) {
                        // Medicine prescribed but not purchased
                        reminders.push({
                            id: 'reminder_' + Date.now() + Math.random(),
                            type: 'not-purchased',
                            severity: 'high',
                            medicineName: medicineName,
                            dosage: dosage,
                            message: `💊 Medicine "${medicineName}" (${dosage}) has NOT been purchased yet`,
                            prescribedDate: presc.date,
                            actionRequired: true,
                            createdAt: new Date().toISOString()
                        });
                    } else {
                        // Check if needs refilling
                        const expiryDate = new Date(medicinePurchase.expiryDate);
                        const daysUntilExpiry = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));

                        if (daysUntilExpiry < 0) {
                            // Expired
                            reminders.push({
                                id: 'reminder_' + Date.now() + Math.random(),
                                type: 'expired',
                                severity: 'critical',
                                medicineName: medicineName,
                                dosage: dosage,
                                message: `⚠️ Medicine "${medicineName}" (${dosage}) has EXPIRED on ${medicinePurchase.expiryDate}`,
                                expiryDate: medicinePurchase.expiryDate,
                                actionRequired: true,
                                createdAt: new Date().toISOString()
                            });
                        } else if (daysUntilExpiry <= 7) {
                            // Expiring soon
                            reminders.push({
                                id: 'reminder_' + Date.now() + Math.random(),
                                type: 'expiring-soon',
                                severity: 'medium',
                                medicineName: medicineName,
                                dosage: dosage,
                                message: `⏰ Medicine "${medicineName}" (${dosage}) expires in ${daysUntilExpiry} days (${medicinePurchase.expiryDate})`,
                                expiryDate: medicinePurchase.expiryDate,
                                actionRequired: true,
                                createdAt: new Date().toISOString()
                            });
                        } else if (daysUntilExpiry <= 30) {
                            // Refill needed soon
                            reminders.push({
                                id: 'reminder_' + Date.now() + Math.random(),
                                type: 'refill-soon',
                                severity: 'low',
                                medicineName: medicineName,
                                dosage: dosage,
                                message: `📅 Consider refilling "${medicineName}" (${dosage}) - expires in ${daysUntilExpiry} days`,
                                expiryDate: medicinePurchase.expiryDate,
                                actionRequired: false,
                                createdAt: new Date().toISOString()
                            });
                        }
                    }
                });
            });

            // Save reminders
            localStorage.setItem('medicineReminders', JSON.stringify(reminders));
            return reminders;
        } catch (error) {
            console.error('Error generating reminders:', error);
            return [];
        }
    }

    /**
     * Get active reminders for user
     */
    getActiveReminders(userId) {
        try {
            const reminders = JSON.parse(localStorage.getItem('medicineReminders')) || [];
            return reminders.filter(r => r.userId === userId || !r.userId); // Show all if no userId filter
        } catch (error) {
            console.error('Error getting reminders:', error);
            return [];
        }
    }

    /**
     * Get medicine purchase history
     */
    getMedicinePurchaseHistory(userId) {
        try {
            const purchases = JSON.parse(localStorage.getItem('medicinePurchases')) || [];
            return purchases.filter(p => p.userId === userId);
        } catch (error) {
            console.error('Error getting purchase history:', error);
            return [];
        }
    }

    /**
     * Display reminder banner on UI
     */
    displayReminderBanner(reminders) {
        if (!reminders || reminders.length === 0) return null;

        // Sort by severity
        const severitylevel = { critical: 0, high: 1, medium: 2, low: 3 };
        const sorted = reminders.sort((a, b) => severitylevel[a.severity] - severitylevel[b.severity]);

        const bannerHTML = `
            <div id="medicineReminderBanner" style="
                background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%);
                border-left: 4px solid #c92a2a;
                padding: 1.5rem;
                margin: 1rem 0;
                border-radius: 8px;
                color: white;
                box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
            ">
                <div style="display: flex; align-items: start; gap: 1rem;">
                    <span style="font-size: 1.5rem;">🏥</span>
                    <div style="flex: 1;">
                        <h3 style="margin: 0 0 0.5rem 0; color: white;">Medicine Reminders (${reminders.length})</h3>
                        <div id="remindersList"></div>
                    </div>
                    <button onclick="closeMedicineReminder()" style="
                        background: rgba(255, 255, 255, 0.2);
                        border: none;
                        color: white;
                        font-size: 1.5rem;
                        cursor: pointer;
                        padding: 0;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 4px;
                    ">×</button>
                </div>
            </div>
        `;

        return { html: bannerHTML, reminders: sorted };
    }

    /**
     * Insert reminders into dashboard
     */
    insertRemindersIntoDashboard(reminders) {
        try {
            const dashboardContainer = document.querySelector('.main-container');
            if (!dashboardContainer) return;

            const banner = this.displayReminderBanner(reminders);
            if (!banner || !banner.reminders.length) return;

            // Create banner element
            const bannerDiv = document.createElement('div');
            bannerDiv.innerHTML = banner.html;

            // Insert at top of dashboard
            dashboardContainer.insertBefore(bannerDiv.firstElementChild, dashboardContainer.firstChild);

            // Populate reminders list
            const remindersList = document.getElementById('remindersList');
            if (remindersList) {
                const listHTML = banner.reminders.map(r => `
                    <div style="
                        background: rgba(255, 255, 255, 0.1);
                        padding: 0.75rem;
                        margin: 0.5rem 0;
                        border-radius: 4px;
                        font-size: 0.95rem;
                        border-left: 3px solid ${r.severity === 'critical' ? '#ff0000' : r.severity === 'high' ? '#ff6b6b' : r.severity === 'medium' ? '#ffd43b' : '#74c0fc'};
                    ">
                        ${r.message}
                    </div>
                `).join('');
                remindersList.innerHTML = listHTML;
            }
        } catch (error) {
            console.error('Error inserting reminders:', error);
        }
    }

    /**
     * Create a modal for detailed medicine status
     */
    showMedicineStatusModal(userId) {
        const reminders = this.generateMedicineReminders(userId);
        const purchases = this.getMedicinePurchaseHistory(userId);

        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'medicineStatusModal';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 800px;">
                <div class="modal-header">
                    <h2>💊 Medicine Status & Refill Tracker</h2>
                    <button class="close-btn" onclick="closeMedicineStatusModal()">&times;</button>
                </div>
                <div class="modal-body" style="background: #1a2555;">
                    <div style="color: white;">
                        <h4 style="color: #FFD700; margin-bottom: 1rem;">Active Reminders (${reminders.length})</h4>
                        ${reminders.length > 0 ? reminders.map(r => `
                            <div style="
                                background: #0f1a3d;
                                padding: 1rem;
                                margin-bottom: 0.75rem;
                                border-left: 4px solid ${r.severity === 'critical' ? '#ff0000' : r.severity === 'high' ? '#ff6b6b' : r.severity === 'medium' ? '#ffd43b' : '#74c0fc'};
                                border-radius: 4px;
                            ">
                                <div style="font-weight: bold; margin-bottom: 0.5rem;">${r.message}</div>
                                <div style="font-size: 0.9rem; color: #a0a0a0;">
                                    Severity: <strong style="color: ${r.severity === 'critical' ? '#ff0000' : r.severity === 'high' ? '#ff6b6b' : r.severity === 'medium' ? '#ffd43b' : '#74c0fc'}">${r.severity.toUpperCase()}</strong>
                                </div>
                            </div>
                        `).join('') : '<p style="color: #a0a0a0;">✅ No reminders - All medicines are up to date!</p>'}

                        <h4 style="color: #FFD700; margin-top: 1.5rem; margin-bottom: 1rem;">Purchase History (${purchases.length})</h4>
                        ${purchases.length > 0 ? purchases.map(p => `
                            <div style="
                                background: #0f1a3d;
                                padding: 1rem;
                                margin-bottom: 0.75rem;
                                border-left: 4px solid #28a745;
                                border-radius: 4px;
                            ">
                                <div style="font-weight: bold; margin-bottom: 0.5rem;">💳 ${p.medicineName} (${p.dosage})</div>
                                <div style="font-size: 0.9rem; color: #a0a0a0;">
                                    <div>Quantity: ${p.quantity}</div>
                                    <div>Purchase Date: ${p.purchaseDate}</div>
                                    <div>Expiry Date: ${p.expiryDate}</div>
                                    <div style="color: #28a745;">Status: ${p.status.toUpperCase()}</div>
                                </div>
                            </div>
                        `).join('') : '<p style="color: #a0a0a0;">No purchase history yet.</p>'}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeMedicineStatusModal()">Close</button>
                    <button class="btn btn-primary" onclick="openAddMedicineModal()">➕ Add Purchase</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }
}

// Initialize reminder system
const medicineReminder = new MedicineReminderSystem();

// Global functions
window.closeMedicineReminder = function() {
    const banner = document.getElementById('medicineReminderBanner');
    if (banner) banner.remove();
};

window.closeMedicineStatusModal = function() {
    const modal = document.getElementById('medicineStatusModal');
    if (modal) modal.remove();
};

window.openMedicineStatusModal = function() {
    const user = auth?.getCurrentUser();
    if (!user) {
        alert('Please login first');
        return;
    }
    medicineReminder.showMedicineStatusModal(user.id);
};

window.showMedicineStatusModal = function(userId) {
    medicineReminder.showMedicineStatusModal(userId);
};

window.openAddMedicineModal = function() {
    const user = auth?.getCurrentUser();
    if (!user) {
        alert('Please login first');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'addMedicineModal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h2>➕ Add Medicine Purchase</h2>
                <button class="close-btn" onclick="closeAddMedicineModal()">&times;</button>
            </div>
            <div class="modal-body" style="background: #1a2555;">
                <form id="addMedicineForm">
                    <div class="form-group">
                        <label for="medicineName" style="color: white;">Medicine Name *</label>
                        <input type="text" id="medicineName" placeholder="e.g., Aspirin" required style="color: white; background: #0f1a3d; border-color: #2d3d5f;">
                    </div>
                    <div class="form-group">
                        <label for="medicineDosage" style="color: white;">Dosage *</label>
                        <input type="text" id="medicineDosage" placeholder="e.g., 500mg" required style="color: white; background: #0f1a3d; border-color: #2d3d5f;">
                    </div>
                    <div class="form-group">
                        <label for="medicineQuantity" style="color: white;">Quantity *</label>
                        <input type="number" id="medicineQuantity" placeholder="Number of units" min="1" required style="color: white; background: #0f1a3d; border-color: #2d3d5f;">
                    </div>
                    <div class="form-group">
                        <label for="medicinePurchaseDate" style="color: white;">Purchase Date *</label>
                        <input type="date" id="medicinePurchaseDate" required style="color: white; background: #0f1a3d; border-color: #2d3d5f;">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeAddMedicineModal()">Cancel</button>
                <button class="btn btn-primary" onclick="saveAddedMedicine()">Save Purchase</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Set today as default date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('medicinePurchaseDate').value = today;
};

window.closeAddMedicineModal = function() {
    const modal = document.getElementById('addMedicineModal');
    if (modal) modal.remove();
};

window.saveAddedMedicine = function() {
    const medicineName = document.getElementById('medicineName').value;
    const medicineDosage = document.getElementById('medicineDosage').value;
    const medicineQuantity = parseInt(document.getElementById('medicineQuantity').value);
    const purchaseDate = document.getElementById('medicinePurchaseDate').value;

    if (!medicineName || !medicineDosage || !medicineQuantity || !purchaseDate) {
        alert('Please fill all fields');
        return;
    }

    const result = medicineReminder.recordMedicinePurchase(medicineName, medicineDosage, medicineQuantity, purchaseDate);

    if (result) {
        alert('✅ Medicine purchase recorded successfully!');
        window.closeAddMedicineModal();

        // Refresh medicine status modal
        const user = auth?.getCurrentUser();
        if (user) {
            window.openMedicineStatusModal();
        }
    } else {
        alert('❌ Error recording purchase. Please try again.');
    }
};

window.recordMedicinePurchase = function(medicineName, dosage, quantity) {
    return medicineReminder.recordMedicinePurchase(medicineName, dosage, quantity);
};

console.log('✅ Medicine Reminder System initialized');
