/**
 * Portfolio Interactivo - Daniel Claver Feito
 * Lógica de UI e Renderizado Dinámico
 */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // TEMA (Dark / Light)
    // ============================================================
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    function getStoredTheme() {
        try { return localStorage.getItem('theme'); } catch (e) { return null; }
    }

    function setStoredTheme(theme) {
        try { localStorage.setItem('theme', theme); } catch (e) { }
    }

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (!icon) return;
        icon.setAttribute('data-lucide', theme === 'dark' ? 'moon' : 'sun');
        if (window.lucide) lucide.createIcons();
    }

    const savedTheme = getStoredTheme() || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            setStoredTheme(newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // ============================================================
    // SCROLL REVEAL
    // ============================================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    function observeElements() {
        document.querySelectorAll('.reveal:not(.active)').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active'); // ya visible → revelar sin esperar
            } else {
                revealObserver.observe(el);
            }
        });
    }

    // ============================================================
    // MÓDAL DE PROYECTOS
    // ============================================================
    const modal   = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn  = document.querySelector('.close-modal');

    function openModal(projectId) {
        const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
        if (!project || !modal) return;
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <div class="modal-tags">${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
            ${project.fullDesc}
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (window.lucide) lucide.createIcons();
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal)    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

    // ============================================================
    // RENDERIZADO DINÁMICO
    // ============================================================
    function renderPortfolio() {
        // Proyectos
        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = PORTFOLIO_DATA.projects.map(p => `
                <div class="project-card reveal">
                    <div>
                        <h3>${p.title}</h3>
                        <div class="project-tags">
                            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                        </div>
                        <p>${p.shortDesc}</p>
                    </div>
                    <button class="btn btn-secondary open-details" data-id="${p.id}">Saber más</button>
                </div>
            `).join('');
        }

        // Habilidades
        const skillsContainer = document.getElementById('skills-container');
        if (skillsContainer) {
            skillsContainer.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
                <div class="skill-category">
                    <h4>${cat.category}</h4>
                    <ul class="skill-list">
                        ${cat.items.map(s => `<li><i data-lucide="${s.icon}"></i> ${s.name}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }

        // Experiencia & Educación
        const timeline = document.querySelector('.exp-timeline');
        if (timeline) {
            timeline.innerHTML = [
                ...PORTFOLIO_DATA.experience.map(e => `
                    <div class="timeline-item">
                        <h4>${e.role}</h4>
                        <p class="date">${e.date} | ${e.company}</p>
                        <p>${e.desc}</p>
                    </div>
                `),
                ...PORTFOLIO_DATA.education.map(e => `
                    <div class="timeline-item">
                        <h4>${e.degree}</h4>
                        <p class="date">${e.date} | ${e.school}</p>
                        <p>${e.desc}</p>
                    </div>
                `)
            ].join('');
        }

        // Eventos botones de modal
        document.querySelectorAll('.open-details').forEach(btn => {
            btn.addEventListener('click', () => openModal(btn.getAttribute('data-id')));
        });
    }

    // ============================================================
    // INICIALIZACIÓN (orden correcto)
    // ============================================================
    renderPortfolio();       // 1. Genera el HTML de proyectos y skills
    observeElements();       // 2. Observa/revela los .reveal ya en pantalla
    if (window.lucide) lucide.createIcons(); // 3. Pinta los iconos

    // ============================================================
    // SMOOTH SCROLL
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
