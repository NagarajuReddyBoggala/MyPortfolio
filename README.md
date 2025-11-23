# Portfolio Website

A modern, production-ready personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 **Dark Theme** - Beautiful dark theme with WCAG AA accessibility compliance
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Vite for optimal performance (Lighthouse ≥ 95)
- ♿ **Accessible** - Semantic HTML, keyboard navigation, ARIA labels, and focus styles
- 🔍 **SEO Optimized** - React Helmet Async, OpenGraph, Twitter cards, sitemap, and robots.txt
- 🧩 **Component-Based** - Reusable, well-structured components
- 📊 **JSON-Driven** - All content managed through `site-data.json`
- 🧪 **Tested** - Vitest setup for unit testing
- 🚀 **CI/CD Ready** - GitHub Actions workflow included

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **React Helmet Async** - SEO management
- **Vitest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js 20+ (or 22+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## Project Structure

```
portfolio/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/      # Reusable components
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── Section.tsx
│   │   ├── SEO.tsx
│   │   └── Tag.tsx
│   ├── data/           # Site data
│   │   ├── site-data.json
│   │   └── site-data.ts
│   ├── routes/         # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── test/           # Test setup
│   │   └── setup.ts
│   ├── types.ts        # TypeScript types
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── .github/
│   └── workflows/
│       └── ci.yml      # GitHub Actions CI
├── .eslintrc.cjs       # ESLint configuration
├── .prettierrc         # Prettier configuration
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

All content is managed through `/src/data/site-data.json`. Update this file to customize:

- Profile information
- Skills
- Experience
- Education
- Projects
- Honors & Awards
- Meta tags and SEO

## Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` to set the base path:
```typescript
export default defineConfig({
  base: '/portfolio/', // Your repository name
  // ... rest of config
});
```

2. Build and deploy:
```bash
npm run build
# Then push dist folder to gh-pages branch
```

## Accessibility

This portfolio follows WCAG AA guidelines:

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Proper heading hierarchy
- Alt text for images (when added)
- Sufficient color contrast

## Performance

Optimizations included:

- Code splitting with React Router
- Lazy loading (can be added for images)
- Optimized build output
- Minimal dependencies
- Tailwind CSS purging unused styles

## License

MIT

## Author

**Boggala Nagaraju Reddy**

- LinkedIn: [b-nagaraju-reddy-3a759b226](https://www.linkedin.com/in/b-nagaraju-reddy-3a759b226/)
- GitHub: [NagarajuReddyBoggala](https://github.com/NagarajuReddyBoggala)
- LeetCode: [nagarajureddy](https://leetcode.com/nagarajureddy/)

