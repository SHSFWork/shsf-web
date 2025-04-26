# SHSF Work Website

Frontend repository for the SHSF work website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or bun

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-org/shsf-web.git
cd shsf-web
```

2. Install dependencies

```bash
npm install
# or
bun install
```

3. Set up environment variables

```bash
cp env.local.example .env.local
```

Edit `.env.local` with your configuration values.

4. Start the development server

```bash
npm run dev
# or
bun dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable                        | Description                                   |
| ------------------------------- | --------------------------------------------- |
| `USE_MOCK_DATA_FOR_DEVELOPMENT` | Set to `true` to use mock data in development |
| `GITHUB_APP_ID`                 | Your GitHub App ID                            |
| `GITHUB_PRIVATE_KEY`            | Your GitHub App private key                   |
| `GITHUB_INSTALLATION_ID`        | Your GitHub App installation ID               |

## Build and Deployment

```bash
# Run production build
npm run build
# or
bun build

# Start production server
npm run start
# or
bun start
```

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Content**: [Content Collections](https://content-collections.vercel.app/)

## Project Structure

```
Project Structure
├── app/
├── assets/           # Assets, resources, and styles
├── components/
├── constants/        # Constants and configuration
├── hooks/
├── layouts/          # Page layouts and structural templates
├── lib/
├── modules/          # Feature-specific page implementations
├── providers/        # Context providers
├── public/
├── services/         # API services and external integrations
├── types/
└── www/              # Content collections
```

## Development

### Linting

```bash
npm run lint
# or
bun lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing to this project.
