# Getting Started with LoMo

This guide walks you through setting up the LoMo project for local development.

## Prerequisites

- **[Bun](https://bun.sh) 1.0+** — used as the package manager and runtime
- **Git 2.30+**
- **Docker** — *(Optional)* used for the legacy Django backend (we are pivoting to Convex)

To verify:

```bash
bun --version
git --version
```

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/CivicTechWR/project-lomo.git
cd project-lomo
```

### 2. Install dependencies

```bash
bun install
```

This installs dependencies for all workspaces (`apps/webapp`, `packages/eslint-config`).

### 3. Start everything

```bash
bun run dev
```

This starts the **Vite dev server** (webapp) and the **Convex backend**.

Turbo opens a terminal UI so each dev process has its own log view instead of one shared stream. Use the arrow keys to switch between logs.

## Next Steps

Now that you're up and running, check out **[ORIENTATION.md](ORIENTATION.md)** to understand the codebase structure, our tech stack (React 19 + Convex), and how we design for non-technical users.

## Project Structure

```
project-lomo/
├── apps/
│   └── webapp/               # React 19 + TypeScript + Vite frontend
├── convex/                   # Convex serverless backend (TypeScript)
├── packages/
│   └── eslint-config/        # Shared ESLint configuration
└── package.json              # Root workspace config (Bun)
```

## Common Commands

| Command              | Description                                |
| -------------------- | ------------------------------------------ |
| `bun run dev`        | Start all apps in Turbo's terminal UI      |
| `bun run dev:web`    | Start only the webapp                      |
| `bun run dev:stop`   | Stop Docker services (postgres + backend)  |
| `bun run dev:logs`   | Tail Docker service logs                   |
| `bun run dev:reset`  | Stop Docker services and wipe DB volumes   |
| `bun run build`      | Build all packages                         |
| `bun run lint`       | Lint all packages                          |
| `bun run lint:fix`   | Auto-fix lint issues                       |

## Contributing

1. Create a branch: `git checkout -b feat/your-feature`
2. Make your changes
3. Run `bun run lint` to check for issues
4. Open a pull request against `main`

## Getting Help

- Join the **CTWR Slack** and find the LoMo channel
- Attend **weekly Wednesday CTWR meetings**
- Open a [GitHub Issue](https://github.com/CivicTechWR/project-lomo/issues) for bugs or questions
