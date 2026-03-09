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


## Commit Format

Used **Husky**, **lint-staged**, and **Commitlint** to ensure high code quality and clear version history. Every commit must follow the [Conventional Commits](https://www.conventionalcommits.org/) format. If the commit message does not match these rules, the commit will be rejected.

### Commit Message Structure

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Allowed Types

- **`feat`**: A new feature
- **`fix`**: A bug fix
- **`docs`**: Documentation only changes
- **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **`refactor`**: A code change that neither fixes a bug nor adds a feature
- **`perf`**: A code change that improves performance
- **`test`**: Adding missing tests or correcting existing tests
- **`build`**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **`ci`**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **`chore`**: Other changes that don't modify src or test files
- **`revert`**: Reverts a previous commit

### Examples

- `feat: add login overlay`
- `fix(auth): resolve token expiration issue`
- `docs: update README with commit format rules`

> **Note**: The commit message header must not be longer than 100 characters!
