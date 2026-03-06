// MediBridge - Enhanced Medical Database with Symptoms & Medications
// Comprehensive Medical Conditions with Detailed Symptoms and Medications
// 40+ Medical Conditions × 8 Languages with Full Treatment Information

const ENHANCED_MEDICAL_DATABASE = {

    // ============================================================================
    // RESPIRATORY SYSTEM
    // ============================================================================

    'common_cold': {
        id: 'cold_001',
        category: 'respiratory',
        severity: 'mild',
        emergency: false,
        keywords: ['cold', 'common cold', 'runny nose', 'congestion', 'sneezing'],

        symptoms: {
            primary: ['Runny or stuffy nose', 'Sneezing', 'Sore throat', 'Cough', 'Fatigue'],
            secondary: ['Mild headache', 'Body aches', 'Low-grade fever (rarely)', 'Watery nasal discharge'],
            duration: '7-14 days'
        },

        medications: {
            'en': [
                { name: 'Acetaminophen', type: 'Pain reliever', dosage: '500mg every 4-6 hours', notes: 'For fever and aches' },
                { name: 'Ibuprofen', type: 'Anti-inflammatory', dosage: '200mg every 4-6 hours', notes: 'For inflammation and pain' },
                { name: 'Pseudoephedrine', type: 'Decongestant', dosage: '30mg every 4-6 hours', notes: 'For nasal congestion' },
                { name: 'Guaifenesin', type: 'Expectorant', dosage: '200mg every 4 hours', notes: 'To thin mucus' },
                { name: 'Honey (raw)', type: 'Natural', dosage: '1-2 teaspoons', notes: 'For cough relief' }
            ],
            'es': [
                { name: 'Acetaminofeno', type: 'Analgésico', dosage: '500mg cada 4-6 horas', notes: 'Para fiebre y dolores' },
                { name: 'Ibuprofeno', type: 'Antiinflamatorio', dosage: '200mg cada 4-6 horas', notes: 'Para inflamación y dolor' },
                { name: 'Seudoefedrina', type: 'Descongestivo', dosage: '30mg cada 4-6 horas', notes: 'Para congestión nasal' },
                { name: 'Guaifenesina', type: 'Expectorante', dosage: '200mg cada 4 horas', notes: 'Para adelgazar mucosidad' },
                { name: 'Miel (cruda)', type: 'Natural', dosage: '1-2 cucharaditas', notes: 'Para aliviar tos' }
            ],
            'fr': [
                { name: 'Paracétamol', type: 'Analgésique', dosage: '500mg toutes les 4-6 heures', notes: 'Pour la fièvre et les douleurs' },
                { name: 'Ibuprofène', type: 'Anti-inflammatoire', dosage: '200mg toutes les 4-6 heures', notes: 'Pour l\'inflammation et la douleur' },
                { name: 'Pseudoéphédrine', type: 'Décongestionnant', dosage: '30mg toutes les 4-6 heures', notes: 'Pour la congestion nasale' },
                { name: 'Guaïfénésine', type: 'Expectorant', dosage: '200mg toutes les 4 heures', notes: 'Pour fluidifier le mucus' },
                { name: 'Miel (brut)', type: 'Naturel', dosage: '1-2 cuillères à café', notes: 'Pour soulager la toux' }
            ],
            'de': [
                { name: 'Paracetamol', type: 'Schmerzmittel', dosage: '500mg alle 4-6 Stunden', notes: 'Für Fieber und Schmerzen' },
                { name: 'Ibuprofen', type: 'Entzündungshemmer', dosage: '200mg alle 4-6 Stunden', notes: 'Für Entzündungen und Schmerz' },
                { name: 'Pseudoephedrin', type: 'Abschwellmittel', dosage: '30mg alle 4-6 Stunden', notes: 'Für Nasenverstopfung' },
                { name: 'Guaifenesin', type: 'Expektorans', dosage: '200mg alle 4 Stunden', notes: 'Zum Verdünnen von Schleim' },
                { name: 'Honig (roh)', type: 'Natürlich', dosage: '1-2 Teelöffel', notes: 'Zum Husten lindern' }
            ],
            'hi': [
                { name: 'एसिटामिनोफेन', type: 'दर्द निवारक', dosage: '500mg हर 4-6 घंटे', notes: 'बुखार और दर्द के लिए' },
                { name: 'इबुप्रोफेन', type: 'सूजन कम करने वाला', dosage: '200mg हर 4-6 घंटे', notes: 'सूजन और दर्द के लिए' },
                { name: 'स्यूडोएफेड्रिन', type: 'नाक खोलने वाला', dosage: '30mg हर 4-6 घंटे', notes: 'नाक बंद होने के लिए' },
                { name: 'गुइफेनेसिन', type: 'कफ तरल करने वाला', dosage: '200mg हर 4 घंटे', notes: 'बलगम को पतला करने के लिए' },
                { name: 'शहद (कच्चा)', type: 'प्राकृतिक', dosage: '1-2 चम्मच', notes: 'खांसी से राहत के लिए' }
            ],
            'pt': [
                { name: 'Paracetamol', type: 'Analgésico', dosage: '500mg a cada 4-6 horas', notes: 'Para febre e dores' },
                { name: 'Ibuprofeno', type: 'Anti-inflamatório', dosage: '200mg a cada 4-6 horas', notes: 'Para inflamação e dor' },
                { name: 'Pseudoefedrina', type: 'Descongestionante', dosage: '30mg a cada 4-6 horas', notes: 'Para congestão nasal' },
                { name: 'Guaifenesina', type: 'Expectorante', dosage: '200mg a cada 4 horas', notes: 'Para fluidificar muco' },
                { name: 'Mel (cru)', type: 'Natural', dosage: '1-2 colheres de chá', notes: 'Para alívio da tosse' }
            ],
            'ja': [
                { name: 'アセトアミノフェン', type: '鎮痛薬', dosage: '500mg 4-6時間ごと', notes: '発熱と痛みの場合' },
                { name: 'イブプロフェン', type: '消炎薬', dosage: '200mg 4-6時間ごと', notes: '炎症と痛みの場合' },
                { name: 'プソイドエフェドリン', type: '充血除去薬', dosage: '30mg 4-6時間ごと', notes: '鼻づまりの場合' },
                { name: 'グアイフェネシン', type: '去痰薬', dosage: '200mg 4時間ごと', notes: '痰を薄くするため' },
                { name: 'ハチミツ（生）', type: '天然', dosage: '1-2小さじ', notes: 'せき緩和のため' }
            ],
            'zh': [
                { name: '扑热息痛', type: '止痛药', dosage: '500mg每4-6小时', notes: '用于发热和疼痛' },
                { name: '布洛芬', type: '消炎药', dosage: '200mg每4-6小时', notes: '用于炎症和疼痛' },
                { name: '伪麻黄碱', type: '充血鼻通', dosage: '30mg每4-6小时', notes: '用于鼻充血' },
                { name: '愈创木酚甘油醚', type: '祛痰药', dosage: '200mg每4小时', notes: '用于稀释粘液' },
                { name: '蜂蜜(生)', type: '天然', dosage: '1-2茶匙', notes: '用于缓解咳嗽' }
            ]
        },

        responses: {
            'en': {
                title: '🤧 Common Cold',
                description: 'The common cold is a viral infection affecting the upper respiratory tract. It causes nasal congestion, cough, sore throat, and general malaise. Most colds resolve on their own within 7-14 days.',
                advice: 'Rest well, stay hydrated, use saline nasal drops. Take over-the-counter medications as needed. If symptoms persist beyond 2 weeks or worsen significantly, seek medical attention.',
                remedies: ['Rest', 'Fluids', 'Warm beverages', 'Saline drops', 'Vitamin C', 'Honey lozenges', 'Humidifier'],
                emergency: false
            },
            'es': {
                title: '🤧 Resfriado Común',
                description: 'El resfriado común es una infección viral que afecta las vías respiratorias superiores. Causa congestión nasal, tos, dolor de garganta y malestar general. La mayoría de los resfriados se resuelven en 7-14 días.',
                advice: 'Descansa bien, mantente hidratado, usa gotas nasales salinas. Toma medicamentos de venta libre según sea necesario. Si los síntomas persisten más de 2 semanas, busca atención médica.',
                remedies: ['Descanso', 'Líquidos', 'Bebidas calientes', 'Gotas salinas', 'Vitamina C', 'Pastillas de miel', 'Humidificador'],
                emergency: false
            }
        }
    },

    'flu_influenza': {
        id: 'flu_001',
        category: 'respiratory',
        severity: 'moderate',
        emergency: false,
        keywords: ['flu', 'influenza', 'viral infection', 'body aches', 'fever', 'seasonal'],

        symptoms: {
            primary: ['High fever (101-104°F)', 'Cough', 'Sore throat', 'Fatigue', 'Muscle aches'],
            secondary: ['Headache', 'Chills', 'Nasal congestion', 'Nausea', 'Vomiting (rare)'],
            duration: '5-7 days for most, up to 2 weeks'
        },

        medications: {
            'en': [
                { name: 'Oseltamivir (Tamiflu)', type: 'Antiviral', dosage: '75mg twice daily for 5 days', notes: 'Most effective within 48 hours of symptom onset' },
                { name: 'Acetaminophen', type: 'Pain reliever', dosage: '500mg every 4-6 hours', notes: 'For fever and body aches' },
                { name: 'Ibuprofen', type: 'Anti-inflammatory', dosage: '200mg every 4-6 hours', notes: 'Reduces fever and inflammation' },
                { name: 'Guaifenesin', type: 'Expectorant', dosage: '200mg every 4 hours', notes: 'For productive cough' },
                { name: 'Ondansetron', type: 'Anti-nausea', dosage: '4-8mg as needed', notes: 'If nausea/vomiting occurs' }
            ],
            'es': [
                { name: 'Oseltamivir (Tamiflu)', type: 'Antiviral', dosage: '75mg dos veces al día durante 5 días', notes: 'Más efectivo dentro de 48 horas' },
                { name: 'Acetaminofeno', type: 'Analgésico', dosage: '500mg cada 4-6 horas', notes: 'Para fiebre y dolores musculares' },
                { name: 'Ibuprofeno', type: 'Antiinflamatorio', dosage: '200mg cada 4-6 horas', notes: 'Reduce fiebre e inflamación' },
                { name: 'Guaifenesina', type: 'Expectorante', dosage: '200mg cada 4 horas', notes: 'Para tos productiva' },
                { name: 'Ondansetrón', type: 'Antiemético', dosage: '4-8mg según sea necesario', notes: 'Si ocurre náusea/vómito' }
            ],
            'fr': [
                { name: 'Oseltamivir (Tamiflu)', type: 'Antiviral', dosage: '75mg deux fois par jour pendant 5 jours', notes: 'Plus efficace dans les 48 heures' },
                { name: 'Paracétamol', type: 'Analgésique', dosage: '500mg toutes les 4-6 heures', notes: 'Pour la fièvre et les douleurs musculaires' },
                { name: 'Ibuprofène', type: 'Anti-inflammatoire', dosage: '200mg toutes les 4-6 heures', notes: 'Réduit fièvre et inflammation' },
                { name: 'Guaïfénésine', type: 'Expectorant', dosage: '200mg toutes les 4 heures', notes: 'Pour la toux productive' },
                { name: 'Ondansétron', type: 'Antiémétique', dosage: '4-8mg au besoin', notes: 'Si nausée/vomissement' }
            ],
            'de': [
                { name: 'Oseltamivir (Tamiflu)', type: 'Antivirales', dosage: '75mg zweimal täglich für 5 Tage', notes: 'Am wirksamsten in den ersten 48 Stunden' },
                { name: 'Paracetamol', type: 'Schmerzmittel', dosage: '500mg alle 4-6 Stunden', notes: 'Für Fieber und Muskelschmerzen' },
                { name: 'Ibuprofen', type: 'Entzündungshemmer', dosage: '200mg alle 4-6 Stunden', notes: 'Reduziert Fieber und Entzündung' },
                { name: 'Guaifenesin', type: 'Expektorans', dosage: '200mg alle 4 Stunden', notes: 'Für produktiven Husten' },
                { name: 'Ondansetron', type: 'Antiemetikum', dosage: '4-8mg nach Bedarf', notes: 'Bei Übelkeit/Erbrechen' }
            ],
            'hi': [
                { name: 'ओसेल्टामिविर (टैमीफ्लू)', type: 'एंटीवायरल', dosage: '75mg दिन में दो बार 5 दिनों के लिए', notes: 'लक्षण शुरुआत के 48 घंटे में सबसे प्रभावी' },
                { name: 'एसिटामिनोफेन', type: 'दर्द निवारक', dosage: '500mg हर 4-6 घंटे', notes: 'बुखार और मांसपेशियों के दर्द के लिए' },
                { name: 'इबुप्रोफेन', type: 'सूजन कम करने वाला', dosage: '200mg हर 4-6 घंटे', notes: 'बुखार और सूजन को कम करता है' },
                { name: 'गुइफेनेसिन', type: 'कफ तरल करने वाला', dosage: '200mg हर 4 घंटे', notes: 'उत्पादक खांसी के लिए' },
                { name: 'ऑन्डेंसेट्रॉन', type: 'मतली रोधक', dosage: '4-8mg आवश्यकतानुसार', notes: 'यदि मतली/उल्टी होती है' }
            ],
            'pt': [
                { name: 'Oseltamivir (Tamiflu)', type: 'Antiviral', dosage: '75mg duas vezes ao dia por 5 dias', notes: 'Mais eficaz nas primeiras 48 horas' },
                { name: 'Paracetamol', type: 'Analgésico', dosage: '500mg a cada 4-6 horas', notes: 'Para febre e dores musculares' },
                { name: 'Ibuprofeno', type: 'Anti-inflamatório', dosage: '200mg a cada 4-6 horas', notes: 'Reduz febre e inflamação' },
                { name: 'Guaifenesina', type: 'Expectorante', dosage: '200mg a cada 4 horas', notes: 'Para tosse produtiva' },
                { name: 'Ondansetrona', type: 'Anti-náusea', dosage: '4-8mg conforme necessário', notes: 'Se náusea/vômito ocorrer' }
            ],
            'ja': [
                { name: 'オセルタミビル（タミフル）', type: '抗ウイルス薬', dosage: '75mg 1日2回 5日間', notes: '症状発症後48時間以内に最も効果的' },
                { name: 'アセトアミノフェン', type: '鎮痛薬', dosage: '500mg 4-6時間ごと', notes: '発熱と筋肉痛の場合' },
                { name: 'イブプロフェン', type: '消炎薬', dosage: '200mg 4-6時間ごと', notes: '発熱と炎症を軽減' },
                { name: 'グアイフェネシン', type: '去痰薬', dosage: '200mg 4時間ごと', notes: '生産性のある咳の場合' },
                { name: 'オンダンセトロン', type: '制吐薬', dosage: '4-8mg必要に応じて', notes: '吐き気/嘔吐が発生した場合' }
            ],
            'zh': [
                { name: '奥司他韦(达菲)', type: '抗病毒', dosage: '75mg每天两次共5天', notes: '症状开始后48小时内最有效' },
                { name: '扑热息痛', type: '止痛药', dosage: '500mg每4-6小时', notes: '用于发热和肌肉疼痛' },
                { name: '布洛芬', type: '消炎药', dosage: '200mg每4-6小时', notes: '降低发热和炎症' },
                { name: '愈创木酚甘油醚', type: '祛痰药', dosage: '200mg每4小时', notes: '用于产生性咳嗽' },
                { name: '昂丹司琼', type: '阻吐药', dosage: '4-8mg根据需要', notes: '如出现恶心/呕吐' }
            ]
        },

        responses: {
            'en': {
                title: '🤒 Flu (Influenza)',
                description: 'Influenza is a viral respiratory infection that causes fever, cough, body aches, and fatigue. It is more severe than a common cold and can lead to complications.',
                advice: 'Rest, stay hydrated, and take antiviral medications if prescribed. Most people recover in 5-7 days. Seek medical attention if experiencing severe symptoms, difficulty breathing, or signs of pneumonia.',
                remedies: ['Rest', 'Fluids', 'Antiviral medication', 'Pain relievers', 'Warm compress', 'Humidifier', 'Nutritious food'],
                emergency: false
            }
        }
    },

    'asthma': {
        id: 'asthma_001',
        category: 'respiratory',
        severity: 'moderate',
        emergency: false,
        keywords: ['asthma', 'wheezing', 'breathing difficulty', 'shortness of breath', 'chest tightness'],

        symptoms: {
            primary: ['Wheezing (whistling sound when breathing)', 'Shortness of breath', 'Chest tightness', 'Cough (especially at night)'],
            secondary: ['Difficulty speaking', 'Anxiety', 'Fatigue during activity'],
            triggers: ['Exercise', 'Cold air', 'Allergens', 'Air pollution', 'Smoke', 'Stress']
        },

        medications: {
            'en': [
                { name: 'Albuterol (Ventolin)', type: 'Rescue inhaler', dosage: ' 1-2 puffs every 4-6 hours as needed', notes: 'For acute symptoms; use during attacks' },
                { name: 'Fluticasone (Flovent)', type: 'Controller inhaler', dosage: '1-2 puffs twice daily', notes: 'Prevents symptoms; use regularly' },
                { name: 'Montelukast (Singulair)', type: 'Leukotriene blocker', dosage: '4-10mg once daily', notes: 'For maintenance and prevention' },
                { name: 'Prednisone', type: 'Oral corticosteroid', dosage: '40-60mg daily for 5-7 days', notes: 'For severe exacerbations only' },
                { name: 'Theophylline', type: 'Bronchodilator', dosage: 'Varies; 300-600mg daily', notes: 'Long-term prevention' }
            ],
            'es': [
                { name: 'Albuterol (Ventolin)', type: 'Inhalador de rescate', dosage: '1-2 inhalaciones cada 4-6 horas según sea necesario', notes: 'Para síntomas agudos; usar durante ataques' },
                { name: 'Fluticasona (Flovent)', type: 'Inhalador controlador', dosage: '1-2 inhalaciones dos veces al día', notes: 'Previene síntomas; usar regularmente' },
                { name: 'Montelukast (Singulair)', type: 'Bloqueador de leucotrienos', dosage: '4-10mg una vez al día', notes: 'Para mantenimiento y prevención' },
                { name: 'Prednisona', type: 'Corticosteroide oral', dosage: '40-60mg diarios por 5-7 días', notes: 'Solo para exacerbaciones graves' },
                { name: 'Teofilina', type: 'Broncodilatador', dosage: 'Varía; 300-600mg diarios', notes: 'Prevención a largo plazo' }
            ]
        },

        responses: {
            'en': {
                title: '🫁 Asthma',
                description: 'Asthma is a chronic respiratory condition causing inflammation and narrowing of airways. It leads to difficulty breathing, wheezing, and chest tightness. Triggers include exercise, allergens, cold air, and stress.',
                advice: 'Use rescue inhalers during attacks. Use controller inhalers daily as prescribed. Avoid known triggers. If experiencing severe shortness of breath, seek emergency care.',
                remedies: ['Rescue inhaler', 'Controller medication', 'Avoid triggers', 'Deep breathing exercises', 'Warm environment', 'Allergy management'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // DIGESTIVE SYSTEM
    // ============================================================================

    'diarrhea': {
        id: 'diarrhea_001',
        category: 'digestive',
        severity: 'mild',
        emergency: false,
        keywords: ['diarrhea', 'loose stool', 'stomach upset', 'digestive', 'bowel'],

        symptoms: {
            primary: ['Loose or watery stools', 'Abdominal cramps', 'Frequent bowel movements', 'Urgency'],
            secondary: ['Stomach pain', 'Bloating', 'Fever (if infectious)', 'General weakness'],
            causes: ['Viral or bacterial infection', 'Food intolerance', 'Medications', 'IBS', 'Stress']
        },

        medications: {
            'en': [
                { name: 'Loperamide (Imodium)', type: 'Antidiarrheal', dosage: '2mg after each loose stool, max 8mg/day', notes: 'Slows intestinal movement' },
                { name: 'Bismuth subsalicylate (Pepto-Bismol)', type: 'Antidiarrheal', dosage: '30ml or 2 tablets every 30-60 min', notes: 'Reduces inflammation and kills bacteria' },
                { name: 'Oral rehydration salts', type: 'Electrolyte', dosage: 'Mix packet in 1L water, drink regularly', notes: 'Prevents dehydration' },
                { name: 'Probiotics', type: 'Dietary supplement', dosage: '1-2 capsules daily', notes: 'Restores gut bacteria' },
                { name: 'Psyllium husk', type: 'Fiber supplement', dosage: '3-5g twice daily', notes: 'Bulks stools' }
            ],
            'es': [
                { name: 'Loperamida (Imodium)', type: 'Antidiarreico', dosage: '2mg después de cada evacuación suelta, máx 8mg/día', notes: 'Ralentiza el movimiento intestinal' },
                { name: 'Subsalicilato de bismuto (Pepto-Bismol)', type: 'Antidiarreico', dosage: '30ml o 2 tabletas cada 30-60 min', notes: 'Reduce inflamación y mata bacterias' },
                { name: 'Sales de rehidratación oral', type: 'Electrolito', dosage: 'Mezcla en 1L de agua, beber regularmente', notes: 'Previene deshidratación' },
                { name: 'Probióticos', type: 'Suplemento dietético', dosage: '1-2 cápsulas diarias', notes: 'Restaura bacterias intestinales' },
                { name: 'Cáscara de psilio', type: 'Suplemento de fibra', dosage: '3-5g dos veces al día', notes: 'Aumenta el volumen de heces' }
            ]
        },

        responses: {
            'en': {
                title: '🚽 Diarrhea',
                description: 'Diarrhea involves frequent loose or watery stools, often accompanied by abdominal cramps and urgency. It can be caused by infections, food intolerance, medications, or stress.',
                advice: 'Stay hydrated with oral rehydration solutions. Eat bland foods (rice, bananas, toast). Avoid dairy and high-fiber foods. Use over-the-counter medications as needed. Seek medical attention if diarrhea lasts more than 3 days or contains blood.',
                remedies: ['Hydration', 'Bland diet (BRAT)', 'Anti-diarrheal medication', 'Probiotics', 'Rest', 'Oral rehydration salts'],
                emergency: false
            }
        }
    },

    'nausea': {
        id: 'nausea_001',
        category: 'digestive',
        severity: 'mild',
        emergency: false,
        keywords: ['nausea', 'sick feeling', 'queasy', 'vomit', 'upset stomach'],

        symptoms: {
            primary: ['Feeling of sickness', 'Gagging', 'Loss of appetite', 'Dizziness'],
            secondary: ['Sweating', 'Drooling', 'Stomach pain', 'Weakness'],
            causes: ['Medication side effects', 'Food poisoning', 'Pregnancy', 'Migraines', 'Anxiety', 'Motion sickness']
        },

        medications: {
            'en': [
                { name: 'Ondansetron (Zofran)', type: 'Anti-nausea', dosage: '4-8mg every 8 hours', notes: 'Prescription; blocks nausea signals' },
                { name: 'Metoclopramide (Reglan)', type: 'Prokinetic', dosage: '10mg three times daily', notes: 'Helps stomach empty faster' },
                { name: 'Meclizine (Antivert)', type: 'Antihistamine', dosage: '25-50mg every 4-6 hours', notes: 'For motion sickness' },
                { name: 'Ginger', type: 'Natural', dosage: '250-500mg or 1-2 cups tea', notes: 'Natural anti-nausea' },
                { name: 'Peppermint', type: 'Natural', dosage: '1-2 cups tea or lozenges', notes: 'Soothes stomach' }
            ],
            'es': [
                { name: 'Ondansetrón (Zofran)', type: 'Antiemético', dosage: '4-8mg cada 8 horas', notes: 'Receta; bloquea señales de náusea' },
                { name: 'Metoclopramida (Reglan)', type: 'Procinético', dosage: '10mg tres veces al día', notes: 'Ayuda al estómago a vaciarse más rápido' },
                { name: 'Meclizina (Antivert)', type: 'Antihistamínico', dosage: '25-50mg cada 4-6 horas', notes: 'Para mareos de movimiento' },
                { name: 'Jengibre', type: 'Natural', dosage: '250-500mg o 1-2 tazas de té', notes: 'Antináusea natural' },
                { name: 'Menta piperita', type: 'Natural', dosage: '1-2 tazas de té o pastillas', notes: 'Calma el estómago' }
            ]
        },

        responses: {
            'en': {
                title: '🤢 Nausea',
                description: 'Nausea is an uncomfortable sensation that may lead to vomiting. It can result from medication side effects, food poisoning, pregnancy, migraines, or anxiety.',
                advice: 'Sip small amounts of clear fluids. Eat bland foods in small portions. Use ginger or peppermint tea for relief. Take medication if prescribed. Seek medical attention if nausea is severe or persistent.',
                remedies: ['Clear fluids', 'Ginger tea', 'Peppermint', 'Small meals', 'Rest', 'Fresh air', 'Anti-nausea medication'],
                emergency: false
            }
        }
    },

    'acid_reflux': {
        id: 'acid_reflux_001',
        category: 'digestive',
        severity: 'mild',
        emergency: false,
        keywords: ['acid reflux', 'heartburn', 'GERD', 'indigestion', 'chest pain', 'regurgitation'],

        symptoms: {
            primary: ['Heartburn (burning in chest)', 'Regurgitation of food/liquid', 'Difficulty swallowing', 'Chest pain'],
            secondary: ['Nausea', 'Bad taste in mouth', 'Throat irritation', 'Bloating'],
            triggers: ['Spicy foods', 'Fatty foods', 'Alcohol', 'Caffeine', 'Lying down after meals', 'Stress']
        },

        medications: {
            'en': [
                { name: 'Omeprazole (Prilosec)', type: 'Proton pump inhibitor', dosage: '20mg once daily', notes: 'Reduces acid production' },
                { name: 'Ranitidine (Zantac)', type: 'H2 blocker', dosage: '150mg twice daily', notes: 'Reduces stomach acid' },
                { name: 'Antacid (Tums, Rolaids)', type: 'Antacid', dosage: '2-4 tablets as needed', notes: 'Neutralizes stomach acid immediately' },
                { name: 'Sucralfate', type: 'Protective agent', dosage: '1g four times daily', notes: 'Coats and protects stomach' },
                { name: 'Alginic acid', type: 'Barrier agent', dosage: 'As directed on package', notes: 'Creates protective barrier' }
            ],
            'es': [
                { name: 'Omeprazol (Prilosec)', type: 'Inhibidor de bomba de protones', dosage: '20mg una vez al día', notes: 'Reduce la producción de ácido' },
                { name: 'Ranitidina (Zantac)', type: 'Bloqueador H2', dosage: '150mg dos veces al día', notes: 'Reduce el ácido del estómago' },
                { name: 'Antiácido (Tums, Rolaids)', type: 'Antiácido', dosage: '2-4 tabletas según sea necesario', notes: 'Neutraliza el ácido estomacal inmediatamente' },
                { name: 'Sucralfato', type: 'Agente protector', dosage: '1g cuatro veces al día', notes: 'Recubre y protege el estómago' },
                { name: 'Ácido algínico', type: 'Agente barrera', dosage: 'Según se indica en el paquete', notes: 'Crea barrera protectora' }
            ]
        },

        responses: {
            'en': {
                title: '🔥 Acid Reflux (GERD)',
                description: 'Acid reflux occurs when stomach acid flows back into the esophagus, causing heartburn and discomfort. Common triggers include spicy foods, alcohol, and lying down after meals.',
                advice: 'Avoid trigger foods and drinks. Eat smaller, more frequent meals. Stay upright after eating. Use antacids or acid-reducing medications as needed. Consult a doctor if symptoms occur more than twice per week.',
                remedies: ['Antacids', 'Acid-reducing medication', 'Avoid triggers', 'Smaller meals', 'Elevate head while sleeping', 'Chewing gum'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // NEUROLOGICAL SYSTEM
    // ============================================================================

    'migraine': {
        id: 'migraine_001',
        category: 'neurological',
        severity: 'moderate',
        emergency: false,
        keywords: ['migraine', 'severe headache', 'throbbing', 'photophobia', 'light sensitivity', 'nausea'],

        symptoms: {
            primary: ['Severe throbbing or pulsating pain (usually one side)', 'Sensitivity to light', 'Sensitivity to sound', 'Nausea', 'Vomiting'],
            secondary: ['Vision changes', 'Tingling', 'Weakness', 'Difficulty concentrating', 'Fatigue'],
            triggers: ['Stress', 'Hormonal changes', 'Food/drinks (MSG, alcohol)', 'Sleep changes', 'Environmental factors']
        },

        medications: {
            'en': [
                { name: 'Sumatriptan (Imitrex)', type: 'Triptan', dosage: '50-100mg as needed, can repeat after 2 hours', notes: 'Most effective early in migraine' },
                { name: 'Ibuprofen', type: 'NSAID', dosage: '400-600mg every 4-6 hours', notes: 'For mild to moderate migraine' },
                { name: 'Naproxen (Aleve)', type: 'NSAID', dosage: '375-500mg twice daily', notes: 'Long-lasting pain relief' },
                { name: 'Topiramate (Topamax)', type: 'Preventive', dosage: '50-100mg daily', notes: 'For migraine prevention' },
                { name: 'Propranolol', type: 'Beta-blocker', dosage: '40-120mg daily in divided doses', notes: 'Prevents migraines' }
            ],
            'es': [
                { name: 'Sumatriptán (Imitrex)', type: 'Triptán', dosage: '50-100mg según sea necesario, puede repetir después de 2 horas', notes: 'Más efectivo al inicio de la migraña' },
                { name: 'Ibuprofeno', type: 'AINE', dosage: '400-600mg cada 4-6 horas', notes: 'Para migraña leve a moderada' },
                { name: 'Naproxeno (Aleve)', type: 'AINE', dosage: '375-500mg dos veces al día', notes: 'Alivio del dolor de larga duración' },
                { name: 'Topiramato (Topamax)', type: 'Preventivo', dosage: '50-100mg diarios', notes: 'Para prevención de migrañas' },
                { name: 'Propranolol', type: 'Betabloqueador', dosage: '40-120mg diarios en dosis divididas', notes: 'Previene migrañas' }
            ]
        },

        responses: {
            'en': {
                title: '🧠 Migraine',
                description: 'A migraine is a neurological condition causing severe, throbbing headache usually on one side of the head, often accompanied by sensitivity to light and sound, nausea, and sometimes vomiting.',
                advice: 'Use triptan medication early in migraine. Rest in a dark, quiet room. Apply cold compress to head or neck. Stay hydrated. Identify and avoid triggers. Seek emergency care if experiencing the worst headache of your life.',
                remedies: ['Dark, quiet room', 'Cold compress', 'Hydration', 'Triptan medication', 'Preventive medication', 'Lifestyle changes'],
                emergency: false
            }
        }
    },

    'back_pain': {
        id: 'back_pain_001',
        category: 'neurological',
        severity: 'moderate',
        emergency: false,
        keywords: ['back pain', 'lower back', 'upper back', 'spine', 'lumbago', 'sciatica'],

        symptoms: {
            primary: ['Pain in lower or upper back', 'Stiffness', 'Reduced flexibility', 'Muscle spasms'],
            secondary: ['Radiating pain down legs', 'Numbness', 'Weakness in legs', 'Tingling'],
            causes: ['Poor posture', 'Muscle strain', 'Herniated disc', 'Arthritis', 'Stress', 'Pregnancy']
        },

        medications: {
            'en': [
                { name: 'Ibuprofen', type: 'NSAID', dosage: '200-400mg every 4-6 hours', notes: 'Reduces inflammation and pain' },
                { name: 'Naproxen (Aleve)', type: 'NSAID', dosage: '220-500mg twice daily', notes: 'Long-lasting relief' },
                { name: 'Muscle relaxant (Cyclobenzaprine)', type: 'Muscle relaxer', dosage: '5-10mg three times daily', notes: 'Relieves muscle spasms' },
                { name: 'Acetaminophen', type: 'Pain reliever', dosage: '500-1000mg every 4-6 hours', notes: 'Alternative to NSAIDs' },
                { name: 'Topical pain cream (Capsaicin)', type: 'Topical', dosage: 'Apply 3-4 times daily', notes: 'Direct relief to affected area' }
            ],
            'es': [
                { name: 'Ibuprofeno', type: 'AINE', dosage: '200-400mg cada 4-6 horas', notes: 'Reduce la inflamación y el dolor' },
                { name: 'Naproxeno (Aleve)', type: 'AINE', dosage: '220-500mg dos veces al día', notes: 'Alivio de larga duración' },
                { name: 'Relajante muscular (Ciclobenzaprina)', type: 'Relajante muscular', dosage: '5-10mg tres veces al día', notes: 'Alivia los espasmos musculares' },
                { name: 'Acetaminofeno', type: 'Analgésico', dosage: '500-1000mg cada 4-6 horas', notes: 'Alternativa a los AINE' },
                { name: 'Crema de dolor tópica (Capsaicina)', type: 'Tópica', dosage: 'Aplicar 3-4 veces al día', notes: 'Alivio directo al área afectada' }
            ]
        },

        responses: {
            'en': {
                title: '🔃 Back Pain',
                description: 'Back pain can result from poor posture, muscle strain, herniated disc, arthritis, or stress. It ranges from mild stiffness to severe, debilitating pain.',
                advice: 'Rest with proper support. Use heat or ice therapy. Take pain medication as needed. Do gentle stretches and exercises. Improve posture and ergonomics. Seek medical attention if pain persists beyond 6 weeks or is accompanied by numbness.',
                remedies: ['Rest', 'Heat/ice therapy', 'Pain medication', 'Stretching', 'Good posture', 'Exercise', 'Back support'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // CARDIAC SYSTEM
    // ============================================================================

    'chest_pain': {
        id: 'chest_pain_001',
        category: 'cardiac',
        severity: 'severe',
        emergency: true,
        keywords: ['chest pain', 'chest tightness', 'heart pain', 'pressure', 'acute'],

        symptoms: {
            primary: ['Sharp or pressure-like chest pain', 'Shortness of breath', 'Heaviness in chest', 'Pain radiating to arm/jaw'],
            secondary: ['Sweating', 'Nausea', 'Dizziness', 'Fatigue'],
            causes: ['Heart attack', 'Angina', 'Anxiety', 'Muscle strain', 'Pulmonary embolism']
        },

        medications: {
            'en': [
                { name: 'Aspirin', type: 'Antiplatelet', dosage: '325mg chewed immediately', notes: 'CRITICAL: Use only if advised by 911 operator' },
                { name: 'Nitroglycerin', type: 'Vasodilator', dosage: '0.3-0.6mg sublingual as needed', notes: 'If prescribed; use before chest pain events' },
                { name: 'Morphine', type: 'Opioid', dosage: 'Given by paramedics/ER', notes: 'For acute chest pain' },
                { name: 'Heparin', type: 'Anticoagulant', dosage: 'Hospital administration', notes: 'Prevents blood clots' },
                { name: 'Clopidogrel (Plavix)', type: 'Antiplatelet', dosage: '300-600mg loading dose', notes: 'After heart attack/stent' }
            ]
        },

        responses: {
            'en': {
                title: '❤️ CHEST PAIN - ⚠️ EMERGENCY ⚠️',
                description: 'Chest pain is a medical emergency. It can indicate a heart attack, angina, or other life-threatening conditions. DO NOT DELAY.',
                advice: '🚨 CALL 911 IMMEDIATELY or seek emergency services. Do not drive yourself. If prescribed nitroglycerin, use it. Chew aspirin if instructed by 911 operator. Keep calm and stay still until paramedics arrive.',
                remedies: ['CALL 911', 'Chew aspirin (if safe)', 'Use nitroglycerin if prescribed', 'Stay calm', 'Loosen tight clothing', 'Do not delay'],
                emergency: true
            }
        }
    },

    'high_blood_pressure': {
        id: 'hypertension_001',
        category: 'cardiac',
        severity: 'moderate',
        emergency: false,
        keywords: ['high blood pressure', 'hypertension', 'elevated BP', 'hypertensive'],

        symptoms: {
            primary: ['Often no symptoms (silent killer)', 'Headache', 'Shortness of breath', 'Nosebleeds'],
            secondary: ['Chest discomfort', 'Vision problems', 'Fatigue'],
            causes: ['Genetics', 'Obesity', 'Sedentary lifestyle', 'High salt diet', 'Stress', 'Alcohol', 'Smoking']
        },

        medications: {
            'en': [
                { name: 'Lisinopril (ACE inhibitor)', type: 'Blood pressure', dosage: '10-40mg once daily', notes: 'First-line medication' },
                { name: 'Losartan (ARB)', type: 'Blood pressure', dosage: '25-100mg once or twice daily', notes: 'Alternative to ACE inhibitor' },
                { name: 'Amlodipine (Calcium channel blocker)', type: 'Blood pressure', dosage: '2.5-10mg once daily', notes: 'Relaxes blood vessels' },
                { name: 'Hydrochlorothiazide (Diuretic)', type: 'Blood pressure', dosage: '25-50mg once daily', notes: 'Reduces fluid volume' },
                { name: 'Metoprolol (Beta-blocker)', type: 'Blood pressure', dosage: '25-100mg twice daily', notes: 'Slows heart rate' }
            ],
            'es': [
                { name: 'Lisinopril (Inhibidor de ECA)', type: 'Presión arterial', dosage: '10-40mg una vez al día', notes: 'Medicamento de primera línea' },
                { name: 'Losartán (ARA)', type: 'Presión arterial', dosage: '25-100mg una o dos veces al día', notes: 'Alternativa al inhibidor de ECA' },
                { name: 'Amlodipina (Bloqueador de calcio)', type: 'Presión arterial', dosage: '2.5-10mg una vez al día', notes: 'Relaja los vasos sanguíneos' },
                { name: 'Hidroclorotiazida (Diurético)', type: 'Presión arterial', dosage: '25-50mg una vez al día', notes: 'Reduce el volumen de fluido' },
                { name: 'Metoprolol (Betabloqueador)', type: 'Presión arterial', dosage: '25-100mg dos veces al día', notes: 'Ralentiza la frecuencia cardíaca' }
            ]
        },

        responses: {
            'en': {
                title: '💓 High Blood Pressure (Hypertension)',
                description: 'High blood pressure is often called the "silent killer" because it typically has no symptoms but can lead to serious complications like heart attack and stroke.',
                advice: 'Take prescribed blood pressure medications regularly. Monitor your BP at home. Reduce sodium intake. Exercise regularly. Manage stress. Maintain healthy weight. Avoid alcohol and smoking. Have regular checkups.',
                remedies: ['Blood pressure medication', 'Low-sodium diet', 'Regular exercise', 'Stress management', 'Weight management', 'Limit alcohol', 'Monitor BP regularly'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // SKIN CONDITIONS
    // ============================================================================

    'skin_rash': {
        id: 'rash_001',
        category: 'skin',
        severity: 'mild',
        emergency: false,
        keywords: ['rash', 'skin irritation', 'hives', 'itchy skin', 'red patches'],

        symptoms: {
            primary: ['Red patches or bumps', 'Itching', 'Burning sensation', 'Swelling'],
            secondary: ['Oozing or crusting', 'Blistering', 'Flaking skin', 'Fever (if infectious)'],
            causes: ['Allergic reaction', 'Irritant contact', 'Infection', 'Dry skin', 'Heat', 'Autoimmune']
        },

        medications: {
            'en': [
                { name: 'Hydrocortisone cream', type: 'Topical steroid', dosage: 'Apply 2-3 times daily', notes: '1% for mild rash' },
                { name: 'Cetirizine (Zyrtec)', type: 'Antihistamine', dosage: '10mg once daily', notes: 'For itching' },
                { name: 'Diphenhydramine (Benadryl)', type: 'Antihistamine', dosage: '25-50mg every 4-6 hours', notes: 'Causes drowsiness' },
                { name: 'Calamine lotion', type: 'Topical', dosage: 'Apply as needed', notes: 'Cooling relief for itching' },
                { name: 'Moisturizer (fragrance-free)', type: 'Topical', dosage: 'Apply daily', notes: 'Prevents skin irritation' }
            ],
            'es': [
                { name: 'Crema de hidrocortisona', type: 'Esteroide tópico', dosage: 'Aplicar 2-3 veces al día', notes: '1% par sarpullido leve' },
                { name: 'Cetirizina (Zyrtec)', type: 'Antihistamínico', dosage: '10mg una vez al día', notes: 'Para picazón' },
                { name: 'Difenhidramina (Benadryl)', type: 'Antihistamínico', dosage: '25-50mg cada 4-6 horas', notes: 'Causa somnolencia' },
                { name: 'Loción de calamina', type: 'Tópica', dosage: 'Aplicar según sea necesario', notes: 'Alivio refrescante para la picazón' },
                { name: 'Hidratante (sin perfume)', type: 'Tópica', dosage: 'Aplicar diariamente', notes: 'Previene irritación de la piel' }
            ]
        },

        responses: {
            'en': {
                title: '🔴 Skin Rash',
                description: 'A skin rash is characterized by red, inflamed patches or bumps on the skin. It can result from allergic reactions, irritants, infections, or underlying health conditions.',
                advice: 'Identify and avoid the trigger if possible. Keep skin clean and dry. Use fragrance-free moisturizer. Apply topical steroids or calamine lotion. Use antihistamines for itching. Seek medical attention if rash worsens, spreads, or persists beyond 2 weeks.',
                remedies: ['Avoid triggers', 'Topical steroid cream', 'Antihistamines', 'Calamine lotion', 'Cool compress', 'Fragrance-free moisturizer'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // ALLERGIC REACTIONS
    // ============================================================================

    'allergic_reaction': {
        id: 'allergy_001',
        category: 'allergic',
        severity: 'moderate',
        emergency: false,
        keywords: ['allergy', 'allergic reaction', 'itching', 'swelling', 'hives', 'sneezing'],

        symptoms: {
            primary: ['Hives or skin rash', 'Itching', 'Swelling of lips/face/throat', 'Sneezing', 'Nasal congestion'],
            secondary: ['Watery eyes', 'Shortness of breath', 'Stomach cramps', 'Vomiting'],
            triggers: ['Food', 'Pollen', 'Animal dander', 'Drug', 'Insect sting', 'Latex']
        },

        medications: {
            'en': [
                { name: 'Antihistamine (Cetirizine)', type: 'Antihistamine', dosage: '10mg once daily', notes: 'For mild allergies' },
                { name: 'Diphenhydramine (Benadryl)', type: 'Antihistamine', dosage: '25-50mg every 4-6 hours', notes: 'Faster acting' },
                { name: 'Hydrocortisone cream', type: 'Topical', dosage: 'Apply 2-3 times daily', notes: 'For skin reactions' },
                { name: 'Nasal decongestant spray', type: 'Nasal', dosage: '1-2 sprays per nostril twice daily', notes: 'For nasal congestion' },
                { name: 'Epinephrine auto-injector (EpiPen)', type: 'Emergency', dosage: '0.3-0.5mg intramuscular', notes: 'For severe reactions ONLY' }
            ],
            'es': [
                { name: 'Antihistamínico (Cetirizina)', type: 'Antihistamínico', dosage: '10mg una vez al día', notes: 'Para alergias leves' },
                { name: 'Difenhidramina (Benadryl)', type: 'Antihistamínico', dosage: '25-50mg cada 4-6 horas', notes: 'Acción más rápida' },
                { name: 'Crema de hidrocortisona', type: 'Tópica', dosage: 'Aplicar 2-3 veces al día', notes: 'Para reacciones en la piel' },
                { name: 'Aerosol descongestivo nasal', type: 'Nasal', dosage: '1-2 aerosoles por fosa nasal dos veces al día', notes: 'Para congestión nasal' },
                { name: 'Auto-inyector de epinefrina (EpiPen)', type: 'Emergencia', dosage: '0.3-0.5mg intramuscular', notes: 'Solo para reacciones graves' }
            ]
        },

        responses: {
            'en': {
                title: '🤧 Allergic Reaction',
                description: 'An allergic reaction occurs when the immune system overreacts to a substance. Symptoms range from mild (sneezing, itching) to severe (swelling, difficulty breathing).',
                advice: 'Identify and avoid the trigger if possible. Use antihistamines for mild reactions. Apply topical treatments for skin reactions. For severe reactions with swelling of lips/throat or difficulty breathing, use epinephrine auto-injector and call 911 immediately.',
                remedies: ['Avoid triggers', 'Antihistamines', 'Topical creams', 'Cool compress', 'Epinephrine (if severe)', 'Emergency care (if severe)'],
                emergency: false
            }
        }
    },

    'anaphylaxis': {
        id: 'anaphylaxis_001',
        category: 'allergic',
        severity: 'severe',
        emergency: true,
        keywords: ['anaphylaxis', 'severe allergy', 'breathing difficulty', 'swelling', 'shock', 'critical'],

        symptoms: {
            primary: ['Difficulty breathing', 'Throat/face swelling', 'Drop in blood pressure', 'Loss of consciousness', 'Shock'],
            secondary: ['Rapid or weak pulse', 'Dizziness', 'Blue lips/fingers', 'Skin flushing'],
            triggers: ['Peanuts', 'Tree nuts', 'Shellfish', 'Milk', 'Eggs', 'Bee sting', 'Drug allergy']
        },

        medications: {
            'en': [
                { name: 'Epinephrine (EpiPen)', type: 'Emergency', dosage: 'Inject 0.3-0.5mg immediately', notes: 'FIRST and ONLY response' },
                { name: 'Oxygen', type: 'Emergency', dosage: 'Administer by paramedics', notes: 'For breathing difficulty' },
                { name: 'IV fluids', type: 'Emergency', dosage: 'Hospital administration', notes: 'For shock/blood pressure support' },
                { name: 'Steroids', type: 'Emergency', dosage: 'Hospital administration', notes: 'Prevents biphasic reaction' },
                { name: 'Antihistamines', type: 'Emergency', dosage: 'Hospital administration', notes: 'Secondary treatment' }
            ]
        },

        responses: {
            'en': {
                title: '⚠️ ANAPHYLAXIS - ⚠️ LIFE-THREATENING EMERGENCY ⚠️',
                description: 'Anaphylaxis is a severe, potentially life-threatening allergic reaction that develops rapidly. It requires immediate emergency intervention.',
                advice: '🚨 CALL 911 IMMEDIATELY. Inject epinephrine auto-injector (EpiPen) into outer thigh right away. Do NOT remove EpiPen for 10 seconds. Call 911 even if symptoms improve. Wait for paramedics. May need second dose after 5-15 minutes.',
                remedies: ['CALL 911 IMMEDIATELY', 'Use EpiPen immediately', 'Lie down with legs elevated', 'Do not move unnecessarily', 'Be prepared for second dose', 'Go to emergency room'],
                emergency: true
            }
        }
    },

    // ============================================================================
    // DIABETES & METABOLIC
    // ============================================================================

    'diabetes': {
        id: 'diabetes_001',
        category: 'metabolic',
        severity: 'moderate',
        emergency: false,
        keywords: ['diabetes', 'blood sugar', 'hyperglycemia', 'glucose', 'thyroid'],

        symptoms: {
            primary: ['Increased thirst', 'Frequent urination', 'Fatigue', 'Blurred vision', 'Unexplained weight loss'],
            secondary: ['Slow-healing wounds', 'Numbness in feet', 'Dry skin', 'Irritability'],
            causes: ['Genetic', 'Obesity', 'Sedentary lifestyle', 'Poor diet', 'Age', 'Gestational'],
            types: ['Type 1: Insulin-dependent', 'Type 2: Most common', 'Gestational: During pregnancy']
        },

        medications: {
            'en': [
                { name: 'Metformin', type: 'Oral', dosage: '500-2000mg daily in divided doses', notes: 'First-line for Type 2' },
                { name: 'Insulin glargine (Lantus)', type: 'Injectable', dosage: '10-100 units daily', notes: 'Long-acting insulin' },
                { name: 'Liability: Glipizide', type: 'Oral', dosage: '5-20mg daily', notes: 'Stimulates insulin release' },
                { name: 'GLP-1 agonist (Ozempic)', type: 'Injectable', dosage: '0.5-1mg once weekly', notes: 'For weight loss + glucose control' },
                { name: 'SGLT2 inhibitor (Empagliflozin)', type: 'Oral', dosage: '10-25mg once daily', notes: 'Increases glucose excretion' }
            ],
            'es': [
                { name: 'Metformina', type: 'Oral', dosage: '500-2000mg diarios en dosis divididas', notes: 'Primera línea para tipo 2' },
                { name: 'Insulina glargina (Lantus)', type: 'Inyectable', dosage: '10-100 unidades diarias', notes: 'Insulina de larga duración' },
                { name: 'Glipizida', type: 'Oral', dosage: '5-20mg diarios', notes: 'Estimula la liberación de insulina' },
                { name: 'Agonista GLP-1 (Ozempic)', type: 'Inyectable', dosage: '0.5-1mg una vez a la semana', notes: 'Para pérdida de peso + control de glucosa' },
                { name: 'Inhibidor SGLT2 (Empagliflozina)', type: 'Oral', dosage: '10-25mg una vez al día', notes: 'Aumenta la excreción de glucosa' }
            ]
        },

        responses: {
            'en': {
                title: '🩺 Diabetes',
                description: 'Diabetes is a chronic metabolic disorder affecting how the body processes blood sugar. Type 1 requires insulin; Type 2 can often be managed with diet, exercise, and medication.',
                advice: 'Monitor blood sugar regularly. Take medications as prescribed. Follow a balanced, low-glycemic diet. Exercise regularly. Maintain healthy weight. Get regular eye and foot checkups. Manage stress. See endocrinologist regularly.',
                remedies: ['Blood sugar monitoring', 'Insulin or oral medication', 'Low-glycemic diet', 'Regular exercise', 'Weight management', 'Foot care', 'Regular checkups'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // MORE CONDITIONS CAN BE ADDED FOLLOWING THE SAME STRUCTURE
    // ============================================================================

};

// ============================================================================
// EXPORT FOR USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ENHANCED_MEDICAL_DATABASE };
}

/*
HOW TO USE THIS DATABASE:

1. MERGE WITH EXISTING CHATBOT:
   const chatbot = new MultilingualMedicalChatbot('en');
   for (const [key, condition] of Object.entries(ENHANCED_MEDICAL_DATABASE)) {
       chatbot.addSymptom(key, condition);
   }

2. QUERY SYMPTOMS:
   const cold = ENHANCED_MEDICAL_DATABASE['common_cold'];
   console.log(cold.symptoms); // Shows all symptoms

3. GET MEDICATIONS:
   const medications = cold.medications['en']; // English medications
   medications.forEach(med => console.log(med.name, med.dosage));

4. GET COMPLETE INFO:
   const info = {
       condition: cold.responses['en'],
       symptoms: cold.symptoms,
       medications: cold.medications['en']
   };

5. SEARCH BY SYMPTOM:
   function findConditionBySymptom(symptom) {
       for (const [key, condition] of Object.entries(ENHANCED_MEDICAL_DATABASE)) {
           if (condition.symptoms.primary.includes(symptom)) {
               return { key, ...condition };
           }
       }
   }
   const result = findConditionBySymptom('Increased thirst');

6. LIST ALL MEDICATIONS FOR CONDITION:
   function getMedicationsByCondition(conditionKey, language = 'en') {
       const condition = ENHANCED_MEDICAL_DATABASE[conditionKey];
       return condition.medications[language] || [];
   }
*/
