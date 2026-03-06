# MediBridge Database Documentation

## 📊 Database Type: **Browser localStorage** (Client-Side Storage)

---

## **Overview**

MediBridge uses **Browser localStorage** as its primary data storage mechanism. This is a client-side, in-browser database that stores data locally on the user's device in key-value format (JSON).

### **Why localStorage?**
- ✅ No server setup needed
- ✅ Offline functionality supported
- ✅ Quick prototype/demo ready
- ✅ Data persists across browser sessions
- ⚠️ Limited to ~5-10MB per domain
- ⚠️ Not suitable for production (data only in browser)

---

## **Database Structure**

### **Storage Location**
File: `js/storage.js` - MediBridgeStorage class

### **Data Keys Stored in localStorage**

| Key | Description | Data Type | Example |
|-----|-------------|-----------|---------|
| `medibridge_version` | App version | String | "1.0" |
| `users` | User accounts | JSON Array | [{id, username, email, password, role, ...}] |
| `patients` | Patient records | JSON Array | [{id, name, age, phone, ...}] |
| `appointments` | Appointments | JSON Array | [{id, patientId, doctorId, date, ...}] |
| `emergencies` | Emergency alerts | JSON Array | [{id, userId, location, ...}] |
| `messages` | Chat messages | JSON Array | [{id, sender, content, ...}] |
| `chatbot_history` | Chatbot conversations | JSON Array | [{id, messages, ...}] |
| `userPrescriptions` | E-Prescriptions | JSON Array | [{id, userId, patientName, ...}] |
| `userSessions` | Active sessions | JSON Object | {userId, role, timestamp} |

---

## **Data Schema**

### **1. Users Collection**
```json
{
  "users": [
    {
      "id": "user_1234567890",
      "username": "doctor_smith",
      "email": "smith@example.com",
      "password": "hashed_password",
      "role": "healthcare_provider",
      "profile": {
        "name": "Dr. James Smith",
        "phone": "+1-555-1234",
        "address": "123 Medical Plaza",
        "avatar": "👨‍⚕️",
        "specialization": "Cardiology"
      },
      "createdAt": "2024-01-01T10:00:00Z"
    }
  ]
}
```

### **2. Patients Collection**
```json
{
  "patients": [
    {
      "id": "patient_9876543210",
      "userId": "user_1234567890",
      "name": "John Doe",
      "age": 45,
      "gender": "Male",
      "phone": "+1-555-5678",
      "email": "john@example.com",
      "address": "456 Main St",
      "medicalHistory": "Hypertension, Diabetes",
      "bloodType": "O+",
      "emergencyContact": "+1-555-9999",
      "createdAt": "2024-01-05T14:30:00Z"
    }
  ]
}
```

### **3. Appointments Collection**
```json
{
  "appointments": [
    {
      "id": "appt_1111111111",
      "patientId": "patient_9876543210",
      "doctorId": "user_1234567890",
      "date": "2024-01-20",
      "time": "10:00 AM",
      "reason": "Regular checkup",
      "status": "scheduled",
      "notes": "Follow-up for blood pressure",
      "createdAt": "2024-01-15T09:00:00Z"
    }
  ]
}
```

### **4. E-Prescriptions Collection** ⭐ (NEW)
```json
{
  "userPrescriptions": [
    {
      "id": "presc_1704201600000",
      "userId": "user_1234567890",
      "patientName": "John Doe",
      "patientAge": "45",
      "diagnosis": "Hypertension",
      "date": "2024-01-20",
      "medications": "Lisinopril - 10mg - 1x daily\nMetoprolol - 50mg - 2x daily",
      "instructions": "Take with food. Avoid salt.",
      "doctorName": "Dr. James Smith",
      "licenseNo": "MD123456",
      "status": "active",
      "createdAt": "2024-01-20T14:00:00Z"
    }
  ]
}
```

### **5. Emergency Alerts Collection**
```json
{
  "emergencies": [
    {
      "id": "emerg_2222222222",
      "userId": "patient_9876543210",
      "latitude": 40.7128,
      "longitude": -74.0060,
      "description": "Chest pain, difficulty breathing",
      "status": "active",
      "createdAt": "2024-01-18T15:45:00Z"
    }
  ]
}
```

### **6. Chatbot History Collection**
```json
{
  "chatbot_history": [
    {
      "id": "chat_3333333333",
      "userId": "patient_9876543210",
      "messages": [
        {
          "role": "user",
          "content": "I have fever and headache",
          "timestamp": "2024-01-19T10:00:00Z"
        },
        {
          "role": "bot",
          "content": "These symptoms suggest...",
          "timestamp": "2024-01-19T10:01:00Z"
        }
      ]
    }
  ]
}
```

---

## **Key Storage Operations**

### **In `js/storage.js`**

#### **Add Data**
```javascript
storage.addUser(userObject);
storage.addPatient(patientObject);
storage.addAppointment(appointmentObject);
```

#### **Retrieve Data**
```javascript
storage.getUsers();
storage.getUserById(id);
storage.getPatients();
storage.getAppointmentsByPatient(patientId);
```

#### **Update Data**
```javascript
storage.updateUser(id, updatesObject);
storage.updatePatient(id, updatesObject);
```

#### **Delete Data**
```javascript
storage.deleteAppointment(id);
storage.deleteEmergency(id);
```

---

## **Authentication Flow (in `js/auth.js`)**

1. **Register**: User data → localStorage `users` collection
2. **Login**: Username/password verified → Session stored
3. **Session**: Active user tracked in `userSessions`
4. **Logout**: Session cleared from localStorage

```javascript
// Password hashing (simple SHA-256)
auth.hashPassword(password);

// Session management
storage.setCurrentSession(userId, role);
storage.getCurrentSession();
```

---

## **E-Prescription Storage** (NEW FEATURE)

When doctor creates e-prescription:

1. Form filled → `downloadPrescription()` called
2. Data saved to localStorage: `userPrescriptions`
3. Unique ID: `presc_` + timestamp
4. User ID attached for profile display
5. Status tracked: `active | completed | cancelled`

```javascript
// In js/eprescription.js
savePrescriptionToProfile(data) {
  const prescription = {
    id: 'presc_' + Date.now(),
    userId: user.id,
    patientName: data.patientName,
    // ... other fields
  };
  localStorage.setItem('userPrescriptions', JSON.stringify(prescriptions));
}
```

---

## **Access Control per User Role**

### **Patient**
- ✅ View own appointments
- ✅ View own prescriptions
- ✅ Send emergency alerts
- ✅ Chat with chatbot
- ❌ Cannot view other patients
- ❌ Cannot prescribe

### **Healthcare Provider (Doctor)**
- ✅ View assigned patients
- ✅ Create prescriptions
- ✅ Schedule appointments
- ✅ View patient history
- ❌ Cannot access other doctor's patients

---

## **Data Persistence**

### **Browser Storage Limits**
- **Space**: ~5-10 MB per domain (varies by browser)
- **Persistence**: Survives browser close/reopen
- **Clearing**: Deleted if user clears browser cache
- **Sharing**: Not shared across browsers/devices

### **Current Usage**
MediBridge stores approximately:
- All user accounts
- All patient records
- All appointments & prescriptions
- Complete medical database (in-memory)
- Chat history

---

## **Production Recommendations** ⚠️

For production deployment, migrate to:

### **Option 1: Backend Database + API**
```
Client (localStorage cache) ↔ API ↔ MySQL/PostgreSQL/MongoDB
```

### **Option 2: Firebase Realtime Database**
```javascript
// Example migration
firebase.database().ref('users/' + userId).set(userData);
```

### **Option 3: Supabase (PostgreSQL + Authentication)**
```javascript
// Example migration
supabase.from('users').insert([userData]);
```

---

## **Current Limitations**

| Limitation | Issue | Solution |
|-----------|-------|----------|
| **Data Loss** | Clearing cache loses all data | Backend database |
| **Synchronization** | No multi-device sync | Cloud database + API |
| **Security** | Passwords stored in browser | Secure authentication server |
| **Scalability** | 5-10MB limit | Server-side database |
| **Offline Sync** | No conflict resolution | Sync service |
| **User Privacy** | Data visible in DevTools | Encrypt sensitive data |

---

## **How to Access Data (for Testing)**

### **In Browser DevTools**

1. **Open Chrome DevTools** → F12
2. **Go to** → Application → Local Storage → medibridge URL
3. **View all stored data** as key-value pairs
4. **Export data** → Right-click → Copy value

### **In JavaScript Console**

```javascript
// View all stored data
Object.keys(localStorage);

// Get specific collection
JSON.parse(localStorage.getItem('users'));

// Get prescription data
JSON.parse(localStorage.getItem('userPrescriptions'));

// Clear all data (careful!)
localStorage.clear();
```

---

## **File Locations**

| File | Purpose |
|------|---------|
| `js/storage.js` | Storage abstraction layer |
| `js/auth.js` | Authentication & session management |
| `js/eprescription.js` | E-prescription creation & storage |
| `js/profile.js` | User profile & prescription display |
| `js/database-loader.js` | Medical database loader |

---

## **Data Backup/Export**

In `js/profile.js`:
```javascript
// Export all data
window.exportData = storage.exportAllData();

// Prescription download
downloadPrescriptionDetails(prescriptionId);
```

---

**Last Updated**: March 6, 2026
**Current Version**: 1.0 (localStorage)
**Status**: Ready for Production Migration Planning
