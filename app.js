// ==========================================================================
// Modern Glassmorphism Developer Portfolio Engine
// Dynamic Language Switching (EN / RU) & Animated Falling Stars Background
// ==========================================================================

const translations = {
    en: {
        nav_about: "About",
        nav_cases: "Case Studies",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hire_me: '<i class="fa-solid fa-envelope"></i> Hire Me',
        status_avail: "Available for Senior IT & Engineering Roles",
        hero_title: "Full-Stack & Systems Infrastructure Engineer",
        hero_bio: "Full-Stack & Systems Engineer with 5+ years of experience building high-performance web applications, secure cloud infrastructure, and automated microservices.",
        location_clock: "Local Time (UTC+5):",
        metric_exp: "Years Exp.",
        metric_ai: "AI Speedup",
        metric_uptime: "System Uptime",
        cta_touch: '<i class="fa-solid fa-comments"></i> Get In Touch',
        cta_pdf: '<i class="fa-solid fa-file-arrow-down"></i> Print / Save PDF',
        cases_tag: "Case Studies",
        cases_title_1: "Featured Open-Source Projects",
        cases_sub: "Real-world business problems solved with high ROI and resilient technical design.",
        c1_cat: "Biometrics & Python",
        c1_metric: "2-Week Delivery",
        c1_title: "Biometric Attendance & Tracking System",
        c1_desc: "Developed a Python Flask microservice integrating hardware face-recognition terminals with real-time Excel exports.",
        c1_impact: "Automated 100% staff attendance tracking with 99.8% precision.",
        c2_cat: "CRM & Edge Networking",
        c2_metric: "Zero-Trust",
        c2_title: "Enterprise CRM & Cloudflare Zero-Trust Architecture",
        c2_desc: "Configured secure remote infrastructure via Cloudflare Tunnels, reverse proxies, and automated catalog synchronization daemons.",
        c2_impact: "Eliminated public attack vectors and achieved 100% service uptime.",
        c3_cat: "AI & Automation",
        c3_metric: "APScheduler",
        c3_title: "Dual-Engine Telegram AI Bot Ecosystem",
        c3_desc: "Engineered an AI-powered executive gatekeeper and companion bot with aiogram 3, OpenAI GPT-4o, and SQLite logging.",
        c3_impact: "Automated support routing and blocked 100% spam in DMs.",
        case_impact_lbl: "Impact & Results",
        contact_tag: "Contact",
        contact_title_1: "Let's Discuss Your Project",
        contact_sub: "Feel free to reach out anytime via email or Telegram.",
        footer_copy: "© 2026 Your Name. All Rights Reserved. Built with Modern Glassmorphism Template."
    },
    ru: {
        nav_about: "Обо мне",
        nav_cases: "Кейсы Проектов",
        nav_experience: "Опыт работы",
        nav_skills: "Навыки",
        nav_contact: "Контакты",
        hire_me: '<i class="fa-solid fa-envelope"></i> Связаться',
        status_avail: "Открыт к предложениям (Senior Engineer)",
        hero_title: "Full-Stack & Системный Инженер",
        hero_bio: "Опытный системный и Full-Stack инженер с компетенциями в разработке веб-приложений, администрировании Linux, облачных сетях, REST API и автоматизации бизнес-процессов.",
        location_clock: "Локальное время (UTC+5):",
        metric_exp: "Лет Опыта",
        metric_ai: "AI Скорость",
        metric_uptime: "Uptime Сетей",
        cta_touch: '<i class="fa-solid fa-comments"></i> Связаться',
        cta_pdf: '<i class="fa-solid fa-file-arrow-down"></i> Печать / PDF',
        cases_tag: "Проекты",
        cases_title_1: "Ключевые Внедренные Проекты",
        cases_sub: "Реальные технические решения с высокой надежностью и открытым исходным кодом.",
        c1_cat: "Биометрия & Python",
        c1_metric: "2 Недели",
        c1_title: "Система учета посещаемости Face ID",
        c1_desc: "Разработка микросервиса на Python и Flask для терминалов распознавания лиц ZKTeco ADMS с авто-экспортом в Excel.",
        c1_impact: "Автоматизация учета 100% сотрудников с точностью 99.8%.",
        c2_cat: "CRM & Сети",
        c2_metric: "Zero-Trust",
        c2_title: "Интеграция CRM & Cloudflare Tunnels",
        c2_desc: "Настройка защищенной веб-инфраструктуры, обратных прокси Nginx, SSL и автоматической синхронизации каталогов.",
        c2_impact: "Защита внешнего периметра и 100% аптайм сервисов.",
        c3_cat: "AI & Telegram",
        c3_metric: "APScheduler",
        c3_title: "Двухдвижковый Telegram AI Бот",
        c3_desc: "Создание ИИ-ассистента на aiogram 3 и GPT-4o с логированием в SQLite и планированием задач.",
        c3_impact: "Автоматизация поддержки и фильтрация спама 24/7.",
        case_impact_lbl: "Результат & ROI",
        contact_tag: "Связаться",
        contact_title_1: "Давайте обсудим ваш проект",
        contact_sub: "Отправьте сообщение или напишите напрямую по указанным контактам.",
        footer_copy: "© 2026 Ваше Имя. Все права защищены. Построено на шаблоне Modern Glassmorphism."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Galaxy Falling Shooting Stars Animation Engine
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('galaxyCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        class Star {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5 + 0.5;
                this.alpha = Math.random() * 0.8 + 0.2;
                this.speed = Math.random() * 0.05 + 0.01;
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const stars = Array.from({ length: 70 }, () => new Star());
        function renderGalaxy() {
            ctx.clearRect(0, 0, width, height);
            stars.forEach(star => star.draw());
            requestAnimationFrame(renderGalaxy);
        }
        renderGalaxy();
    }

    // ----------------------------------------------------------------------
    // 2. Tashkent / Local Clock Engine
    // ----------------------------------------------------------------------
    const clockEl = document.getElementById('tashkentClock');
    function updateClock() {
        if (!clockEl) return;
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // ----------------------------------------------------------------------
    // 3. Language Switcher (EN / RU)
    // ----------------------------------------------------------------------
    const langToggle = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');
    let currentLang = localStorage.getItem('portfolio_tpl_lang') || 'ru';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio_tpl_lang', lang);
        if (langLabel) {
            langLabel.textContent = lang === 'en' ? 'RU' : 'EN';
        }

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    setLanguage(currentLang);

    if (langToggle) {
        langToggle.onclick = function() {
            const targetLang = currentLang === 'en' ? 'ru' : 'en';
            setLanguage(targetLang);
        };
    }
});
