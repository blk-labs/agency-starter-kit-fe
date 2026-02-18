# React + Vite Starter Kit

- This is a React starter kit designed for reusability and scalability.

## Architecture Structure

Here's an overview of the project's folder structure and the purpose of each directory:

### Root Directory

- **.env.* files**: Environment-specific configuration files (local, staging, production).
- **vite.config.ts**: Vite configuration.
- **tsconfig.json**: TypeScript configuration.
- **eslint.config.js**: Linting configuration.

### Source Directory (`src/`)

The source code is organized into the following directories:

- **`api/`**: Contains API integration logic (e.g., Axios instance setup, API endpoints and token storage and renewal logic).
- **`assets/`**: Stores static assets such as images, fonts, and icons.
- **`components/`**: Reusable UI components.
- **`components/layouts`**: Home for layout. components (e.g Header, Footer, Sidebar).
- **`components/common`**: Home for common reusable ui components (e.g Button, Input, Modal).
- **`hooks/`**: Custom React hooks for sharing logic across components.
- **`pages/`**: Application pages/routes. Each file here typically corresponds to a route.
- **`services/`**: Home for Api endpoints and logic.
- **`styles/`**: Global styles and CSS configuration.
- **`utils/`**: Helper functions, constants, and configuration files (e.g., `config.ts`).
- **`App.tsx`**: The main application component.
- **`main.tsx`**: The entry point of the application.
