# 🏥 Multilingual Chatbot - Quick Reference & Code Examples

## 📋 Quick Start (Copy & Paste Ready)

### 1. Basic Usage
```javascript
// Initialize chatbot
const chatbot = new MultilingualMedicalChatbot('en');

// Get response in English
const response = chatbot.getResponse('fever', 'en');
console.log(response.title);        // 🌡️ Fever
console.log(response.description);  // Fever is a temporary increase...
console.log(response.advice);       // Stay hydrated, rest...
console.log(response.remedies);     // ["Drink fluids", "Rest well", ...]

// Get response in Spanish
const respuesta = chatbot.getResponse('fever', 'es');

// Get response in Hindi
const jawab = chatbot.getResponse('fever', 'hi');
```

### 2. Language Switching
```javascript
// Change default language
chatbot.setLanguage('es');

// Now all responses are in Spanish by default
const response = chatbot.getResponse('cough');

// Or specify language per request
const englishResponse = chatbot.getResponse('cough', 'en');
```

### 3. Search Symptoms
```javascript
// Search for symptoms by keyword
const results = chatbot.searchSymptoms('chest', 'en');
// Returns: [{symptom, title, severity, emergency}, ...]

// Search in different language
const resultados = chatbot.searchSymptoms('dolor', 'es');
```

---

## 📝 Complete Symptom Template

### Copy This For New Symptoms
```javascript
const newSymptom = {
    id: 'symptom_code_001',                    // Unique ID
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    severity: 'mild',                          // mild|moderate|severe|emergency
    emergency: false,                          // true if life-threatening
    responses: {
        'en': {
            title: '🩺 Symptom Name',
            description: 'Medical explanation of what this is.',
            advice: 'What to do and when to seek medical help.',
            remedies: ['remedy1', 'remedy2', 'remedy3'],
            emergency: false
        },
        'es': {
            title: '🩺 Nombre del Síntoma',
            description: 'Explicación médica de qué es esto.',
            advice: 'Qué hacer y cuándo buscar ayuda médica.',
            remedies: ['remedio1', 'remedio2', 'remedio3'],
            emergency: false
        },
        'fr': {
            title: '🩺 Nom du Symptôme',
            description: 'Explication médicale de ce que c\'est.',
            advice: 'Que faire et quand chercher de l\'aide médicale.',
            remedies: ['remède1', 'remède2', 'remède3'],
            emergency: false
        },
        'de': {
            title: '🩺 Symptomname',
            description: 'Medizinische Erklärung, was das ist.',
            advice: 'Was zu tun ist und wann ärztliche Hilfe zu suchen.',
            remedies: ['Heilmittel1', 'Heilmittel2', 'Heilmittel3'],
            emergency: false
        },
        'hi': {
            title: '🩺 लक्षण का नाम',
            description: 'इसका चिकित्सा व्याख्या।',
            advice: 'क्या करें और चिकित्सा सहायता कब लें।',
            remedies: ['उपचार1', 'उपचार2', 'उपचार3'],
            emergency: false
        },
        'pt': {
            title: '🩺 Nome do Sintoma',
            description: 'Explicação médica do que é isso.',
            advice: 'O que fazer e quando procurar ajuda médica.',
            remedies: ['remédio1', 'remédio2', 'remédio3'],
            emergency: false
        },
        'ja': {
            title: '🩺 症状の名前',
            description: 'これが何かの医学的説明。',
            advice: 'すべきことと医療援助を求めるべき時。',
            remedies: ['治療法1', '治療法2', '治療法3'],
            emergency: false
        },
        'zh': {
            title: '🩺 症状名称',
            description: '这是什么的医学解释。',
            advice: '应该做什么以及何时寻求医疗帮助。',
            remedies: ['疗法1', '疗法2', '疗法3'],
            emergency: false
        }
    }
};

// Add to chatbot
chatbot.addSymptom('symptom_key', newSymptom);
```

---

## 🎯 Common Symptoms - Ready to Train

### Respiratory System
```javascript
// COLD
cold: {
    id: 'cold_001',
    keywords: ['cold', 'common cold', 'runny nose', 'congestion'],
    severity: 'mild',
    emergency: false
}

// FLU (Influenza)
flu: {
    id: 'flu_001',
    keywords: ['flu', 'influenza', 'viral infection', 'body aches'],
    severity: 'moderate',
    emergency: false
}

// ASTHMA
asthma: {
    id: 'asthma_001',
    keywords: ['asthma', 'wheezing', 'breathing difficulty', 'shortness of breath'],
    severity: 'moderate',
    emergency: false
}

// PNEUMONIA
pneumonia: {
    id: 'pneumonia_001',
    keywords: ['pneumonia', 'lung infection', 'chest pain', 'fever'],
    severity: 'severe',
    emergency: false
}
```

### Digestive System
```javascript
// NAUSEA
nausea: {
    id: 'nausea_001',
    keywords: ['nausea', 'sick feeling', 'queasy', 'vomit'],
    severity: 'mild',
    emergency: false
}

// DIARRHEA
diarrhea: {
    id: 'diarrhea_001',
    keywords: ['diarrhea', 'loose stool', 'stomach upset', 'digestive'],
    severity: 'mild',
    emergency: false
}

// VOMITING
vomiting: {
    id: 'vomiting_001',
    keywords: ['vomiting', 'throwing up', 'nausea', 'sick'],
    severity: 'moderate',
    emergency: false
}

// ABDOMINAL PAIN
abdominal_pain: {
    id: 'abdominal_pain_001',
    keywords: ['stomach pain', 'abdominal pain', 'belly ache', 'cramping'],
    severity: 'moderate',
    emergency: false
}
```

### Neurological System
```javascript
// DIZZINESS
dizziness: {
    id: 'dizziness_001',
    keywords: ['dizziness', 'vertigo', 'dizzy', 'lightheaded'],
    severity: 'mild',
    emergency: false
}

// FAINTING
fainting: {
    id: 'fainting_001',
    keywords: ['fainting', 'syncope', 'lose consciousness', 'collapse'],
    severity: 'severe',
    emergency: true
}

// SEIZURE
seizure: {
    id: 'seizure_001',
    keywords: ['seizure', 'convulsion', 'fit', 'epilepsy'],
    severity: 'severe',
    emergency: true
}
```

### Skin Conditions
```javascript
// RASH
rash: {
    id: 'rash_001',
    keywords: ['rash', 'skin irritation', 'hives', 'itchy skin'],
    severity: 'mild',
    emergency: false
}

// BURN
burn: {
    id: 'burn_001',
    keywords: ['burn', 'heat burn', 'scalding', 'thermal injury'],
    severity: 'moderate',
    emergency: false
}
```

### Allergic Reactions
```javascript
// ALLERGIC REACTION
allergic_reaction: {
    id: 'allergy_001',
    keywords: ['allergy', 'allergic reaction', 'itching', 'swelling'],
    severity: 'moderate',
    emergency: false
}

// ANAPHYLAXIS (Severe Allergy)
anaphylaxis: {
    id: 'anaphylaxis_001',
    keywords: ['anaphylaxis', 'severe allergy', 'breathing difficulty', 'swelling'],
    severity: 'severe',
    emergency: true
}
```

---

## 🌐 Language Codes Reference

```javascript
const languages = {
    'en': '🇬🇧 English',
    'es': '🇪🇸 Spanish (Español)',
    'fr': '🇫🇷 French (Français)',
    'de': '🇩🇪 German (Deutsch)',
    'hi': '🇮🇳 Hindi (हिन्दी)',
    'pt': '🇵🇹 Portuguese (Português)',
    'ja': '🇯🇵 Japanese (日本語)',
    'zh': '🇨🇳 Chinese (中文)'
};

// Create dropdown
Object.entries(languages).forEach(([code, name]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    languageSelect.appendChild(option);
});
```

---

## 🎨 Emoji Severity Indicators

```javascript
const severityEmojis = {
    'mild': '🟢',       // Green circle
    'moderate': '🟡',   // Yellow circle
    'severe': '🔴',     // Red circle
    'emergency': '🚨'   // Siren
};

// Usage
const symptom = chatbot.getSymptomInfo('fever', 'en');
const severityIcon = severityEmojis[symptom.severity];
console.log(`${severityIcon} ${symptom.response.title}`);
// Output: 🟡 🌡️ Fever
```

---

## 📱 UI Integration Example

```html
<!-- Language Selector -->
<div class="language-control">
    <label for="chatbot-language">Language:</label>
    <select id="chatbot-language" onchange="changeLanguage(this.value)">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="hi">हिन्दी</option>
        <option value="pt">Português</option>
        <option value="ja">日本語</option>
        <option value="zh">中文</option>
    </select>
</div>

<!-- Chatbot -->
<div id="chatbotWidget" class="chatbot-widget">
    <div class="chatbot-header">
        <h3>🏥 Health Assistant</h3>
    </div>
    <div id="chatbotMessages" class="chatbot-messages"></div>
    <form id="chatbotForm" class="chatbot-form">
        <input type="text" id="chatbotInput" placeholder="Ask about symptoms...">
        <button type="submit">Send</button>
    </form>
</div>
```

```javascript
// JavaScript Integration
function changeLanguage(language) {
    multilingualChatbot.setLanguage(language);
    document.getElementById('chatbotMessages').innerHTML = '';
    app.showToast('success', `Language changed to ${language.toUpperCase()}`);
}

document.getElementById('chatbotForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('chatbotInput');
    const symptom = input.value.trim();

    if (symptom) {
        const response = multilingualChatbot.getResponse(symptom);
        const formatted = multilingualChatbot.getFormattedResponse(symptom);

        // Display response
        displayMessage(formatted, 'bot');
        input.value = '';
    }
});
```

---

## ✅ Validation Checklist

- [ ] ID is unique for each symptom
- [ ] Keywords array has 3-5 terms
- [ ] Severity level is valid (mild/moderate/severe/emergency)
- [ ] All 8 languages are translated
- [ ] Emergency flag matches severity
- [ ] Advice includes when to seek help
- [ ] Remedies list has 3-5 items
- [ ] Titles include appropriate emojis
- [ ] No empty fields

---

## 🔍 Testing Commands

```javascript
// Test all languages
const testSymptom = 'fever';
Object.keys(chatbot.getSupportedLanguages()).forEach(lang => {
    const response = chatbot.getResponse(testSymptom, lang);
    console.log(`${lang}: ${response.title}`);
});

// Search test
const searchResults = chatbot.searchSymptoms('pain', 'en');
console.log(`Found ${searchResults.length} results`);

// Emergency detection
const emergencySymptoms = Object.entries(chatbot.medicalDatabase)
    .filter(([key, data]) => data.emergency)
    .map(([key]) => key);
console.log('Emergency symptoms:', emergencySymptoms);
```

---

## 📊 Statistics Template

```javascript
// Generate training statistics
const stats = {
    totalSymptoms: Object.keys(chatbot.medicalDatabase).length,
    emergencySymptoms: Object.values(chatbot.medicalDatabase).filter(s => s.emergency).length,
    supportedLanguages: chatbot.getSupportedLanguages(),
    totalResponses: Object.keys(chatbot.medicalDatabase).length * 8,
    byCategory: {
        respiratory: 4,
        digestive: 4,
        neurological: 3,
        dermatological: 2,
        cardiac: 3,
        allergic: 2
    }
};

console.log(JSON.stringify(stats, null, 2));
```

---

## 🚀 Production Deployment

1. **Load in HTML:**
```html
<script src="js/multilingual-chatbot.js"></script>
```

2. **Initialize:**
```javascript
const medicalChatbot = new MultilingualMedicalChatbot('en');
```

3. **Add to chatbot.js:**
```javascript
// Replace old Q&A with multilingual version
this.multiChatbot = new MultilingualMedicalChatbot('en');
```

---

**Last Updated:** March 5, 2025 | **Version:** 1.0.0
