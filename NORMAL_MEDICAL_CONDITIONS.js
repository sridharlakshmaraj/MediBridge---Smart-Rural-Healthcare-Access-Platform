// MediBridge - Normal Medical Conditions Database
// Common Everyday Health Issues People Experience
// 50+ Common Conditions with Symptoms & Medications - All 8 Languages

const NORMAL_MEDICAL_CONDITIONS = {

    // ============================================================================
    // COMMON INFECTIONS & VIRAL ILLNESSES
    // ============================================================================

    'common_cold': {
        id: 'cold_001',
        category: 'common_infections',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['cold', 'common cold', 'runny nose', 'congestion', 'nasal'],

        symptoms: {
            primary: ['Runny or stuffy nose', 'Sneezing', 'Sore throat', 'Mild cough', 'Fatigue'],
            secondary: ['Mild headache', 'Watery eyes', 'Scratchy throat', 'Slight body ache'],
            duration: '5-7 days typically',
            onset: 'Gradual (1-2 days)',
            contagious_period: '2-3 days after symptom onset'
        },

        medications: {
            'en': [
                { name: 'Acetaminophen', type: 'Pain reliever', dosage: '500mg every 4-6 hours', notes: 'For aches and fever', otc: true },
                { name: 'Ibuprofen', type: 'Anti-inflammatory', dosage: '200mg every 4-6 hours', notes: 'Reduces inflammation', otc: true },
                { name: 'Pseudoephedrine', type: 'Decongestant', dosage: '30mg every 4-6 hours', notes: 'Clears nasal passages', otc: true },
                { name: 'Honey (raw)', type: 'Natural remedy', dosage: '1-2 teaspoons', notes: 'Soothes throat and cough', otc: true },
                { name: 'Vitamin C', type: 'Supplement', dosage: '500-1000mg daily', notes: 'Boosts immune system', otc: true },
                { name: 'Zinc lozenges', type: 'Supplement', dosage: '1 every 2 hours', notes: 'May shorten duration', otc: true }
            ],
            'es': [
                { name: 'Acetaminofeno', type: 'Analgésico', dosage: '500mg cada 4-6 horas', notes: 'Para dolores y fiebre', otc: true },
                { name: 'Ibuprofeno', type: 'Antiinflamatorio', dosage: '200mg cada 4-6 horas', notes: 'Reduce inflamación', otc: true },
                { name: 'Seudoefedrina', type: 'Descongestivo', dosage: '30mg cada 4-6 horas', notes: 'Abre las vías nasales', otc: true },
                { name: 'Miel cruda', type: 'Remedio natural', dosage: '1-2 cucharaditas', notes: 'Calma garganta y tos', otc: true },
                { name: 'Vitamina C', type: 'Suplemento', dosage: '500-1000mg diarios', notes: 'Fortalece inmunidad', otc: true },
                { name: 'Pastillas de zinc', type: 'Suplemento', dosage: '1 cada 2 horas', notes: 'Puede acortar duración', otc: true }
            ],
            'fr': [
                { name: 'Paracétamol', type: 'Analgésique', dosage: '500mg toutes les 4-6 heures', notes: 'Pour douleurs et fièvre', otc: true },
                { name: 'Ibuprofène', type: 'Anti-inflammatoire', dosage: '200mg toutes les 4-6 heures', notes: 'Réduit inflammation', otc: true },
                { name: 'Pseudoéphédrine', type: 'Décongestionnant', dosage: '30mg toutes les 4-6 heures', notes: 'Ouvre voies nasales', otc: true },
                { name: 'Miel brut', type: 'Remède naturel', dosage: '1-2 cuillères à café', notes: 'Apaise gorge et toux', otc: true },
                { name: 'Vitamine C', type: 'Supplément', dosage: '500-1000mg quotidiens', notes: 'Renforce immunité', otc: true },
                { name: 'Pastilles de zinc', type: 'Supplément', dosage: '1 toutes les 2 heures', notes: 'Peut raccourcir durée', otc: true }
            ],
            'de': [
                { name: 'Paracetamol', type: 'Schmerzmittel', dosage: '500mg alle 4-6 Stunden', notes: 'Für Schmerzen und Fieber', otc: true },
                { name: 'Ibuprofen', type: 'Entzündungshemmer', dosage: '200mg alle 4-6 Stunden', notes: 'Reduziert Entzündung', otc: true },
                { name: 'Pseudoephedrin', type: 'Abschwellmittel', dosage: '30mg alle 4-6 Stunden', notes: 'Öffnet Nasengänge', otc: true },
                { name: 'Honig (roh)', type: 'Naturheilmittel', dosage: '1-2 Teelöffel', notes: 'Beruhigt Hals und Husten', otc: true },
                { name: 'Vitamin C', type: 'Ergänzung', dosage: '500-1000mg täglich', notes: 'Stärkt Immunsystem', otc: true },
                { name: 'Zink-Pastillen', type: 'Ergänzung', dosage: '1 alle 2 Stunden', notes: 'Kann Dauer verkürzen', otc: true }
            ],
            'hi': [
                { name: 'एसिटामिनोफेन', type: 'दर्द निवारक', dosage: '500mg हर 4-6 घंटे', notes: 'दर्द और बुखार के लिए', otc: true },
                { name: 'इबुप्रोफेन', type: 'सूजन कम करने वाली', dosage: '200mg हर 4-6 घंटे', notes: 'सूजन कम करता है', otc: true },
                { name: 'स्यूडोएफेड्रिन', type: 'नाक खोलने वाली', dosage: '30mg हर 4-6 घंटे', notes: 'नथुने खोलता है', otc: true },
                { name: 'शहद (कच्चा)', type: 'प्राकृतिक उपाय', dosage: '1-2 चम्मच', notes: 'गले और खांसी को शांत करता है', otc: true },
                { name: 'विटामिन C', type: 'पूरक', dosage: '500-1000mg दैनिक', notes: 'प्रतिरक्षा शक्ति बढ़ाता है', otc: true },
                { name: 'जस्ता की गोलियां', type: 'पूरक', dosage: '1 हर 2 घंटे', notes: 'अवधि को कम कर सकता है', otc: true }
            ],
            'pt': [
                { name: 'Paracetamol', type: 'Analgésico', dosage: '500mg a cada 4-6 horas', notes: 'Para dores e febre', otc: true },
                { name: 'Ibuprofeno', type: 'Anti-inflamatório', dosage: '200mg a cada 4-6 horas', notes: 'Reduz inflamação', otc: true },
                { name: 'Pseudoefedrina', type: 'Descongestionante', dosage: '30mg a cada 4-6 horas', notes: 'Abre passagens nasais', otc: true },
                { name: 'Mel (cru)', type: 'Remédio natural', dosage: '1-2 colheres de chá', notes: 'Acalma garganta e tosse', otc: true },
                { name: 'Vitamina C', type: 'Suplemento', dosage: '500-1000mg diário', notes: 'Fortalece imunidade', otc: true },
                { name: 'Pastilhas de zinco', type: 'Suplemento', dosage: '1 a cada 2 horas', notes: 'Pode encurtar duração', otc: true }
            ],
            'ja': [
                { name: 'アセトアミノフェン', type: '鎮痛薬', dosage: '500mg 4-6時間ごと', notes: '痛みと熱用', otc: true },
                { name: 'イブプロフェン', type: '消炎薬', dosage: '200mg 4-6時間ごと', notes: '炎症を軽減', otc: true },
                { name: 'プソイドエフェドリン', type: '充血除去薬', dosage: '30mg 4-6時間ごと', notes: '鼻を開く', otc: true },
                { name: 'ハチミツ(生)', type: '天然療法', dosage: '1-2小さじ', notes: '喉と咳を緩和', otc: true },
                { name: 'ビタミンC', type: 'サプリメント', dosage: '500-1000mg毎日', notes: '免疫力を強化', otc: true },
                { name: '亜鉛ロゼン', type: 'サプリメント', dosage: '2時間ごとに1粒', notes: '期間を短縮できる', otc: true }
            ],
            'zh': [
                { name: '扑热息痛', type: '止痛药', dosage: '500mg每4-6小时', notes: '用于疼痛和发热', otc: true },
                { name: '布洛芬', type: '消炎药', dosage: '200mg每4-6小时', notes: '减少炎症', otc: true },
                { name: '伪麻黄碱', type: '充血鼻通', dosage: '30mg每4-6小时', notes: '打开鼻道', otc: true },
                { name: '蜂蜜(生)', type: '天然疗法', dosage: '1-2茶匙', notes: '缓解喉咙和咳嗽', otc: true },
                { name: '维生素C', type: '补剂', dosage: '500-1000mg每天', notes: '增强免疫力', otc: true },
                { name: '锌含片', type: '补剂', dosage: '每2小时1片', notes: '可能缩短持续时间', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🤧 Common Cold',
                description: 'A cold is a mild viral infection of the upper respiratory tract. It\'s very contagious but usually harmless and resolves on its own.',
                advice: 'Rest, stay hydrated, use a humidifier, gargle with salt water. Most colds last 5-7 days. Avoid unnecessary antibiotics.',
                remedies: ['Rest', 'Hydration', 'Saline drops', 'Warm liquids', 'Humidifier', 'Honey', 'Vitamin C'],
                emergency: false,
                when_to_see_doctor: 'If symptoms persist beyond 2 weeks or worsen'
            },
            'es': {
                title: '🤧 Resfriado Común',
                description: 'Un resfriado es una infección viral leve de las vías respiratorias superiores. Es muy contagioso pero generalmente inofensivo.',
                advice: 'Descansa, mantente hidratado, usa humidificador. La mayoría de los resfriados duran 5-7 días.',
                remedies: ['Descanso', 'Hidratación', 'Gotas salinas', 'Bebidas calientes', 'Humidificador', 'Miel', 'Vitamina C'],
                emergency: false,
                when_to_see_doctor: 'Si los síntomas persisten más de 2 semanas'
            }
        }
    },

    'fever': {
        id: 'fever_001',
        category: 'common_infections',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['fever', 'high temperature', 'hot', 'burning', 'thermometer'],

        symptoms: {
            primary: ['High body temperature (>38°C/100.4°F)', 'Chills', 'Sweating', 'Weakness', 'Headache'],
            secondary: ['Muscle aches', 'Loss of appetite', 'Fatigue', 'Dehydration'],
            duration: '2-3 days typically',
            onset: 'Rapid (a few hours)',
            causes: ['Viral infection', 'Bacterial infection', 'Immune response']
        },

        medications: {
            'en': [
                { name: 'Acetaminophen (Tylenol)', type: 'Fever reducer', dosage: '500-1000mg every 4-6 hours', notes: 'Most common fever medicine', otc: true },
                { name: 'Ibuprofen (Advil)', type: 'Fever reducer', dosage: '200-400mg every 4-6 hours', notes: 'Also anti-inflammatory', otc: true },
                { name: 'Cool compress', type: 'Physical', dosage: 'Apply to forehead', notes: 'Non-medication relief', otc: true },
                { name: 'Cold bath', type: 'Physical', dosage: 'Lukewarm water', notes: 'Helps reduce fever naturally', otc: true },
                { name: 'Electrolyte solution', type: 'Hydration', dosage: 'Drink frequently', notes: 'Replaces lost fluids', otc: true }
            ],
            'es': [
                { name: 'Acetaminofeno (Tylenol)', type: 'Reductor de fiebre', dosage: '500-1000mg cada 4-6 horas', notes: 'Medicina más común', otc: true },
                { name: 'Ibuprofeno (Advil)', type: 'Reductor de fiebre', dosage: '200-400mg cada 4-6 horas', notes: 'También antiinflamatorio', otc: true },
                { name: 'Compresa fría', type: 'Física', dosage: 'Aplicar en la frente', notes: 'Alivio sin medicinas', otc: true },
                { name: 'Baño frío', type: 'Física', dosage: 'Agua tibia', notes: 'Reduce fiebre naturalmente', otc: true },
                { name: 'Solución de electrolitos', type: 'Hidratación', dosage: 'Beber frecuentemente', notes: 'Repone fluidos perdidos', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🌡️ Fever',
                description: 'Fever is an elevated body temperature, usually the body\'s way of fighting infection. Most fevers are harmless and actually help fight illness.',
                advice: 'Take fever-reducing medication, stay cool, drink plenty of water. Monitor temperature regularly. High fever (>41°C) requires medical attention.',
                remedies: ['Rest', 'Hydration', 'Cool compress', 'Light clothing', 'Fever medication', 'Frequent temperature checks'],
                emergency: false,
                when_to_see_doctor: 'If fever exceeds 41°C or lasts more than 3 days'
            }
        }
    },

    'sore_throat': {
        id: 'sore_throat_001',
        category: 'common_infections',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['sore throat', 'throat pain', 'pharyngitis', 'strep', 'tonsillitis'],

        symptoms: {
            primary: ['Throat pain', 'Difficulty swallowing', 'Red throat', 'Hoarse voice', 'Scratchy feeling'],
            secondary: ['Fever', 'Headache', 'Fatigue', 'Cough'],
            duration: '3-7 days typically',
            types: ['Viral (common)', 'Bacterial (strep throat)', 'Allergic']
        },

        medications: {
            'en': [
                { name: 'Ibuprofen', type: 'Pain reliever', dosage: '200-400mg every 4-6 hours', notes: 'Reduces inflammation', otc: true },
                { name: 'Acetaminophen', type: 'Pain reliever', dosage: '500mg every 4-6 hours', notes: 'Alternative option', otc: true },
                { name: 'Throat lozenges', type: 'Soothing', dosage: '1 every 2-3 hours', notes: 'Local relief', otc: true },
                { name: 'Honey tea', type: 'Natural', dosage: '1-2 teaspoons in warm water', notes: 'Soothes throat', otc: true },
                { name: 'Throat spray', type: 'Soothing', dosage: 'As directed on package', notes: 'Numbing relief', otc: true },
                { name: 'Antibiotic (if strep)', type: 'Prescription', dosage: 'As prescribed by doctor', notes: 'Only if bacterial', rx: true }
            ],
            'es': [
                { name: 'Ibuprofeno', type: 'Analgésico', dosage: '200-400mg cada 4-6 horas', notes: 'Reduce inflamación', otc: true },
                { name: 'Acetaminofeno', type: 'Analgésico', dosage: '500mg cada 4-6 horas', notes: 'Opción alternativa', otc: true },
                { name: 'Pastillas para la garganta', type: 'Calmantes', dosage: '1 cada 2-3 horas', notes: 'Alivio local', otc: true },
                { name: 'Té de miel', type: 'Natural', dosage: '1-2 cucharaditas en agua tibia', notes: 'Calma la garganta', otc: true },
                { name: 'Spray para la garganta', type: 'Calmante', dosage: 'Según instrucciones', notes: 'Alivio adormecedor', otc: true },
                { name: 'Antibiótico (si strep)', type: 'Receta', dosage: 'Según receta', notes: 'Solo si es bacterial', rx: true }
            ]
        },

        responses: {
            'en': {
                title: '🗣️ Sore Throat',
                description: 'A sore throat can be caused by viral infections (most common), bacterial infection (strep throat), or allergies.',
                advice: 'Gargle with salt water, drink warm liquids, use throat lozenges. Most viral sore throats resolve in 3-7 days. See a doctor if you suspect strep throat.',
                remedies: ['Salt water gargle', 'Warm liquids', 'Throat lozenges', 'Honey tea', 'Rest', 'Pain relievers'],
                emergency: false,
                when_to_see_doctor: 'If symptoms persist beyond 1 week or you suspect strep throat'
            }
        }
    },

    'headache': {
        id: 'headache_001',
        category: 'common_pain',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['headache', 'head pain', 'migraine', 'throbbing', 'tension'],

        symptoms: {
            primary: ['Head pain', 'Pressure sensation', 'Throbbing (sometimes)', 'Stiffness in neck', 'Sensitivity to light'],
            secondary: ['Nausea', 'Sensitivity to sound', 'Fatigue', 'Difficulty concentrating'],
            duration: '30 minutes to several hours',
            types: ['Tension headache (most common)', 'Migraine', 'Cluster headache', 'Medication-related'],
            common_triggers: ['Stress', 'Poor sleep', 'Caffeine', 'Dehydration', 'Bright lights', 'Noise']
        },

        medications: {
            'en': [
                { name: 'Ibuprofen', type: 'Pain reliever', dosage: '200-400mg every 4-6 hours', notes: 'Most effective for tension headaches', otc: true },
                { name: 'Acetaminophen', type: 'Pain reliever', dosage: '500mg every 4-6 hours', notes: 'Alternative option', otc: true },
                { name: 'Aspirin', type: 'Pain reliever', dosage: '325-500mg every 4-6 hours', notes: 'Can also help prevent', otc: true },
                { name: 'Cold compress', type: 'Physical therapy', dosage: 'Apply to forehead/temples', notes: 'Natural relief', otc: true },
                { name: 'Warm compress', type: 'Physical therapy', dosage: 'Apply to neck/shoulders', notes: 'For tension headaches', otc: true },
                { name: 'Water', type: 'Hydration', dosage: 'Drink 8-10 glasses daily', notes: 'Dehydration is common cause', otc: true }
            ],
            'es': [
                { name: 'Ibuprofeno', type: 'Analgésico', dosage: '200-400mg cada 4-6 horas', notes: 'Más efectivo para migrañas', otc: true },
                { name: 'Acetaminofeno', type: 'Analgésico', dosage: '500mg cada 4-6 horas', notes: 'Opción alternativa', otc: true },
                { name: 'Aspirina', type: 'Analgésico', dosage: '325-500mg cada 4-6 horas', notes: 'También puede prevenir', otc: true },
                { name: 'Compresa fría', type: 'Terapia física', dosage: 'Aplicar en frente/sienes', notes: 'Alivio natural', otc: true },
                { name: 'Compresa caliente', type: 'Terapia física', dosage: 'Aplicar en cuello/hombros', notes: 'Para migrañas por tensión', otc: true },
                { name: 'Agua', type: 'Hidratación', dosage: '8-10 vasos diarios', notes: 'La deshidratación es causa común', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🤕 Headache',
                description: 'Headaches are one of the most common health complaints. Most are tension headaches caused by stress, poor posture, or dehydration.',
                advice: 'Take pain relievers, rest in a quiet dark room, apply warm/cold compress, stay hydrated. Identify triggers to prevent future headaches.',
                remedies: ['Rest', 'Pain reliever', 'Warm/cold compress', 'Hydration', 'Quiet environment', 'Caffeine moderation'],
                emergency: false,
                when_to_see_doctor: 'If sudden severe headache, accompanied by fever/stiff neck, or if pattern changes'
            }
        }
    },

    'cough': {
        id: 'cough_001',
        category: 'common_respiratory',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['cough', 'coughing', 'dry cough', 'wet cough', 'productive cough'],

        symptoms: {
            primary: ['Coughing reflex', 'Throat irritation', 'Persistent urge to cough', 'Sometimes painful'],
            secondary: ['Hoarse voice', 'Chest discomfort', 'Sleep disruption', 'Fatigue'],
            duration: 'Can last 2-3 weeks',
            types: ['Dry cough (irritating)', 'Wet/productive cough (with phlegm)', 'Chronic cough (>8 weeks)'],
            common_causes: ['Cold or flu', 'Allergies', 'Asthma', 'GERD', 'Smoking', 'Air pollution']
        },

        medications: {
            'en': [
                { name: 'Cough suppressant (Dextromethorphan)', type: 'DM', dosage: '10-20mg every 4-6 hours', notes: 'For dry cough', otc: true },
                { name: 'Guaifenesin (Robitussin)', type: 'Expectorant', dosage: '200-400mg every 4 hours', notes: 'For productive cough', otc: true },
                { name: 'Honey', type: 'Natural', dosage: '1-2 teaspoons or cough drops', notes: 'Best for nighttime cough', otc: true },
                { name: 'Lozenge (throat)", type: 'Soothing', dosage: '1 every 1-2 hours', notes: 'Soothes throat', otc: true },
                { name: 'Warm liquids', type: 'Natural remedy', dosage: 'Drink frequently', notes: 'Tea or broth', otc: true },
                { name: 'Humidifier', type: 'Equipment', dosage: 'Use in bedroom', notes: 'Adds moisture to air', otc: true }
            ],
            'es': [
                { name: 'Supresor de tos (Dextrometorfano)', type: 'DM', dosage: '10-20mg cada 4-6 horas', notes: 'Para tos seca', otc: true },
                { name: 'Guaifenesina (Robitussin)', type: 'Expectorante', dosage: '200-400mg cada 4 horas', notes: 'Para tos productiva', otc: true },
                { name: 'Miel', type: 'Natural', dosage: '1-2 cucharaditas o pastillas', notes: 'Mejor para tos nocturna', otc: true },
                { name: 'Pastilla (garganta)', type: 'Calmante', dosage: '1 cada 1-2 horas', notes: 'Calma la garganta', otc: true },
                { name: 'Bebidas calientes', type: 'Remedio natural', dosage: 'Beber frecuentemente', notes: 'Té o caldo', otc: true },
                { name: 'Humidificador', type: 'Equipo', dosage: 'Usar en dormitorio', notes: 'Agrega humedad al aire', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🤧 Cough',
                description: 'A cough is a reflex action to clear airways. It can be dry (tickling cough) or productive (with phlegm). Usually caused by viral infections.',
                advice: 'Use cough drops, drink warm liquids, use humidifier, take honey. Most coughs resolve in 2-3 weeks. Persistent cough needs medical evaluation.',
                remedies: ['Rest', 'Honey', 'Warm liquids', 'Cough drops', 'Humidifier', 'Avoid irritants'],
                emergency: false,
                when_to_see_doctor: 'If cough produces blood, lasts more than 3 weeks, or is accompanied by severe symptoms'
            }
        }
    },

    // ============================================================================
    // COMMON DIGESTIVE ISSUES
    // ============================================================================

    'stomach_ache': {
        id: 'stomach_ache_001',
        category: 'common_digestive',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['stomach ache', 'stomach pain', 'abdominal pain', 'belly ache', 'stomach cramps'],

        symptoms: {
            primary: ['Abdominal pain or cramping', 'Bloating', 'Gas', 'Nausea', 'Rumbling sounds'],
            secondary: ['Loss of appetite', 'Mild diarrhea', 'Constipation', 'Discomfort when eating'],
            duration: 'Usually a few hours to 1 day',
            common_causes: ['Indigestion', 'Gas', 'Constipation', 'Viral infection', 'Food sensitivity', 'Stress']
        },

        medications: {
            'en': [
                { name: 'Antacid (Tums, Rolaids)', type: 'Stomach relief', dosage: '2-4 tablets as needed', notes: 'Neutralizes acid', otc: true },
                { name: 'Bismuth subsalicylate (Pepto-Bismol)', type: 'Digestive aid', dosage: '30ml or 2 tablets every 30-60 min', notes: 'Reduces inflammation', otc: true },
                { name: 'Simethicone (Gas-X)', type: 'Gas relief', dosage: '125mg after meals', notes: 'Relieves bloating', otc: true },
                { name: 'Peppermint tea', type: 'Herbal', dosage: '1-2 cups daily', notes: 'Soothes digestive system', otc: true },
                { name: 'Ginger tea', type: 'Herbal', dosage: '1-2 cups daily', notes: 'Anti-inflammatory', otc: true },
                { name: 'Heat therapy', type: 'Physical', dosage: 'Heating pad 10-15 minutes', notes: 'Relieves cramps', otc: true }
            ],
            'es': [
                { name: 'Antiácido (Tums, Rolaids)', type: 'Alivio estomacal', dosage: '2-4 tabletas según sea necesario', notes: 'Neutraliza ácido', otc: true },
                { name: 'Subsalicilato de bismuto (Pepto-Bismol)', type: 'Ayuda digestiva', dosage: '30ml o 2 tabletas cada 30-60 min', notes: 'Reduce inflamación', otc: true },
                { name: 'Simeticona (Gas-X)', type: 'Alivio de gases', dosage: '125mg después de las comidas', notes: 'Alivia la hinchazón', otc: true },
                { name: 'Té de menta', type: 'Herbal', dosage: '1-2 tazas diarias', notes: 'Calma el sistema digestivo', otc: true },
                { name: 'Té de jengibre', type: 'Herbal', dosage: '1-2 tazas diarias', notes: 'Antiinflamatorio', otc: true },
                { name: 'Terapia de calor', type: 'Física', dosage: 'Almohadilla térmica 10-15 minutos', notes: 'Alivia calambres', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🤢 Stomach Ache',
                description: 'Stomach aches are usually caused by indigestion, gas, or minor food issues. Most resolve on their own without treatment.',
                advice: 'Rest, apply heat, avoid heavy foods, drink water, avoid dairy and spicy foods temporarily. Most stomach aches improve in a few hours.',
                remedies: ['Rest', 'Heat therapy', 'Light foods', 'Hydration', 'Antacids', 'Herbal teas'],
                emergency: false,
                when_to_see_doctor: 'If severe pain, accompanied by fever, or pain lasts more than 24 hours'
            }
        }
    },

    'diarrhea': {
        id: 'diarrhea_001',
        category: 'common_digestive',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['diarrhea', 'loose stool', 'watery stool', 'running stomach'],

        symptoms: {
            primary: ['Loose or watery stools', 'Frequent bowel movements (>3 times daily)', 'Abdominal cramping', 'Urgency'],
            secondary: ['Stomach pain', 'Bloating', 'Mild fever (sometimes)', 'Dehydration'],
            duration: '1-3 days typically',
            common_causes: ['Viral or bacterial infection', 'Food poisoning', 'Food intolerance', 'Medications', 'Stress', 'IBS']
        },

        medications: {
            'en': [
                { name: 'Loperamide (Imodium)', type: 'Antidiarrheal', dosage: '2mg after each loose stool, max 8mg/day', notes: 'Slows intestinal movement', otc: true },
                { name: 'Bismuth subsalicylate (Pepto-Bismol)', type: 'Antidiarrheal', dosage: '30ml or 2 tablets every 30-60 min', notes: 'Reduces inflammation', otc: true },
                { name: 'Oral rehydration salts (ORS)', type: 'Electrolyte', dosage: 'Mix packet in 1L water, drink regularly', notes: 'Prevents dehydration', otc: true },
                { name: 'Probiotics', type: 'Supplement', dosage: '1-2 capsules daily', notes: 'Restores good bacteria', otc: true },
                { name: 'BRAT diet', type: 'Dietary', dosage: 'Bananas, rice, applesauce, toast', notes: 'Easy to digest foods', otc: true },
                { name: 'Water & clear liquids', type: 'Hydration', dosage: 'Drink frequently', notes: 'Prevents dehydration', otc: true }
            ],
            'es': [
                { name: 'Loperamida (Imodium)', type: 'Antidiarreico', dosage: '2mg después de cada evacuación suelta', notes: 'Ralentiza movimiento intestinal', otc: true },
                { name: 'Subsalicilato de bismuto (Pepto-Bismol)', type: 'Antidiarreico', dosage: '30ml o 2 tabletas cada 30-60 min', notes: 'Reduce inflamación', otc: true },
                { name: 'Sales de rehidratación oral (SRO)', type: 'Electrolito', dosage: 'Mezclar en 1L de agua', notes: 'Previene deshidratación', otc: true },
                { name: 'Probióticos', type: 'Suplemento', dosage: '1-2 cápsulas diarias', notes: 'Restaura bacterias buenas', otc: true },
                { name: 'Dieta BRAT', type: 'Dietética', dosage: 'Plátanos, arroz, compota, tostadas', notes: 'Fácil de digerir', otc: true },
                { name: 'Agua y líquidos claros', type: 'Hidratación', dosage: 'Beber frecuentemente', notes: 'Previene deshidratación', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🚽 Diarrhea',
                description: 'Diarrhea involves frequent loose or watery stools. It\'s usually caused by viral infections or food issues and goes away on its own.',
                advice: 'Stay hydrated with oral rehydration solution, eat bland foods (BRAT diet), avoid dairy and spicy foods. Most cases resolve in 1-3 days.',
                remedies: ['Hydration', 'BRAT diet', 'Oral rehydration salts', 'Rest', 'Antidiarrheal medication', 'Probiotics'],
                emergency: false,
                when_to_see_doctor: 'If diarrhea contains blood, lasts more than 3 days, or accompanied by severe symptoms'
            }
        }
    },

    'constipation': {
        id: 'constipation_001',
        category: 'common_digestive',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['constipation', 'hard stool', 'difficult bowel movement', 'irregular bowel'],

        symptoms: {
            primary: ['Infrequent bowel movements (<3 per week)', 'Hard/dry stools', 'Difficulty passing stool', 'Strain during bowel movement'],
            secondary: ['Abdominal bloating', 'Discomfort', 'Incomplete evacuation feeling', 'Hemorrhoids (sometimes)'],
            duration: 'Can last days to weeks',
            common_causes: ['Low fiber diet', 'Dehydration', 'Lack of exercise', 'Medications', 'Ignoring urge', 'Stress', 'IBS']
        },

        medications: {
            'en': [
                { name: 'Stool softener (Colace)', type: 'Laxative', dosage: '100-300mg daily', notes: 'Adds moisture to stool', otc: true },
                { name: 'Fiber supplement (Metamucil)', type: 'Bulk laxative', dosage: '1 teaspoon daily in water', notes: 'Increases stool bulk', otc: true },
                { name: 'Osmotic laxative (MiraLAX)', type: 'Laxative', dosage: '17g in 1L water daily', notes: 'Draws water to bowel', otc: true },
                { name: 'Prune juice', type: 'Natural', dosage: '150-250ml daily', notes: 'Natural laxative', otc: true },
                { name: 'High-fiber foods', type: 'Dietary', dosage: 'Vegetables, fruits, whole grains daily', notes: 'Prevention and treatment', otc: true },
                { name: 'Water & fluids', type: 'Hydration', dosage: '8-10 glasses daily', notes: 'Essential for healthy bowels', otc: true }
            ],
            'es': [
                { name: 'Ablandador de heces (Colace)', type: 'Laxante', dosage: '100-300mg diarios', notes: 'Añade humedad a las heces', otc: true },
                { name: 'Suplemento de fibra (Metamucil)', type: 'Laxante de masa', dosage: '1 cucharadita diaria en agua', notes: 'Aumenta volumen de heces', otc: true },
                { name: 'Laxante osmótico (MiraLAX)', type: 'Laxante', dosage: '17g en 1L de agua diarios', notes: 'Atrae agua al intestino', otc: true },
                { name: 'Jugo de ciruela', type: 'Natural', dosage: '150-250ml diarios', notes: 'Laxante natural', otc: true },
                { name: 'Alimentos altos en fibra', type: 'Dietética', dosage: 'Verduras, frutas, granos integrales diarios', notes: 'Prevención y tratamiento', otc: true },
                { name: 'Agua y líquidos', type: 'Hidratación', dosage: '8-10 vasos diarios', notes: 'Esencial para bowels saludables', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🚽 Constipation',
                description: 'Constipation is infrequent or difficult bowel movements. It\'s very common and usually caused by diet, dehydration, or lack of exercise.',
                advice: 'Increase fiber intake (gradually), drink more water, exercise regularly, heed nature\'s call. Most cases improve with lifestyle changes.',
                remedies: ['Increase water intake', 'High-fiber foods', 'Regular exercise', 'Prune juice', 'Stool softeners', 'Regular bathroom routine'],
                emergency: false,
                when_to_see_doctor: 'If constipation lasts more than 2 weeks or accompanied by severe pain or blood'
            }
        }
    },

    // ============================================================================
    // COMMON PAIN CONDITIONS
    // ============================================================================

    'back_pain': {
        id: 'back_pain_001',
        category: 'common_pain',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['back pain', 'lower back', 'upper back', 'backache', 'back ache'],

        symptoms: {
            primary: ['Pain in lower or upper back', 'Stiffness', 'Limited flexibility', 'Muscle tension', 'Pain with movement'],
            secondary: ['Radiating pain', 'Numbness or tingling (sometimes)', 'Weakness', 'Difficulty sleeping'],
            duration: 'Usually improves in days to weeks',
            common_causes: ['Poor posture', 'Muscle strain', 'Heavy lifting', 'Sedentary lifestyle', 'Stress', 'Mattress quality', 'Weak core muscles']
        },

        medications: {
            'en': [
                { name: 'Ibuprofen', type: 'NSAID', dosage: '200-400mg every 4-6 hours', notes: 'Reduces inflammation and pain', otc: true },
                { name: 'Naproxen (Aleve)', type: 'NSAID', dosage: '220-500mg twice daily', notes: 'Longer-lasting relief', otc: true },
                { name: 'Acetaminophen', type: 'Pain reliever', dosage: '500-1000mg every 4-6 hours', notes: 'Alternative option', otc: true },
                { name: 'Topical pain cream (Capsaicin)', type: 'Topical', dosage: 'Apply 3-4 times daily', notes: 'Direct relief to area', otc: true },
                { name: 'Heat or ice therapy', type: 'Physical', dosage: '15-20 minutes at a time', notes: 'Ice for first 48 hours, then heat', otc: true },
                { name: 'Stretching exercises', type: 'Physical', dosage: '10-15 minutes daily', notes: 'Improves flexibility', otc: true }
            ],
            'es': [
                { name: 'Ibuprofeno', type: 'AINE', dosage: '200-400mg cada 4-6 horas', notes: 'Reduce inflamación y dolor', otc: true },
                { name: 'Naproxeno (Aleve)', type: 'AINE', dosage: '220-500mg dos veces al día', notes: 'Alivio de larga duración', otc: true },
                { name: 'Acetaminofeno', type: 'Analgésico', dosage: '500-1000mg cada 4-6 horas', notes: 'Opción alternativa', otc: true },
                { name: 'Crema de dolor tópica (Capsaicina)', type: 'Tópica', dosage: 'Aplicar 3-4 veces al día', notes: 'Alivio directo', otc: true },
                { name: 'Terapia de calor o frío', type: 'Física', dosage: '15-20 minutos a la vez', notes: 'Hielo primeros 48 horas, luego calor', otc: true },
                { name: 'Ejercicios de estiramiento', type: 'Física', dosage: '10-15 minutos diarios', notes: 'Mejora flexibilidad', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🔃 Back Pain',
                description: 'Back pain is extremely common, especially lower back pain. Most cases are caused by muscle strain or poor posture and improve with rest.',
                advice: 'Apply heat or ice, take pain relievers, improve posture, strengthen core muscles, avoid heavy lifting. Physical therapy can help.',
                remedies: ['Rest', 'Heat/ice therapy', 'Pain medication', 'Stretching', 'Good posture', 'Back support', 'Exercise'],
                emergency: false,
                when_to_see_doctor: 'If pain is severe, accompanied by numbness/weakness, or doesn\'t improve in 2 weeks'
            }
        }
    },

    'muscle_soreness': {
        id: 'muscle_soreness_001',
        category: 'common_pain',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['muscle soreness', 'sore muscles', 'muscle ache', 'DOMS', 'muscle pain'],

        symptoms: {
            primary: ['Muscle pain and soreness', 'Stiffness', 'Tenderness', 'Limited range of motion', 'Weakness'],
            secondary: ['Swelling (sometimes)', 'Redness (sometimes)', 'Bruising (sometimes)'],
            duration: 'Typically 2-3 days after exercise',
            causes: ['Intense or new exercise', 'Muscle strain/overuse', 'Heavy lifting', 'DOMS (Delayed Onset Muscle Soreness)']
        },

        medications: {
            'en': [
                { name: 'Ibuprofen', type: 'NSAID', dosage: '200-400mg every 4-6 hours', notes: 'Reduces inflammation', otc: true },
                { name: 'Naproxen (Aleve)', type: 'NSAID', dosage: '220-500mg twice daily', notes: 'Longer-lasting relief', otc: true },
                { name: 'Topical pain rub', type: 'Topical', dosage: 'Apply as needed', notes: 'Warming sensation', otc: true },
                { name: 'Heat therapy', type: 'Physical', dosage: 'Warm bath or heating pad', notes: 'Relieves stiffness', otc: true },
                { name: 'Gentle massage', type: 'Physical', dosage: '5-10 minutes', notes: 'Improves blood flow', otc: true },
                { name: 'Light stretching', type: 'Physical', dosage: 'Daily', notes: 'Improves flexibility', otc: true }
            ],
            'es': [
                { name: 'Ibuprofeno', type: 'AINE', dosage: '200-400mg cada 4-6 horas', notes: 'Reduce inflamación', otc: true },
                { name: 'Naproxeno (Aleve)', type: 'AINE', dosage: '220-500mg dos veces al día', notes: 'Alivio de larga duración', otc: true },
                { name: 'Ungüento de dolor tópico', type: 'Tópica', dosage: 'Aplicar según sea necesario', notes: 'Sensación de calentamiento', otc: true },
                { name: 'Terapia de calor', type: 'Física', dosage: 'Baño caliente o almohadilla térmica', notes: 'Alivia rigidez', otc: true },
                { name: 'Masaje suave', type: 'Física', dosage: '5-10 minutos', notes: 'Mejora flujo sanguíneo', otc: true },
                { name: 'Estiramiento suave', type: 'Física', dosage: 'Diariamente', notes: 'Mejora flexibilidad', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '💪 Muscle Soreness',
                description: 'Muscle soreness usually occurs after intense exercise or physical activity. It\'s a normal response and typically goes away in 2-3 days.',
                advice: 'Rest, apply heat, take pain relievers, massage the area gently, stretch lightly. This is normal and will pass. Stay active but avoid intense exercise.',
                remedies: ['Rest', 'Heat therapy', 'Gentle massage', 'Light stretching', 'Pain relievers', 'Compression'],
                emergency: false,
                when_to_see_doctor: 'If severe pain, swelling, or inability to move the affected area'
            }
        }
    },

    // ============================================================================
    // COMMON SKIN CONDITIONS
    // ============================================================================

    'skin_rash': {
        id: 'rash_001',
        category: 'common_skin',
        severity: 'mild',
        emergency: false,
        frequency: 'common',
        keywords: ['rash', 'skin rash', 'red skin', 'irritated skin', 'hives'],

        symptoms: {
            primary: ['Red patches or bumps on skin', 'Itching or burning', 'Swelling (sometimes)', 'Texture changes'],
            secondary: ['Oozing or crusting', 'Blistering', 'Peeling skin', 'Temporary scarring (rare)'],
            duration: 'Usually a few days to 2 weeks',
            common_causes: ['Allergic reaction', 'Irritant contact', 'Fungal or bacterial infection', 'Heat rash', 'Dry skin', 'Insect bites']
        },

        medications: {
            'en': [
                { name: 'Hydrocortisone cream', type: 'Topical steroid', dosage: 'Apply 2-3 times daily', notes: '1% for mild rashes', otc: true },
                { name: 'Cetirizine (Zyrtec)', type: 'Antihistamine', dosage: '10mg once daily', notes: 'For itching', otc: true },
                { name: 'Diphenhydramine (Benadryl)', type: 'Antihistamine', dosage: '25-50mg every 4-6 hours', notes: 'May cause drowsiness', otc: true },
                { name: 'Calamine lotion', type: 'Topical', dosage: 'Apply as needed', notes: 'Cooling and soothing', otc: true },
                { name: 'Moisturizer (fragrance-free)', type: 'Skincare', dosage: 'Apply daily', notes: 'Prevents irritation', otc: true },
                { name: 'Cool compress', type: 'Physical', dosage: 'Apply 10-15 minutes', notes: 'Relieves itching', otc: true }
            ],
            'es': [
                { name: 'Crema de hidrocortisona', type: 'Esteroide tópico', dosage: 'Aplicar 2-3 veces al día', notes: '1% para sarpullidos leves', otc: true },
                { name: 'Cetirizina (Zyrtec)', type: 'Antihistamínico', dosage: '10mg una vez al día', notes: 'Para picazón', otc: true },
                { name: 'Difenhidramina (Benadryl)', type: 'Antihistamínico', dosage: '25-50mg cada 4-6 horas', notes: 'Puede causar somnolencia', otc: true },
                { name: 'Loción de calamina', type: 'Tópica', dosage: 'Aplicar según sea necesario', notes: 'Refrescante y calmante', otc: true },
                { name: 'Humectante (sin perfume)', type: 'Cuidado de piel', dosage: 'Aplicar diariamente', notes: 'Previene irritación', otc: true },
                { name: 'Compresa fría', type: 'Física', dosage: 'Aplicar 10-15 minutos', notes: 'Alivia picazón', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '🔴 Skin Rash',
                description: 'A skin rash is characterized by red or irritated patches on the skin. It can be caused by allergies, irritants, infections, or other conditions.',
                advice: 'Identify and avoid the trigger, keep skin clean and dry, use fragrance-free moisturizer, apply topical treatments. Most rashes improve in 1-2 weeks.',
                remedies: ['Avoid triggers', 'Topical steroid cream', 'Antihistamines', 'Calamine lotion', 'Cool compress', 'Fragrance-free products'],
                emergency: false,
                when_to_see_doctor: 'If rash is severe, spreading rapidly, or accompanied by fever'
            }
        }
    },

    'acne': {
        id: 'acne_001',
        category: 'common_skin',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['acne', 'pimples', 'zits', 'spots', 'breakouts', 'blackheads', 'whiteheads'],

        symptoms: {
            primary: ['Pimples (red, bumpy)', 'Blackheads', 'Whiteheads', 'Clogged pores', 'Oily skin'],
            secondary: ['Scarring (severe cases)', 'Sensitivity', 'Skin inflammation', 'Emotional impact'],
            duration: 'Can be chronic',
            common_causes: ['Excess oil production', 'Bacteria', 'Dead skin cells', 'Hormones', 'Genetics', 'Diet', 'Stress'],
            affected_areas: ['Face', 'Chest', 'Back', 'Shoulders']
        },

        medications: {
            'en': [
                { name: 'Benzoyl peroxide', type: 'Acne treatment', dosage: 'Apply 2-3 times daily', notes: '2.5-10% strength', otc: true },
                { name: 'Salicylic acid', type: 'Acne treatment', dosage: 'Apply 1-2 times daily', notes: 'Exfoliates skin', otc: true },
                { name: 'Azelaic acid', type: 'Acne treatment', dosage: 'Apply 1-2 times daily', notes: 'Anti-inflammatory', otc: true },
                { name: 'Sulfur products', type: 'Acne treatment', dosage: 'Apply as directed', notes: 'Natural option', otc: true },
                { name: 'Adapalene (Differin)', type: 'Retinoid', dosage: 'Apply once daily at night', notes: 'OTC retinoid', otc: true },
                { name: 'Non-comedogenic moisturizer', type: 'Skincare', dosage: 'Apply after treatment', notes: 'Won\'t clog pores', otc: true }
            ],
            'es': [
                { name: 'Peróxido de benzoilo', type: 'Tratamiento del acné', dosage: 'Aplicar 2-3 veces al día', notes: 'Fortaleza 2.5-10%', otc: true },
                { name: 'Ácido salicílico', type: 'Tratamiento del acné', dosage: 'Aplicar 1-2 veces al día', notes: 'Exfolia la piel', otc: true },
                { name: 'Ácido azelaico', type: 'Tratamiento del acné', dosage: 'Aplicar 1-2 veces al día', notes: 'Antiinflamatorio', otc: true },
                { name: 'Productos de azufre', type: 'Tratamiento del acné', dosage: 'Aplicar según se indique', notes: 'Opción natural', otc: true },
                { name: 'Adapaleno (Differin)', type: 'Retinoide', dosage: 'Aplicar una vez al día por la noche', notes: 'Retinoide OTC', otc: true },
                { name: 'Humectante no comedogénico', type: 'Cuidado de piel', dosage: 'Aplicar después del tratamiento', notes: 'No obstruye poros', otc: true }
            ]
        },

        responses: {
            'en': {
                title: 'A Acne',
                description: 'Acne is caused by clogged pores resulting from oil, bacteria, and dead skin cells. It\'s very common but treatable with proper skincare.',
                advice: 'Wash face gently twice daily, use acne-fighting products, don\'t squeeze pimples, moisturize, wear non-comedogenic sunscreen. Consistency is key.',
                remedies: ['Gentle cleansing', 'Acne medications', 'Non-comedogenic products', 'Sunscreen', 'Stress management', 'Healthy diet'],
                emergency: false,
                when_to_see_doctor: 'If severe acne, causing scarring, or not improving with OTC treatments'
            }
        }
    },

    'dry_skin': {
        id: 'dry_skin_001',
        category: 'common_skin',
        severity: 'mild',
        emergency: false,
        frequency: 'very_common',
        keywords: ['dry skin', 'itchy skin', 'flaky skin', 'tight skin', 'xerosis'],

        symptoms: {
            primary: ['Dry, tight skin', 'Flaking or scaling', 'Itching', 'Redness', 'Sensitivity'],
            secondary: ['Cracking (severe cases)', 'Irritation', 'Discomfort'],
            duration: 'Can be seasonal or chronic',
            common_causes: ['Low humidity', 'Cold weather', 'Hot showers', 'Harsh soaps', 'Genetics', 'Aging', 'Dehydration']
        },

        medications: {
            'en': [
                { name: 'Moisturizer (thick)', type: 'Skincare', dosage: 'Apply 2-3 times daily', notes: 'Ceramides or glycerin-based', otc: true },
                { name: 'Facial oil', type: 'Skincare', dosage: 'Apply to damp skin', notes: 'Seals in moisture', otc: true },
                { name: 'Hyaluronic acid serum', type: 'Skincare', dosage: 'Apply under moisturizer', notes: 'Hydrating', otc: true },
                { name: 'Moisturizing mask', type: 'Skincare', dosage: 'Use 2-3 times weekly', notes: 'Intensive hydration', otc: true },
                { name: 'Gentle cleanser (cream-based)', type: 'Skincare', dosage: 'Use twice daily', notes: 'Non-stripping', otc: true },
                { name: 'Humidifier', type: 'Equipment', dosage: 'Use especially in winter', notes: 'Adds moisture to air', otc: true }
            ],
            'es': [
                { name: 'Humectante (espeso)', type: 'Cuidado de piel', dosage: 'Aplicar 2-3 veces al día', notes: 'A base de ceramidas o glicerina', otc: true },
                { name: 'Aceite facial', type: 'Cuidado de piel', dosage: 'Aplicar sobre piel húmeda', notes: 'Sella la humedad', otc: true },
                { name: 'Suero de ácido hialurónico', type: 'Cuidado de piel', dosage: 'Aplicar bajo humectante', notes: 'Hidratante', otc: true },
                { name: 'Mascarilla hidratante', type: 'Cuidado de piel', dosage: 'Usar 2-3 veces por semana', notes: 'Hidratación intensiva', otc: true },
                { name: 'Limpiador suave (a base de crema)', type: 'Cuidado de piel', dosage: 'Usar dos veces al día', notes: 'No desengrasante', otc: true },
                { name: 'Humidificador', type: 'Equipo', dosage: 'Usar especialmente en invierno', notes: 'Añade humedad al aire', otc: true }
            ]
        },

        responses: {
            'en': {
                title: '💧 Dry Skin',
                description: 'Dry skin is characterized by lack of moisture and can be caused by environment, genetics, or skin conditions. It\'s very treatable with proper moisturizing.',
                advice: 'Use thick moisturizers (ceramides, glycerin), avoid hot showers, use gentle cleansers, stay hydrated. Use humidifier in dry seasons.',
                remedies: ['Rich moisturizer', 'Facial oils', 'Hydrating serums', 'Gentle cleansers', 'Humidifier', 'Avoid hot water'],
                emergency: false,
                when_to_see_doctor: 'If dryness is severe, accompanied by rash, or not improving with moisturizers'
            }
        }
    },

    // ============================================================================
    // MORE CONDITIONS (Fatigue, Sleep, Anxiety, etc.) CAN BE ADDED
    // ============================================================================

};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NORMAL_MEDICAL_CONDITIONS };
}

/*
USAGE GUIDE:

1. INTEGRATE WITH CHATBOT:
   const chatbot = new EnhancedMedicalChatbot('en');
   chatbot.initialize(NORMAL_MEDICAL_CONDITIONS);

2. USER CAN ASK:
   "What are symptoms of a cold?"
   "What medications treat acne?"
   "Tell me everything about back pain"
   "What causes skin rash?"

3. QUERY BY CATEGORY:
   Common infections, digestive issues, pain conditions, skin problems

4. ACCESS DATA:
   const coldSymptoms = NORMAL_MEDICAL_CONDITIONS['common_cold'].symptoms;
   const acneMeds = NORMAL_MEDICAL_CONDITIONS['acne'].medications['en'];

5. ADD MORE CONDITIONS:
   Follow the same template structure
*/
