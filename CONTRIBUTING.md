# Contributing to SHSF Work Website

Thank you for considering contributing to the SHSF Work Website project. This document provides guidelines and workflows to help you contribute effectively.

## Development Process

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/shsf-web.git`
3. Add the upstream remote: `git remote add upstream https://github.com/original-org/shsf-web.git`
4. Install dependencies: `npm install` or `bun install`
5. Copy environment variables: `cp env.local.example .env.local`
6. Start development server: `npm run dev` or `bun dev`

### Branch Naming Convention

- `feature/short-description` - For new features
- `fix/short-description` - For bug fixes
- `docs/short-description` - For documentation changes
- `refactor/short-description` - For code refactoring

### Commit Convention

We use Conventional Commits for clear and structured commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or modifying tests
- `chore`: Changes to the build process or auxiliary tools

Examples:

```
feat(auth): add login component
fix(navbar): resolve mobile menu overlap issue
docs(readme): update installation instructions
```

### Pull Request Process

1. Create a branch from `main`
2. Make your changes
3. Ensure linting passes: `npm run lint`
4. Push to your fork
5. Open a pull request against the `main` branch
6. Fill out the PR template

## Coding Standards

### JavaScript/TypeScript

- Use TypeScript for all new code
- Follow the existing code style
- Add JSDoc comments for functions and components
- Use named exports instead of default exports when possible

### React & Components

- Functional components with hooks
- One component per file
- Use proper naming:
  - PascalCase for component files and function names
  - camelCase for variables and non-component functions
- Keep components focused and small

### CSS & Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Group related utility classes in a logical order
