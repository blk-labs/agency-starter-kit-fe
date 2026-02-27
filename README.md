# React + Vite Starter Kit

- This is a React starter kit designed for reusability and scalability.

## Architecture Structure

- Architectural structure of the starter kit.

### Root Directory

- **.env.\* files**: Environment configuration files (local, staging, production).

### Source Directory (`src/`)

The source code follows a **modular architecture** organized by features

#### `app/` — App Bootstrap & Global Config

- **`App.tsx`**: The root application component.
- **`main.tsx`**: The entry point of the application.
- **`routes.tsx`**: Centralized route definitions.
- **`providers/`**: Global providers (React Query, Theme, Store).
- **`router/`**: App-level router setup.

#### `modules/` — Feature-Based Modules

Each module is a feature with its own pages, components, hooks, API layer, and utilities:

- **`auth/`**: Authentication feature (login, register, forgot password).
- **`dashboard/`**: Dashboard feature.
- **`wallet/`**: Wallet feature.

Each module follows this internal structure:

```bash
module/
├── pages/          # Route-level page components
├── components/     # Module-specific UI components
├── layouts/        # Module-specific layouts
├── hooks/          # Module-specific custom hooks
├── api/            # API calls and types for this module
├── utils/          # Module-specific utilities
└── index.ts        # Public exports (barrel file)
```

#### `shared/` — Reusable Across Modules

Contains reusable code that is shared across multiple feature modules:

- **`components/common/`**: Generic UI components (Button, Input, Modal).
- **`components/layout/`**: Layout components (AppShell, Sidebar, PageContainer).
- **`components/feedback/`**: Feedback components (Spinner, ErrorState).
- **`hooks/`**: Shared custom hooks (useDebounce, usePagination, etc.).
- **`api/`**: Base API client, Axios instance, interceptors, and query keys.
- **`constants/`**: App-wide constants.
- **`types/`**: Global TypeScript types.
- **`utils/`**: Shared utility functions.
- **`config/`**: Environment and app configuration.

#### `assets/` — Static Assets

- **`images/`**: Image files.
- **`icons/`**: Icon files.

#### `styles/` — Global Styles

- **`globals.css`**: Global stylesheet and CSS configuration.
- **`variables.css`**: CSS custom properties / design tokens.


