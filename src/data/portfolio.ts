export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    whyTech: string;
    features: string[];
    github?: string;
    demo?: string;
    docUrl?: string;
}

export interface Skill {
    id: string;
    name: string;
    icon: string;
    description: string;
    projects: Project[];
}

export const skills: Skill[] = [
    {
        id: "react",
        name: "ReactJS",
        icon: "⚛️",
        description: "Building dynamic, component-driven user interfaces",
        projects: [
        {
            id: "freeDesign",
            title: "FreeDesign® Platform",
            description:
                "Development and maintenance of FreeDesign® — a highly scalable online design editor with over 1 million users across 22 European countries at Infowerk / Unitedprint.com SE. Working in a team of 12+ developers using ReactJS, Redux and TypeScript.",
            technologies: ["React", "TypeScript", "Redux", "Canvas API", "Webpack"],
            whyTech:
                "React was chosen for its virtual DOM efficiency when handling real-time design canvas updates. Redux managed the complex state of layers, templates, and undo/redo operations across a large-scale application.",
            features: [
                "Implementation of 10+ new features in the internal design system",
                "Built reusable React components used across the platform",
                "DOM optimizations improving load times and performance",
                "Quality assurance through code reviews, tests and bugfixing",
                "Cross-functional collaboration with backend, QA and design teams in agile Scrum",
            ],
        },
        {
            id: "dashboardApp",
            title: "Analytics Dashboard",
            description:
                "Internal analytics dashboard for tracking print order metrics, customer behavior, and production pipeline status with real-time data visualization.",
            technologies: [
                "React",
                "TypeScript",
                "Recharts",
                "React Query",
                "TailwindCSS",
            ],
            whyTech:
                "React Query provided efficient server-state management with automatic caching and background refetching, crucial for real-time analytics data.",
            features: [
                "Real-time order tracking with WebSocket updates",
                "Interactive charts with drill-down capabilities",
                "Role-based access control",
                "Export reports as PDF/CSV",
            ],
        },
        ],
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: "🔷",
        description: "Type-safe development for scalable applications",
        projects: [
        {
            id: "componentLib",
            title: "Enterprise Component Library",
            description:
                "A shared UI component library with strict TypeScript interfaces, used across multiple products at Unitedprint.com SE to ensure design consistency and developer productivity.",
            technologies: ["TypeScript", "React", "Storybook", "Jest", "Rollup"],
            whyTech:
                "TypeScript's strict type system ensured API contracts between components, reducing integration bugs significantly. Storybook provided visual documentation for the whole team.",
            features: [
                "Reusable components with full type coverage",
                "Automated visual regression testing",
                "Tree-shakable ESM builds",
                "Comprehensive Storybook documentation",
            ],
        },
        ],
    },
    {
        id: "nextjs",
        name: "Next.js",
        icon: "▲",
        description: "Server-rendered React apps with optimal performance",
        projects: [
        {
            id: "ecommerce",
            title: "E-Commerce Storefront",
            description:
                "A high-performance e-commerce frontend with SSR for SEO, ISR for product pages, and edge-optimized API routes for cart and checkout flows.",
            technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "Vercel"],
            whyTech:
                "Next.js provided SSR for SEO-critical product pages and ISR for updating content without full rebuilds. Edge functions minimized checkout latency.",
            features: [
                "ISR for product catalog with fast revalidation",
                "Stripe integration with webhook handling",
                "Image optimization with next/image",
                "Lighthouse score consistently above 95",
            ],
        },
        ],
    },
    {
        id: "vuejs",
        name: "Vue.js",
        icon: "💚",
        description: "Progressive framework for building modern user interfaces",
        projects: [
        {
            id: "portfolioVue",
            title: "Personal Portfolio — Vue 3",
            description:
                "Migrated this portfolio from React to Vue 3, using Vite, TypeScript, Tailwind CSS, and @vueuse/motion for animations. A hands-on deep dive into the Vue ecosystem.",
            technologies: [
                "Vue 3",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "@vueuse/motion",
            ],
            whyTech:
                "Vue 3's Composition API and single-file components make it intuitive for building component-driven UIs. The migration was a great way to learn the Vue ecosystem hands-on.",
            features: [
                "Full migration from React with feature parity",
                "Composition API with script setup syntax",
                "Vue Router 4 for client-side navigation",
                "CSS animations replacing framer-motion",
            ],
        },
        ],
    },
    {
        id: "php",
        name: "PHP & Laravel",
        icon: "🐘",
        description: "Server-side development and legacy system integration",
        projects: [
        {
            id: "webDev",
            title: "Online Portals & Admin Tools",
            description:
                "Developed 5–10 new features for online portals and admin tools at Unitedprint.com SE. Implemented backend logic, database connections and API integrations using PHP, Laravel and Perl.",
            technologies: ["PHP", "Laravel", "Perl", "MySQL", "Jenkins"],
            whyTech:
                "PHP and Laravel's mature ecosystem made rapid backend development possible. Perl was already in use for internal tooling and automation scripts across the platform.",
            features: [
                "5–10 new features for online portals and admin tools",
                "Backend logic, database connections and API integrations",
                "Code reviews and bugfixing to optimize code quality",
                "Internal QA tools developed with PHP, Laravel and MongoDB",
            ],
        },
        {
            id: "cmsPortal",
            title: "Content Management Portal",
            description:
                "Admin portal for managing product catalogs, pricing rules, and promotional campaigns across multiple European markets.",
            technologies: ["Laravel", "Vue.js", "MySQL", "Elasticsearch"],
            whyTech:
                "Laravel's Eloquent ORM simplified complex multi-tenant data relationships. Built-in auth scaffolding accelerated development of the role-based admin system.",
            features: [
                "Multi-tenant architecture for regional markets",
                "Full-text search with Elasticsearch",
                "Automated email campaigns",
                "Audit logging for compliance",
            ],
        },
        ],
    },
    {
        id: "testing",
        name: "Testing & QA",
        icon: "🎭",
        description: "End-to-end and automated testing for reliable applications",
        projects: [
        {
            id: "e2eSuite",
            title: "E2E Testing Framework — FreeDesign®",
            description:
                "Comprehensive end-to-end testing suite covering critical user flows across the FreeDesign® platform. Automated click tests implemented with QF-Test and integrated into Jenkins CI/CD pipelines to reduce manual testing effort.",
            technologies: [
                "Playwright",
                "QF-Test",
                "React Testing Library",
                "Jenkins",
                "Docker",
            ],
            whyTech:
                "Playwright's cross-browser support and auto-wait mechanisms made it ideal for testing complex canvas interactions. QF-Test was already part of the pipeline and was extended significantly.",
            features: [
                "Automated click tests with QF-Test integrated into Jenkins pipelines",
                "Manual cross-browser testing on Windows, Mac, Browserstack and mobile",
                "Structured test protocols and documentation in Confluence for 3–5 platforms",
                "Reduced manual testing effort through automation",
                "Visual regression testing with screenshots",
            ],
        },
        ],
    },
    {
        id: "mongodb",
        name: "MongoDB",
        icon: "🍃",
        description: "Flexible document storage for modern applications",
        projects: [
        {
            id: "templateStore",
            title: "Design Template Storage",
            description:
                "Document-based storage system for design templates with complex nested structures, versioning, and full-text search capabilities. Used internally at Unitedprint.com SE alongside QA tooling.",
            technologies: ["MongoDB", "Node.js", "Express", "Mongoose"],
            whyTech:
                "MongoDB's flexible schema was perfect for storing design templates with varying structures. The aggregation pipeline enabled complex queries for template discovery.",
            features: [
                "Schema-flexible template storage",
                "Version history with rollback",
                "Aggregation-based analytics",
                "GridFS for large asset storage",
            ],
        },
        ],
    },
];

export const aboutData = {
    summary:
        "Frontend Developer with 6+ years of experience in modern web applications. Specialized in ReactJS, Redux, TypeScript and Next.js. Currently actively developing FreeDesign® — a highly scalable online design editor with over 1 million users across 22 European countries. Experienced in performance optimization, test automation and agile development processes.",
    highlights: [
        "6+ years of professional web development experience",
        "Specialized in React ecosystem, Redux & TypeScript",
        "Performance optimization & scalable architecture",
        "Experience with enterprise-grade applications serving 1M+ users",
        "Strong background in testing & quality assurance",
        "Multilingual: German (C1), English (C1), Italian (C1), Punjabi (native)",
    ],
    experience: [
        {
        role: "Frontend Developer",
        company: "Unitedprint.com SE — Radebeul, DE",
        period: "Aug. 2023 – Present",
        description:
            "Development and maintenance of FreeDesign® with ReactJS, Redux & TypeScript in a team of 12+ developers. Implementation of 10+ new features and reusable React components in the internal design system. DOM optimizations, code reviews and cross-functional collaboration in agile Scrum.",
        },
        {
        role: "Software Tester",
        company: "Unitedprint.com SE — Radebeul, DE",
        period: "Jun. 2022 – Aug. 2023",
        description:
            "Developed internal QA tools with Perl, PHP, Laravel and MongoDB. Manual cross-browser testing of 3–5 web portals. Implemented automated click tests with QF-Test integrated into Jenkins pipelines. Created structured test protocols and documentation in Confluence.",
        },
        {
        role: "Apprenticeship — Fachinformatiker für Anwendungsentwicklung",
        company: "Unitedprint.com SE & BSZ Elektrotechnik Dresden",
        period: "Aug. 2019 – Jun. 2022",
        description:
            "Completed dual apprenticeship in application development. After graduation, deployed internally as a tester to bridge a critical gap in the QA team — then moved directly into frontend development.",
        },
        {
        role: "Web Developer",
        company: "Unitedprint.com SE — Radebeul, DE",
        period: "Oct. 2018 – Jul. 2019",
        description:
            "Developed 5–10 new features for online portals and admin tools with PHP, Laravel and Perl. Implemented backend logic, database connections and API integrations. Conducted code reviews and bugfixing.",
        },
    ],
    contact: {
        email: "joga-singh@web.de",
        phone: "+49 176 5781 8593",
        github: "https://github.com/joga-singh-dayal",
        linkedin: "https://www.linkedin.com/in/joga-singh-dayal-019a353b6/",
    },
};
