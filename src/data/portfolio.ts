export interface Project {
    id: string
    title: string
    description: string
    technologies: string[]
    whyTech: string
    features: string[]
    github?: string
    demo?: string
    docUrl?: string
}

export interface Skill {
    id: string
    name: string
    icon: string
    description: string
    projects: Project[]
}

export const skills: Skill[] = [
    {
        id: 'react',
        name: 'ReactJS',
        icon: '⚛️',
        description: 'Building dynamic, component-driven user interfaces',
        projects: [
            {
                id: 'freeDesign',
                title: 'FreeDesign® Platform',
                description:
                    'Development and maintenance of FreeDesign® — a highly scalable online design editor with over 1 million users across 22 European countries at Unitedprint.com SE. Working in a team of 12+ developers using ReactJS, Redux and TypeScript. Includes integration of AI-powered features for image editing and text generation.',
                technologies: [
                    'React',
                    'TypeScript',
                    'Redux',
                    'Canvas API',
                    'Webpack',
                ],
                whyTech:
                    'React was chosen for its virtual DOM efficiency when handling real-time design canvas updates. Redux managed the complex state of layers, templates, and undo/redo operations across a large-scale application.',
                features: [
                    'Integration of AI-powered functions for image editing and text generation',
                    'Implementation of 10+ new features including image masks, frames and finishing options',
                    'Built reusable React components used across the platform\'s internal design system',
                    'DOM optimizations improving load times and performance',
                    'Cross-functional collaboration with backend, QA and design teams in agile Scrum',
                ],
            },
            {
                id: 'promptPerfector',
                title: 'Prompt Perfector',
                description:
                    'A full-stack AI tool for optimizing prompts and comparing responses across multiple language models. Built with React, TypeScript and Supabase — including authentication, a user dashboard and Supabase Edge Functions for secure AI API calls.',
                technologies: [
                    'React',
                    'TypeScript',
                    'Supabase',
                    'Edge Functions',
                    'TailwindCSS',
                    'Anthropic API',
                    'OpenAI API',
                ],
                whyTech:
                    'Supabase provided a complete backend-as-a-service solution including auth, database and serverless Edge Functions — enabling secure AI API calls without exposing keys on the client side.',
                features: [
                    'User authentication and protected dashboard with Supabase Auth',
                    'Prompt optimization with multiple AI model comparison',
                    'Supabase Edge Functions for secure Anthropic and OpenAI API integration',
                    'Responsive UI built with TailwindCSS',
                    'Full-stack TypeScript with strict type safety',
                ],
            },
        ],
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        icon: '🔷',
        description: 'Type-safe development for scalable applications',
        projects: [
            {
                id: 'freeDesignTS',
                title: 'FreeDesign® — TypeScript Architecture',
                description:
                    'At Unitedprint.com SE, TypeScript is the foundation of the entire FreeDesign® codebase — a large-scale design editor with 12+ developers. Strict typing across Redux state management, Canvas API interactions, component props and API contracts keeps the codebase maintainable at scale.',
                technologies: [
                    'TypeScript',
                    'React',
                    'Redux',
                    'Canvas API',
                    'Webpack',
                ],
                whyTech:
                    "TypeScript's strict type system is essential in a team of 12+ developers working on a shared, complex codebase. It catches integration errors at compile time and makes refactoring significantly safer.",
                features: [
                    'Strict TypeScript across the entire FreeDesign® frontend',
                    'Typed Redux store with complex nested state shapes',
                    'Type-safe Canvas API abstractions for design elements',
                    'Shared interfaces between frontend and backend API contracts',
                    'Reduced runtime bugs through compile-time type checking',
                ],
            },
        ],
    },
    {
        id: 'vuejs',
        name: 'Vue.js',
        icon: '💚',
        description: 'Progressive framework for building modern user interfaces',
        projects: [
            {
                id: 'portfolioVue',
                title: 'Personal Portfolio — Vue 3',
                description:
                    'This portfolio — built with Vue 3, Vite, TypeScript and Tailwind CSS. A hands-on deep dive into the Vue ecosystem after transitioning from React, demonstrating component architecture, Composition API, client-side routing, Docker and CI/CD.',
                technologies: [
                    'Vue 3',
                    'TypeScript',
                    'Vite',
                    'Tailwind CSS',
                    '@vueuse/motion',
                    'Vue Router 4',
                    'Docker',
                    'GitHub Actions',
                ],
                whyTech:
                    "Vue 3's Composition API and single-file components make it intuitive for building component-driven UIs. The project was a deliberate learning vehicle to master the Vue ecosystem coming from a React background — including production-grade tooling like Docker and CI/CD pipelines.",
                features: [
                    'Composition API with script setup syntax throughout',
                    'Vue Router 4 for client-side navigation',
                    'Animated skill and project explorer',
                    'Fully responsive layout with Tailwind CSS',
                    'Dockerized with multi-stage build for production',
                    'GitHub Actions CI/CD pipeline with automated testing',
                    'Deployed on Vercel via production workflow',
                ],
                github: 'https://github.com/joga-singh-dayal/portfolio-vuejs',
                demo: 'https://joga-singh-dayal-portfolio-vuejs.vercel.app/',
            },
            {
                id: 'codeMind',
                title: 'CodeMind — AI Code Reviewer',
                description:
                    'An AI-powered code review tool built with Vue 3 and the Anthropic Claude API. Paste any code snippet and receive instant, structured feedback on quality, potential bugs, performance and best practices.',
                technologies: [
                    'Vue 3',
                    'TypeScript',
                    'Vite',
                    'Anthropic API',
                    'TailwindCSS',
                    'Supabase',
                ],
                whyTech:
                    "Vue 3's reactivity system made it straightforward to build a responsive, real-time feedback UI. The Anthropic API was chosen for its strong code analysis capabilities and structured output.",
                features: [
                    'Real-time AI code analysis powered by Claude (Anthropic API)',
                    'Structured feedback on bugs, performance and best practices',
                    'Syntax highlighting for multiple programming languages',
                    'Supabase authentication for user sessions',
                    'Clean, responsive UI built with TailwindCSS',
                ],
            },
        ],
    },
    {
        id: 'ai',
        name: 'AI & LLM Integration',
        icon: '🤖',
        description: 'Building AI-powered features with Anthropic and OpenAI APIs',
        projects: [
            {
                id: 'freeDesignAI',
                title: 'FreeDesign® — AI Feature Integration',
                description:
                    'Integrated AI-powered functions directly into the FreeDesign® online editor at Unitedprint.com SE — including intelligent image editing tools and AI-driven text generation for design templates. These features are actively used by over 1 million users across Europe.',
                technologies: [
                    'React',
                    'TypeScript',
                    'REST APIs',
                    'Canvas API',
                ],
                whyTech:
                    'AI integration was the natural next step for a design editor at this scale — enabling users to automate tedious design tasks and generate content without leaving the platform.',
                features: [
                    'AI-powered image editing integrated into the live design canvas',
                    'AI text generation for design templates and print products',
                    'Seamless UX integration — AI features feel native to the editor',
                    'Scalable to 1M+ users across 22 European countries',
                    'Collaboration with backend teams for secure API integration',
                ],
            },
            {
                id: 'codeMindAI',
                title: 'CodeMind — Claude-Powered Code Review',
                description:
                    'Personal portfolio project: an AI code reviewer using the Anthropic Claude API. Demonstrates practical experience integrating LLMs into a production-ready Vue 3 application with structured prompt engineering and real-time streaming responses.',
                technologies: [
                    'Anthropic API',
                    'Vue 3',
                    'TypeScript',
                    'Supabase Edge Functions',
                ],
                whyTech:
                    'Claude was chosen for its strong reasoning and code analysis capabilities. Supabase Edge Functions handle the API calls server-side, keeping the API key secure and enabling future rate-limiting logic.',
                features: [
                    'Structured prompt engineering for consistent code review output',
                    'Real-time streaming AI responses for better UX',
                    'Secure API key handling via Supabase Edge Functions',
                    'Supports multiple programming languages',
                    'Built as a showcase of practical LLM integration skills',
                ],
            },
        ],
    },
    {
        id: 'php',
        name: 'PHP & Laravel',
        icon: '🐘',
        description: 'Server-side development and legacy system integration',
        projects: [
            {
                id: 'webDev',
                title: 'Online Portals & Admin Tools',
                description:
                    'Developed 5–10 new features for online portals and admin tools at Unitedprint.com SE. Implemented backend logic, database connections and API integrations using PHP, Laravel and Perl.',
                technologies: ['PHP', 'Laravel', 'Perl', 'MySQL', 'MongoDB', 'Jenkins'],
                whyTech:
                    "PHP and Laravel's mature ecosystem made rapid backend development possible. Perl was already in use for internal tooling and automation scripts across the platform.",
                features: [
                    '5–10 new features for online portals and admin tools',
                    'Backend logic, database connections and API integrations',
                    'Internal QA tools developed with PHP, Laravel and MongoDB',
                    'Code reviews and bugfixing to optimize code quality',
                ],
            },
        ],
    },
    {
        id: 'testing',
        name: 'Testing & QA',
        icon: '🎭',
        description: 'End-to-end and automated testing for reliable applications',
        projects: [
            {
                id: 'e2eSuite',
                title: 'E2E Testing Framework — FreeDesign®',
                description:
                    'Comprehensive end-to-end testing suite covering critical user flows across the FreeDesign® platform. Automated click tests implemented with QF-Test and integrated into Jenkins CI/CD pipelines to reduce manual testing effort across 3–5 web portals.',
                technologies: [
                    'Playwright',
                    'QF-Test',
                    'React Testing Library',
                    'Jenkins',
                    'Browserstack',
                ],
                whyTech:
                    "Playwright's cross-browser support and auto-wait mechanisms made it ideal for testing complex canvas interactions. QF-Test was already part of the pipeline and was extended significantly.",
                features: [
                    'Automated click tests with QF-Test integrated into Jenkins CI/CD pipelines',
                    'Manual cross-browser testing on Windows, Mac, Browserstack and mobile',
                    'Functionality and regression tests across 3–5 platforms',
                    'Structured test protocols and documentation in Confluence and KiwiTCMS',
                    'Reduced manual testing effort through strategic automation',
                ],
            },
        ],
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        icon: '🍃',
        description: 'Flexible document storage for modern applications',
        projects: [
            {
                id: 'qaTooling',
                title: 'Internal QA Tooling — Unitedprint.com SE',
                description:
                    'Developed internal QA tools using PHP, Laravel and MongoDB to support the testing workflow across multiple web portals. MongoDB\'s flexible schema was ideal for storing heterogeneous test result data.',
                technologies: ['MongoDB', 'PHP', 'Laravel', 'Perl'],
                whyTech:
                    "MongoDB's schema flexibility was a natural fit for storing varied test result structures across different portal types. It allowed rapid iteration on the data model without migrations.",
                features: [
                    'Flexible document storage for diverse test result structures',
                    'Integration with internal QA workflow tools',
                    'Reporting and aggregation for test coverage metrics',
                    'Used alongside Confluence and KiwiTCMS for documentation',
                ],
            },
        ],
    },
]

export const aboutData = {
    summary:
        'Frontend Developer with 6+ years of experience in modern web applications. Specialized in ReactJS, Redux, TypeScript and Vue 3. Most recently developing FreeDesign® — a highly scalable online design editor with over 1 million users across 22 European countries. Experienced in AI/LLM integration, performance optimization, test automation and agile development. Available immediately.',
    highlights: [
        '6+ years of professional web development experience',
        'Specialized in React and Vue 3 ecosystems with TypeScript',
        'Hands-on AI/LLM integration — Anthropic API, OpenAI API, Supabase Edge Functions',
        'Enterprise-grade applications serving 1M+ users',
        'Strong background in testing, QA and CI/CD',
        'Available immediately — looking for new opportunities',
        'Multilingual: German (C1), English (C1), Italian (C1), Punjabi (native)',
    ],
    experience: [
        {
            role: 'Frontend Developer',
            company: 'Unitedprint.com SE — Radebeul, DE',
            period: 'Aug. 2023 – Jun. 2026',
            description:
                'Development and maintenance of FreeDesign® with ReactJS, Redux & TypeScript in a team of 12+ developers. Integration of AI-powered functions for image editing and text generation. Implementation of 10+ new features, DOM optimizations, code reviews and cross-functional collaboration in agile Scrum.',
        },
        {
            role: 'Software Tester',
            company: 'Unitedprint.com SE — Radebeul, DE',
            period: 'Jun. 2022 – Jan. 2024',
            description:
                'Developed internal QA tools with Perl, PHP, Laravel and MongoDB. Manual cross-browser testing of 3–5 web portals. Implemented automated click tests with QF-Test integrated into Jenkins pipelines. Created structured test protocols and documentation in Confluence and KiwiTCMS.',
        },
        {
            role: 'Apprenticeship — Fachinformatiker für Anwendungsentwicklung',
            company: 'Unitedprint.com SE & BSZ Elektrotechnik Dresden',
            period: 'Aug. 2019 – Jun. 2022',
            description:
                'Completed dual apprenticeship in application development with final grade \'gut\' (IHK Dresden). Practical project work rated \'sehr gut\' (92 points). After graduation, deployed as tester to bridge a critical QA gap — then moved directly into frontend development.',
        },
        {
            role: 'Web Developer',
            company: 'Unitedprint.com SE — Radebeul, DE',
            period: 'Oct. 2018 – Jul. 2019',
            description:
                'Developed 5–10 new features for online portals and admin tools with PHP, Laravel and Perl. Implemented backend logic, database connections and API integrations. Was the only employee retained after production closure — selected for IT transition based on technical background.',
        },
    ],
    contact: {
        email: 'joga-singh@web.de',
        phone: '+49 176 5781 8593',
        github: 'https://github.com/joga-singh-dayal',
        linkedin: 'https://www.linkedin.com/in/joga-singh-dayal-019a353b6/',
    },
}