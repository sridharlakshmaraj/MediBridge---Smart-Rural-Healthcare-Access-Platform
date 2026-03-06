# MediBridge - Multilingual Medical Chatbot Training Guide

## 📚 Table of Contents
1. [Training Syntax](#training-syntax)
2. [Supported Languages](#supported-languages)
3. [How to Use](#how-to-use)
4. [Examples](#examples)
5. [Adding New Symptoms](#adding-new-symptoms)
6. [Integration](#integration)

---

## 🎯 Training Syntax

### Basic Symptom Structure

```javascript
{
    id: "unique_condition_code",
    keywords: ["keyword1", "keyword2", "keyword3"],
    severity: "mild|moderate|severe|emergency",
    emergency: true|false,
    responses: {
        "language_code": {
            title: "Condition Title with Emoji",
            description: "Medical explanation of the condition",
            advice: "Recommended actions and when to seek help",
            remedies: ["remedy1", "remedy2", "remedy3"],
            emergency: true|false
        }
    }
}
```

### Severity Levels
- **mild**: Minor symptoms, can usually manage at home (common cold, minor headache)
- **moderate**: Significant symptoms, medical advice recommended (persistent cough, high fever)
- **severe**: Serious symptoms, professional medical attention needed (severe pain, difficulty breathing)
- **emergency**: Life-threatening, immediate emergency attention required (chest pain, severe allergic reaction)

---

## 🌍 Supported Languages

| Code | Language | Native Name |
|------|----------|-------------|
| `en` | English | English |
| `es` | Spanish | Español |
| `fr` | French | Français |
| `de` | German | Deutsch |
| `hi` | Hindi | हिन्दी |
| `pt` | Portuguese | Português |
| `ja` | Japanese | 日本語 |
| `zh` | Chinese | 中文 |

---

## 💻 How to Use

### 1. Initialize the Chatbot
```javascript
// Initialize with default language (English)
const chatbot = new MultilingualMedicalChatbot('en');

// Or with different default language
const chatbot = new MultilingualMedicalChatbot('es');
```

### 2. Get Response for a Symptom
```javascript
// Get response in English
const response = chatbot.getResponse('fever', 'en');
console.log(response);
// Output:
// {
//   title: "🌡️ Fever",
//   description: "Fever is a temporary increase...",
//   advice: "Stay hydrated, rest, and monitor...",
//   remedies: ["Drink fluids", "Rest well", ...],
//   emergency: false
// }

// Get in Spanish
const respuestaEspañol = chatbot.getResponse('fever', 'es');

// Get in Hindi
const responseHindi = chatbot.getResponse('fever', 'hi');
```

### 3. Get Symptom Information
```javascript
// Get complete symptom information
const info = chatbot.getSymptomInfo('headache', 'en');
console.log(info);
// Output:
// {
//   id: "headache_001",
//   keywords: ["headache", "head pain", "migraine", ...],
//   severity: "mild",
//   emergency: false,
//   response: {...}
// }
```

### 4. Search Symptoms
```javascript
// Search by keyword in English
const results = chatbot.searchSymptoms('chest', 'en');
// Returns all symptoms matching "chest"

// Search in Spanish
const resultados = chatbot.searchSymptoms('dolor', 'es');
```

### 5. Change Language
```javascript
// Set default language to Spanish
chatbot.setLanguage('es');

// Now all responses default to Spanish
const response = chatbot.getResponse('fever');
```

### 6. Get Formatted Response
```javascript
// Get nicely formatted output
const formatted = chatbot.getFormattedResponse('fever', 'en');
console.log(formatted);
```

### 7. Get Supported Languages
```javascript
const languages = chatbot.getSupportedLanguages();
// Output: { en: 'English', es: 'Spanish', fr: 'French', ... }
```

---

## 📝 Examples

### Example 1: Basic Symptom Query
```javascript
// User asks about fever in English
const userSymptom = 'fever';
const userLanguage = 'en';

const response = chatbot.getResponse(userSymptom, userLanguage);
console.log(response.title);        // 🌡️ Fever
console.log(response.advice);       // Stay hydrated, rest...
console.log(response.remedies);     // ["Drink fluids", "Rest well", ...]
```

### Example 2: Multi-Language Support
```javascript
// Same symptom, different languages
const symptoms = {
    'en': 'fever',
    'es': 'fiebre',
    'fr': 'fièvre',
    'hi': 'bukhar',
    'pt': 'febre'
};

languages.forEach(lang => {
    const response = chatbot.getResponse('fever', lang);
    console.log(`${lang}: ${response.title}`);
});

// Output:
// en: 🌡️ Fever
// es: 🌡️ Fiebre
// fr: 🌡️ Fièvre
// hi: 🌡️ बुखार
// pt: 🌡️ Febre
```

### Example 3: Emergency Detection
```javascript
// Check if symptom is emergency
const info = chatbot.getSymptomInfo('chest_pain', 'en');

if (info.emergency) {
    console.log('🚨 EMERGENCY CONDITION!');
    console.log(info.response.advice);
    // Output: CALL 911 or seek emergency services immediately
}
```

### Example 4: Search and Filter
```javascript
// User searches for "heart" symptoms
const searchResults = chatbot.searchSymptoms('chest', 'en');

searchResults.forEach(result => {
    console.log(`${result.title} - Severity: ${result.severity}`);
    if (result.emergency) {
        console.log('⚠️ EMERGENCY');
    }
});

// Output:
// ⚠️ CHEST PAIN - EMERGENCY - Severity: severe
// ⚠️ EMERGENCY
```

---

## ➕ Adding New Symptoms

### Template for New Symptom
```javascript
const newSymptom = {
    id: 'diabetes_001',
    keywords: ['diabetes', 'blood sugar', 'hyperglycemia', 'hypoglycemia'],
    severity: 'moderate',
    emergency: false,
    responses: {
        'en': {
            title: '🩺 Diabetes',
            description: 'Diabetes is a chronic condition affecting blood sugar levels.',
            advice: 'Monitor blood sugar regularly, take prescribed medications, maintain a healthy diet and exercise.',
            remedies: ['Monitor blood sugar', 'Take medication', 'Healthy diet', 'Regular exercise'],
            emergency: false
        },
        'es': {
            title: '🩺 Diabetes',
            description: 'La diabetes es una enfermedad crónica que afecta los niveles de azúcar en sangre.',
            advice: 'Monitoree el azúcar en sangre regularmente, tome medicamentos prescritos, mantenga una dieta saludable.',
            remedies: ['Monitorear azúcar', 'Tomar medicamentos', 'Dieta saludable', 'Ejercicio regular'],
            emergency: false
        },
        'fr': {
            title: '🩺 Diabète',
            description: 'Le diabète est une maladie chronique affectant les niveaux de sucre dans le sang.',
            advice: 'Surveillez regularement votre glycémie, prenez les médicaments prescrits, maintenez un régime sain.',
            remedies: ['Surveiller glycémie', 'Prendre médicaments', 'Régime sain', 'Exercice régulier'],
            emergency: false
        },
        'hi': {
            title: '🩺 मधुमेह',
            description: 'मधुमेह एक पुरानी स्थिति है जो रक्त शर्करा के स्तर को प्रभावित करती है।',
            advice: 'नियमित रूप से रक्त शर्करा की निगरानी करें, निर्धारित दवाइयां लें, स्वस्थ आहार बनाए रखें।',
            remedies: ['रक्त शर्करा की निगरानी करें', 'दवाइयां लें', 'स्वस्थ आहार', 'नियमित व्यायाम'],
            emergency: false
        },
        // Add other languages similarly...
    }
};

// Add to chatbot
chatbot.addSymptom('diabetes', newSymptom);

// Now you can use it
const response = chatbot.getResponse('diabetes', 'en');
```

### Steps to Add New Symptom

1. **Create the object** with unique ID and keywords
2. **Define severity level** (mild/moderate/severe/emergency)
3. **Add responses for each language** you want to support
4. **Include title, description, advice, and remedies**
5. **Set emergency flag** if needed
6. **Call addSymptom()** to register

---

## 📋 Common Medical Symptoms Training Data

### Quick Reference for Training

```javascript
// RESPIRATORY SYMPTOMS
cold: { severity: 'mild', emergency: false }
flu: { severity: 'moderate', emergency: false }
asthma: { severity: 'moderate', emergency: false }
bronchitis: { severity: 'moderate', emergency: false }
pneumonia: { severity: 'severe', emergency: false }

// DIGESTIVE SYMPTOMS
nausea: { severity: 'mild', emergency: false }
diarrhea: { severity: 'mild', emergency: false }
vomiting: { severity: 'moderate', emergency: false }
abdominal_pain: { severity: 'moderate', emergency: false }

// NEUROLOGICAL SYMPTOMS
dizziness: { severity: 'mild', emergency: false }
fainting: { severity: 'severe', emergency: true }
seizure: { severity: 'severe', emergency: true }
confusion: { severity: 'severe', emergency: true }

// DERMATOLOGICAL SYMPTOMS
rash: { severity: 'mild', emergency: false }
hives: { severity: 'mild', emergency: false }
burn: { severity: 'moderate', emergency: false }

// CARDIAC SYMPTOMS
palpitations: { severity: 'moderate', emergency: false }
shortness_of_breath: { severity: 'severe', emergency: true }
arrhythmia: { severity: 'severe', emergency: true }
```

---

## 🔗 Integration with Existing Chatbot

### Update chatbot.js to use multilingual module

```javascript
// In js/chatbot.js, replace the initializeQA function:

class HealthChatbot {
    constructor() {
        this.multiChatbot = new MultilingualMedicalChatbot('en');
        this.setupListeners();
    }

    handleUserMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();

        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        setTimeout(() => {
            // Use multilingual chatbot
            const userLanguage = document.getElementById('languageSelector')?.value || 'en';
            const response = this.multiChatbot.getResponse(message, userLanguage);

            if (response) {
                const formattedResponse = `
${response.title}
${response.description}
${response.advice}
${response.remedies?.join(', ')}
                `;
                this.addMessage(formattedResponse, 'bot');
            }
        }, 500);
    }

    setLanguage(language) {
        this.multiChatbot.setLanguage(language);
    }
}
```

---

## 🎨 Frontend Language Selector

```html
<!-- Add to index.html chatbot section -->
<div class="chatbot-header">
    <h3>Health Assistant</h3>
    <select id="languageSelector" class="language-select">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="hi">हिन्दी</option>
        <option value="pt">Português</option>
        <option value="ja">日本語</option>
        <option value="zh">中文</option>
    </select>
    <button class="chatbot-close" id="closeChatbot">&times;</button>
</div>
```

---

## 📊 Training Data Statistics

Current symptoms trained: **5 major conditions**
- Fever
- Headache
- Chest Pain (Emergency)
- Cough
- Sore Throat

Total languages supported: **8 languages**

Language coverage: **40 translations** (5 symptoms × 8 languages)

---

## ✅ Checklist for Training New Symptoms

- [ ] Choose unique ID for symptom (e.g., symptom_001)
- [ ] Define keywords (3-5 related terms)
- [ ] Set severity level (mild/moderate/severe/emergency)
- [ ] Add English response with title, description, advice, remedies
- [ ] Add Spanish translation
- [ ] Add French translation
- [ ] Add German translation
- [ ] Add Hindi translation
- [ ] Add Portuguese translation
- [ ] Add Japanese translation
- [ ] Add Chinese translation
- [ ] Mark emergency flag if critical condition
- [ ] Test the symptom with chatbot.getResponse()
- [ ] Verify all languages display correctly

---

## 🚀 Production Tips

1. **Add more languages gradually** - Start with most used languages in your region
2. **Get medical review** - Have healthcare professionals review advice translations.
3. **Update regularly** - Add new symptoms based on user feedback.
4. **Cache responses** - Store frequently accessed responses for faster retrieval.
5. **Log queries** - Track which symptoms users ask about most.
6. **Add synonyms** - Expand keywords for better search matching.
7. **Emergency detection** - Ensure emergency conditions are clearly marked.

---

**Version:** 1.0.0 | **Status:** ✅ Ready for Training | **Last Updated:** March 5, 2025
