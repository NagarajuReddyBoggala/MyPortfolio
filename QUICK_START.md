# Quick Start Guide

## Prerequisites

- **Node.js**: Version 20.19+ or 22.12+ (required for Vite 7)
- **npm**: Version 10+ (comes with Node.js)

> **Note**: If you're using Node.js 20.14.0 or earlier, you'll see warnings but the build should still work. For optimal experience, upgrade to Node.js 20.19+ or 22.12+.

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code for linting errors |
| `npm run lint:fix` | Auto-fix linting errors |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests |
| `npm run test:ui` | Run tests with UI |

## Customization

All content is managed through `/src/data/site-data.json`. Simply edit this file to update:

- Personal information
- Skills
- Experience
- Education
- Projects
- Honors & Awards

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   });
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy dist folder to gh-pages branch
   ```

## Troubleshooting

### Node Version Issues

If you see Node version warnings:
- Upgrade Node.js to 20.19+ or 22.12+
- Or use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions:
  ```bash
  nvm install 22
  nvm use 22
  ```

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building again with `npm run build`

### Port Already in Use

If port 5173 is already in use:
- Vite will automatically try the next available port
- Or specify a different port: `npm run dev -- --port 3000`

## Next Steps

1. Customize `src/data/site-data.json` with your information
2. Update `public/sitemap.xml` with your actual domain
3. Update `src/data/site-data.json` meta.url with your domain
4. Add your own favicon to `public/`
5. Deploy and share!

