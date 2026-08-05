# A1-J Construction Website

A production-ready, single-page business website for A1-J Construction. The site presents construction, renovation, and repair services with a bold all-season visual identity based on the supplied business-card branding.

## Technologies

- React
- Vite
- JavaScript and JSX
- Plain CSS
- GitHub Actions for GitHub Pages deployment

## Local Setup

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Vite writes the production website to `dist`.

## GitHub Pages

1. Create a GitHub repository named `a1j-construction-website`.
2. Add this project and push it to the repository's `main` branch.
3. Open **Settings → Pages** in GitHub.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The included workflow builds and publishes `dist` automatically.

Expected URL: `https://thegrindnet.github.io/a1j-construction-website/`

Vite uses `base: "./"` so assets load from the GitHub Pages project subdirectory.

## Content and Images

- Business details, navigation links, services, and gallery projects are in `src/utils/constants.js`.
- Images are in `src/assets/images`.
- The twelve supplied project photos are stored as optimized WebP files in `src/assets/images`.
- Replace the address and service-area placeholders in `src/utils/constants.js`.

## Project Structure

```text
a1j-construction-website/
├── .github/workflows/deploy.yml
├── public/favicon.png
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── About/
│   │   ├── App/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Navigation/
│   │   └── Services/
│   ├── utils/constants.js
│   ├── vendor/normalize.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
