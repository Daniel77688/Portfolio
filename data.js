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
            `
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
            `
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
            `
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
            `
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
            `
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
            `
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
                </ul>
            `
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
