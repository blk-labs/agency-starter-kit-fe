# React + Vite Starter Kit

- This is a React starter kit designed for reusability and scalability.

## Architecture Summary

This starter kit is built upon a **Modular Feature-Based Architecture**, thoughtfully designed to scale and maintain long-term code quality.

The key directories governing our source structure are:

- `app/`: Houses app initialization, routing, and global abstractions.
- `modules/`: Feature-sliced directories (e.g., `auth/`, `dashboard/`), encapsulating their respective routing, hooks, sub-components, and state logic.
- `shared/`: Generic components, utilities, and integrations to be universally utilized across feature-modules.

For a comprehensive guide, view the full [Architecture Documentation](./docs/architecture.md).

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
