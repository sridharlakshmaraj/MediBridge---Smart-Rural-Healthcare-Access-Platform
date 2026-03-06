# 💊 Medicine Reminder System Documentation

## Overview

The Medicine Reminder System is a patient-focused feature in MediBridge that:
- ✅ Tracks prescribed medicines from e-prescriptions
- ✅ Monitors medicine purchases/refills
- ✅ Alerts patients when medicines haven't been bought yet
- ✅ Reminds when medicines are expiring soon
- ✅ Shows notifications on login and dashboard

---

## How It Works

### **1. Medicine Detection Flow**

```
Doctor Creates E-Prescription
        ↓
Medicines Extracted from Prescription
        ↓
Stored in "userPrescriptions" collection
        ↓
Patient Logs In
        ↓
System Checks Prescription Medicines
        ↓
Compares with Purchase History
        ↓
Generates Reminders
```

### **2. Reminder Types & Severity Levels**

| Type | Severity | Description | Action |
|------|----------|-------------|--------|
| **not-purchased** | 🔴 HIGH | Medicine prescribed but NOT bought | Buy immediately |
| **expired** | 🔴 CRITICAL | Medicine past expiry date | Get refill ASAP |
| **expiring-soon** | 🟡 MEDIUM | Expiring in next 7 days | Plan refill soon |
| **refill-soon** | 🟢 LOW | Expiring in next 30 days | Consider refilling |

---

## File Structure

### **New Files**
- `js/medicine-reminder.js` - Main reminder system logic

### **Modified Files**
- `index.html` - Added script reference & button
- `js/app.js` - Added reminder trigger on login/dashboard

### **Data Collections (localStorage)**
- `userPrescriptions` - Prescribed medicines (from e-prescriptions)
- `medicinePurchases` - Recorded medicine purchases
- `medicineReminders` - Generated reminder alerts

---

## Usage for Patients

### **Step 1: View Reminders on Login**
1. Patient logs in
2. If medicines need attention, a red banner appears on dashboard
3. Banner shows all active reminders with their severity

### **Step 2: Check Medicine Status**
1. Click **"💉 Medicine Status"** button on dashboard
2. Modal shows:
   - Active reminders with details
   - Purchase history
   - Option to add new purchases

### **Step 3: Record Medicine Purchase**
1. Click **"➕ Add Purchase"** in medicine status modal
2. Fill form with:
   - Medicine name
   - Dosage
   - Quantity purchased
   - Purchase date
3. Click **"Save Purchase"**
4. System automatically calculates expiry date (1 year from purchase)

---

## Data Structure

### **Medicine Purchase Record**
```json
{
  "id": "purchase_1704201600000",
  "userId": "user_1234567890",
  "medicineName": "Aspirin",
  "dosage": "500mg",
  "quantity": 100,
  "purchaseDate": "2024-01-20",
  "expiryDate": "2025-01-20",
  "status": "active",
  "recordedAt": "2024-01-20T10:30:00Z"
}
```

### **Reminder Object**
```json
{
  "id": "reminder_1704201600123",
  "type": "not-purchased",
  "severity": "high",
  "medicineName": "Lisinopril",
  "dosage": "10mg",
  "message": "💊 Medicine \"Lisinopril\" (10mg) has NOT been purchased yet",
  "prescribedDate": "2024-01-20",
  "actionRequired": true,
  "createdAt": "2024-01-20T14:00:00Z"
}
```

---

## Key Functions in medicine-reminder.js

### **MedicineReminderSystem Class**

#### **generateMedicineReminders(userId)**
- Scans all user's prescriptions
- Compares with purchase history
- Returns array of reminders

#### **recordMedicinePurchase(medicineName, dosage, quantity, purchaseDate)**
- Records a medicine purchase
- Calculates 1-year expiry date
- Saves to localStorage

#### **insertRemindersIntoDashboard(reminders)**
- Creates red banner on dashboard
- Shows all active reminders
- Provides visual feedback

#### **showMedicineStatusModal(userId)**
- Opens detailed medicine management modal
- Shows all reminders and purchase history
- Allows adding new purchases

#### **getMedicinePurchaseHistory(userId)**
- Retrieves all purchase records for user
- Returns sorted by date

---

## Integration Points

### **On Login** (`js/app.js` - handleLogin)
```javascript
// Generate and show medicine reminders
const user = auth.getCurrentUser();
if (user && typeof medicineReminder !== 'undefined') {
    const reminders = medicineReminder.generateMedicineReminders(user.id);
    if (reminders.length > 0) {
        medicineReminder.insertRemindersIntoDashboard(reminders);
    }
}
```

### **On Dashboard Load** (`js/app.js` - updateDashboard)
```javascript
// Show medicine reminders for patients
if (typeof medicineReminder !== 'undefined') {
    const reminders = medicineReminder.generateMedicineReminders(user.id);
    if (reminders.length > 0) {
        medicineReminder.insertRemindersIntoDashboard(reminders);
    }
}
```

### **On E-Prescription Creation** (`js/eprescription.js`)
- Medicines from prescription are automatically tracked
- No manual setup needed

---

## UI Components

### **1. Reminder Banner (on Dashboard)**
- Red gradient background
- Shows total number of reminders
- Lists each reminder with severity indicator
- Close button to dismiss

### **2. Medicine Status Modal**
- Tabbed view: Reminders | Purchase History
- Color-coded severity levels
- Add purchase button
- Detailed medicine information

### **3. Add Medicine Modal**
- Medicine name input
- Dosage input
- Quantity input
- Purchase date picker
- Auto-calculates expiry date

---

## API Usage Examples

### **Check Reminders for Patient**
```javascript
const userId = "user_1234567890";
const reminders = medicineReminder.generateMedicineReminders(userId);
console.log(reminders);
```

### **Record Medicine Purchase**
```javascript
medicineReminder.recordMedicinePurchase(
    "Lisinopril",
    "10mg",
    30,
    "2024-01-20"
);
```

### **Open Medicine Status Modal**
```javascript
const user = auth.getCurrentUser();
medicineReminder.showMedicineStatusModal(user.id);
```

### **Get All Purchases for User**
```javascript
const purchases = medicineReminder.getMedicinePurchaseHistory(userId);
```

---

## Data Storage (localStorage)

### **medicinePurchases**
```json
[
  {
    "id": "purchase_...",
    "userId": "user_...",
    "medicineName": "Aspirin",
    "dosage": "500mg",
    "quantity": 100,
    "purchaseDate": "2024-01-20",
    "expiryDate": "2025-01-20",
    "status": "active"
  }
]
```

### **medicineReminders**
```json
[
  {
    "id": "reminder_...",
    "type": "not-purchased",
    "severity": "high",
    "medicineName": "Lisinopril",
    "message": "...",
    "actionRequired": true
  }
]
```

---

## Features

### **✅ Implemented**
- ✓ Automatic medicine extraction from e-prescriptions
- ✓ Purchase tracking and recording
- ✓ Reminder generation (4 types)
- ✓ Dashboard notification banner
- ✓ Medicine status modal
- ✓ Add purchase form
- ✓ Purchase history tracking
- ✓ Expiry date calculation
- ✓ Severity-based alerts

### **🔄 Future Enhancements**
- Send email/SMS reminders
- Integration with pharmacy APIs
- Medicine interactions checker
- Prescription refill scheduling
- Push notifications
- Medicine side effects info
- Doctor approval for refills

---

## Severity Levels & Colors

| Severity | Color | Icon | Time Window | Action |
|----------|-------|------|-------------|--------|
| CRITICAL | Red | ⚠️ | Expired | Urgent refill |
| HIGH | Red | 💊 | Not purchased | Buy now |
| MEDIUM | Yellow | ⏰ | < 7 days | Buy soon |
| LOW | Blue | 📅 | < 30 days | Consider refill |

---

## Testing the Feature

### **Test Scenario 1: Not Purchased Reminder**
1. Doctor logs in → Creates e-prescription with medicine "Aspirin-500mg-1x daily"
2. Patient logs in
3. Should see reminder: "💊 Medicine 'Aspirin' (500mg) has NOT been purchased yet"

### **Test Scenario 2: Expiring Soon Reminder**
1. Patient has prescription medicine
2. Record purchase dated 7 days ago
3. Should see reminder: "⏰ Medicine expires in 7 days"

### **Test Scenario 3: Record Purchase**
1. Patient clicks "Medicine Status" → "Add Purchase"
2. Fill form: Cough Syrup, 200ml, 2 bottles, today's date
3. Click Save
4. Should see success message & updated reminder status

---

## Security & Privacy

- ✅ Data stored in browser localStorage (user's device only)
- ✅ Noauditing/tracking of medicines
- ✅ User can delete purchase history anytime
- ✅ No server storage of sensitive health data
- ⚠️ Data lost if user clears browser cache

---

## Error Handling

- User not logged in → Show alert
- Form validation → Empty field checks
- Invalid dates → Show error message
- localStorage errors → Logged to console
- Graceful fallback if medicineReminder undefined

---

## Performance

- Reminders generated on-demand (not continuously)
- localStorage queries are fast
- Modal opens immediately
- No network calls required
- Suitable for offline use

---

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## File Locations Summary

| Component | File | Lines |
|-----------|------|-------|
| Medicine system | `js/medicine-reminder.js` | ~500 |
| App integration | `js/app.js` | 20-30 (modified) |
| HTML button/script | `index.html` | 2 (added) |

---

**Last Updated**: March 6, 2026
**Status**: ✅ Production Ready
**Version**: 1.0

