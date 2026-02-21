# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a mobile-first news application built with Vue 3 + Vite. It features news browsing, AI-powered Q&A (Alibaba Cloud DashScope/Qwen), user authentication, and personalization features (theme switching, i18n).

## Development Commands

```bash
npm run dev          # Start dev server on port 5173
npm run build        # Production build
npm run preview      # Preview production build
```

## Architecture

### Technology Stack
- **Vue 3** with Composition API (`<script setup>`)
- **Vite** for build tooling (ES modules)
- **Pinia** for state management with persistence plugin
- **Vue Router** with route-based code splitting
- **Vant 4** for mobile UI components
- **Vue I18n** for Chinese/English localization

### Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── NewsItem.vue    # News list items
│   └── TabBar.vue      # Bottom navigation
├── config/
│   └── api.js          # API & AI configuration
├── i18n/
│   ├── index.js        # i18n setup
│   └── locales/        # zh-CN.js, en-US.js
├── router/
│   └── index.js        # Route definitions
├── store/
│   ├── index.js        # Pinia setup
│   ├── user.js         # User authentication state
│   ├── theme.js        # Theme (light/dark) state
│   ├── language.js     # Language state
│   └── modules/
│       ├── news.js     # News data state
│       ├── history.js  # Browsing history
│       └── favorite.js # Favorites state
└── views/              # Page components
    ├── Home.vue        # News feed
    ├── Category.vue    # News categories
    ├── NewsDetail.vue  # Article details
    ├── AIChat.vue      # AI assistant (SSE streaming)
    ├── Login.vue       # Auth pages
    ├── My.vue          # User center
    └── Settings.vue    # App settings
```

### Key Architectural Patterns

**State Management**: Pinia stores are modular with separate files for user, theme, language, and feature-specific state (news, history, favorites). All state uses `pinia-plugin-persistedstate` for LocalStorage persistence.

**Mobile-First Design**: The app is optimized for mobile with:
- Viewport constraints (no zoom)
- Bottom navigation via TabBar component
- Touch-friendly Vant components
- Keep-alive for performance on frequently accessed pages

**AI Integration** (`src/config/api.js`, `src/views/AIChat.vue`):
- Uses Alibaba Cloud DashScope (Qwen-3-Max model)
- Server-Sent Events (SSE) for streaming responses
- Markdown rendering via `marked` + sanitization via `DOMPurify`

**Security**:
- DOMPurify sanitizes HTML in news content (XSS prevention)
- JWT-based authentication (token stored in Pinia)
- API key currently hardcoded in `src/config/api.js` (should use env vars)

**Internationalization**: Vue I18n with Chinese (zh-CN) as default and English (en-US) support. Language preference persisted to LocalStorage.

### Backend API

The app expects a backend API running on `http://127.0.0.1:8000`:
- User auth: `/api/user/login`, `/api/user/register`, `/api/user/info`, `/api/user/update`, `/api/user/password`
- News: `/api/news/list`, `/api/news/detail/:id`, `/api/news/categories`

### Configuration Notes

- Backend URL is configured in `src/config/api.js`
- AI endpoint and API key are in `src/config/api.js` (move to env vars for production)
- No test suite currently configured
