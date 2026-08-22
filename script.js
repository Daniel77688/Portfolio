document.addEventListener('DOMContentLoaded', () => {

    const modal    = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn  = document.querySelector('.close-modal');

    function openModal(projectId) {
        const project = PORTFOLIO_DATA.featuredProjects.find(p => p.id === projectId) ||
                        PORTFOLIO_DATA.otherProjects.find(p => p.id === projectId);
        if (!project || !modal) return;

        const ui = PORTFOLIO_DATA.ui;
        const collaboratorBadge = project.collaborator
            ? `<div class="modal-collaborator">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                   <span>${ui.collaborator}: <strong>${project.collaborator}</strong></span>
               </div>`
            : '';

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            ${collaboratorBadge}
            <div class="modal-tags">
                ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            ${project.fullDesc}
            <div class="modal-footer">
                <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    ${ui.githubModal}
                </a>
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal)    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

    function renderPortfolio() {
        const profile = PORTFOLIO_DATA.profile;
        const ui      = PORTFOLIO_DATA.ui;
        const aboutContent = document.getElementById('about-content');
        if (aboutContent) {
            aboutContent.innerHTML = `
                <p class="about-bio">${profile.about}</p>
                <div class="learning-box">
                    <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        ${ui.learnLabel}
                    </h5>
                    <p>${profile.currentlyLearning}</p>
                </div>
            `;
        }

        // --- Proyectos Destacados ---
        const featuredGrid = document.getElementById('featured-grid');
        if (featuredGrid) {
            featuredGrid.innerHTML = PORTFOLIO_DATA.featuredProjects.map(p => {
                const collabBadge = p.collaborator
                    ? `<div class="card-collab-badge">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" width="12" height="12"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                           ${p.collaborator}
                       </div>`
                    : '';
                return `
                <div class="featured-card-no-img">
                    <div class="card-header">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="folder-icon"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
                        <a href="${p.githubUrl}" target="_blank" class="github-icon-link" title="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                    </div>
                    <h3>${p.title}</h3>
                    ${collabBadge}
                    <div class="featured-tags">
                        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    <p>${p.shortDesc}</p>
                    <div class="featured-actions">
                        <button class="btn-text open-details" data-id="${p.id}">${ui.moreBtn}</button>
                    </div>
                </div>
            `}).join('');
        }

        // --- Otros Proyectos ---
        const othersList = document.getElementById('others-list');
        if (othersList) {
            othersList.innerHTML = PORTFOLIO_DATA.otherProjects.map(p => `
                <div class="other-project-card">
                    <div>
                        <div class="other-header">
                            <h4>${p.title}</h4>
                            <a href="${p.githubUrl}" target="_blank" class="other-link" title="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            </a>
                        </div>
                        <p>${p.desc}</p>
                    </div>
                    <div class="other-footer">
                        <div class="other-tags">
                            ${p.tags.map(t => `<span class="tag-sm">${t}</span>`).join('')}
                        </div>
                        <button class="btn-text-sm open-details" data-id="${p.id}">${ui.moreBtn}</button>
                    </div>
                </div>
            `).join('');
        }

        // --- Habilidades Técnicas ---
        const skillsTechList = document.getElementById('skills-tech-list');
        if (skillsTechList) {
            skillsTechList.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
                <div class="skills-row">
                    <span class="skills-row-category">${cat.category}</span>
                    <span class="skills-row-items">${cat.items.map(s => s.name).join('  •  ')}</span>
                </div>
            `).join('');
        }

        // --- Habilidades Blandas ---
        const softSkillsList = document.getElementById('soft-skills-list');
        if (softSkillsList) {
            softSkillsList.innerHTML = profile.softSkills.map(s => `
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${s}</span>
                </li>
            `).join('');
        }

        // --- Idiomas ---
        const languagesList = document.getElementById('languages-list');
        if (languagesList) {
            languagesList.innerHTML = profile.languages.map(l => `
                <div class="lang-item-minimal">
                    <span class="lang-name">${l.name}</span>
                    <span class="lang-level">${l.level}</span>
                </div>
            `).join('');
        }

        // --- Experiencia ---
        const expList = document.getElementById('experience-list');
        if (expList) {
            expList.innerHTML = PORTFOLIO_DATA.experience.map(e => `
                <div class="resume-row">
                    <div class="resume-date">${e.date}</div>
                    <div class="resume-details">
                        <h4>${e.role}</h4>
                        <div class="resume-company">${e.company}</div>
                        <p class="resume-desc">${e.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // --- Formación ---
        const eduList = document.getElementById('education-list');
        if (eduList) {
            eduList.innerHTML = PORTFOLIO_DATA.education.map(e => `
                <div class="resume-row">
                    <div class="resume-date">${e.date}</div>
                    <div class="resume-details">
                        <h4>${e.degree}</h4>
                        <div class="resume-company">${e.school}</div>
                        <p class="resume-desc">${e.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // --- Botones del modal (eventos) ---
        document.querySelectorAll('.open-details').forEach(btn => {
            btn.addEventListener('click', () => openModal(btn.getAttribute('data-id')));
        });
    }

    function updateStaticTexts() {
        const ui      = PORTFOLIO_DATA.ui;
        const profile = PORTFOLIO_DATA.profile;

        // Navbar
        const navAbout = document.getElementById('nav-about');
        const navProjects = document.getElementById('nav-projects');
        const navSkills = document.getElementById('nav-skills');
        const navExperience = document.getElementById('nav-experience');
        if (navAbout)      navAbout.textContent      = ui.navAbout;
        if (navProjects)   navProjects.textContent   = ui.navProjects;
        if (navSkills)     navSkills.textContent     = ui.navSkills;
        if (navExperience) navExperience.textContent = ui.navExperience;

        // Hero
        const heroSubtitle = document.getElementById('hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = profile.title;

        // Botón descargar CV
        const downloadBtn = document.getElementById('download-cv-btn');
        const downloadLabel = document.getElementById('download-cv-label');
        if (downloadBtn) {
            downloadBtn.href = profile.cvLink;
            downloadBtn.setAttribute('download', profile.cvFilename);
        }
        if (downloadLabel) downloadLabel.textContent = ui.downloadCV;

        // Botón ver proyectos
        const viewProjectsBtn = document.getElementById('view-projects-btn');
        if (viewProjectsBtn) viewProjectsBtn.textContent = ui.viewProjects;

        // Section headers
        const sectionProjects = document.getElementById('section-projects');
        const sectionOthers   = document.getElementById('section-others');
        const sectionSkills   = document.getElementById('section-skills');
        const sectionAptitudes = document.getElementById('section-aptitudes');
        const sectionLanguages = document.getElementById('section-languages');
        const sectionExpEdu   = document.getElementById('section-exp-edu');
        const sectionExp      = document.getElementById('section-exp');
        const sectionEdu      = document.getElementById('section-edu');

        if (sectionProjects)  sectionProjects.textContent  = ui.featuredTitle;
        if (sectionOthers)    sectionOthers.textContent    = ui.othersTitle;
        if (sectionSkills)    sectionSkills.textContent    = ui.skillsTitle;
        if (sectionAptitudes) sectionAptitudes.textContent = ui.aptitudesTitle;
        if (sectionLanguages) sectionLanguages.textContent = ui.languagesTitle;
        if (sectionExpEdu)    sectionExpEdu.textContent    = ui.expEduTitle;
        if (sectionExp)       sectionExp.textContent       = ui.expTitle;
        if (sectionEdu)       sectionEdu.textContent       = ui.eduTitle;

        // Footer
        const footerText = document.getElementById('footer-text');
        if (footerText) footerText.textContent = ui.footer;

        // Atributo lang del <html>
        document.documentElement.lang = currentLang;
    }

    function initLangToggle() {
        const btnEs = document.getElementById('btn-es');
        const btnEn = document.getElementById('btn-en');

        function switchLang(lang) {
            setLang(lang);
            // Actualizar clases del toggle
            if (lang === 'es') {
                btnEs.classList.add('lang-btn--active');
                btnEn.classList.remove('lang-btn--active');
            } else {
                btnEn.classList.add('lang-btn--active');
                btnEs.classList.remove('lang-btn--active');
            }
            // Re-renderizar todo
            updateStaticTexts();
            renderPortfolio();
        }

        if (btnEs) btnEs.addEventListener('click', () => switchLang('es'));
        if (btnEn) btnEn.addEventListener('click', () => switchLang('en'));
    }

    updateStaticTexts();
    renderPortfolio();
    initLangToggle();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });
});
