


<div align="center">

#  alamgir-portfolio


🚀 Hey there! Welcome to my portfolio. Like what you see?
It's open for you to use, fork and make your own. **How?**

</div>

---

#  Make It Yours

> **Fork it. Run it. Make it yours — in 4 steps.**

**Prerequisites:** Node.js v20+, npm v10+



### 1. Fork & Clone

Hit the **Fork** button at the top right, then clone your fork locally:

```bash
git clone https://github.com/your-username/alamgir-portfolio.git
cd alamgir-portfolio
```

### 2. Install & Run

```bash
npm install
npm run dev
```

Your local dev server starts at **http://localhost:5173** 

### 3. Customize

Make it yours - swap out the content, colors, and images:

- **Info & content** → `src/data/`
- **Images** → `public/`
- **Colors & fonts** → `tailwind.config.ts`

### 4. Deploy

```bash
npm run deploy
```

Your portfolio goes live on **GitHub Pages** — for free. ✨

> Make sure the `base` path in `vite.config.ts` matches your GitHub repo name before deploying.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript 5.7 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| Routing | React Router DOM 7 |

---

## Building for Production

### Compile and bundle

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder. This includes:
- Minified JavaScript & CSS
- Hashed filenames for cache busting
- Tree-shaken, production-ready assets

### Preview the production build locally

Before deploying, you can serve the `dist/` folder locally to verify everything looks correct:

```bash
npm run preview
```

The preview will be available at **http://localhost:4173**.

---

## Deployment

```bash
npm run deploy
```

> Make sure you have configured your deployment target correctly in `vite.config.ts` (e.g. `base` path for GitHub Pages, or your hosting provider's settings) before running this command.

---

## Folder Structure

```
alamgir-portfolio/
├── public/             # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/         # Project assets (SVGs, fonts, etc.)
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-level page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── main.tsx        # App entry point
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Common Issues

| Problem | Solution |
|---|---|
| `node_modules` missing or corrupted | Delete `node_modules/` and run `npm install` again |
| Port already in use | Kill the process on the port or let Vite auto-select the next available port |
| TypeScript errors on startup | Ensure your Node.js version matches the prerequisite above |
| Styles not applying | Ensure Tailwind CSS config is correct and `npm install` ran successfully |

