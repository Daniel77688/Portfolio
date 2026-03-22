# Daniel Claver Feito — Portfolio Interactivo

Portfolio web personal desarrollado con HTML, CSS y JavaScript puro. Diseño moderno con modo oscuro/claro, animaciones y modales de proyectos.

## ✏️ Cómo actualizar el contenido

Todo el contenido vive en **`data.js`**. No necesito tocar el HTML.

### Añadir un proyecto

```js
// En data.js → array projects[]
{
    id: "mi-proyecto",          // ID único (sin espacios)
    title: "Nombre del Proyecto",
    tags: ["Java", "Spring"],   // Etiquetas tecnológicas
    shortDesc: "Descripción corta que aparece en la tarjeta.",
    fullDesc: `
        <p>Descripción completa que aparece en el modal.</p>
        <h4>Características:</h4>
        <ul>
            <li>Feature 1</li>
        </ul>
    `
}
```

### Añadir una habilidad

```js
// En data.js → array skills[] → dentro de la categoría correspondiente
{ name: "Nueva Tecnología", icon: "nombre-icono" }
// Iconos disponibles en: https://lucide.dev
```

### Añadir experiencia o educación

```js
// En data.js → arrays experience[] o education[]
{
    role: "Puesto",
    company: "Empresa",
    date: "2024 – 2025",
    desc: "Descripción de las responsabilidades."
}
```

## 🌙 Características

- Modo oscuro/claro con persistencia en `localStorage`
- Animaciones de scroll (Intersection Observer)
- Modales de detalle por proyecto
- Diseño responsive (mobile-friendly)
- Tipografía: [Inter + Outfit](https://fonts.google.com) · Iconos: [Lucide](https://lucide.dev)

## 🌐 Publico

**GitHub Pages:**
URL disponible en:
