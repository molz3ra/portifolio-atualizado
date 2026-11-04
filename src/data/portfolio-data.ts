// src/data/portfolio-data.ts

export const siteData = {
  name: "Lucas Mol Rodrigues",
  shortName: "Lucas Mol",
  headline: "Desenvolvedor Full Stack & Analista Multidisciplinar",
  email: "lucasmolrodrigues2003@gmail.com",
  phone: "+55 (35) 99978-9761",
  location: "Pouso Alegre, Minas Gerais, Brasil",
  timezone: "America/Sao_Paulo",
  availability: "Disponível para atuação Remota, Híbrida ou Presencial",
  social: {
    github: "https://github.com/molz3ra",
    linkedin: "https://www.linkedin.com/in/mol035/",
    instagram: "https://instagram.com/ei_mol"
  }
};

export interface ProjectPreview {
  id: string;
  label: string;
  labelEn?: string;
  image: string;
  description: string;
  descriptionEn?: string;
}

export interface ProjectMetric {
  label: string;
  labelEn?: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  key?: string;
  title: string;
  tag: string;
  category: string;
  year: string;
  tagline?: string;
  taglineEn?: string;
  description?: string;
  descriptionEn?: string;
  statusBadge?: string;
  statusBadgeEn?: string;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  previews?: ProjectPreview[];
  metrics?: ProjectMetric[];
  highlights?: string[];
  highlightsEn?: string[];
  techStack: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "lda-studio",
    key: "lda",
    title: "LDA — Leitura de Arquivos",
    tag: "IA & RAG Multimodal",
    category: "Document Intelligence & RAG Studio",
    year: "2026",
    tagline: "Plataforma de inteligência documental multimodal, busca híbrida avançada (RRF) e estúdio de recriação com observabilidade em tempo real.",
    taglineEn: "Multimodal document intelligence platform, advanced hybrid search (RRF), and recreation studio with real-time observability.",
    description: "Sistema full-stack projetado para superar as limitações de RAGs convencionais. Une parser de layout com coordenadas espaciais de parágrafos em PDFs, busca híbrida densa e esparsa com fusão RRF (k=60), anonimização determinística LGPD, síntese de áudio estilo podcast (Edge-TTS) e estúdio Canvas retrátil.",
    descriptionEn: "Full-stack platform engineered to transcend conventional RAG limitations. Combines deep layout parsing with spatial bounding boxes in PDFs, dense/sparse hybrid search with RRF fusion (k=60), deterministic LGPD PII redaction, neural podcast audio synthesis, and a retractable Canvas studio.",
    statusBadge: "LIVE EM PRODUÇÃO",
    statusBadgeEn: "LIVE IN PRODUCTION",
    featured: true,
    liveUrl: "https://frontend-livid-five-qdkpx7nmow.vercel.app/",
    repoUrl: "https://github.com/molz3ra",
    image: "/imgs/lda-preview.png",
    metrics: [
      { label: "Latência RRF", labelEn: "RRF Latency", value: "< 25ms" },
      { label: "Precisão Anti-alucinação", labelEn: "Anti-Hallucination", value: "98.8%" },
      { label: "Fusão Matemática", labelEn: "Mathematical Fusion", value: "RRF k=60" },
      { label: "Arquitetura", labelEn: "Architecture", value: "Full Stack" },
    ],
    highlights: [
      "Busca Híbrida RRF (BM25 + pgvector)",
      "Deep Layout Parser com Bounding Boxes no PDF",
      "Canvas Studio & Redlining Semântico de Minutas",
      "Tarja Preta LGPD & Audio Overview Integrado"
    ],
    highlightsEn: [
      "Hybrid Search via RRF (BM25 + pgvector)",
      "Deep Layout Parser with PDF Bounding Boxes",
      "Canvas Studio & Semantic Diff (Redlining)",
      "LGPD PII Redaction & Neural Audio Overview"
    ],
    previews: [
      {
        id: "chat",
        label: "RAG Studio & Chat",
        labelEn: "RAG Studio & Chat",
        image: "/imgs/lda-preview.png",
        description: "Interface conversacional fluida com streaming, visualização de fontes e telemetria de inferência.",
        descriptionEn: "Fluid conversational UI with token streaming, citation inspect, and inference telemetry."
      },
      {
        id: "pdf",
        label: "PDF Grounding & Bounding Boxes",
        labelEn: "PDF Grounding & Bounding Boxes",
        image: "/imgs/lda-pdf.png",
        description: "Visualizador de PDF integrado com coordenadas espaciais e realce automático do parágrafo citado.",
        descriptionEn: "Integrated PDF reader with spatial coordinates and real-time highlighted paragraphs."
      },
      {
        id: "canvas",
        label: "Canvas Studio & Redlining",
        labelEn: "Canvas Studio & Redlining",
        image: "/imgs/lda-canvas.png",
        description: "Ambiente retrátil para recriação, edição de documentos e comparação semântica entre versões.",
        descriptionEn: "Retractable environment for document recreation, editing, and semantic version diffing."
      }
    ],
    techStack: [
      "Next.js 15",
      "FastAPI (Python 3.12)",
      "PostgreSQL 16",
      "pgvector",
      "Tailwind CSS",
      "Playwright MCP",
      "Strix Security",
      "TypeScript",
      "Docker"
    ]
  },
  {
    id: "objection-lab",
    key: "objectionlab",
    title: "ObjectionLab",
    tag: "IA Multi-Agente & CRO",
    category: "Synthetic Focus Group & Friction Auditor",
    year: "2026",
    tagline: "Simulador de Focus Group Sintético com personas concorrentes e auditor de fricção psicológica para Landing Pages.",
    taglineEn: "Synthetic Focus Group simulator with concurrent personas and psychological friction auditor for Landing Pages.",
    description: "Plataforma de inteligência para CRO e Growth que submete propostas de valor a 4 personas sintéticas altamente céticas antes do tráfego pago. Executa pipeline concorrente em paralelo (Promise.all), radar de 5 eixos em Recharts, suporte BYOK com chave gratuita no LocalStorage e agente consolidador com reescrita Antes vs. Depois.",
    descriptionEn: "Growth & CRO intelligence platform subjecting value propositions to 4 highly skeptical synthetic personas before ad spend. Features concurrent parallel execution (Promise.all), 5-axis Recharts radar, BYOK support with LocalStorage persistence, and a lead growth agent with Before vs. After copy rewrites.",
    statusBadge: "LIVE EM PRODUÇÃO",
    statusBadgeEn: "LIVE IN PRODUCTION",
    featured: false,
    liveUrl: "https://o-lab-two.vercel.app/",
    repoUrl: "https://github.com/molz3ra/OLab",
    image: "/imgs/objectionlab.png",
    metrics: [
      { label: "Execução", labelEn: "Execution", value: "Multi-Agente" },
      { label: "Pipeline", labelEn: "Pipeline", value: "Promise.all" },
      { label: "Validação", labelEn: "Validation", value: "Zod Strict" },
      { label: "Radar CRO", labelEn: "CRO Radar", value: "Recharts" },
    ],
    highlights: [
      "Orquestração Concorrente de 4 Personas Sintéticas",
      "Radar de Fricção de 5 Eixos e Veredito Executivo",
      "Reescrita de Copy Antes vs. Depois sem enrolação",
      "Suporte Nativo a BYOK (Gemini API no LocalStorage)"
    ],
    highlightsEn: [
      "Concurrent orchestration of 4 synthetic personas",
      "5-axis friction radar and executive verdict",
      "Before vs. After no-fluff copy rewrite",
      "Native BYOK support (Gemini API in LocalStorage)"
    ],
    techStack: [
      "Next.js 16",
      "TypeScript 5",
      "Vercel AI SDK",
      "Gemini 2.5 Flash",
      "Zod",
      "Tailwind CSS v4",
      "Recharts",
      "Cheerio"
    ]
  },
  {
    id: "madlab",
    key: "madlab",
    title: "MAD LAB — Streetwear",
    tag: "E-Commerce",
    category: "Premium Streetwear Platform",
    year: "2026",
    tagline: "E-commerce completo focado em alta performance, UI/UX imersiva e estética Streetwear.",
    taglineEn: "High-performance e-commerce focused on immersive UI/UX and contemporary streetwear aesthetics.",
    description: "Desenhado para oferecer a sensação de um aplicativo nativo diretamente no navegador. Conta com gerenciamento de estado complexo para carrinho, Server-Side Rendering (SSR) e micro-interações fluidas a 60 FPS.",
    descriptionEn: "Engineered to deliver an app-like feel in the browser. Features complex cart state management, SSR dynamic routes, and silky 60 FPS micro-interactions.",
    statusBadge: "PRODUTO NO AR",
    statusBadgeEn: "LIVE DEMO",
    featured: false,
    liveUrl: "https://lojavirtual-nu.vercel.app",
    repoUrl: "https://github.com/molz3ra/Loja-Virtual",
    image: "/imgs/madlab.webp",
    metrics: [
      { label: "FPS em Transições", labelEn: "Transition FPS", value: "60-120" },
      { label: "Core Web Vitals", labelEn: "Core Web Vitals", value: "100%" },
    ],
    highlights: [
      "Carrinho Slide-over em tempo real",
      "Rotas Dinâmicas com SSR",
      "Micro-interações com Framer Motion"
    ],
    highlightsEn: [
      "Real-time slide-over cart",
      "Dynamic routes with SSR",
      "Fluid micro-interactions with Framer Motion"
    ],
    techStack: ["Next.js 16", "React 19", "Framer Motion", "Tailwind CSS", "TypeScript"]
  }
];

export interface CertificationItem {
  id: string;
  name: string;
  institution: "FIAP" | "Udemy" | "Alura";
  category: "dev" | "data" | "cloud_sec" | "design" | "business";
  hours?: string;
  date: string;
  credential?: string;
  validationUrl?: string;
  skills: string[];
}

export const certificationsData: CertificationItem[] = [
  {
    id: "fiap-java",
    name: "Java Development",
    institution: "FIAP",
    category: "dev",
    hours: "60h",
    date: "17/10/2026",
    credential: "F25375288A343033F2CC8971455FFAB2",
    validationUrl: "https://on.fiap.com.br/validar-certificado/",
    skills: ["Java 17 LTS", "Spring Boot", "POO", "Streams API"]
  },
  {
    id: "fiap-nosql",
    name: "Bancos de Dados NoSQL",
    institution: "FIAP",
    category: "data",
    hours: "40h",
    date: "17/10/2026",
    credential: "7EE0750D62DD9602A7955D1960A49B6B",
    validationUrl: "https://on.fiap.com.br/validar-certificado/",
    skills: ["MongoDB", "Redis", "Cassandra", "Neo4j", "Teorema CAP"]
  },
  {
    id: "fiap-cybersecurity",
    name: "Cybersecurity Hacker Skills",
    institution: "FIAP",
    category: "cloud_sec",
    hours: "120h",
    date: "2025/2026",
    skills: ["Segurança Defensiva", "Ethical Hacking", "OWASP", "Criptografia"]
  },
  {
    id: "fiap-frontend",
    name: "Nano Course de Front End",
    institution: "FIAP",
    category: "dev",
    hours: "80h",
    date: "2025/2026",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "Componentização"]
  },
  {
    id: "fiap-responsive-web",
    name: "Responsive Web Development",
    institution: "FIAP",
    category: "dev",
    hours: "80h",
    date: "Mai/2026",
    credential: "1b95f9dfb148bb4b2366de0a2f5ceef9",
    validationUrl: "https://on.fiap.com.br/validar-certificado/",
    skills: ["Design Responsivo", "Mobile-First", "Grid & Flexbox", "UX"]
  },
  {
    id: "fiap-leadership",
    name: "Leadership Communication",
    institution: "FIAP",
    category: "business",
    hours: "40h",
    date: "Mar/2026",
    credential: "a51c689c22953282df70a6a67473f79f",
    validationUrl: "https://on.fiap.com.br/validar-certificado/",
    skills: ["Comunicação Assertiva", "Liderança Técnica", "Alinhamento de Stakeholders"]
  },
  {
    id: "fiap-accountability",
    name: "Leadership & Corporate Accountability",
    institution: "FIAP",
    category: "business",
    hours: "40h",
    date: "2025/2026",
    skills: ["Governança Corporativa", "Compliance", "Ética Empresarial"]
  },
  {
    id: "fiap-design",
    name: "Design Gráfico Corporativo",
    institution: "FIAP",
    category: "design",
    hours: "40h",
    date: "2025/2026",
    skills: ["Photoshop", "Illustrator", "InDesign", "Identidade Visual"]
  },
  {
    id: "udemy-spring",
    name: "Java e Spring Boot Completo",
    institution: "Udemy",
    category: "dev",
    hours: "54h",
    date: "2025/2026",
    credential: "UC-1b98f5ce-63b8-4d63-8fcd-74875b8a0070",
    validationUrl: "https://www.udemy.com/certificate/UC-1b98f5ce-63b8-4d63-8fcd-74875b8a0070/",
    skills: ["Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs"]
  },
  {
    id: "udemy-aws",
    name: "Fundamentos da Amazon Web Services (AWS)",
    institution: "Udemy",
    category: "cloud_sec",
    hours: "20h",
    date: "2025/2026",
    credential: "UC-57b19ef6-43c6-4e26-988e-aef479a178a5",
    validationUrl: "https://www.udemy.com/certificate/UC-57b19ef6-43c6-4e26-988e-aef479a178a5/",
    skills: ["AWS EC2", "AWS S3", "IAM", "RDS", "Cloud Foundations"]
  },
  {
    id: "udemy-algorithms",
    name: "Algoritmos e Lógica de Programação",
    institution: "Udemy",
    category: "dev",
    hours: "30h",
    date: "2025/2026",
    credential: "UC-a8b86444-230c-49ef-a566-e4e02e8348a5",
    validationUrl: "https://www.udemy.com/certificate/UC-a8b86444-230c-49ef-a566-e4e02e8348a5/",
    skills: ["Estruturas de Dados", "Algoritmos", "5 Linguagens", "Lógica"]
  },
  {
    id: "udemy-design",
    name: "Design Gráfico Completo",
    institution: "Udemy",
    category: "design",
    hours: "30h",
    date: "2025/2026",
    credential: "UC-5bdda678-5144-4f16-a832-30778eb4ba16",
    validationUrl: "https://www.udemy.com/certificate/UC-5bdda678-5144-4f16-a832-30778eb4ba16/",
    skills: ["Photoshop", "Illustrator", "Tipografia", "Composição Visual"]
  },
  {
    id: "alura-growth",
    name: "Growth Hacking: Negócios Digitais",
    institution: "Alura",
    category: "business",
    hours: "20h",
    date: "Abr/2026",
    credential: "42cb2040-8cd8-40c1-aabf-6b7875317d01",
    validationUrl: "https://cursos.alura.com.br/certificate/42cb2040-8cd8-40c1-aabf-6b7875317d01",
    skills: ["Funil AARRR", "CRO", "Testes A/B", "Métricas de Retenção"]
  },
  {
    id: "alura-trafego",
    name: "Tráfego Pago Multicanal",
    institution: "Alura",
    category: "business",
    hours: "25h",
    date: "Abr/2026",
    credential: "78ad3526-3095-4c8a-8a51-69bb6de22751",
    validationUrl: "https://cursos.alura.com.br/certificate/78ad3526-3095-4c8a-8a51-69bb6de22751",
    skills: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "GTM"]
  },
  {
    id: "alura-html-css",
    name: "HTML e CSS: Classes, Posicionamento e Flexbox",
    institution: "Alura",
    category: "dev",
    hours: "15h",
    date: "Abr/2026",
    credential: "8b993860-2eb5-4574-a71b-a2d6336b2ecd",
    validationUrl: "https://cursos.alura.com.br/certificate/8b993860-2eb5-4574-a71b-a2d6336b2ecd",
    skills: ["Flexbox", "CSS Semântico", "Layouts Fluidos"]
  }
];

export const stackCategories = [
  {
    id: "frontend",
    title: "Frontend & Interface Engineering",
    description: "Interfaces fluidas a 60-120 FPS, componentização modular, SSR e rigor em Core Web Vitals.",
    skills: [
      "React 19",
      "Next.js 16 (App Router & SSR)",
      "TypeScript",
      "Tailwind CSS (v3 / v4)",
      "Framer Motion",
      "Context API",
      "HTML5 Semântico",
      "CSS3 Flexbox / Grid",
      "Core Web Vitals & Web Performance",
      "Acessibilidade (WCAG 2.2 AA)"
    ]
  },
  {
    id: "backend",
    title: "Backend, APIs & Microsserviços",
    description: "Serviços assíncronos, integridade de dados e arquiteturas escaláveis em camadas.",
    skills: [
      "Java 17 LTS (Spring Boot & Streams)",
      "Node.js (Express & APIs RESTful)",
      "Python (FastAPI & Microsserviços)",
      "Arquitetura em Camadas (Model/Repo/Service)",
      "Autenticação Segura & JWT",
      "Web Scraping (Cheerio & yt-dlp)",
      "Processamento de Mídia (FFmpeg)"
    ]
  },
  {
    id: "database",
    title: "Persistência Poliglota & Bancos NoSQL/SQL",
    description: "Domínio profundo em bancos relacionais e nas 4 grandes famílias NoSQL sob o Teorema CAP.",
    skills: [
      "PostgreSQL & MySQL (Relacional / ACID)",
      "JPA / Hibernate",
      "MongoDB (NoSQL Documentos & MQL)",
      "Redis (NoSQL Chave-Valor & In-Memory Caching)",
      "Apache Cassandra (NoSQL Colunar & CQL)",
      "Neo4j (NoSQL Grafos & Cypher)",
      "Teorema CAP & Persistência Poliglota"
    ]
  },
  {
    id: "cloud_sec",
    title: "Nuvem, DevOps & Cibersegurança",
    description: "Fundamentos de nuvem corporativa AWS, controle de versão rigoroso e segurança defensiva.",
    skills: [
      "Amazon Web Services (EC2, S3, IAM, RDS, Lightsail)",
      "Git & GitHub (Workflows & CI/CD)",
      "Cibersegurança (Hacker Skills 120h FIAP)",
      "Linux / Bash Scripting",
      "Deploy Contínuo (Vercel)"
    ]
  },
  {
    id: "design",
    title: "Design de Produto, UI/UX & Desenho Técnico",
    description: "União entre precisão visual, usabilidade e ferramentas industriais de engenharia e criação.",
    skills: [
      "Figma (UI/UX, Prototipagem & Design Systems)",
      "AutoCAD (Desenho Técnico 2D & 3D)",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Ergonomia Visual & Micro-interações"
    ]
  },
  {
    id: "business",
    title: "Visão de Produto, BI, Growth & Governança",
    description: "Decisões baseadas em métricas de negócio, eficiência operacional e análise avançada de dados.",
    skills: [
      "Power BI & DAX",
      "Python Pandas & Machine Learning (XGBoost)",
      "CRO (Otimização de Taxa de Conversão)",
      "Auditoria Técnica de Páginas & GTM",
      "Mídia de Performance (Google & Meta Ads)",
      "Metodologias Ágeis (Scrum & Kanban)",
      "Governança Corporativa & Accountability"
    ]
  }
];

export const educationData = [
  {
    institution: "FIAP — Faculdade de Informática e Administração Paulista",
    degree: "Bacharelado em Sistemas de Informação",
    internationalTitle: "Computer Systems Technology",
    period: "Fev 2025 – Dez 2028",
    status: "Em andamento",
    description: "Graduação de excelência com ênfase prática em Engenharia de Software, Arquitetura de Aplicações Distribuídas, Algoritmos, Bancos de Dados Relacionais e NoSQL, Cloud Computing e Governança Corporativa de TI.",
    highlights: [
      "Arquitetura de Software & Microsserviços",
      "Algoritmos e Estruturas de Dados Avançadas",
      "Persistência Poliglota & Engenharia de Dados",
      "Nuvem, Segurança e Governança Corporativa"
    ]
  }
];

export const experienceTimeline = [
  {
    period: "Mar 2025 — Mai 2026",
    role: "Desenvolvedor Full Stack",
    organization: "Freelancer / Projetos Autônomos",
    location: "Pouso Alegre, MG · Remoto",
    description: "Engenharia de software ponta a ponta: plataformas web modernas, microsserviços e soluções analíticas de alta conversão.",
    bulletPoints: [
      "Desenvolveu plataformas web completas e aplicações SaaS com Next.js 16/15, React, Node.js, TypeScript e Tailwind CSS, garantindo renderização rápida no servidor (SSR), alta conversão e pontuação de excelência em Core Web Vitals.",
      "Projetou microsserviços e APIs RESTful em Python (FastAPI) e Java (Spring Boot), integrando rotinas assíncronas de web scraping, processamento multimídia com FFmpeg e persistência poliglota em bancos relacionais e NoSQL.",
      "Elaborou dashboards analíticos no Power BI e interfaces com gráficos reativos (Recharts) para monitoramento de métricas financeiras (ROI, CPA e conversão) e eficiência operacional.",
      "Integrou APIs de terceiros, gateways de mensagens (WhatsApp API) e fluxos transacionais com foco em zero fricção para o usuário final."
    ],
    tags: ["Next.js", "React 19", "TypeScript", "Node.js", "Java", "Python", "NoSQL", "Power BI"]
  },
  {
    period: "Jun 2024 — Fev 2025",
    role: "Assistente Administrativo & de Operações",
    organization: "Projetos Autônomos",
    location: "Pouso Alegre, MG",
    description: "Padronização de processos, modelagem de dados operacionais e governança ágil.",
    bulletPoints: [
      "Padronizou rotinas operacionais e organização de documentos digitais com controle de dados em planilhas avançadas (Excel), reduzindo o tempo de consolidação de relatórios periódicos em 25% para apoio à liderança.",
      "Conduziu atendimento e alinhamento direto com clientes e áreas de apoio, garantindo resolução ágil de pendências com postura ética, comunicação de liderança e cumprimento de prazos com métodos ágeis (Kanban)."
    ],
    tags: ["Processos", "Gestão Ágil", "Excel Avançado", "Relatórios Executivos", "Governança"]
  }
];
