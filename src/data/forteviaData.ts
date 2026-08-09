import { ServiceItem, ProductItem, TrainingCourse, ProjectItem } from '../types';

export const COMPANY_INFO = {
  name: 'FORTEVIA ENGENHARIA',
  taglinePt: 'Excelência em Engenharia. Eficiência em Procurement. Logística Sem Fronteiras.',
  taglineEn: 'Engineering Excellence. Procurement Efficiency. Logistics Without Borders.',
  location: 'Soyo, Rua Direita da Base do Kwanda, Angola',
  phone: '+244 936 611 252',
  phoneClean: '244936611252',
  email: 'geral@forteviaengenharia.com',
  website: 'www.forteviaengenharia.com',
  ownership: 'Empresa 100% Angolana',
  headquarters: 'Soyo, Angola',
  whatsappMessage: 'Olá! Gostaria de obter mais informações sobre os serviços e produtos da Fortevia Engenharia.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bolt-torquing',
    title: 'Bolt Torquing & Tensioning',
    shortDesc: 'Serviços especializados de aperto e tensionamento hidráulico de parafusos para alta pressão e juntas críticas.',
    fullDesc: 'Executamos operações de torqueamento e tensionamento de alta precisão em flanges, vasos de pressão, permutadores de calor e tubagens estruturais. Nossas equipas certificadas e equipamentos calibrados garantem a integridade estanque de todas as ligações aparafusadas.',
    category: 'hydraulic',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Tensionamento hidráulico simultâneo de múltiplos parafusos',
      'Torque controlado por chave hidráulica de alta capacidade',
      'Inspecção e calibração de superfícies de vedação e flanges',
      'Certificados de torque e registo detalhado de aperto'
    ],
    equipmentList: ['Torque Wrenches Hidráulicas', 'Bombas de Alta Pressão', 'Tensores Hidráulicos de Parafusos', 'Chaves Pneumáticas de Precisão']
  },
  {
    id: 'equipment-rental',
    title: 'Aluguer de Equipamentos Hidráulicos',
    shortDesc: 'Aluguer de ferramentas hidráulicas industriais e unidades de força prontas para mobilização imediata.',
    fullDesc: 'Disponibilizamos uma frota moderna e inspecionada de ferramentas e sistemas hidráulicos para operações onshore e offshore. Equipamentos mantidos sob rigorosos padrões internacionais.',
    category: 'hydraulic',
    iconName: 'Tool',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Equipamentos com certificação e testes em dia',
      'Mobilização rápida para a Base do Kwanda e plataformas offshore',
      'Assistência técnica 24/7 no local',
      'Planos de aluguer de curto, médio e longo prazo'
    ],
    equipmentList: ['Hydraulic Jacks (Macacos Hidráulicos de alta tonelagem)', 'Hydraulic Pumps (Bombas Eléctricas, Manuais e Pneumáticas)', 'HPUs (Unidades de Potência Hidráulica)', 'Torque Wrenches (Chaves de Torque Cónicas e Quadradas)']
  },
  {
    id: 'manpower-supply',
    title: 'Fornecimento de Mão de Obra Especializada',
    shortDesc: 'Disponibilização de profissionais técnicos e engenheiros altamente qualificados para o sector industrial e Oil & Gas.',
    fullDesc: 'Fornecemos quadros técnicos com vasta experiência comprovada em ambientes de alto risco, assegurando o cumprimento integral dos padrões HSE e operacionais dos clientes.',
    category: 'manpower',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Riggers certificados para rigging pesado',
      'NDT Technicians (Técnicos de Ensaios Não Destrutivos)',
      'LCP Rigging Supervisors com acreditação',
      'LEEA Technicians qualificados para inspecção de carga',
      'Hydraulic Supervisors & Technicians experientes em Oil & Gas',
      'Assistentes técnicos e de manutenção operacional'
    ]
  },
  {
    id: 'electric-motors',
    title: 'Manutenção e Rebobinagem de Motores Eléctricos',
    shortDesc: 'Diagnóstico, reparação, rebobinagem de estatores/rotores e ensaios eléctricos de motores industriais.',
    fullDesc: 'Oferecemos serviços completos de recondicionamento de motores de corrente contínua e alternada, incluindo isolamento térmico avançado, balanceamento dinâmico e testes em carga.',
    category: 'maintenance',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Rebobinagem completa de estatores e rotores',
      'Substituição de rolamentos e vedantes especiais',
      'Análise de vibrações e termografia infravermelha',
      'Tratamento de verniz de impregnação a vácuo (VPI)'
    ]
  },
  {
    id: 'switchgear-maintenance',
    title: 'Manutenção de Switchgear e Quadros Eléctricos',
    shortDesc: 'Manutenção preventiva, inspecção técnica e reparação de células de média e baixa tensão.',
    fullDesc: 'Garantimos a fiabilidade e segurança das instalações eléctricas industriais com ensaios de isolamento, calibração de relés de protecção e limpeza técnica sob tensão ou desenergizada.',
    category: 'maintenance',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Inspecção técnica de disjuntores e seccionadores',
      'Testes de disparo e calibração de relés',
      'Limpeza criogénica e descontaminação',
      'Retrofit de componentes descontinuados'
    ]
  },
  {
    id: 'spray-painting',
    title: 'Pintura por Pulverização de Equipamentos Industriais',
    shortDesc: 'Tratamento de superfícies e aplicação de esquemas de pintura de alta protecção anticorrosiva marinha.',
    fullDesc: 'Preparação de superfícies por decapagem abrasiva ou hidrojacto e aplicação de revestimentos epóxi e poliuretano desenvolvidos para atmosferas marítimas agressivas.',
    category: 'maintenance',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Decapagem por jacto de granalha e hidrojacto de ultra-alta pressão (UHP)',
      'Medição de espessura de película seca (DFT) e aderência',
      'Protecção contra corrosão C5-M para ambientes offshore',
      'Revestimentos cerâmicos e protecção térmica'
    ]
  },
  {
    id: 'oil-purification',
    title: 'Recolha, Análise e Purificação de Óleo',
    shortDesc: 'Filtragem, desidratação e microfiltragem de óleos hidráulicos e de lubrificação.',
    fullDesc: 'Tratamento de fluidos industriais para remoção de água, partículas sólidas e contaminantes gasosos, prolongando a vida útil de turbinas, compressores e sistemas hidráulicos.',
    category: 'maintenance',
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Análise laboratorial ISO 4406 de contagem de partículas',
      'Desidratação por vácuo e desgaseificação',
      'Filtragem móvel online sem interrupção de produção',
      'Gestão ambiental e recolha e eliminação responsável de óleos usados'
    ]
  },
  {
    id: 'valve-services',
    title: 'Serviços de Válvulas Industriais',
    shortDesc: 'Inspecção, manutenção, testes de pressão e recertificação de válvulas de segurança e controlo.',
    fullDesc: 'Oficina completa e unidades móveis equipadas para assistência a válvulas de esfera, gaveta, retenção, borboleta e válvulas de alívio de pressão (PSVs).',
    category: 'maintenance',
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Inspecção interna com boroscópio de alta definição',
      'Lapidação e usinagem in-situ de sedes',
      'Testes de estanqueidade hidroestáticos e pneumáticos',
      'Calibração e recertificação de válvulas de alívio e segurança'
    ]
  },
  {
    id: 'pipe-fabrication',
    title: 'Fabrico de Tubagens e Spools',
    shortDesc: 'Pré-fabrico, soldadura qualificada, inspecção e certificação de spools de tubagem industrial.',
    fullDesc: 'Fabrico de tubagens em aço carbono, aço inoxidável e ligas especiais (Duplex/Super Duplex) segundo normas ASME, API e AWS com rigoroso controlo dimensional.',
    category: 'oilgas',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Soldadores qualificados segundo WPS/PQR',
      'Testes hidroestáticos até 20.000 PSI',
      'Inspecção por Partículas Magnéticas, Líquidos Penetrantes e Ultra-sons',
      'Certificação integral do dossier de fabrico'
    ]
  },
  {
    id: 'wbco-services',
    title: 'Wellbore Filtration & Cleaning (WBCO)',
    shortDesc: 'Soluções de limpeza de poço e filtragem de salmouras para operações de completação e intervenção.',
    fullDesc: 'Serviços especializados na remoção de detritos mecânicos e resíduos de perfuração do poço antes da descida de equipamentos de completação sensíveis.',
    category: 'oilgas',
    iconName: 'Disc',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Ferramentas de raspagem, escovagem e ímanes de poço',
      'Unidades duplas de filtragem DE (Diatomaceous Earth)',
      'Análise de sólidos em suspensão (NTU) e turbidez',
      'Maximização da produtividade e protecção dos reservatórios'
    ]
  },
  {
    id: 'subsea-irm',
    title: 'Inspecção, Reparação e Manutenção Subsea (IRM)',
    shortDesc: 'Apoio a operações submarinas de infraestruturas de produção offshore.',
    fullDesc: 'Suporte especializado a intervenções submarinas em manifolds, linhas de fluxo, risers e cabeças de poço com intervenção de equipas técnicas qualificadas.',
    category: 'marine',
    iconName: 'Anchor',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Apoio técnico a operações com ROV (Remotely Operated Vehicle)',
      'Inspecção catódica e medições de espessura ultrasónica submarina',
      'Instalação e reparação de jumpers submarinos',
      'Manutenção preventiva de conectores hidráulicos submarinos'
    ]
  },
  {
    id: 'well-services',
    title: 'Well Cementing & Coiled Tubing Services',
    shortDesc: 'Apoio técnico a operações de cimentação de poços e intervenções com tubo flexível.',
    fullDesc: 'Assistência operacional e fornecimento de insumos e equipamentos auxiliares para operações de cimentação primária/reparadora e operações com Coiled Tubing.',
    category: 'oilgas',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Mistura e bombeamento de pastas de cimento pesadas e leves',
      'Tratamentos de estimulação e acidificação com Coiled Tubing',
      'Unidades de teste de pressão de alta fiabilidade',
      'Monitorização contínua de parâmetros em tempo real'
    ]
  },
  {
    id: 'scada-automation',
    title: 'Automação Industrial & Controlo de Processos (SCADA)',
    shortDesc: 'Projecto, programação e integração de sistemas SCADA, PLCs e instrumentação industrial.',
    fullDesc: 'Desenvolvimento de arquitectura de controlo distribuído para optimizar processos industriais, monitorização remota de activos e segurança de processos.',
    category: 'automation',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Integração de PLCs (Siemens, Allen-Bradley, Schneider Electric)',
      'Sistemas SCADA HMI avançados para salas de controlo',
      'Redes industriais Profibus, Modbus, Ethernet/IP',
      'Instrumentação de campo e transmissores HART'
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'enerpac-tools',
    name: 'Ferramentas & Macacos ENERPAC',
    category: 'Ferramentas Hidráulicas',
    description: 'Cilindros hidráulicos, bombas, chaves dinamométricas, cortadores e macacos de alta capacidade ENERPAC.',
    brand: 'ENERPAC',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'hiforce-tools',
    name: 'Equipamentos Hi-Force Tools',
    category: 'Ferramentas Hidráulicas',
    description: 'Separadores de flanges, tensores de parafusos, tirantes e bombas portáteis Hi-Force.',
    brand: 'Hi-Force',
    iconName: 'Tool',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'industrial-valves',
    name: 'Válvulas Industriais de Processo',
    category: 'Válvulas & Tubagens',
    description: 'Válvulas de Esfera, Gaveta, Retenção, Borboleta, Agulha e Alívio para altas pressões e temperaturas.',
    brand: 'OEM Multimarcas',
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'hydraulic-hoses',
    name: 'Mangueiras Hidráulicas & Fittings',
    category: 'Conexões & Terminais',
    description: 'Mangueiras espiraladas de altíssima pressão (10.000+ PSI), conexões inoxidáveis, acoplamentos rápidos e terminais.',
    brand: 'Parker / Gates',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'couplings-flanges',
    name: 'Couplings, Steel Pipes & Flanges',
    category: 'Válvulas & Tubagens',
    description: 'Tubos sem costura ASTM, flanges ANSI/API, acoplamentos mecânicos, curvas e conexões forjadas.',
    brand: 'ASTM / API Certified',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pumps-compressors',
    name: 'Pumps & Industrial Compressors',
    category: 'Equipamentos Pesados',
    description: 'Bombas centrífugas, bombas de diafragma, compressores de ar para poços e sistemas de elevação.',
    brand: 'OEM International',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pipe-insulation-gaskets',
    name: 'Pipe Insulation Kits & Spiral Gaskets',
    category: 'Vedação & Isolamento',
    description: 'Juntas espirotálicas RTJ, juntas de estanqueidade, mantas térmicas e kits de isolamento dieléctrico de flanges.',
    brand: 'Flexitallic / Lamons',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'instrumentation-field',
    name: 'Instrumentação de Campo & Manómetros',
    category: 'Automação & Instrumentação',
    description: 'Manómetros digitais/analógicos calibrados, transmissores de pressão, caudalímetros e termopar.',
    brand: 'WIKA / Rosemount',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'transfer-filtration-units',
    name: 'Transfer & Filtration Units',
    category: 'Filtragem & Lubrificação',
    description: 'Unidades móveis de filtragem e transferência de fluidos com filtros coalescentes e separadores de água.',
    brand: 'Pall / Parker',
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electric-motors-ind',
    name: 'Electric Motors & Generators',
    category: 'Equipamentos Eléctricos',
    description: 'Motores de indução trifásicos, motores à prova de explosão (Ex-d) para áreas classificadas Oil & Gas.',
    brand: 'WEG / ABB',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pressure-testing-equip',
    name: 'Pressure Testing Equipment',
    category: 'Testes & Inspecção',
    description: 'Registadores de gráficos de pressão (chart recorders), bombas de teste hidroestático e coletores de alta pressão.',
    brand: 'Barton / Haskel',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spill-kits',
    name: 'Oil & Chemical Spill Kits',
    category: 'Segurança & HSE',
    description: 'Kits de emergência para contenção e absorção de derrames de hidrocarbonetos e produtos químicos em terra e mar.',
    brand: 'New Pig / Brady',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'marine-lubricants-paint',
    name: 'Marine Lubricants & Marine Paint',
    category: 'Marítimo & Química',
    description: 'Lubrificantes marítimos aprovados para motores marítimos, tinta anticorrosiva de alto desempenho Jotun/Hempel.',
    brand: 'Jotun / Hempel / Shell',
    iconName: 'Anchor',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'comet-pyrotechnics',
    name: 'Comet Pyrotechnics & Salvage',
    category: 'Segurança & HSE',
    description: 'Sinais pirotécnicos de emergência marítima (Foguetes para-quedas, fachos de mão, bóias fumígenas) aprovados SOLAS.',
    brand: 'Comet Marine',
    iconName: 'AlertTriangle',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cranes-lifting-equip',
    name: 'Cranes, Hoists & Lifting Equipment',
    category: 'Elevação & Carga',
    description: 'Diferenciais de corrente, manilhas de alta resistência, cintas sintéticas, cabos de aço e ganchos com travas.',
    brand: 'Crosby / Gunnebo',
    iconName: 'Package',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'automation-loto-tools',
    name: 'Lock Out / Tag Out & Hand Tools',
    category: 'Ferramentas & LOTO',
    description: 'Sistemas de bloqueio mecânico, eléctrico e hidráulico LOTO, conjuntos de chaves antichispa (Berclean) e ferramentas manuais.',
    brand: 'Brady / Master Lock',
    iconName: 'Lock',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [
  // Primary Courses
  {
    id: 'stock-management',
    title: 'Stock Management',
    category: 'management',
    duration: '40 Horas',
    targetAudience: 'Gestores de Armazém, Responsáveis de Logística e Compras',
    description: 'Gestão estratégica de inventários, controlo de rotação de materiais, inventariação física e optimização de stock industrial.'
  },
  {
    id: 'negotiation-techniques',
    title: 'Negotiation Techniques',
    category: 'management',
    duration: '32 Horas',
    targetAudience: 'Compradores, Quadros Comerciais e Gestores de Contratos',
    description: 'Estratégias avançadas de negociação em ambiente corporativo, resolução de conflitos, gestão de fornecedores e acordos comerciais.'
  },
  {
    id: 'customer-service',
    title: 'Business-Focused Customer Service',
    category: 'management',
    duration: '24 Horas',
    targetAudience: 'Equipas de Atendimento B2B, Gestores de Conta',
    description: 'Excelência no atendimento ao cliente industrial, gestão de expectativas, comunicação eficaz e fidelização em negócios B2B.'
  },
  {
    id: 'international-logistics',
    title: 'International Logistics',
    category: 'management',
    duration: '40 Horas',
    targetAudience: 'Técnicos de Logística, despachantes e operadores de comércio internacional',
    description: 'Incoterms 2020, trâmites aduaneiros, gestão de fretes marítimos/aéreos e cadeia de abastecimento global para Oil & Gas.'
  },
  {
    id: 'communication-oratory',
    title: 'Communication & Oratory Skills',
    category: 'management',
    duration: '20 Horas',
    targetAudience: 'Líderes de Equipa, Supervisores e Directores',
    description: 'Técnicas de apresentação em público, oratória persuasiva, liderança comunicacional e elaboração de relatórios executivos.'
  },
  {
    id: 'client-procurement-mgmt',
    title: 'Client & Procurement Management',
    category: 'management',
    duration: '40 Horas',
    targetAudience: 'Especialistas de Compras, Gestores de Contratos e Procurement',
    description: 'Ciclo completo de aquisições industriais, qualificação de OEMs, avaliação de riscos e auditoria de fornecedores.'
  },
  {
    id: 'fire-prevention',
    title: 'Fire Prevention & Firefighting',
    category: 'emergency',
    duration: '24 Horas',
    targetAudience: 'Equipas de Brigada de Incêndio, Técnicos HSE e Operadores',
    description: 'Prevenção de incêndios em instalações industriais, manuseamento de extintores, carretéis e combate a focos de incêndio.'
  },
  {
    id: 'emergency-action-plan',
    title: 'Emergency Action Planning',
    category: 'emergency',
    duration: '24 Horas',
    targetAudience: 'Supervisores de Segurança, Gestores de Instalações e RH',
    description: 'Elaboração e simulação de planos de emergência e evacuação, procedimentos de contingência em instalações de alto risco.'
  },
  {
    id: 'dangerous-goods-handling',
    title: 'Dangerous Goods Handling',
    category: 'hse',
    duration: '32 Horas',
    targetAudience: 'Trabalhadores de Logística, Operadores de Carga e Motoristas',
    description: 'Classificação de mercadorias perigosas, sinalização, fichas de dados de segurança (MSDS/FISPQ) e armazenamento seguro.'
  },
  {
    id: 'hse-legislation-angola',
    title: 'HSE Legislation in Angola',
    category: 'hse',
    duration: '30 Horas',
    targetAudience: 'Engenheiros de Segurança, Advogados Corporativos e Directores',
    description: 'Enquadramento jurídico angolano relativo à Segurança, Saúde no Trabalho e Ambiente no sector petrolífero e industrial.'
  },
  {
    id: 'hse-technician-training',
    title: 'Environmental Health & Safety — HSE Technician',
    category: 'hse',
    duration: '120 Horas',
    targetAudience: 'Futuros Técnicos de HSE, Inspectores de Segurança',
    description: 'Formação profissionalizante completa de técnico de segurança, higiene no trabalho e gestão ambiental nas indústrias extractivas.'
  },
  {
    id: 'accident-investigation',
    title: 'Accident Prevention & Investigation',
    category: 'hse',
    duration: '32 Horas',
    targetAudience: 'Supervisores, Membros da CIPA/Comité de Segurança',
    description: 'Técnicas de análise de causa-raiz (Arvore de Causas, 5 Porquês), investigação de quase-acidentes e elaboração de acções correctivas.'
  },
  {
    id: 'confined-spaces',
    title: 'Confined Spaces Work Safety',
    category: 'technical',
    duration: '24 Horas',
    targetAudience: 'Operadores, Vigias e Supervisores de Espaços Confinados',
    description: 'Permissões de trabalho (PT), medição de atmosferas perigosas, ventilação e procedimentos de resgate em espaços confinados.'
  },
  {
    id: 'environmental-mgmt',
    title: 'Environmental Management',
    category: 'hse',
    duration: '40 Horas',
    targetAudience: 'Engenheiros Ambientais, Consultores e Auditores ISO 14001',
    description: 'Sistemas de gestão ambiental, controlo de efluentes, gestão de resíduos perigosos e auditorias ambientais.'
  },
  {
    id: 'welding-safety',
    title: 'Welding Safety',
    category: 'technical',
    duration: '24 Horas',
    targetAudience: 'Soldadores, Serralheiros, Supervisores de Trabalho a Quente',
    description: 'Higiene e segurança nos trabalhos de soldadura e corte, protecção contra radiações, fumos nocivos e incêndios.'
  },
  {
    id: 'rigging-signalman',
    title: 'Rigging & Signalman Training',
    category: 'technical',
    duration: '40 Horas',
    targetAudience: 'Riggers, Sinaleiros, Operadores de Guindaste e Movimentação de Cargas',
    description: 'Cálculo de centro de gravidade, selecção de acessórios de elevação, sinais convencionais e plano de rigg (Rigging Plan).'
  },

  // Additional Specialized Courses
  {
    id: 'workplace-safety-cpat',
    title: 'Workplace Safety & CPAT',
    category: 'hse',
    isAdditional: true,
    duration: '20 Horas',
    description: 'Prevenção de acidentes de trabalho e implementação de comissões de prevenção.'
  },
  {
    id: 'electrical-risk-mgmt',
    title: 'Electrical Risk Management',
    category: 'technical',
    isAdditional: true,
    duration: '32 Horas',
    description: 'Segurança em instalações e serviços em electricidade (NR-10 / Padrões Internacionais).'
  },
  {
    id: 'tank-cleaning',
    title: 'Tank Cleaning & Degassing Safety',
    category: 'technical',
    isAdditional: true,
    duration: '40 Horas',
    description: 'Procedimentos seguros para limpeza, desgaseificação e inspecção de tanques de combustível e lama.'
  },
  {
    id: 'rigging-lifting-basics',
    title: 'Rigging & Lifting Basics',
    category: 'technical',
    isAdditional: true,
    duration: '24 Horas',
    description: 'Fundamentos de elevação de cargas, inspecção prévia de acessórios e nós industriais.'
  },
  {
    id: 'loto-safety',
    title: 'LOTO — Hydraulic, Mechanical & Electrical',
    category: 'technical',
    isAdditional: true,
    duration: '24 Horas',
    description: 'Sistemas de Bloqueio e Etiquetagem para energias perigosas (Lockout/Tagout).'
  },
  {
    id: 'freefall-lifeboats-ffb',
    title: 'Proficiency in Free Fall Lifeboats — FFB',
    category: 'emergency',
    isAdditional: true,
    duration: '30 Horas',
    description: 'Manuseamento e operabilidade de embarcações de salvamento em queda livre offshore.'
  },
  {
    id: 'oil-spill-prevention',
    title: 'Oil Spill Prevention & Contingency Plans',
    category: 'hse',
    isAdditional: true,
    duration: '32 Horas',
    description: 'Combate a derrames de óleos no mar e costa, utilização de barreiras de contenção e skimmers.'
  },
  {
    id: 'petroleum-agreements',
    title: 'International Petroleum Agreements — Drafting & Negotiation',
    category: 'oilgas',
    isAdditional: true,
    duration: '40 Horas',
    description: 'Análise e elaboração de contratos PSA, Concessões Petrolíferas e Joint Ventures.'
  },
  {
    id: 'reservoirs-evaluation',
    title: 'Reservoirs & Resources Evaluation',
    category: 'oilgas',
    isAdditional: true,
    duration: '40 Horas',
    description: 'Avaliação de reservas de hidrocarbonetos, caracterização geológica e engenharia de reservatórios.'
  },
  {
    id: 'oil-gas-exploration-fund',
    title: 'Oil & Gas Exploration Fundamentals',
    category: 'oilgas',
    isAdditional: true,
    duration: '32 Horas',
    description: 'Cadeia de valor do E&P: Sísmica, perfuração de prospecção, registo de poços e avaliação de jazidas.'
  },
  {
    id: 'crude-measurement',
    title: 'Crude Measurement Fundamentals',
    category: 'oilgas',
    isAdditional: true,
    duration: '24 Horas',
    description: 'Medição de transferência de custódia, amostragem de petróleo bruto e calibração de contadores.'
  },
  {
    id: 'first-aid-level-1-2',
    title: 'First Aid — Level 1 & 2',
    category: 'emergency',
    isAdditional: true,
    duration: '24 Horas',
    description: 'Suporte básico de vida (SBV), reanimação cardiorrespiratória (RCR) e socorrismo em contexto industrial.'
  },
  {
    id: 'dangerous-goods-sea-imdg',
    title: 'Dangerous Goods by Sea Transport (IMDG Code)',
    category: 'hse',
    isAdditional: true,
    duration: '32 Horas',
    description: 'Transporte marítimo de cargas perigosas segundo o Código IMDG da Organização Marítima Internacional.'
  },
  {
    id: 'lng-fundamentals',
    title: 'LNG Fundamentals & Value Chain',
    category: 'oilgas',
    isAdditional: true,
    duration: '32 Horas',
    description: 'Processo de liquefação de gás natural, re-gás, transporte em navios metaneiros e mercado global de LNG.'
  },
  {
    id: 'angolan-oilgas-fund',
    title: 'Angolan Oil & Gas Industry Fundamentals',
    category: 'oilgas',
    isAdditional: true,
    duration: '24 Horas',
    description: 'Visão geral do sector petrolífero em Angola: Bloco 0, Kwanda Base, Sonangol, ANPG e Legislação do Conteúdo Local.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Operações Marítimas & Apoio Offshore',
    category: 'Logística & Apoio Offshore',
    location: 'Soyo & Base do Kwanda, Angola',
    description: 'Suporte a operações logísticas e infraestruturas marítimas para o sector de petróleo e gás no Soyo.',
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/24.png',
    highlights: ['Suporte contínuo 24/7 no Soyo', 'Padrões internacionais de segurança HSE', 'Logística integrada em campo']
  },
  {
    id: 'project-2',
    title: 'Manutenção e Intervenção em Equipamentos Pesados',
    category: 'Serviços Técnicos',
    location: 'Soyo Industrial Hub, Angola',
    description: 'Intervenção técnica especializada em equipamentos hidráulicos, bombas e sistemas de elevada pressão.',
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/25.png',
    highlights: ['Inspeção rigorosa de ativos', 'Manutenção preventiva e corretiva', 'Técnicos certificados']
  },
  {
    id: 'project-3',
    title: 'Serviços de Aperto Controlado & Hidráulica',
    category: 'Engenharia Hidráulica',
    location: 'Offshore Angola',
    description: 'Execução de serviços de torqueamento e tensionamento mecânico com equipamentos de alta precisão.',
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/26.png',
    highlights: ['Ferramentas ENERPAC & Hi-Force', 'Certificação de integridade de juntas', 'Zero fugas e máxima eficiência']
  },
  {
    id: 'project-4',
    title: 'Inspecção e Fabrico em Campo',
    category: 'Fabrico & Caldeiraria',
    location: 'Base do Kwanda, Soyo',
    description: 'Sistemas de pré-fabrico de tubagens, spools e estrutura industrial com ensaios não destrutivos.',
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/27.png',
    highlights: ['Soldadura qualificada ASME/WPS', 'Testes de pressão até 15.000 PSI', 'Supervisão técnica dedicada']
  },
  {
    id: 'project-5',
    title: 'Mobilização de Ativos & Estruturas de Suporte',
    category: 'Procurement & Logística',
    location: 'Soyo, Angola',
    description: 'Coordenamento e mobilização urgente de ativos de engenharia e fornecimento para blocos petrolíferos.',
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/28.png',
    highlights: ['Aprovisionamento ágil de OEMs', 'Controlo estrito de prazos', 'Apoio aduaneiro e trânsito']
  },
  {
    id: 'project-6',
    title: 'Operações de Campo & Logística Especializada',
    category: 'Operações Industriais',
    location: 'Soyo & Offshore Angola',
    description: 'Operações integradas de manutenção, suporte logístico e fornecimento contínuo aos clientes da indústria.',
    image: 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/29.png',
    highlights: ['Equipas multidisciplinares em Angola', 'Qualidade e fiabilidade garantidas', 'Apoio directo ao cliente']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Conhecimento Técnico',
    desc: 'Experiência e conhecimento especializado nas áreas de engenharia, indústria e Oil & Gas, apoiados por equipas qualificadas.'
  },
  {
    title: 'Rede Internacional',
    desc: 'Acesso directo a OEMs (Original Equipment Manufacturers) de diversas marcas globais para fornecimento rápido e genuíno.'
  },
  {
    title: 'Logística Global',
    desc: 'Capacidade comprovada de coordenar operações logísticas utilizando diferentes modalidades de transporte com total rigor em Incoterms.'
  },
  {
    title: 'Segurança e Qualidade',
    desc: 'Compromisso intransigente com elevados padrões de segurança (HSE), qualidade certificada e eficiência operacional.'
  },
  {
    title: 'Foco no Cliente',
    desc: 'Soluções personalizadas desenvolvidas rigorosamente de acordo com as especificações técnicas e necessidades de cada parceiro.'
  }
];
