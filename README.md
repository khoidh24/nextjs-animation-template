# Next.js Starter with Page Transitions and Code Optimization

This repository is a **Next.js starter template** with pre-configured features to help you build modern React apps efficiently. It comes with **smooth page transitions using GSAP**, automatic **import management with ESLint and Prettier**, and handy utilities for **class name merging**.

## Features

### 1. Page Transitions with GSAP

- Smooth in/out animations between pages using GSAP.
- Ready-to-use transition hooks to enhance user experience.
- Works seamlessly with Next.js routing.

### 2. Code Quality and Optimization

- **[ESLint](https://eslint.org/)** configured to:
  - Remove unused imports automatically on save.
  - Enforce code style consistency.
- **[Prettier](https://prettier.io/)** integrated for auto-formatting.
- Automatic import sorting to keep code clean and organized.

### 3. Tailwind CSS Utilities

- Includes tailwind-merge and clsx utilities for handling conditional and merged class names efficiently.
- Simplifies dynamic Tailwind styling in components.

## Installation

```bash
git clone https://github.com/khoidh24/nextjs-animation-template
cd nextjs-animation-template
bun install
```

> [!NOTE]
> You can use yarn, npm, pnpm,... whatever you're using

### Usage

Start the development server:

```bash
bun run dev
```

Open `http://localhost:3000` to view your app.

### Project Structure

```
├── src/
│   ├── app/                 # Next.js pages/routes
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── favicon.ico
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Layout component
│   │   ├── page.tsx         # Main page entry
│   │   └── template.tsx     # Page template (if needed)
│   ├── components/          # Reusable UI components
│   │   ├── LinkAnimation.tsx
│   │   └── Navigation.tsx
│   └── utils/               # Utility functions
│       ├── animations.ts
│       ├── index.ts
│       └── styleMerge.ts    # cn utility with tailwind-merge and clsx
├── public/                  # Static files
├── .gitignore
├── .prettierrc
├── bun.lock
├── eslint.config.js
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json

```
