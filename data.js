/**
 * Portfolio Data - Daniel Claver Feito
 * Centralización de contenido para fácil mantenimiento
 */

const PORTFOLIO_DATA = {
    profile: {
        name: "Daniel Claver Feito",
        title: "Desarrollador Backend & Especialista en Datos",
        summary: "Ingeniero Informático especializado en optimización de bases de datos, desarrollo con Java y soluciones de inteligencia artificial aplicada.",
        profilePic: "Diseño sin título.png",
        cvLink: "CV_PDF.pdf"
    },
    projects: [
        {
            id: "twitter",
            title: "Twitter Text Formatter",
            tags: ["Java", "ANTLR4", "Compiladores"],
            shortDesc: "Herramienta de procesamiento de texto que utiliza análisis léxico para formatear tweets en HTML estilizado.",
            fullDesc: `
                <p>Herramienta desarrollada para el curso de Procesadores de Lenguaje. Utiliza ANTLR4 y Java para analizar y formatear texto tipo tweet en una salida HTML visualmente estilizada.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Análisis léxico de hashtags, menciones y URLs.</li>
                    <li>Estilizado automático mediante CSS personalizado.</li>
                    <li>Validación del límite clásico de 140 caracteres.</li>
                    <li>Acciones semánticas embebidas directamente en la gramática.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Twitter-Text-Formatter"
        },
        {
            id: "robot",
            title: "Industrial Robot Simulation",
            tags: ["C++", "OpenGL", "Gráficos 3D"],
            shortDesc: "Simulación 3D avanzada de una planta industrial robotizada con brazos articulados e iluminación dinámica.",
            fullDesc: `
                <p>Simulación tridimensional de una planta industrial robotizada. La escena incluye brazos robóticos articulados, cintas transportadoras y sistemas de iluminación dinámicos.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Tres robots articulados con control manual y automático.</li>
                    <li>Entorno dinámico con cintas de transporte y sistemas de partículas (humo).</li>
                    <li>Iluminación avanzada con Normal Maps y Specular Maps.</li>
                    <li>Sistema de cámaras: Libre, Cinemática y Vista de Robot.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Planta-Industrial-Robotizada---Simulaci-n-3D-con-OpenGL"
        },
        {
            id: "token",
            title: "CGM Token Reward System",
            tags: ["Solidity", "ERC-20", "Web3"],
            shortDesc: "Ecosistema de contratos inteligentes para gestión de recompensas y moderación mediante un token ERC-20.",
            fullDesc: `
                <p>Ecosistema de smart contracts desarrollado en Solidity que incluye un token ERC-20 (CGM) y lógica de negocio para gestión de recompensas.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Token estándar ERC-20 con funciones de mint y burn.</li>
                    <li>Sistema de recompensas moderado con límites configurables.</li>
                    <li>Control de acceso mediante listas negras gestionadas por administradores.</li>
                    <li>Roles diferenciados: Owner y Moderadores.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/CGM-Token-Reward-System"
        },
        {
            id: "pascal",
            title: "Pascal to C Translator",
            tags: ["Java", "ANTLR4", "Lógica"],
            shortDesc: "Compilador que traduce código fuente Pascal a código C ejecutable, manejando estructuras de control.",
            fullDesc: `
                <p>Componente de compilador que traduce código fuente Pascal a código C ejecutable, incluyendo procedimientos, funciones y estructuras de control.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Traducción basada en AST (Árbol de Sintaxis Abstracta).</li>
                    <li>Mapeo de tipos de datos, bucles (while, repeat, for) y condicionales.</li>
                    <li>Generación automática de format strings para printf.</li>
                    <li>Gestión de errores mediante un Listener recursivo personalizado.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Pascal-to-C-Translator"
        },
        {
            id: "vaccine",
            title: "Vaccination Simulator",
            tags: ["C", "Pthreads", "Sistemas Operativos"],
            shortDesc: "Simulación concurrente multihilo de un proceso de vacunación masiva utilizando mutexes y variables de condición.",
            fullDesc: `
                <p>Simulación concurrente multihilo de un proceso de vacunación durante una pandemia, desarrollada en C para el curso de Sistemas Operativos.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Uso intensivo de mutexes y variables de condición de pthreads.</li>
                    <li>Sincronización entre fábricas, centros de vacunación y habitantes.</li>
                    <li>Gestión de almacén global y redistribución eficiente de dosis.</li>
                    <li>Reportes estadísticos detallados al finalizar la simulación.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Vaccination-Simulator---Operating-Systems"
        },
        {
            id: "shell",
            title: "miniShell",
            tags: ["C", "System Calls", "POSIX"],
            shortDesc: "Intérprete de comandos (Bash-like) implementado en C para demostrar conceptos de gestión de procesos.",
            fullDesc: `
                <p>Intérprete de comandos (Bash-like) implementado en C para demostrar conceptos clave de gestión de procesos y llamadas al sistema Unix.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Parsers de comandos personalizados (libparser).</li>
                    <li>Redirección de E/S (<, >, 2>) y ejecución en segundo plano (&).</li>
                    <li>Encadenamiento de comandos mediante pipes (|).</li>
                    <li>Soporte para comandos internos y manejo de señales.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/miniShell"
        },
        {
            id: "padel",
            title: "TOUR-PADEL",
            tags: ["Spring Boot", "Java", "Fullstack"],
            shortDesc: "Plataforma web completa para gestión de torneos de pádel con arquitectura en capas y API REST.",
            fullDesc: `
                <p>Plataforma web completa para la gestión de torneos de pádel, permitiendo inscripciones, gestión de pistas y consulta de resultados.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Backend con Spring Boot 3 y persistencia con JPA/Hibernate.</li>
                    <li>Arquitectura en capas (Controlador -> Servicio -> Repositorio).</li>
                    <li>Base de datos H2 persistente en modo archivo.</li>
                    <li>Frontend dinámico consumiendo API REST mediante Fetch.</li>
                    <li>Seguridad básica integrada y validación de datos.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/TOUR-PADEL"
        },
        {
            id: "road-panel-detection",
            title: "Detección de Paneles de Carretera",
            tags: ["Python", "OpenCV", "Visión Artificial"],
            shortDesc: "Sistema de detección automática de paneles informativos en imágenes de carretera usando MSER y Transformada de Hough.",
            fullDesc: `
                <p>Práctica de Visión Artificial para detectar paneles informativos en imágenes de carreteras reales. Se implementaron dos estrategias de detección complementarias evaluadas con métricas estándar de detección de objetos.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Detector MSER (<em>Maximally Stable Extremal Regions</em>) para segmentación de regiones candidatas a panel.</li>
                    <li>Detector alternativo basado en Transformada de Hough para detección de formas rectangulares.</li>
                    <li>Pipeline de preprocesamiento: conversión a espacio HSV, filtrado morfológico y supresión de no máximos.</li>
                    <li>Evaluación automática con métricas de Precisión, Recall e IoU sobre conjunto de test etiquetado.</li>
                    <li>Arquitectura modular con interfaz común para facilitar el intercambio de detectores.</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/VAPractica"
        },
        {
            id: "road-panel-ocr",
            title: "OCR de Paneles de Carretera",
            tags: ["Python", "OpenCV", "Machine Learning", "Visión Artificial"],
            shortDesc: "Sistema OCR completo que lee el texto de paneles de carretera mediante clasificadores LDA+Bayes, PCA+KNN y HOG+Bayes.",
            fullDesc: `
                <p>Práctica de Visión Artificial (4º GII) que implementa un pipeline completo de OCR para leer los caracteres de paneles informativos de autopista recortados. Combina técnicas de visión por computador con clasificadores clásicos de machine learning.</p>
                <h4>Características principales:</h4>
                <ul>
                    <li>Segmentación de caracteres mediante umbralización adaptativa gaussiana y análisis de contornos con filtrado geométrico.</li>
                    <li>Agrupación de caracteres en líneas de texto usando regresión robusta RANSAC.</li>
                    <li>Tres clasificadores implementados y comparados: LDA + Normal Bayes (OpenCV), PCA + KNN y HOG + Normal Bayes.</li>
                    <li>Reducción de dimensionalidad: LDA supervisado (max separabilidad entre clases) y PCA no supervisado (max varianza).</li>
                    <li>Supresión de rectángulos solapados para eliminar artefactos en letras huecas (O, D, B, A...).</li>
                </ul>
            `,
            githubUrl: "https://github.com/Daniel77688/Practica2VA"
        }
    ],
    skills: [
        {
            category: "Lenguajes",
            items: [
                { name: "Java", icon: "code-2" },
                { name: "SQL (MySQL, MongoDB)", icon: "database" },
                { name: "Python & C/C++", icon: "file-code" },
                { name: "Solidity (Web3)", icon: "shield-check" }
            ]
        },
        {
            category: "Frameworks & Backend",
            items: [
                { name: "Spring Boot", icon: "server" },
                { name: "LangChain (IA/RAG)", icon: "brain-circuit" },
                { name: "JUnit & Mockito", icon: "check-circle-2" }
            ]
        },
        {
            category: "Infraestructura & Otros",
            items: [
                { name: "Docker & Azure", icon: "container" },
                { name: "Git & SCRUM", icon: "git-branch" },
                { name: "Architectura en Capas", icon: "layers" }
            ]
        },
        {
            category: "Visión Artificial & IA",
            items: [
                { name: "OpenCV", icon: "eye" },
                { name: "scikit-learn", icon: "cpu" },
                { name: "LDA / PCA / HOG", icon: "bar-chart-2" },
                { name: "MSER & Hough Transform", icon: "scan" }
            ]
        }
    ],
    experience: [
        {
            role: "Desarrollador Backend en Prácticas",
            company: "Mundomar Cruceros",
            date: "Sep 2025 – Mar 2026",
            desc: "Optimización de consultas SQL en sistemas de alta carga (reducción de 45s a < 3s). Automatización de procesos con Java/Spring Boot."
        }
    ],
    education: [
        {
            degree: "Grado en Ingeniería Informática",
            school: "Universidad Rey Juan Carlos",
            date: "2022 – 2026",
            desc: "Enfoque en sistemas distribuidos, IA y desarrollo de compiladores. 4º curso en proceso."
        }
    ]
};
