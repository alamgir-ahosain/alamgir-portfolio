<div align="center">

# Alamgir Portfolio

🚀 Hey there! Welcome to my portfolio. Like what you see?
It's open for you to use, fork and make your own. **How?**

</div>

---

## Make It Yours

> **Prerequisites:** Node.js v20+, npm v10+

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

Make it yours - swap out the content, colors and images:

| What to change | Where |
|---|---|
| Info & content | `src/data/` |
| Images | `public/` |
| Colors & fonts | `tailwind.config.ts` |

### 4. Deploy

See [Deploying to Netlify](#deploying-to-netlify) below.

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

The optimized output is generated in the `dist/` folder. This includes:

- Minified JavaScript & CSS
- Hashed filenames for cache busting
- Tree-shaken, production-ready assets

### Preview the production build locally

Before deploying, serve the `dist/` folder locally to verify everything looks correct:

```bash
npm run preview
```

The preview will be available at **http://localhost:4173**.

---

## Deploying to Netlify

There are two main ways: **Git-based deploy** (recommended) or **manual drag & drop**.

### Method 1: Deploy via Git (GitHub/GitLab/Bitbucket)

1. **Create a Netlify account** - sign up at [netlify.com](https://netlify.com) (easiest with your GitHub account).
2. **Push your project to GitHub** - make sure it lives in a GitHub (or GitLab/Bitbucket) repository.
3. **Add a new project** - in the Netlify dashboard, click **"Add new project"** → **"Import a Git repository"**, then choose your Git provider and authorize Netlify.
4. **Select your repository** - search for and select the repo you want to deploy.
5. **Configure build settings:**

   | Setting | Value |
   |---|---|
   | Branch to deploy | `main` |
   | Base directory | *(leave empty)* |
   | Build command | `npm run build` |
   | Publish directory | `dist` |
   | Functions directory | *(leave empty)* |

6. **Click Deploy** - Netlify will build and deploy your project. In 1–2 minutes you'll get a live URL.

> **Automatic deploys:** Every `git push` to your main branch triggers a new deploy automatically.

### Method 2: Manual Deploy (Drag & Drop)

1. Build your project locally: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag your `dist/` folder into the browser
4. Done!

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
| Port already in use | Kill the process on the port, or let Vite auto-select the next available port |
| TypeScript errors on startup | Ensure your Node.js version matches the prerequisite above |
| Styles not applying | Ensure Tailwind CSS config is correct and `npm install` ran successfully |