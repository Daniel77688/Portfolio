const PORTFOLIO_DATA_ES = {
    profile: {
        name: "Daniel Claver Feito",
        title: "Desarrollador Backend & Full-Stack",
        email: "daniel77688@gmail.com",
        github: "https://github.com/daniel77688",
        linkedin: "https://linkedin.com/in/daniel-claver-feito-b34043264/",
        cvLink: "CV_PDF_Spanish.pdf",
        cvFilename: "CV_Daniel_Claver_Feito_ES.pdf",
        profilePic: "foto.png",
        about: "Ingeniero Informático graduado por la Universidad Rey Juan Carlos. Especializado en desarrollo backend, diseño de APIs REST y arquitectura de software, con experiencia práctica en integración de IA (arquitectura RAG con LangChain y ChromaDB) y desarrollo full-stack.",
        currentlyLearning: "Profundizando en arquitecturas orientadas a eventos y despliegue de aplicaciones en la nube.",
        softSkills: [
            "Resolución de problemas técnicos de forma lógica y estructurada.",
            "Autodidacta con capacidad para adoptar nuevas tecnologías rápidamente.",
            "Colaboración en entornos de desarrollo ágiles (SCRUM).",
            "Atención al detalle en rendimiento de bases de datos y legibilidad del código."
        ],
        languages: [
            { name: "Español", level: "Nativo" },
            { name: "Inglés", level: "Avanzado" }
        ]
    },
    ui: {
        navAbout:        "Sobre mí",
        navProjects:     "Proyectos",
        navSkills:       "Habilidades",
        navExperience:   "Experiencia",
        downloadCV:      "Descargar CV",
        viewProjects:    "Ver proyectos",
        featuredTitle:   "Proyectos Destacados",
        othersTitle:     "Otros Proyectos",
        skillsTitle:     "Habilidades",
        aptitudesTitle:  "Aptitudes",
        languagesTitle:  "Idiomas",
        expEduTitle:     "Experiencia & Formación",
        expTitle:        "Experiencia Laboral",
        eduTitle:        "Formación Académica",
        learnLabel:      "Actualmente aprendiendo:",
        moreBtn:         "Saber más →",
        githubModal:     "Código en GitHub",
        footer:          "© 2026 Daniel Claver Feito. Todos los derechos reservados.",
        collaborator:    "Colaboración con"
    },
    featuredProjects: [
        {
            id: "noise",
            title: "NOISE",
            tags: ["React 19", "FastAPI", "Python", "IBM watsonx.ai", "Granite 4", "Vite", "SSE", "SHA-256"],
            shortDesc: "Herramienta de escritura creativa donde la IA muta el texto en tiempo real. El único acto creativo del humano es decidir cuándo parar — ese instante queda sellado en un certificado SHA-256 infalsificable.",
            fullDesc: `
                <p>Proyecto desarrollado junto a <strong>Vicente Navas Martínez</strong> para el <em>AI Creator Challenge with IBM Bob</em> (julio 2026). NOISE invierte la relación habitual con los modelos generativos: la IA no entrega un texto terminado, entrega un texto <strong>vivo que se corrompe en tiempo real</strong>. Cada pocos segundos el modelo añade una frase nueva al final y reescribe todas las anteriores, escalando el nivel de "ruido" de 0 a 10.</p>
                <h4>Problema que resuelve:</h4>
                <p>La IA escribe demasiado bien y demasiado igual para todos. NOISE convierte el acto de <strong>parar</strong> en la decisión creativa del usuario: parar pronto da un texto fiel al tema original; parar tarde da un texto irreconocible y único. Ese instante es irreversible (HTTP 409 garantizado por diseño) y queda certificado.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li><strong>Motor de degradación en tiempo real</strong> via <em>Server-Sent Events</em> (SSE): cada tick el backend muta el texto completo y lo transmite al frontend sin polling.</li>
                    <li><strong>IBM watsonx.ai + Granite 4</strong> (<code>ibm/granite-4-h-small</code>) con temperatura dinámica que escala con el ruido: <code>min(0.55 + nivel × 0.06, 1.0)</code>. Más degradación → más deriva del modelo.</li>
                    <li><strong>Salida estructurada validada</strong>: Granite responde en <code>{"frases": [...]}</code>. El sistema valida cardinalidad exacta, mutación real y aplica un fallback programático de dos etapas si la respuesta no es válida.</li>
                    <li><strong>Diff palabra a palabra</strong> (<code>marcar_cambios()</code>): resalta en negrita todo lo mutado entre versiones, visualizando la deriva en el frontend con React 19.</li>
                    <li><strong>Certificado SHA-256</strong>: al pulsar STOP, la sesión se cierra de forma irreversible y se genera un certificado con el prompt original, el texto base, el texto final elegido, el historial completo de transformaciones y el timestamp de la decisión humana. Verificable en <code>/api/certificado/verificar</code>.</li>
                </ul>
            `,
            githubUrl: "https://github.com/vicentenavasmar/NOISE",
            collaborator: "Vicente Navas Martínez"
        },
        {
            id: "urjc-scraper",
            title: "URJC Scraper — TFG",
            tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "RAG", "Selenium"],
            shortDesc: "Aplicación web completa con búsqueda semántica sobre producción científica de la URJC, integrando IA generativa con arquitectura RAG.",
            fullDesc: `
                <p>Trabajo de Fin de Grado. Sistema full-stack que extrae, procesa y permite consultar en lenguaje natural la producción científica de la URJC mediante una arquitectura RAG (Retrieval-Augmented Generation).</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Scraping automatizado de datos académicos con Selenium y BeautifulSoup4, almacenados y procesados con Pandas.</li>
                    <li>Indexación vectorial de documentos con ChromaDB y embeddings generados mediante Sentence Transformers.</li>
                    <li>Motor de búsqueda semántica con filtros avanzados (profesor, tipo, cuartil SJR, rango de fechas) orquestado con LangChain.</li>
                    <li>API REST construida con FastAPI con autenticación de usuarios (bcrypt, SQLModel), validación de datos y arquitectura modular por capas.</li>
                    <li>Frontend dinámico con interfaz de chat y filtros integrados que consume la API REST.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/URJC-Scraper"
        },
        {
            id: "habit-tracker",
            title: "HabitTracker",
            tags: ["Angular", "FastAPI", "Python", "TypeScript", "SCSS", "SQLAlchemy"],
            shortDesc: "Aplicación web full-stack para el seguimiento de rutinas diarias con sistema de rachas, estadísticas y visualización en calendario estilo heatmap.",
            fullDesc: `
                <p>Plataforma web completa desarrollada desde cero para el diseño, seguimiento y análisis de hábitos personales con frecuencias flexibles (diarias, semanales, mensuales o días personalizados).</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Frontend desarrollado con Angular 17 utilizando componentes standalone, tipado estricto con TypeScript, servicios reactivos (RxJS) y estilos modulares en SCSS con sistema de temas claro/oscuro.</li>
                    <li>Backend construido en Python con FastAPI y SQLAlchemy ORM sobre SQLite, estructurado en arquitectura limpia por capas (Controladores, Servicios, Modelos y Schemas con Pydantic v2).</li>
                    <li>Sistema de autenticación y gestión de usuarios con hashing de contraseñas mediante bcrypt.</li>
                    <li>Módulo visual de calendario con vistas semanal, mensual y mapa de calor anual (heatmap tipo GitHub) para analizar la constancia y cumplimiento.</li>
                    <li>Suite de pruebas automatizadas en backend desarrollada con pytest y cliente HTTP asíncrono httpx.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/HabitTracker"
        },
        {
            id: "padel",
            title: "TOUR-PADEL",
            tags: ["Spring Boot", "Java", "JPA/Hibernate", "API REST", "H2"],
            shortDesc: "Plataforma completa para la gestión de torneos de pádel, inscripciones y pistas mediante una API REST documentada.",
            fullDesc: `
                <p>Aplicación web backend-first construida con Spring Boot 3 para administrar ligas y torneos de pádel. Implementa un modelo de datos relacional robusto con JPA y control de negocio estricto.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Arquitectura limpia en capas bien separadas: Controlador, Servicio y Repositorio.</li>
                    <li>Persistencia mediante JPA/Hibernate sobre base de datos H2 persistida en modo archivo.</li>
                    <li>API REST completa consumida de forma dinámica mediante peticiones Fetch asíncronas en el frontend.</li>
                    <li>Validación de datos entrantes e integración de seguridad básica.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/TOUR-PADEL"
        }
    ],
    otherProjects: [
        {
            id: "road-panel-ocr",
            title: "OCR de Paneles de Carretera",
            tags: ["Python", "OpenCV", "Machine Learning", "Visión Artificial"],
            desc: "Pipeline de reconocimiento de caracteres en paneles de autopista comparando clasificadores LDA, PCA, KNN y HOG.",
            fullDesc: `
                <p>Desarrollo de un sistema OCR completo desde cero para la extracción y lectura automática de texto en imágenes reales de paneles informativos de autopistas.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Segmentación precisa de caracteres mediante umbralización adaptativa gaussiana y análisis geométrico de contornos.</li>
                    <li>Agrupación de texto en líneas físicas mediante regresión lineal robusta (RANSAC).</li>
                    <li>Evaluación y comparación empírica de múltiples enfoques de clasificación: LDA + Normal Bayes (OpenCV), PCA + KNN y descriptores HOG + Normal Bayes.</li>
                    <li>Técnicas avanzadas de supresión de solapamientos para evitar lecturas duplicadas en letras huecas.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Practica2VA"
        },
        {
            id: "robot",
            title: "Simulación de Robot Industrial 3D",
            tags: ["C++", "OpenGL", "Gráficos 3D"],
            desc: "Entorno interactivo en 3D que simula una planta robotizada con iluminación avanzada, partículas y sistema multicámara.",
            fullDesc: `
                <p>Simulación tridimensional de una célula robótica industrial utilizando OpenGL nativo y C++, enfocada en interactividad en tiempo real y gráficos realistas.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Modelado cinemático e interactivo de tres brazos robóticos articulados con modo manual y automático.</li>
                    <li>Renderizado avanzado con iluminación local, Normal Maps y Specular Maps.</li>
                    <li>Simulación física de partículas para efectos ambientales (humo/vapor).</li>
                    <li>Sistema multicámara en tiempo real: cámara libre, cinemática de seguimiento y vista subjetiva del efector.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Planta-Industrial-Robotizada---Simulaci-n-3D-con-OpenGL"
        },
        {
            id: "road-panel-detection",
            title: "Detección de Paneles",
            tags: ["Python", "OpenCV", "Visión Artificial"],
            desc: "Detección automática de paneles viales en imágenes de carretera comparando MSER y la Transformada de Hough.",
            fullDesc: `
                <p>Práctica de Visión Artificial que compara dos métodos clásicos para la segmentación y detección de señales de tráfico cuadradas o rectangulares en condiciones de iluminación reales.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Segmentación de color en el espacio HSV para filtrar el color azul característico de los paneles.</li>
                    <li>Uso del algoritmo MSER (Maximally Stable Extremal Regions) para agrupar regiones de píxeles estables ante umbrales variables.</li>
                    <li>Implementación de la Transformada de Hough para la detección de rectas y verificación de la geometría rectangular del panel.</li>
                    <li>Cálculo de métricas de rendimiento (Precisión, Recall e IoU) sobre un conjunto de datos anotado.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/VAPractica"
        },
        {
            id: "twitter",
            title: "Twitter Text Formatter",
            tags: ["Java", "ANTLR4", "Compiladores"],
            desc: "Procesador sintáctico que analiza tweets en tiempo real para extraer hashtags, menciones y URLs, transformándolos en HTML.",
            fullDesc: `
                <p>Analizador de texto desarrollado en Java utilizando la herramienta generadora de analizadores ANTLR4 para procesar sintaxis similar a la de un tweet.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Definición de reglas léxicas y sintácticas para hashtags (#), menciones (@) y direcciones web (http/https).</li>
                    <li>Inyección de acciones semánticas y traducción a formato HTML estilizado mediante clases de escucha (Listeners) de ANTLR.</li>
                    <li>Manejo y validación del límite de caracteres en el backend.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Twitter-Text-Formatter"
        },
        {
            id: "pascal",
            title: "Pascal to C Translator",
            tags: ["Java", "ANTLR4", "Compiladores"],
            desc: "Traductor de código fuente que convierte programas estructurados en Pascal a código C ejecutable mediante análisis de AST.",
            fullDesc: `
                <p>Traductor de lenguajes escrito en Java y ANTLR4 para transpilar programas de una sintaxis Pascal a código fuente C equivalente y compilable.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Generación de un Árbol de Sintaxis Abstracta (AST) para representar las estructuras de control, bucles (for, while, repeat) y condicionales de Pascal.</li>
                    <li>Mapeo de tipos primitivos de datos y traducción de procedimientos y funciones locales.</li>
                    <li>Traducción semántica del formato de impresión y flujos de entrada/salida a funciones estándar de C (printf/scanf).</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Pascal-to-C-Translator"
        },
        {
            id: "vaccine",
            title: "Vaccination Simulator",
            tags: ["C", "Pthreads", "Concurrencia"],
            desc: "Simulación concurrente multihilo de un centro de vacunación masiva usando mutexes, variables de condición y barreras.",
            fullDesc: `
                <p>Simulador concurrente escrito en C para sistemas tipo Unix que simula la cadena de distribución y aplicación de vacunas bajo condiciones de concurrencia intensa.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Modelado de actores (fábricas, repartidores, centros y ciudadanos) como hilos independientes mediante la librería pthread.</li>
                    <li>Sincronización robusta para evitar condiciones de carrera empleando mutexes y variables de condición.</li>
                    <li>Implementación de un almacén compartido seguro contra hilos (thread-safe).</li>
                    <li>Generación de métricas de tiempo de espera y efectividad de distribución al término de la ejecución.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Vaccination-Simulator---Operating-Systems"
        },
        {
            id: "shell",
            title: "miniShell",
            tags: ["C", "POSIX API", "System Calls"],
            desc: "Intérprete de comandos Bash-like que implementa redirecciones (I/O), ejecución en segundo plano y tuberías (pipes).",
            fullDesc: `
                <p>Intérprete de comandos personalizado (mini-shell) en C que interactúa directamente con la API POSIX y llamadas al sistema Unix.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Llamadas al sistema fork() y exec() para la creación y reemplazo de procesos de comandos.</li>
                    <li>Redirecciones de entrada y salida estándar mediante dup2() y manejo de archivos descriptores.</li>
                    <li>Encadenamiento de múltiples comandos concurrentes usando llamadas a pipe().</li>
                    <li>Control de ejecución en segundo plano (&) y gestión de señales (como SIGINT) para procesos hijo.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/miniShell"
        },
        {
            id: "token",
            title: "CGM Token Reward System",
            tags: ["Solidity", "ERC-20", "Smart Contracts"],
            desc: "Contratos inteligentes para la emisión y quemado de un token de recompensas moderado con control de accesos y roles.",
            fullDesc: `
                <p>Ecosistema de Smart Contracts desarrollado en Solidity utilizando la biblioteca OpenZeppelin para la gestión de un token de utilidad estándar ERC-20.</p>
                <h4>Aspectos clave del desarrollo:</h4>
                <ul>
                    <li>Implementación del token ERC-20 con soporte para acuñación (mint) y quema (burn).</li>
                    <li>Control de acceso basado en roles (Owner y Moderadores) para regular el reparto de recompensas.</li>
                    <li>Gestión de listas de moderación y restricciones de transferencias mediante listas negras administrativas.</li>
                    <li>Pruebas unitarias básicas de seguridad en contratos y límites de retiro.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/CGM-Token-Reward-System"
        }
    ],
    skills: [
        {
            category: "Backend & Datos",
            items: [
                { name: "Java", icon: "code-2" },
                { name: "Spring Boot", icon: "server" },
                { name: "FastAPI / Python", icon: "terminal" },
                { name: "SQL (MySQL, MongoDB)", icon: "database" },
                { name: "JUnit & Mockito", icon: "check-circle-2" }
            ]
        },
        {
            category: "Frontend & Web",
            items: [
                { name: "Angular (TypeScript)", icon: "code-2" },
                { name: "React / Vite", icon: "code-2" },
                { name: "HTML5 / CSS3 / SCSS", icon: "file-code" },
                { name: "RxJS / REST APIs", icon: "layers" }
            ]
        },
        {
            category: "Sistemas & IA",
            items: [
                { name: "Python / C / C++", icon: "terminal" },
                { name: "LangChain & ChromaDB (RAG)", icon: "brain-circuit" },
                { name: "IBM watsonx.ai / Granite", icon: "brain-circuit" },
                { name: "OpenCV & Machine Learning", icon: "eye" }
            ]
        },
        {
            category: "Metodologías & DevOps",
            items: [
                { name: "Docker", icon: "container" },
                { name: "Git & GitHub", icon: "git-branch" },
                { name: "Metodología SCRUM", icon: "users" },
                { name: "Arquitectura en Capas", icon: "layers" }
            ]
        }
    ],
    experience: [
        {
            role: "Desarrollador Backend en Prácticas",
            company: "Mundomar Cruceros",
            date: "Jun 2025 – May 2026",
            desc: "De prácticas en modelado de datos a desarrollo backend. En Data & Analytics, gestioné bases de datos MySQL y KPIs corporativos con MyDBR. En Ingeniería de Software, refactoricé en Java los filtros del buscador principal (capas DTO, agrupamientos y virtualización), optimicé consultas SQL dinámicas aislando subconsultas y participé en ciclos de QA y resolución de bugs en producción."
        }
    ],
    education: [
        {
            degree: "Grado en Ingeniería Informática",
            school: "Universidad Rey Juan Carlos",
            date: "2022 – 2026",
            desc: "Graduado en Ingeniería Informática con especialización en desarrollo de software y computación. TFG desarrollado en la integración de Inteligencia Artificial (RAG) sobre producción científica."
        }
    ]
};

const PORTFOLIO_DATA_EN = {
    profile: {
        name: "Daniel Claver Feito",
        title: "Backend & Full-Stack Developer",
        email: "daniel77688@gmail.com",
        github: "https://github.com/daniel77688",
        linkedin: "https://linkedin.com/in/daniel-claver-feito-b34043264/",
        cvLink: "CV_PDF_English.pdf",
        cvFilename: "CV_Daniel_Claver_Feito_EN.pdf",
        profilePic: "foto.png",
        about: "Computer Science Engineer graduated from Universidad Rey Juan Carlos. Specialized in backend development, REST API design and software architecture, with hands-on experience in AI integration (RAG architecture with LangChain and ChromaDB) and full-stack development.",
        currentlyLearning: "Deepening my knowledge of event-driven architectures and cloud application deployment.",
        softSkills: [
            "Logical and structured technical problem solving.",
            "Self-taught with the ability to quickly adopt new technologies.",
            "Collaboration in agile development environments (SCRUM).",
            "Attention to detail in database performance and code readability."
        ],
        languages: [
            { name: "Spanish", level: "Native" },
            { name: "English", level: "Advanced" }
        ]
    },
    ui: {
        navAbout:        "About me",
        navProjects:     "Projects",
        navSkills:       "Skills",
        navExperience:   "Experience",
        downloadCV:      "Download CV",
        viewProjects:    "View projects",
        featuredTitle:   "Featured Projects",
        othersTitle:     "Other Projects",
        skillsTitle:     "Skills",
        aptitudesTitle:  "Soft Skills",
        languagesTitle:  "Languages",
        expEduTitle:     "Experience & Education",
        expTitle:        "Work Experience",
        eduTitle:        "Education",
        learnLabel:      "Currently learning:",
        moreBtn:         "Learn more →",
        githubModal:     "View on GitHub",
        footer:          "© 2026 Daniel Claver Feito. All rights reserved.",
        collaborator:    "Collaboration with"
    },
    featuredProjects: [
        {
            id: "noise",
            title: "NOISE",
            tags: ["React 19", "FastAPI", "Python", "IBM watsonx.ai", "Granite 4", "Vite", "SSE", "SHA-256"],
            shortDesc: "Creative writing tool where AI mutates text in real time. The only human creative act is deciding when to stop — that instant is sealed in an unforgeable SHA-256 certificate.",
            fullDesc: `
                <p>Project built alongside <strong>Vicente Navas Martínez</strong> for the <em>AI Creator Challenge with IBM Bob</em> (July 2026). NOISE inverts the usual relationship with generative models: the AI doesn't hand you a finished text — it hands you a text that is <strong>alive and corroding in real time</strong>. Every few seconds the model adds a new sentence at the end and rewrites all previous ones, escalating the "noise" level from 0 to 10.</p>
                <h4>Problem it solves:</h4>
                <p>AI writes too well and too identically for everyone. NOISE turns the act of <strong>stopping</strong> into the user's creative decision: stopping early gives a text faithful to the original theme; stopping late gives an unrecognisable and uniquely yours text. That instant is irreversible (HTTP 409 guaranteed by design) and becomes certified.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li><strong>Real-time degradation engine</strong> via <em>Server-Sent Events</em> (SSE): on every tick the backend mutates the full text and streams it to the frontend without polling.</li>
                    <li><strong>IBM watsonx.ai + Granite 4</strong> (<code>ibm/granite-4-h-small</code>) with dynamic temperature scaling with noise: <code>min(0.55 + level × 0.06, 1.0)</code>. More degradation → more model drift.</li>
                    <li><strong>Validated structured output</strong>: Granite replies with <code>{"frases": [...]}</code>. The system validates exact cardinality, real mutation, and applies a two-stage programmatic fallback if the response is invalid.</li>
                    <li><strong>Word-by-word diff</strong> (<code>marcar_cambios()</code>): highlights in bold everything mutated between versions, visualising the drift in the React 19 frontend.</li>
                    <li><strong>SHA-256 certificate</strong>: pressing STOP irreversibly closes the session and generates a certificate containing the original prompt, the base text, the chosen final text, the complete transformation history, and the timestamp of the human decision. Verifiable at <code>/api/certificado/verificar</code>.</li>
                </ul>
            `,
            githubUrl: "https://github.com/vicentenavasmar/NOISE",
            collaborator: "Vicente Navas Martínez"
        },
        {
            id: "urjc-scraper",
            title: "URJC Scraper — Final Degree Project",
            tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "RAG", "Selenium"],
            shortDesc: "Full-stack web application with semantic search over the URJC's scientific output, integrating generative AI with a RAG architecture.",
            fullDesc: `
                <p>Final Degree Project. Full-stack system that extracts, processes and enables natural language querying of the URJC's scientific production via a RAG (Retrieval-Augmented Generation) architecture.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Automated scraping of academic data with Selenium and BeautifulSoup4, stored and processed with Pandas.</li>
                    <li>Vector indexing of documents with ChromaDB and embeddings generated via Sentence Transformers.</li>
                    <li>Semantic search engine with advanced filters (professor, type, SJR quartile, date range) orchestrated with LangChain.</li>
                    <li>REST API built with FastAPI with user authentication (bcrypt, SQLModel), data validation and modular layered architecture.</li>
                    <li>Dynamic frontend with chat interface and integrated filters consuming the REST API.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/URJC-Scraper"
        },
        {
            id: "habit-tracker",
            title: "HabitTracker",
            tags: ["Angular", "FastAPI", "Python", "TypeScript", "SCSS", "SQLAlchemy"],
            shortDesc: "Full-stack web application for tracking daily routines with a streak system, statistics, and GitHub-style heatmap calendar visualisation.",
            fullDesc: `
                <p>Full web platform built from scratch for designing, tracking and analysing personal habits with flexible frequencies (daily, weekly, monthly or custom days).</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Frontend built with Angular 17 using standalone components, strict TypeScript typing, reactive services (RxJS) and modular SCSS with light/dark theme system.</li>
                    <li>Backend built in Python with FastAPI and SQLAlchemy ORM over SQLite, structured in clean layered architecture (Controllers, Services, Models and Schemas with Pydantic v2).</li>
                    <li>Authentication and user management system with password hashing via bcrypt.</li>
                    <li>Visual calendar module with weekly, monthly and annual heatmap views (GitHub-style) to analyse consistency and completion.</li>
                    <li>Automated backend test suite built with pytest and async HTTP client httpx.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/HabitTracker"
        },
        {
            id: "padel",
            title: "TOUR-PADEL",
            tags: ["Spring Boot", "Java", "JPA/Hibernate", "REST API", "H2"],
            shortDesc: "Complete platform for managing padel tournaments, registrations and courts through a documented REST API.",
            fullDesc: `
                <p>Backend-first web application built with Spring Boot 3 to manage padel leagues and tournaments. Implements a robust relational data model with JPA and strict business logic.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Clean layered architecture with well-separated concerns: Controller, Service and Repository.</li>
                    <li>Persistence via JPA/Hibernate over an H2 database persisted in file mode.</li>
                    <li>Full REST API consumed dynamically via asynchronous Fetch requests in the frontend.</li>
                    <li>Incoming data validation and basic security integration.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/TOUR-PADEL"
        }
    ],
    otherProjects: [
        {
            id: "road-panel-ocr",
            title: "Road Sign OCR",
            tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
            desc: "Character recognition pipeline for motorway signs, comparing LDA, PCA, KNN and HOG classifiers.",
            fullDesc: `
                <p>Development of a full OCR system from scratch for automatic text extraction and reading from real-world motorway information sign images.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Precise character segmentation via Gaussian adaptive thresholding and geometric contour analysis.</li>
                    <li>Grouping of text into physical lines via robust linear regression (RANSAC).</li>
                    <li>Empirical evaluation and comparison of multiple classification approaches: LDA + Normal Bayes (OpenCV), PCA + KNN and HOG descriptors + Normal Bayes.</li>
                    <li>Advanced overlap suppression techniques to avoid duplicate readings in hollow letters.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Practica2VA"
        },
        {
            id: "robot",
            title: "3D Industrial Robot Simulation",
            tags: ["C++", "OpenGL", "3D Graphics"],
            desc: "Interactive 3D environment simulating a robotic plant with advanced lighting, particles and a multi-camera system.",
            fullDesc: `
                <p>Three-dimensional simulation of an industrial robotic cell using native OpenGL and C++, focused on real-time interactivity and realistic graphics.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Kinematic and interactive modelling of three articulated robotic arms with manual and automatic modes.</li>
                    <li>Advanced rendering with local lighting, Normal Maps and Specular Maps.</li>
                    <li>Physical particle simulation for environmental effects (smoke/steam).</li>
                    <li>Real-time multi-camera system: free camera, tracking cinematics and effector's subjective view.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Planta-Industrial-Robotizada---Simulaci-n-3D-con-OpenGL"
        },
        {
            id: "road-panel-detection",
            title: "Road Sign Detection",
            tags: ["Python", "OpenCV", "Computer Vision"],
            desc: "Automatic detection of road signs in highway images, comparing MSER and the Hough Transform.",
            fullDesc: `
                <p>Computer Vision exercise comparing two classical methods for the segmentation and detection of square or rectangular traffic signs under real lighting conditions.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Colour segmentation in HSV space to filter the characteristic blue of the signs.</li>
                    <li>MSER (Maximally Stable Extremal Regions) algorithm to group pixel regions stable across varying thresholds.</li>
                    <li>Hough Transform implementation for line detection and verification of the rectangular panel geometry.</li>
                    <li>Calculation of performance metrics (Precision, Recall and IoU) on an annotated dataset.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/VAPractica"
        },
        {
            id: "twitter",
            title: "Twitter Text Formatter",
            tags: ["Java", "ANTLR4", "Compilers"],
            desc: "Syntactic processor that analyses tweets in real time to extract hashtags, mentions and URLs, converting them to HTML.",
            fullDesc: `
                <p>Text analyser built in Java using the ANTLR4 parser generator to process tweet-like syntax.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Definition of lexical and syntactic rules for hashtags (#), mentions (@) and web addresses (http/https).</li>
                    <li>Injection of semantic actions and translation to styled HTML via ANTLR Listeners.</li>
                    <li>Backend handling and validation of the character limit.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Twitter-Text-Formatter"
        },
        {
            id: "pascal",
            title: "Pascal to C Translator",
            tags: ["Java", "ANTLR4", "Compilers"],
            desc: "Source code translator that converts structured Pascal programs into executable C code via AST analysis.",
            fullDesc: `
                <p>Language translator written in Java and ANTLR4 to transpile Pascal programs into equivalent, compilable C source code.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Abstract Syntax Tree (AST) generation to represent Pascal's control structures, loops (for, while, repeat) and conditionals.</li>
                    <li>Primitive data type mapping and translation of local procedures and functions.</li>
                    <li>Semantic translation of print format and I/O streams to standard C functions (printf/scanf).</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Pascal-to-C-Translator"
        },
        {
            id: "vaccine",
            title: "Vaccination Simulator",
            tags: ["C", "Pthreads", "Concurrency"],
            desc: "Multi-threaded concurrent simulation of a mass vaccination centre using mutexes, condition variables and barriers.",
            fullDesc: `
                <p>Concurrent simulator written in C for Unix systems that simulates the vaccine distribution and administration chain under intense concurrency conditions.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>Modelling of actors (factories, distributors, centres and citizens) as independent threads via the pthread library.</li>
                    <li>Robust synchronisation to avoid race conditions using mutexes and condition variables.</li>
                    <li>Implementation of a thread-safe shared storage.</li>
                    <li>Generation of wait time and distribution effectiveness metrics at the end of execution.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Vaccination-Simulator---Operating-Systems"
        },
        {
            id: "shell",
            title: "miniShell",
            tags: ["C", "POSIX API", "System Calls"],
            desc: "Bash-like command interpreter implementing I/O redirections, background execution and pipes.",
            fullDesc: `
                <p>Custom command interpreter (mini-shell) in C that directly interacts with the POSIX API and Unix system calls.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>fork() and exec() system calls for process creation and command replacement.</li>
                    <li>Standard input/output redirections via dup2() and file descriptor management.</li>
                    <li>Chaining of multiple concurrent commands using pipe() calls.</li>
                    <li>Background execution control (&) and signal handling (e.g. SIGINT) for child processes.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/miniShell"
        },
        {
            id: "token",
            title: "CGM Token Reward System",
            tags: ["Solidity", "ERC-20", "Smart Contracts"],
            desc: "Smart contracts for minting and burning a moderated reward token with access control and role management.",
            fullDesc: `
                <p>Smart Contract ecosystem developed in Solidity using the OpenZeppelin library to manage a standard ERC-20 utility token.</p>
                <h4>Key development aspects:</h4>
                <ul>
                    <li>ERC-20 token implementation with support for minting and burning.</li>
                    <li>Role-based access control (Owner and Moderators) to regulate reward distribution.</li>
                    <li>Moderation list management and transfer restrictions via administrative blacklists.</li>
                    <li>Basic security unit tests on contracts and withdrawal limits.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/CGM-Token-Reward-System"
        }
    ],
    skills: [
        {
            category: "Backend & Data",
            items: [
                { name: "Java", icon: "code-2" },
                { name: "Spring Boot", icon: "server" },
                { name: "FastAPI / Python", icon: "terminal" },
                { name: "SQL (MySQL, MongoDB)", icon: "database" },
                { name: "JUnit & Mockito", icon: "check-circle-2" }
            ]
        },
        {
            category: "Frontend & Web",
            items: [
                { name: "Angular (TypeScript)", icon: "code-2" },
                { name: "React / Vite", icon: "code-2" },
                { name: "HTML5 / CSS3 / SCSS", icon: "file-code" },
                { name: "RxJS / REST APIs", icon: "layers" }
            ]
        },
        {
            category: "Systems & AI",
            items: [
                { name: "Python / C / C++", icon: "terminal" },
                { name: "LangChain & ChromaDB (RAG)", icon: "brain-circuit" },
                { name: "IBM watsonx.ai / Granite", icon: "brain-circuit" },
                { name: "OpenCV & Machine Learning", icon: "eye" }
            ]
        },
        {
            category: "Methodologies & DevOps",
            items: [
                { name: "Docker", icon: "container" },
                { name: "Git & GitHub", icon: "git-branch" },
                { name: "SCRUM Methodology", icon: "users" },
                { name: "Layered Architecture", icon: "layers" }
            ]
        }
    ],
    experience: [
        {
            role: "Backend Developer Intern",
            company: "Mundomar Cruceros",
            date: "Jun 2025 – May 2026",
            desc: "From data modelling internship to backend development. In Data & Analytics, managed MySQL databases and corporate KPIs with MyDBR. In Software Engineering, refactored the main search engine filters in Java (DTO layers, groupings and virtualisation), optimised dynamic SQL queries by isolating subqueries, and participated in QA cycles and production bug fixing."
        }
    ],
    education: [
        {
            degree: "Bachelor's Degree in Computer Science Engineering",
            school: "Universidad Rey Juan Carlos",
            date: "2022 – 2026",
            desc: "Graduated in Computer Science Engineering with a specialisation in software development and computing. Final Degree Project focused on Artificial Intelligence (RAG) integration over scientific production."
        }
    ]
};

let currentLang = 'es';
let PORTFOLIO_DATA = PORTFOLIO_DATA_ES;

function setLang(lang) {
    currentLang = lang;
    PORTFOLIO_DATA = lang === 'en' ? PORTFOLIO_DATA_EN : PORTFOLIO_DATA_ES;
}
