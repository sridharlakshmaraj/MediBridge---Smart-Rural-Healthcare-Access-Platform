// MediBridge - Medicine Preboking System
// Allows users to pre-book medicines before they expire or run out

class MedicinePrebookingSystem {
    constructor() {
        this.initializePrebookingSystem();
    }

    initializePrebookingSystem() {
        // Initialize preboking storage if not exists
        if (!localStorage.getItem('medicinePrebookings')) {
            localStorage.setItem('medicinePrebookings', JSON.stringify([]));
        }
    }

    /**
     * Get medicines available for preboking from active prescriptions
     * Includes medicines expiring within 30 days
     */
    getMedicinesForPreboking(userId) {
        try {
            const prescriptions = JSON.parse(localStorage.getItem('userPrescriptions')) || [];
            const purchases = JSON.parse(localStorage.getItem('medicinePurchases')) || [];
            const userPrescriptions = prescriptions.filter(p => p.userId === userId);
            const medicines = [];
            const today = new Date();

            userPrescriptions.forEach(presc => {
                // Parse medications (format: "Drug Name - Dosage - Frequency")
                const medicationLines = presc.medications.split('\n').filter(line => line.trim());

                medicationLines.forEach(med => {
                    const parts = med.split('-').map(p => p.trim());
                    if (parts.length >= 1) {
                        const medicineName = parts[0];
                        const dosage = parts[1] || '';

                        // Check purchase status
                        const medicinePurchase = purchases.find(p =>
                            p.userId === userId &&
                            p.medicineName.toLowerCase() === medicineName.toLowerCase()
                        );

                        let urgency = 'normal'; // normal, expiring-soon, expired

                        if (medicinePurchase) {
                            const expiryDate = new Date(medicinePurchase.expiryDate);
                            const daysUntilExpiry = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));

                            if (daysUntilExpiry < 0) {
                                urgency = 'expired';
                            } else if (daysUntilExpiry <= 30) {
                                urgency = 'expiring-soon';
                            }
                        }

                        medicines.push({
                            id: 'med_' + Date.now() + Math.random(),
                            prescriptionId: presc.id,
                            medicineName: medicineName,
                            dosage: dosage,
                            frequency: parts[2] || '',
                            prescribedDate: presc.date,
                            urgency: urgency,
                            status: medicinePurchase ? medicinePurchase.status : 'not-purchased',
                            lastPurchaseDate: medicinePurchase ? medicinePurchase.purchaseDate : null,
                            expiryDate: medicinePurchase ? medicinePurchase.expiryDate : null
                        });
                    }
                });
            });

            return medicines;
        } catch (error) {
            console.error('Error getting medicines for preboking:', error);
            return [];
        }
    }

    /**
     * Record medicine preboking request
     */
    recordMedicinePrebook(prebookData) {
        try {
            const prebookings = JSON.parse(localStorage.getItem('medicinePrebookings')) || [];

            const preBook = {
                id: 'prebook_' + Date.now(),
                userId: prebookData.userId,
                medicineName: prebookData.medicineName,
                dosage: prebookData.dosage,
                prescriptionId: prebookData.prescriptionId,
                prescriptionDate: prebookData.prescriptionDate,
                prebookDate: new Date().toISOString().split('T')[0],
                preferredBookingDate: prebookData.preferredBookingDate || new Date().toISOString().split('T')[0],
                status: 'pending', // pending, confirmed, collected, cancelled
                recordedAt: new Date().toISOString()
            };

            prebookings.push(preBook);
            localStorage.setItem('medicinePrebookings', JSON.stringify(prebookings));

            console.log('Medicine preboking recorded:', preBook);
            return true;
        } catch (error) {
            console.error('Error recording preboking:', error);
            return false;
        }
    }

    /**
     * Get preboking history for user
     */
    getPrebookingHistory(userId) {
        try {
            const prebookings = JSON.parse(localStorage.getItem('medicinePrebookings')) || [];
            return prebookings.filter(p => p.userId === userId);
        } catch (error) {
            console.error('Error getting preboking history:', error);
            return [];
        }
    }

    /**
     * Show medicine preboking modal
     */
    showPrebookingModal(userId) {
        const medicines = this.getMedicinesForPreboking(userId);

        if (!medicines || medicines.length === 0) {
            alert('📋 No prescription medicines found. Please add prescriptions first.');
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'medicinePrebookingModal';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 800px;">
                <div class="modal-header">
                    <h2>📋 Pre-book Medicines</h2>
                    <button class="close-btn" onclick="closeMedicinePrebookingModal()">&times;</button>
                </div>
                <div class="modal-body" style="background: #1a2555; max-height: 60vh; overflow-y: auto;">
                    <div style="color: white;">
                        <p style="color: #FFD700; margin-bottom: 1rem;">Select medicines to pre-book before they expire or run out:</p>

                        <form id="prebookingForm">
                            ${medicines.map(med => `
                                <div style="
                                    background: #0f1a3d;
                                    padding: 1rem;
                                    margin-bottom: 1rem;
                                    border-left: 4px solid ${med.urgency === 'expired' ? '#ff0000' : med.urgency === 'expiring-soon' ? '#ffd43b' : '#74c0fc'};
                                    border-radius: 4px;
                                    display: flex;
                                    gap: 1rem;
                                    align-items: flex-start;
                                ">
                                    <input type="checkbox" id="medicine_${med.id}" class="medicine-checkbox" value="${med.id}" style="margin-top: 0.25rem; cursor: pointer;">
                                    <div style="flex: 1;">
                                        <label for="medicine_${med.id}" style="cursor: pointer; font-weight: bold; margin-bottom: 0.5rem; display: block;">
                                            💊 ${med.medicineName} (${med.dosage})
                                        </label>
                                        <div style="font-size: 0.9rem; color: #a0a0a0;">
                                            <div>📋 Frequency: ${med.frequency}</div>
                                            <div>📅 Prescribed: ${med.prescribedDate}</div>
                                            ${med.lastPurchaseDate ? `<div>🛒 Last Purchased: ${med.lastPurchaseDate}</div>` : ''}
                                            ${med.expiryDate ? `<div>⏰ Expires: ${med.expiryDate}</div>` : ''}
                                            ${med.urgency === 'expired' ? '<div style="color: #ff0000;">❌ EXPIRED</div>' : ''}
                                            ${med.urgency === 'expiring-soon' ? '<div style="color: #ffd43b;">⚠️ EXPIRING SOON</div>' : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeMedicinePrebookingModal()">Cancel</button>
                    <button class="btn btn-primary" onclick="confirmMedicinePrebook()">✅ Pre-book Selected</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }
}

// Initialize preboking system
const medicinePrebooking = new MedicinePrebookingSystem();

// Global functions
window.closeMedicinePrebookingModal = function() {
    const modal = document.getElementById('medicinePrebookingModal');
    if (modal) modal.remove();
};

window.openMedicinePrebookingModal = function() {
    const user = auth?.getCurrentUser();
    if (!user) {
        alert('❌ Please login first');
        return;
    }
    medicinePrebooking.showPrebookingModal(user.id);
};

window.confirmMedicinePrebook = function() {
    try {
        const user = auth?.getCurrentUser();
        if (!user) {
            alert('❌ Please login first');
            return;
        }

        const checkboxes = document.querySelectorAll('.medicine-checkbox:checked');
        if (checkboxes.length === 0) {
            alert('⚠️ Please select at least one medicine to pre-book');
            return;
        }

        const medicines = medicinePrebooking.getMedicinesForPreboking(user.id);
        let successCount = 0;

        checkboxes.forEach(checkbox => {
            const medicine = medicines.find(m => m.id === checkbox.value);
            if (medicine) {
                const result = medicinePrebooking.recordMedicinePrebook({
                    userId: user.id,
                    medicineName: medicine.medicineName,
                    dosage: medicine.dosage,
                    prescriptionId: medicine.prescriptionId,
                    prescriptionDate: medicine.prescribedDate
                });

                if (result) {
                    successCount++;
                }
            }
        });

        if (successCount > 0) {
            window.app?.showToast('success', `✅ ${successCount} medicine(s) pre-booked successfully!`);
            window.closeMedicinePrebookingModal();
        } else {
            alert('❌ Error pre-booking medicines. Please try again.');
        }
    } catch (error) {
        console.error('❌ Error confirming preboking:', error);
        alert('❌ Error pre-booking medicines. Please try again.');
    }
};

console.log('✅ Medicine Preboking System initialized');
