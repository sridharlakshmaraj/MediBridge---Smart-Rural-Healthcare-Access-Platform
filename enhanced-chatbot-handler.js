// MediBridge - Enhanced Symptom & Medication Query Handler
// Extends the chatbot to respond to detailed symptoms and medication requests

class EnhancedMedicalChatbot {
    constructor(defaultLanguage = 'en') {
        this.defaultLanguage = defaultLanguage;
        this.currentLanguage = defaultLanguage;
        this.database = null;
    }

    /**
     * Initialize with the enhanced database
     */
    initialize(database) {
        this.database = database;
        console.log('✅ Enhanced Medical Chatbot initialized with expanded database');
    }

    /**
     * Handle user query - Determines if it's about symptoms or medications
     */
    handleQuery(userInput, language = 'en') {
        // Convert to lowercase for matching
        const query = userInput.toLowerCase().trim();

        // Detect query type
        const queryType = this.detectQueryType(query);

        switch (queryType) {
            case 'symptoms':
                return this.handleSymptomQuery(query, language);
            case 'medications':
                return this.handleMedicationQuery(query, language);
            case 'full':
                return this.handleFullQuery(query, language);
            case 'condition':
                return this.handleConditionQuery(query, language);
            default:
                return this.handleGeneralQuery(query, language);
        }
    }

    /**
     * Detect the type of query
     */
    detectQueryType(query) {
        const symptomKeywords = ['symptom', 'symptoms', 'what are', 'feeling', 'experienced', 'have', 'feel'];
        const medicationKeywords = ['medication', 'medicine', 'drug', 'treatment', 'take', 'pills', 'injection', 'dosage', 'dose'];
        const fullKeywords = ['tell me about', 'everything', 'complete', 'full', 'all about'];

        let hasSymptomKeyword = symptomKeywords.some(kw => query.includes(kw));
        let hasMedicationKeyword = medicationKeywords.some(kw => query.includes(kw));
        let hasFullKeyword = fullKeywords.some(kw => query.includes(kw));

        if (hasSymptomKeyword && hasMedicationKeyword) return 'full';
        if (hasFullKeyword) return 'full';
        if (hasMedicationKeyword) return 'medications';
        if (hasSymptomKeyword) return 'symptoms';
        return 'condition';
    }

    /**
     * Handle symptoms query
     */
    handleSymptomQuery(query, language) {
        const condition = this.findConditionInQuery(query);

        if (!condition) {
            return {
                type: 'error',
                title: this.translate('ℹ️ Symptoms - Not Found', language),
                response: this.translate('I could not find information for that condition. Please try another symptom or condition.', language),
                symptoms: null
            };
        }

        const conditionData = this.database[condition];

        return {
            type: 'symptoms',
            title: this.translate(`🔍 Symptoms of ${condition.replace(/_/g, ' ').toUpperCase()}`, language),
            primary_symptoms: conditionData.symptoms.primary,
            secondary_symptoms: conditionData.symptoms.secondary || [],
            duration: conditionData.symptoms.duration || 'Variable',
            triggers: conditionData.symptoms.triggers || [],
            causes: conditionData.symptoms.causes || [],
            condition_data: conditionData
        };
    }

    /**
     * Handle medications query
     */
    handleMedicationQuery(query, language) {
        const condition = this.findConditionInQuery(query);

        if (!condition || !this.database[condition].medications[language]) {
            return {
                type: 'error',
                title: this.translate('💊 Medications - Not Found', language),
                response: this.translate('I could not find medication information for that condition.', language),
                medications: null
            };
        }

        const medications = this.database[condition].medications[language];
        const conditionName = condition.replace(/_/g, ' ').toUpperCase();

        return {
            type: 'medications',
            title: this.translate(`💊 Medications for ${conditionName}`, language),
            medications: medications.map(med => ({
                name: med.name,
                type: med.type,
                dosage: med.dosage,
                notes: med.notes,
                warning: this.getMedicationWarning(med.type, language)
            })),
            instructions: this.getMedicationInstructions(language),
            condition_data: this.database[condition]
        };
    }

    /**
     * Handle full information query
     */
    handleFullQuery(query, language) {
        const condition = this.findConditionInQuery(query);

        if (!condition) {
            return {
                type: 'error',
                title: this.translate('ℹ️ Complete Information - Not Found', language),
                response: this.translate('I could not find complete information for that condition.', language)
            };
        }

        const conditionData = this.database[condition];
        const conditionResponse = conditionData.responses[language] || conditionData.responses['en'];

        return {
            type: 'full',
            condition: condition,
            overview: conditionResponse,
            symptoms: {
                primary: conditionData.symptoms.primary,
                secondary: conditionData.symptoms.secondary || [],
                duration: conditionData.symptoms.duration || 'Variable',
                triggers: conditionData.symptoms.triggers || [],
                causes: conditionData.symptoms.causes || []
            },
            medications: conditionData.medications[language] || conditionData.medications['en'],
            severity: conditionData.severity,
            emergency: conditionData.emergency,
            category: conditionData.category
        };
    }

    /**
     * Handle general condition query
     */
    handleConditionQuery(query, language) {
        const condition = this.findConditionInQuery(query);

        if (!condition) {
            return {
                type: 'error',
                title: this.translate('Condition Not Found', language),
                response: this.translate('I could not identify that condition. Try asking about symptoms or medications.', language)
            };
        }

        const conditionData = this.database[condition];
        const conditionResponse = conditionData.responses[language] || conditionData.responses['en'];

        return {
            type: 'condition',
            title: conditionResponse.title,
            description: conditionResponse.description,
            advice: conditionResponse.advice,
            remedies: conditionResponse.remedies,
            primary_symptoms_preview: conditionData.symptoms.primary.slice(0, 3),
            has_detailed_info: true,
            ask_more: this.translate('Ask me about specific symptoms or medications.', language)
        };
    }

    /**
     * Handle general information query
     */
    handleGeneralQuery(query, language) {
        return {
            type: 'info',
            title: this.translate('💡 Health Information', language),
            response: this.translate('I can help you with:', language),
            suggestions: [
                this.translate('- Ask about specific symptoms (e.g., "What are the symptoms of flu?")', language),
                this.translate('- Ask about medications (e.g., "What medications treat diabetes?")', language),
                this.translate('- Ask for complete information (e.g., "Tell me everything about asthma")', language),
                this.translate('- Ask about a condition (e.g., "Tell me about fever")', language)
            ]
        };
    }

    /**
     * Find condition in user query
     */
    findConditionInQuery(query) {
        // Convert query to lowercase
        const lowerQuery = query.toLowerCase();

        // Search through database
        for (const [conditionKey, conditionData] of Object.entries(this.database)) {
            // Check if condition name matches
            if (lowerQuery.includes(conditionKey.replace(/_/g, ' '))) {
                return conditionKey;
            }

            // Check if any keyword matches
            if (conditionData.keywords) {
                for (const keyword of conditionData.keywords) {
                    if (lowerQuery.includes(keyword.toLowerCase())) {
                        return conditionKey;
                    }
                }
            }
        }

        return null;
    }

    /**
     * Format medication information for display
     */
    formatMedicationResponse(medications, language) {
        const languageMap = {
            'en': { header: 'MEDICATIONS & DOSAGES:', type: 'Type:', dosage: 'Dosage:', notes: 'Notes:' },
            'es': { header: 'MEDICAMENTOS Y DOSIS:', type: 'Tipo:', dosage: 'Dosis:', notes: 'Notas:' },
            'fr': { header: 'MÉDICAMENTS ET POSOLOGIES:', type: 'Type:', dosage: 'Posologie:', notes: 'Remarques:' },
            'de': { header: 'MEDIKAMENTE UND DOSIERUNGEN:', type: 'Typ:', dosage: 'Dosierung:', notes: 'Anmerkungen:' },
            'hi': { header: 'दवाएं और खुराक:', type: 'प्रकार:', dosage: 'खुराक:', notes: 'नोट्स:' },
            'pt': { header: 'MEDICAMENTOS E DOSAGENS:', type: 'Tipo:', dosage: 'Dosagem:', notes: 'Notas:' },
            'ja': { header: '医薬品と用量:', type: 'タイプ:', dosage: '用量:', notes: '注記:' },
            'zh': { header: '药物和剂量:', type: '类型:', dosage: '剂量:', notes: '注释:' }
        };

        const labels = languageMap[language] || languageMap['en'];
        let response = `\n${labels.header}\n`;
        response += '─'.repeat(40) + '\n\n';

        medications.forEach((med, index) => {
            response += `${index + 1}. ${med.name}\n`;
            response += `   ${labels.type} ${med.type}\n`;
            response += `   ${labels.dosage} ${med.dosage}\n`;
            response += `   ${labels.notes} ${med.notes}\n\n`;
        });

        return response;
    }

    /**
     * Format symptoms for display
     */
    formatSymptomResponse(symptoms, language) {
        const languageMap = {
            'en': { primary: 'PRIMARY SYMPTOMS:', secondary: 'SECONDARY SYMPTOMS:', duration: 'Duration:' },
            'es': { primary: 'SÍNTOMAS PRIMARIOS:', secondary: 'SÍNTOMAS SECUNDARIOS:', duration: 'Duración:' },
            'fr': { primary: 'SYMPTÔMES PRINCIPAUX:', secondary: 'SYMPTÔMES SECONDAIRES:', duration: 'Durée:' },
            'de': { primary: 'HAUPTSYMPTOME:', secondary: 'NEBENSYMPTOME:', duration: 'Dauer:' },
            'hi': { primary: 'मुख्य लक्षण:', secondary: 'माध्यमिक लक्षण:', duration: 'अवधि:' },
            'pt': { primary: 'SINTOMAS PRIMÁRIOS:', secondary: 'SINTOMAS SECUNDÁRIOS:', duration: 'Duração:' },
            'ja': { primary: '主な症状:', secondary: '副症状:', duration: '期間:' },
            'zh': { primary: '主要症状:', secondary: '次要症状:', duration: '持续时间:' }
        };

        const labels = languageMap[language] || languageMap['en'];
        let response = '\n' + labels.primary + '\n';
        response += symptoms.primary.map(s => `  • ${s}`).join('\n') + '\n';

        if (symptoms.secondary && symptoms.secondary.length > 0) {
            response += `\n${labels.secondary}\n`;
            response += symptoms.secondary.map(s => `  • ${s}`).join('\n') + '\n';
        }

        if (symptoms.duration) {
            response += `\n${labels.duration} ${symptoms.duration}\n`;
        }

        return response;
    }

    /**
     * Get medication warnings/notes
     */
    getMedicationWarning(medicationType, language) {
        const warnings = {
            'en': {
                'Antiviral': '⚠️ Most effective if started within 48 hours of symptom onset',
                'Injectable': '⚠️ Requires prescription and proper injection technique',
                'Oral corticosteroid': '⚠️ Do not stop abruptly; follow doctor\'s tapering schedule',
                'Emergency': '⚠️ CRITICAL - Use only in life-threatening situations',
                'NSAID': '⚠️ Can cause stomach irritation; take with food',
                'Prescription': '⚠️ Requires prescription from doctor'
            },
            'es': {
                'Antiviral': '⚠️ Más efectivo si se inicia dentro de 48 horas del inicio de síntomas',
                'Injectable': '⚠️ Requiere receta y técnica de inyección adecuada',
                'Oral corticosteroid': '⚠️ No interrumpir bruscamente; seguir el programa de reducción del médico',
                'Emergency': '⚠️ CRÍTICO - Usar solo en situaciones que amenazan la vida',
                'NSAID': '⚠️ Puede irritar el estómago; tomar con comida',
                'Prescription': '⚠️ Requiere receta médica'
            }
        };

        return (warnings[language] && warnings[language][medicationType]) || '';
    }

    /**
     * Get medication instructions
     */
    getMedicationInstructions(language) {
        const instructions = {
            'en': [
                '💊 Always take medications as prescribed by your doctor',
                '⏰ Take at the same time each day for consistency',
                '🍽️ Take with or without food as directed',
                '💧 Take with a full glass of water',
                '🚫 Do not skip doses or stop abruptly',
                '📋 Keep a record of when you take medications',
                '⚠️ Report any side effects to your doctor immediately'
            ],
            'es': [
                '💊 Siempre toma medicamentos según lo prescrito por tu médico',
                '⏰ Toma a la misma hora cada día para coherencia',
                '🍽️ Toma con o sin alimentos según lo indique',
                '💧 Toma con un vaso lleno de agua',
                '🚫 No saltes dosis ni pares abruptamente',
                '📋 Mantén un registro de cuándo tomas medicamentos',
                '⚠️ Reporta cualquier efecto secundario a tu médico inmediatamente'
            ]
        };

        return (instructions[language] || instructions['en']).map((inst, i) => `${i + 1}. ${inst}`);
    }

    /**
     * Simple translation helper
     */
    translate(text, language) {
        // This is a placeholder - in production, use a proper translation library
        const translations = {
            'en': text,
            // Can expand with more translations
        };
        return text;
    }

    /**
     * Get all conditions in a category
     */
    getConditionsByCategory(category, language) {
        const conditions = [];
        for (const [key, data] of Object.entries(this.database)) {
            if (data.category === category) {
                conditions.push({
                    key,
                    title: (data.responses[language] || data.responses['en']).title,
                    severity: data.severity
                });
            }
        }
        return conditions;
    }

    /**
     * Search conditions by symptom
     */
    findConditionsBySymptom(symptom, language) {
        const results = [];
        const searchTerm = symptom.toLowerCase();

        for (const [key, data] of Object.entries(this.database)) {
            const allSymptoms = [
                ...(data.symptoms.primary || []),
                ...(data.symptoms.secondary || []),
                ...(data.symptoms.triggers || []),
                ...(data.symptoms.causes || []),
                ...data.keywords
            ];

            if (allSymptoms.some(s => s.toLowerCase().includes(searchTerm))) {
                results.push({
                    key,
                    title: (data.responses[language] || data.responses['en']).title,
                    severity: data.severity,
                    matching_symptoms: allSymptoms.filter(s => s.toLowerCase().includes(searchTerm))
                });
            }
        }

        return results;
    }
}

// ============================================================================
// EXAMPLE USAGE
// ============================================================================

/*
// Initialize chatbot
const chatbot = new EnhancedMedicalChatbot('en');
chatbot.initialize(ENHANCED_MEDICAL_DATABASE);

// Handle different query types:

// 1. Symptoms Query
const response1 = chatbot.handleQuery('What are the symptoms of flu?', 'en');
// Returns: Primary and secondary symptoms with duration

// 2. Medications Query
const response2 = chatbot.handleQuery('What medications treat asthma?', 'en');
// Returns: List of medications with dosages and notes

// 3. Full Information Query
const response3 = chatbot.handleQuery('Tell me everything about diabetes', 'en');
// Returns: Complete condition overview, symptoms, and medications

// 4. Condition Query
const response4 = chatbot.handleQuery('Tell me about pneumonia', 'en');
// Returns: General condition information

// 5. Search by Symptom
const results = chatbot.findConditionsBySymptom('chest pain', 'en');
// Returns: All conditions with chest pain as symptom

// 6. Get Medications Formatted
const medications = ENHANCED_MEDICAL_DATABASE['diabetes'].medications['en'];
const formatted = chatbot.formatMedicationResponse(medications, 'en');

// Connect to UI
function displayEnhancedChatbotResponse(response) {
    if (response.type === 'symptoms') {
        console.log(response.title);
        console.log('Primary:', response.primary_symptoms);
        console.log('Secondary:', response.secondary_symptoms);
    }
    if (response.type === 'medications') {
        console.log(response.title);
        response.medications.forEach(med => {
            console.log(`- ${med.name}: ${med.dosage}`);
            console.log(`  ${med.notes}`);
        });
    }
    if (response.type === 'full') {
        console.log(response.overview);
        console.log('Symptoms:', response.symptoms);
        console.log('Medications:', response.medications);
    }
}
*/
