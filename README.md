# Ahmed Elarosi - Portfolio Website

A modern, responsive personal portfolio website built with React, TailwindCSS, and Framer Motion, featuring dark/light mode toggle and English/German language support.

## 🌟 Features

### 🎨 Design & User Experience
- **Modern, Clean Design**: Professional layout suitable for software developers and data analysts
- **Dark/Light Mode Toggle**: Seamless theme switching with user preference persistence
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

### 🌍 Internationalization
- **Bilingual Support**: Complete English and German translations
- **Language Toggle**: Easy switching between languages with localStorage persistence
- **Localized Content**: All sections including navigation, content, and UI elements

### 📱 Responsive Sections
1. **Header/Navigation**: Sticky navigation with smooth scrolling and mobile menu
2. **Hero Section**: Eye-catching introduction with call-to-action buttons
3. **About Section**: Professional summary with experience highlights
4. **Skills Section**: Categorized technical skills with visual indicators
5. **Projects Section**: Tabbed interface showcasing software and data analytics projects
6. **Contact Section**: Multiple contact methods with social media integration
7. **Footer**: Social links, quick navigation, and back-to-top functionality

### 💼 Professional Features
- **CV Download**: Language-specific PDF downloads (English/German)
- **Project Showcase**: Organized portfolio with technology tags
- **Contact Integration**: Direct email and LinkedIn integration
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.1.0**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework for rapid styling

### UI Components & Styling
- **shadcn/ui**: High-quality, accessible UI components
- **Lucide React**: Beautiful, customizable icons
- **Framer Motion**: Smooth animations and transitions
- **Custom CSS**: Additional styling for enhanced visual effects

### Internationalization
- **react-i18next**: React integration for i18next
- **i18next**: Internationalization framework
- **i18next-browser-languagedetector**: Automatic language detection

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **pnpm**: Fast, efficient package manager

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd ahmed-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Development Server
The development server runs on `http://localhost:5173` with hot module replacement enabled.

## 📁 Project Structure

```
ahmed-portfolio/
├── public/
│   ├── assets/
│   │   ├── CV_EN.pdf          # English CV
│   │   └── CV_DE.pdf          # German CV
│   └── favicon.ico
├── src/
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Skills showcase
│   │   ├── Projects.jsx      # Project portfolio
│   │   ├── Contact.jsx       # Contact information
│   │   └── Footer.jsx        # Footer section
│   ├── hooks/
│   │   └── useTheme.jsx      # Theme management hook
│   ├── lib/
│   │   └── i18n.js           # Internationalization config
│   ├── locales/
│   │   ├── en.json           # English translations
│   │   └── de.json           # German translations
│   ├── assets/               # Static assets
│   ├── App.jsx               # Main application component
│   ├── App.css               # Global styles
│   └── main.jsx              # Application entry point
├── components.json           # shadcn/ui configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # TailwindCSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🎨 Customization

### Theme Colors
The website uses CSS custom properties for theming. Colors can be customized in `src/App.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  /* ... other color variables */
}
```

### Adding New Languages
1. Create a new translation file in `src/locales/`
2. Add the language to the i18n configuration in `src/lib/i18n.js`
3. Update the language toggle component

### Content Updates
- **Personal Information**: Update translation files in `src/locales/`
- **Projects**: Modify the projects array in translation files
- **Skills**: Update skills categories and items in translation files
- **CV Files**: Replace PDF files in `public/assets/`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔧 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Optimized asset loading
- **CSS Purging**: Unused CSS removal in production
- **Bundle Analysis**: Optimized bundle size
- **Lazy Loading**: Components loaded on demand

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation for older browsers

## 📄 License

This project is created for Ahmed Elarosi's personal portfolio. All rights reserved.

## 👨‍💻 About Ahmed Elarosi

**Software & Web Developer | Data Analyst**

With 3+ years of software development experience and 10+ years in business and finance, Ahmed brings a unique blend of technical expertise and business acumen to every project.

### Contact Information
- **Email**: ahmed_elarosi@proton.me
- **Location**: Rosenheim, Germany
- **LinkedIn**: [Ahmed Elarosi](https://linkedin.com/in/elarosi)
- **GitHub**: [ahmed-elarosi](https://github.com/ahmed-elarosi)

---

Built with ❤️ using React, TailwindCSS, and modern web technologies.
