# ✨ Modern Glassmorphism Developer Portfolio Template

A high-performance, responsive developer portfolio template built with **Vanilla HTML5**, **Tailwind CSS**, and **JavaScript (ES6+)**. Features a dynamic glassmorphism dark aesthetic, animated falling galaxy stars background canvas, and built-in **dual-language (EN / RU) internationalization**.

---

## 🌟 Key Features

- **💎 Modern Glassmorphism Aesthetics**: Cyber-Slate dark theme with backdrop blur panels, glowing accent cards, and fluid responsive layouts.
- **🌐 Built-in Dual Language Engine (EN / RU)**: Instant 1-click internationalization toggle without page reloads.
- **🌌 Animated Galaxy Canvas Engine**: Lightweight HTML5 Canvas particle background simulating falling stars.
- **⚡ Zero Build Steps**: Pure static web application — no Node.js, Webpack, or framework compilation required.
- **📱 Fully Responsive & Accessible**: Optimized for mobile screens, tablets, and wide desktop displays.
- **🚀 GitHub Pages Ready**: Deploy to GitHub Pages for free in 1 click.

---

## 🚀 How to Customize This Template

### 1. Change Your Personal Details
Open `index.html` and edit your name, job title, and social links:

```html
<!-- Line 26: Update Name -->
<span class="font-extrabold text-base tracking-tight text-white block">YOUR NAME</span>

<!-- Line 60: Update Bio -->
<p data-i18n="hero_bio">
    Full-Stack & Systems Engineer building high-performance web apps...
</p>
```

### 2. Update Translation Text (EN / RU)
Open `app.js` and modify the `translations` dictionary to update your bio, project titles, and descriptions in both English and Russian:

```javascript
const translations = {
    en: {
        hero_title: "Full-Stack & Systems Infrastructure Engineer",
        // Add your custom English text here...
    },
    ru: {
        hero_title: "Full-Stack & Системный Инженер",
        // Add your custom Russian text here...
    }
};
```

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

1. Fork or clone this repository to your GitHub account.
2. Go to your repository **Settings** $\rightarrow$ **Pages**.
3. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
4. Click **Save**. Your portfolio will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` in under 60 seconds!

---

## 📜 License

Distributed under the MIT License. Free to use for personal and commercial portfolios. See `LICENSE` for details.
