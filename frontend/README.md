#

> Nuxt 4 · TypeScript · ESLint · Prettier · Husky · lint-staged · Tailwind CSS

## Stack

| Tool                                                 | Purpose                                            |
| ---------------------------------------------------- | -------------------------------------------------- |
| [Nuxt 4](https://nuxt.com)                           | Full-stack Vue framework (compatibilityVersion: 4) |
| [TypeScript](https://www.typescriptlang.org)         | Strict type safety                                 |
| [ESLint](https://eslint.org)                         | Flat config linting (v9+)                          |
| [Prettier](https://prettier.io)                      | Opinionated code formatting                        |
| [Tailwind CSS](https://tailwindcss.com)              | Utility-first CSS                                  |
| [Husky](https://typicode.github.io/husky)            | Git hooks                                          |
| [lint-staged](https://github.com/okonet/lint-staged) | Run linters on staged files                        |
| [commitlint](https://commitlint.js.org)              | Enforce conventional commits                       |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Type check
pnpm typecheck

# Lint
pnpm lint

# Format
pnpm format
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

```
feat: add login page
fix: resolve hydration mismatch
docs: update readme
chore: upgrade dependencies
```

## Project Structure

```
/
├── app/
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── layouts/
│   ├── pages/
│   ├── plugins/
│   └── app.vue
├── public/
├── server/
├── eslint.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── nuxt.config.ts
└── .prettierrc.json
```
