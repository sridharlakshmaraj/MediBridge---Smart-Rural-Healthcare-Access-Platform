// MediBridge - Comprehensive Medical Database Loader
// Automatically loads COMPREHENSIVE_MEDICAL_DATABASE into the chatbot system

/**
 * Loads the comprehensive medical database into the chatbot
 * Runs after both the database and chatbot modules are loaded
 */
function loadComprehensiveMedicalDatabase() {
    // Wait for both the database and chatbot to be ready
    if (typeof COMPREHENSIVE_MEDICAL_DATABASE === 'undefined') {
        console.warn('⚠️ COMPREHENSIVE_MEDICAL_DATABASE not found. Retrying...');
        setTimeout(loadComprehensiveMedicalDatabase, 100);
        return;
    }

    if (typeof multilingualChatbot === 'undefined') {
        console.warn('⚠️ multilingualChatbot not initialized. Retrying...');
        setTimeout(loadComprehensiveMedicalDatabase, 100);
        return;
    }

    try {
        let addedCount = 0;

        // Merge all conditions from COMPREHENSIVE_MEDICAL_DATABASE into the chatbot
        for (const [symptomKey, symptomData] of Object.entries(COMPREHENSIVE_MEDICAL_DATABASE)) {
            multilingualChatbot.addSymptom(symptomKey, symptomData);
            addedCount++;
        }

        console.log(`✅ Successfully loaded ${addedCount} medical conditions into chatbot`);
        console.log(`📚 Total symptoms available: ${Object.keys(multilingualChatbot.medicalDatabase).length}`);

        // List all loaded conditions by category
        const categories = {};
        for (const [key, symptom] of Object.entries(multilingualChatbot.medicalDatabase)) {
            const category = symptom.category || 'uncategorized';
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(key);
        }

        console.log('📋 Medical Database Summary by Category:');
        for (const [category, symptoms] of Object.entries(categories)) {
            console.log(`   ${category}: ${symptoms.length} conditions`);
        }

    } catch (error) {
        console.error('❌ Error loading medical database:', error);
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComprehensiveMedicalDatabase);
} else {
    // DOM already loaded
    loadComprehensiveMedicalDatabase();
}

// Also run after a short delay to ensure all scripts are loaded
setTimeout(loadComprehensiveMedicalDatabase, 500);

/**
 * Get database statistics
 */
function getDatabaseStats() {
    if (typeof multilingualChatbot === 'undefined') {
        return { status: 'not_ready' };
    }

    const database = multilingualChatbot.medicalDatabase;
    const stats = {
        totalConditions: Object.keys(database).length,
        emergencyConditions: 0,
        bySeverity: {
            mild: 0,
            moderate: 0,
            severe: 0,
            emergency: 0
        },
        byCategory: {}
    };

    for (const [key, symptom] of Object.entries(database)) {
        // Count emergency conditions
        if (symptom.emergency) {
            stats.emergencyConditions++;
        }

        // Count by severity
        if (symptom.severity && stats.bySeverity[symptom.severity]) {
            stats.bySeverity[symptom.severity]++;
        }

        // Count by category
        const category = symptom.category || 'uncategorized';
        if (!stats.byCategory[category]) {
            stats.byCategory[category] = 0;
        }
        stats.byCategory[category]++;
    }

    return stats;
}

/**
 * Search across all medical database
 */
function searchMedicalDatabase(keyword, language = 'en') {
    if (typeof multilingualChatbot === 'undefined') {
        console.warn('Chatbot not ready');
        return [];
    }

    return multilingualChatbot.searchSymptoms(keyword, language);
}

/**
 * Get all emergency conditions
 */
function getEmergencyConditions() {
    if (typeof multilingualChatbot === 'undefined') {
        return [];
    }

    const database = multilingualChatbot.medicalDatabase;
    const emergencies = [];

    for (const [key, symptom] of Object.entries(database)) {
        if (symptom.emergency) {
            emergencies.push({
                key: key,
                id: symptom.id,
                keywords: symptom.keywords,
                category: symptom.category
            });
        }
    }

    return emergencies;
}

/**
 * Get conditions by category
 */
function getConditionsByCategory(category) {
    if (typeof multilingualChatbot === 'undefined') {
        return [];
    }

    const database = multilingualChatbot.medicalDatabase;
    const results = [];

    for (const [key, symptom] of Object.entries(database)) {
        if (symptom.category === category) {
            results.push(key);
        }
    }

    return results;
}

/**
 * Export functions globally for debugging
 */
window.medicalDatabaseUtils = {
    getDatabaseStats,
    searchMedicalDatabase,
    getEmergencyConditions,
    getConditionsByCategory
};

console.log('🏥 Medical Database Loader initialized');
console.log('Available functions: window.medicalDatabaseUtils.*');
