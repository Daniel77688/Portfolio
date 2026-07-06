/**
 * Portfolio Data - Daniel Claver Feito
 * Contenido centralizado para fácil mantenimiento, optimizado sin clichés de IA.
 */

const PORTFOLIO_DATA = {
    profile: {
        name: "Daniel Claver Feito",
        title: "Desarrollador Backend",
        email: "daniel77688@gmail.com",
        github: "https://github.com/daniel77688",
        linkedin: "https://linkedin.com/in/daniel-claver-feito-b34043264/",
        cvLink: "CV_PDF.pdf",
        profilePic: "foto.png",
        about: "Ingeniero Informático por la Universidad Rey Juan Carlos. Me especializo en el desarrollo backend, bases de datos y la integración de inteligencia artificial. Actualmente me encuentro realizando mi Trabajo de Fin de Grado (TFG) enfocado en este ámbito, en el cual he implementado una IA en una aplicación con una arquitectura RAG (Retrieval-Augmented Generation) orquestada con LangChain y utilizando ChromaDB para la gestión y búsqueda de embeddings vectoriales.",
        currentlyLearning: "Profundizando en el diseño de microservicios y despliegues eficientes en la nube.",
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
    // Proyectos principales destacados (con descripciones detalladas)
    featuredProjects: [
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
            githubUrl: "https://github.com/Daniel77688"
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
        },
        {
            id: "road-panel-ocr",
            title: "OCR de Paneles de Carretera",
            tags: ["Python", "OpenCV", "Machine Learning", "Visión Artificial"],
            shortDesc: "Pipeline de reconocimiento de caracteres en paneles de autopista comparando clasificadores LDA, PCA, KNN y HOG.",
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
        }
    ],
    // Otros proyectos listados con soporte de ID y fullDesc para poder abrir el modal "Saber más"
    otherProjects: [
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
                { name: "SQL (MySQL, MongoDB)", icon: "database" },
                { name: "JUnit & Mockito", icon: "check-circle-2" }
            ]
        },
        {
            category: "Sistemas & Lenguajes",
            items: [
                { name: "Python", icon: "file-code" },
                { name: "C & C++", icon: "terminal" },
                { name: "Solidity (Web3)", icon: "shield-check" }
            ]
        },
        {
            category: "Visión Artificial & IA",
            items: [
                { name: "OpenCV", icon: "eye" },
                { name: "scikit-learn (ML)", icon: "cpu" },
                { name: "LangChain (IA/RAG)", icon: "brain-circuit" },
                { name: "Extracción HOG / PCA / LDA", icon: "bar-chart-2" }
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
            date: "Sep 2025 – Abril 2026",
            desc: "De prácticas en modelado de datos a desarrollo backend. En Data & Analytics, gestioné bases de datos MySQL y KPIs corporativos con MyDBR. En Ingeniería de Software, refactoricé en Java los filtros del buscador principal (capas DTO, agrupamientos y virtualización), optimicé consultas SQL dinámicas aislando subconsultas y participé en ciclos de QA y resolución de bugs en producción."
        }
    ],
    education: [
        {
            degree: "Grado en Ingeniería Informática",
            school: "Universidad Rey Juan Carlos",
            date: "2022 – 2026",
            desc: "Especialización en desarrollo de software y computación. Actualmente cursando el último año (pendiente únicamente de la entrega de TFG y una asignatura teórica)."
        }
    ]
};
