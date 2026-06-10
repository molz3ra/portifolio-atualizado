// src/data/portfolio-data.ts

export const siteData = {
  name: "Lucas Mol",
  role: "Desenvolvedor Full Stack · React · Next.js · Node.js · Java",
  description: "Desenvolvo aplicações web completas — do banco de dados ao clique do usuário. Stack principal: React, Next.js, Node.js e Java. Visão de produto, dados e UI/UX em um único perfil. Buscando minha primeira oportunidade formal como Dev Full Stack",
  social: {
    github: "https://github.com/molz3ra",
    linkedin: "https://linkedin.com/in/mol035",
    instagram: "https://instagram.com/ei_mol"
  }
};

export const skillsData = [
  {
    category: "💻 Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Web"],
  },
  {
    category: "⚙️ Backend",
    skills: ["Node.js", "Python", "Java", "FastAPI", "Spring Boot", "SQL", "MySQL", "APIs REST"],
  },
  {
    category: "🎨 Design",
    skills: ["Figma", "UI/UX Design", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Web Design", "Branding", "Canva"],
  },
  {
    category: "📊 Data & BI",
    skills: ["Power BI", "Python", "Pandas", "SQL", "Excel Avançado", "DAX", "ETL", "Machine Learning"],
  },
  {
    category: "🚀 Growth & Marketing",
    skills: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "TikTok Ads", "Growth Hacking", "Tráfego Pago", "Análise de Dados"],
  },
  {
    category: "👥 Liderança & Gestão",
    skills: ["Liderança", "Gestão de Pessoas", "Comunicação Efetiva", "Feedback", "Metodologias Ágeis", "Scrum", "OKR", "KPIs"],
  },
];

export const projectsData = [
  {
    title: "MAD LAB - Premium Streetwear",
    pitch: "Um e-commerce completo focado em alta performance, UI/UX imersiva e estética Streetwear.",
    description: "Desenhado para oferecer a sensação de um aplicativo nativo diretamente no navegador. Conta com gerenciamento de estado complexo para carrinho, Server-Side Rendering (SSR) e micro-interações.",
    features: [
      "Carrinho Slide-over em tempo real",
      "Páginas Dinâmicas (/produto/[id]) via SSR",
      "Transições Suaves (Framer Motion)",
      "Sistema de Recomendação Visual",
    ],
    techStack: ["Next.js 16", "React 18+", "Framer Motion", "CSS Modules", "Lucide React"],
    liveUrl: "https://lojavirtual-nu.vercel.app",
    repoUrl: "https://github.com/molz3ra/Loja-Virtual",
    color: "from-cyan-500 to-blue-600",
    image: "/imgs/madlab.png"
  },
  {
    title: "Suite Performance",
    pitch: "Plataforma SaaS moderna para auditar Landing Pages e projetar resultados financeiros (ROI/CPA).",
    description: "Une desenvolvimento Full-stack com inteligência de marketing. Realiza web scraping de URLs para gerar um diagnóstico de CRO em tempo real, além de simular projeções financeiras em um dashboard interativo.",
    features: [
      "Auditor CRO via Web Scraping (Cheerio)",
      "Detecção de Pixel e Análise de CTAs",
      "Simulador de ROI e Metas com Recharts",
      "Dark Mode & UX Otimizada",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Recharts", "Cheerio", "Axios"],
    liveUrl: "https://suite-performance.vercel.app",
    repoUrl: "https://github.com/molz3ra/SuitePerformance",
    color: "from-purple-500 to-indigo-600",
    image: "/imgs/suiteperformance.png"
  },
  {
    title: "FarmFresh Connect 2.0",
    pitch: "Conectando consumidores aos melhores produtores locais com tecnologia e simplicidade.",
    description: "Um marketplace focado em produtores rurais e artesanais. Traz filtros dinâmicos, rotas exclusivas de perfis e a solução de negócios perfeita: checkout integrado diretamente via WhatsApp.",
    features: [
      "Vitrine Dinâmica e Pesquisa em Tempo Real",
      "Perfil Exclusivo para Produtores",
      "Gerenciamento Global via React Context",
      "Checkout via WhatsApp Integrado",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sonner"],
    liveUrl: "https://farm-fresh-2-0.vercel.app",
    repoUrl: "https://github.com/molz3ra/FarmFresh-2.0",
    color: "from-emerald-500 to-green-600",
    image: "/imgs/farmfresh.png"
  },
  {
    title: "Instagram UI Clone",
    pitch: "Réplica de alta fidelidade da interface e fluxo do Instagram para Web.",
    description: "Uma reprodução focada em Pixel Perfect e responsividade mobile-first, estudando a usabilidade da aplicação original para aprimorar a construção de componentes React reutilizáveis.",
    features: [
      "Feed de Postagens Responsivo",
      "Visualização Dinâmica de Stories",
      "Sistema de Navegação (Bottom Bar)",
      "Pixel Perfect UI",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://clone-instagram-blush.vercel.app",
    repoUrl: "https://github.com/molz3ra/clone-instagram",
    color: "from-pink-500 to-rose-600",
    image: "/imgs/instagram.png"
  }
];
