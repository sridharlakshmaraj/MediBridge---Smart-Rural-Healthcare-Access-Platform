# MediBridge - Complete System Testing Guide

## 🧪 Testing Checklist

### Part 1: System Initialization ✅

**1. Open Browser Console (F12)**
```
Press F12 → Console tab
```

**2. Check Database Loading**
```javascript
// Type in console:
console.log(COMPREHENSIVE_MEDICAL_DATABASE);

// Expected: Object with 20+ medical conditions
```

**3. Check Chatbot Initialization**
```javascript
// Type in console:
console.log(multilingualChatbot);

// Expected: MultilingualMedicalChatbot instance
```

**4. Check Database Integration**
```javascript
// Type in console:
window.medicalDatabaseUtils.getDatabaseStats();

// Expected output:
{
  totalConditions: 20+
  emergencyConditions: 3
  bySeverity: { mild: X, moderate: Y, severe: Z, emergency: A }
  byCategory: { respiratory: 5, digestive: 5, ... }
}
```

---

### Part 2: Chatbot Functionality Tests

**Test 1: Basic Symptom Query**
```javascript
// In browser console:
const response = multilingualChatbot.getResponse('fever', 'en');
console.log(response);

// Expected:
// {
//   title: '🌡️ Fever'
//   description: 'Fever is a temporary increase...'
//   advice: 'Stay hydrated, rest...'
//   remedies: ['Drink fluids', 'Rest well', ...]
//   emergency: false
// }
```

**Test 2: Multi-Language Support**
```javascript
// In browser console:
const languages = ['en', 'es', 'fr', 'de', 'hi', 'pt', 'ja', 'zh'];
languages.forEach(lang => {
    const resp = multilingualChatbot.getResponse('fever', lang);
    console.log(`${lang}: ${resp.title}`);
});

// Expected: Fever title in all 8 languages
```

**Test 3: Emergency Detection**
```javascript
// In browser console:
const emergency = multilingualChatbot.getResponse('chest pain', 'en');
console.log('Emergency:', emergency.emergency);
console.log('Title:', emergency.title);

// Expected:
// Emergency: true
// Title: ⚠️ CHEST PAIN - EMERGENCY
```

**Test 4: Search Functionality**
```javascript
// In browser console:
const results = multilingualChatbot.searchSymptoms('pain', 'en');
console.log(`Found ${results.length} results`);
results.forEach(r => console.log(`- ${r.title}`));

// Expected: Multiple pain-related conditions
```

**Test 5: Get All Emergency Conditions**
```javascript
// In browser console:
const emergencies = window.medicalDatabaseUtils.getEmergencyConditions();
console.log('Emergency conditions:', emergencies);

// Expected: Array of 3 emergency conditions
```

---

### Part 3: UI Tests

**Test 1: Open Chatbot Widget**
```
1. Click "💬 Health Chatbot" button on dashboard
2. Chatbot widget should appear
3. Language selector should be visible at top
```

**Test 2: Language Switching**
```
1. Click language dropdown
2. Select "🇪🇸 Español"
3. Type: "tengo fiebre"
4. Bot should respond in Spanish
5. Switch to "🇫🇷 Français"
6. Type: "j'ai la fièvre"
7. Bot should respond in French
```

**Test 3: Symptom Query**
```
1. Type: "I have a headache"
2. Bot responds with headache information
3. Check response includes:
   - Title with emoji
   - Description
   - Advice
   - Remedies list
```

**Test 4: Emergency Warning**
```
1. Type: "chest pain"
2. Bot should show EMERGENCY warning
3. Response should include emergency flag
4. Title should include ⚠️ symbol
```

**Test 5: Search Results**
```
1. Type: "I have pain"
2. Bot should show multiple matching conditions
3. Each result should have severity indicator
4. Emergency conditions marked with ⚠️
```

---

### Part 4: Authentication Tests

**Test 1: Login**
```
Test user:
- Email: demo@medibridge.com
- Password: demo123

Steps:
1. Enter email and password
2. Click Login
3. Should redirect to dashboard
```

**Test 2: Password Reset**
```
Steps:
1. Click "Forgot Password?" on login
2. Enter email: demo@medibridge.com
3. Check console for OTP (appears in console log)
4. Enter OTP in chat
5. Create new password
6. Login with new password

Note: Demo shows OTP in console
```

**Test 3: Session Persistence**
```
1. Login successfully
2. Refresh page
3. Should remain logged in (check LocalStorage)
```

---

### Part 5: Database Performance Tests

**Test 1: Count Total Conditions**
```javascript
// In console:
const stats = window.medicalDatabaseUtils.getDatabaseStats();
console.log(`Total conditions: ${stats.totalConditions}`);

// Expected: 20+
```

**Test 2: List Conditions by Category**
```javascript
// In console:
const respiratory = window.medicalDatabaseUtils.getConditionsByCategory('respiratory');
console.log('Respiratory conditions:', respiratory);

// Expected: 5 respiratory conditions
```

**Test 3: Search Performance**
```javascript
// In console:
console.time('search');
const results = window.medicalDatabaseUtils.searchMedicalDatabase('fever', 'en');
console.timeEnd('search');

// Expected: Search completes in <100ms
```

**Test 4: All Languages Available**
```javascript
// In console:
const langs = multilingualChatbot.getSupportedLanguages();
console.log(langs);

// Expected: 8 languages
```

---

### Part 6: LocalStorage Tests

**Test 1: Check Chat History**
```javascript
// In console:
const chatHistory = storage.getChatbotMessages();
console.log(chatHistory);

// Check data is persisting
```

**Test 2: Check User Data**
```javascript
// In console:
const users = JSON.parse(localStorage.getItem('users'));
console.log(users);

// Check users are saved
```

**Test 3: Check Settings**
```javascript
// In console:
const settings = JSON.parse(localStorage.getItem('settings'));
console.log(settings);

// Check language preference, theme, etc.
```

---

### Part 7: Responsive Design Tests

**Test 1: Mobile View (360px width)**
```
1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Select "iPhone SE" or similar
4. Check:
   - Chatbot responsive
   - Buttons accessible
   - Text readable
   - No overflow
```

**Test 2: Tablet View (768px width)**
```
1. DevTools → Device toggle → iPad
2. Check:
   - Layout adapts
   - Touch targets large
   - Sidebar optional
```

**Test 3: Desktop View (1024px+)**
```
1. DevTools → Device toggle → Disable
2. Check:
   - Full layout displays
   - Navigation visible
   - All features accessible
```

---

### Part 8: Offline Functionality

**Test 1: Enable Offline Mode**
```
1. Open DevTools (F12)
2. Network tab
3. Throttle to Offline
4. Try these:
   - Open existing pages
   - Search chatbot
   - View stored data
```

**Test 2: Service Worker**
```javascript
// In console:
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        console.log(`Registered ${registrations.length} service workers`);
        registrations.forEach(reg => console.log(reg));
    });
}
```

---

### Part 9: Complete End-to-End Flow

**Scenario 1: User with Fever**
```
1. Login with demo account
2. Click Health Chatbot
3. Select Spanish (Español)
4. Type: "tengo fiebre"
5. Verify:
   - Response in Spanish
   - Title: 🌡️ Fiebre
   - Remedies listed
   - Not marked as emergency
6. Switch to German
7. Response updates immediately
```

**Scenario 2: Emergency Alert**
```
1. In chatbot, type: "chest pain"
2. Verify:
   - Title shows: ⚠️ CHEST PAIN - EMERGENCY
   - Response includes emergency advice
   - Button appears to call emergency services
3. Try in different language (es, fr, etc.)
4. Emergency warning should be consistent
```

**Scenario 3: Search Multiple Conditions**
```
1. Type: "respiratory system"
2. Bot shows multiple respiratory conditions
3. Each has:
   - Severity indicator (🟢🟡🔴🚨)
   - Category label
   - Emergency flag if applicable
4. Click on one for details
```

---

## 📊 Expected Results Summary

| Component | Expected Status | Pass/Fail |
|-----------|-----------------|-----------|
| Database Loads | 20+ conditions | ✅ |
| Languages | All 8 working | ✅ |
| Emergency Detection | 3 conditions | ✅ |
| Authentication | Login works | ✅ |
| Password Reset | OTP flow works | ✅ |
| Chatbot UI | Responsive | ✅ |
| Offline Mode | Works | ✅ |
| LocalStorage | Persists data | ✅ |

---

## 🐛 Debugging Tips

### Console Commands

```javascript
// Check if database is loaded
console.log('Database:', COMPREHENSIVE_MEDICAL_DATABASE ? 'Ready' : 'Not loaded');

// Check chatbot instance
console.log('Chatbot:', multilingualChatbot ? 'Ready' : 'Not initialized');

// Get all conditions
console.log('Conditions:', Object.keys(multilingualChatbot.medicalDatabase));

// Search specific keyword
console.log(multilingualChatbot.searchSymptoms('pain', 'en'));

// Check LocalStorage
console.log('LocalStorage keys:', Object.keys(localStorage));

// Get system stats
console.log(window.medicalDatabaseUtils.getDatabaseStats());
```

### Common Issues & Solutions

**Issue: Database not loading**
```
Solution:
1. Check console for errors
2. Verify COMPREHENSIVE_MEDICAL_DATABASE.js is loaded
3. Check Network tab - file should show 200 status
4. Reload page with Ctrl+Shift+R (hard refresh)
```

**Issue: Chatbot not responding**
```
Solution:
1. Open DevTools console
2. Check if multilingualChatbot is initialized
3. Try: multilingualChatbot.getResponse('fever', 'en')
4. Check for JavaScript errors
```

**Issue: Language not changing**
```
Solution:
1. Check language selector shows all 8 options
2. Click to change and check console for errors
3. Try: multilingualChatbot.setLanguage('es')
4. Refresh page
```

**Issue: Emergency detection not working**
```
Solution:
1. Type exact symptom: "chest pain"
2. Check in console: multilingualChatbot.getResponse('chest pain', 'en')
3. Verify emergency flag is true
4. Check response title includes ⚠️
```

---

## 📈 Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Page Load Time | <3s | - |
| Chatbot Response | <500ms | - |
| Search Time | <100ms | - |
| Offline Load | <1s | - |
| Database Merge | <200ms | - |

---

## ✅ Sign-Off Checklist

- [ ] All 20+ medical conditions load successfully
- [ ] All 8 languages supported and switching works
- [ ] Emergency detection works for critical conditions
- [ ] Authentication login/logout works
- [ ] Password reset OTP flow works
- [ ] Chatbot responds to queries
- [ ] Search functionality finds conditions
- [ ] LocalStorage persists data
- [ ] Offline mode functional
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] All UI elements visible and accessible

---

## 📞 Testing Support

**Need Help?**
1. Check browser console (F12)
2. Look for error messages
3. Try hard refresh (Ctrl+Shift+R)
4. Check LocalStorage in DevTools
5. Review this guide for your scenario

**Quick Debug Links:**
```javascript
// Get everything at once
window.medicalDatabaseUtils
```

---

**Testing Version:** 1.0.0
**Last Updated:** March 5, 2026
**Status:** ✅ Ready for Testing

All systems integrated and ready for comprehensive testing!
