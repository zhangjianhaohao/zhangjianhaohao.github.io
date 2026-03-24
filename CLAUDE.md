# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with VuePress 2 and the vuepress-theme-hope theme. It's a Chinese/English bilingual blog focused on Java backend development, interview preparation, and development tools.

## Development Commands

```bash
# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Start dev server with clean cache
npm run docs:clean-dev

# Update vuepress-theme-hope packages
npm run docs:update-package
```

## Project Structure

```
src/
├── .vuepress/           # VuePress configuration
│   ├── config.ts        # Main VuePress config (locales, bundler)
│   ├── theme.ts         # Theme configuration (navbar, sidebar, plugins)
│   ├── navbar/          # Navigation bar configs
│   │   ├── en.ts        # English navbar
│   │   ├── zh.ts        # Chinese navbar
│   │   └── index.ts     # Exports
│   ├── sidebar/         # Sidebar configs
│   │   ├── en.ts        # English sidebar (interview guide structure)
│   │   ├── zh.ts        # Chinese sidebar
│   │   ├── constants.ts # Icon constants and helper functions
│   │   └── index.ts     # Exports
│   └── public/          # Static assets (images, icons, favicon)
├── 面试指南/            # Main content (Interview Guide)
│   ├── AI编程工具/      # AI programming tools docs
│   ├── JAVA/            # Java interview questions
│   ├── 开发工具/        # Development tools (Git, etc.)
│   └── posts/           # Blog posts
├── zh/                  # Chinese locale content
└── README.md            # Blog homepage (uses Blog layout)
```

## Architecture Notes

### Localization
- Default locale is English ("/") but content is primarily in Chinese
- Chinese content is under `/zh/` path and `/面试指南/` path
- Each locale has separate navbar and sidebar configurations in `src/.vuepress/navbar/` and `src/.vuepress/sidebar/`

### Theme Configuration (theme.ts)
- Uses `vuepress-theme-hope` with blog plugin enabled
- Icons are loaded from Alibaba Iconfont (`//at.alicdn.com/t/c/font_2922463_o9q9dxmps9.css`)
- Sidebar icons are defined in `sidebar/constants.ts` using the `ICONS` constant
- Page encryption is configured for specific paths with password "1234"

### Content Organization
- The main content is the "面试指南" (Interview Guide) section
- Sidebar structure in `en.ts` defines the interview guide hierarchy:
  - 开发工具 (Development Tools) - Git
  - AI编程工具 (AI Programming Tools)
  - Java - 基础 (Java Basics)
- Use `collapsible: true` for collapsible sections in sidebars
- Children can use "structure" to auto-generate from directory structure

### Front Matter
Common front matter for blog posts:
```yaml
---
home: true              # For blog homepage
layout: Blog            # Blog layout
icon: house             # Icon name
title: Page Title
tagline: Subtitle
---
```

## Deployment

- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy-docs.yml`)
- Build output goes to `src/.vuepress/dist/`
- Deploys on pushes to `main` branch
- Requires `NODE_OPTIONS: --max_old_space_size=8192` for build

## Technology Stack

- VuePress 2.0.0-rc.26 with Vite bundler
- vuepress-theme-hope 2.0.0-rc.103
- Vue 3.5.29
- TypeScript with NodeNext module resolution
- Sass/SCSS for styling
