# Contributing to LoMo

Thanks for contributing! This guide covers the workflow. For setup instructions, see [GETTING_STARTED.md](GETTING_STARTED.md).

## Branch Naming

Use conventional prefixes:

```
feat/description    — new features
fix/description     — bug fixes
chore/description   — maintenance, config, dependencies
docs/description    — documentation changes
```

Examples: `feat/user-auth`, `fix/login-redirect`, `chore/update-deps`

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add user profile page
fix: resolve OAuth redirect loop
chore: update Django to 5.1
docs: add API endpoint documentation
```

## Pull Request Workflow

1. Create a branch off `main`: `git checkout -b feat/your-feature`
2. Make your changes
3. Run `bun run lint` (fix issues with `bun run lint:fix`)
4. Push and open a PR against `main`

## Important Notes

- **Backend Infrastructure.** We are pivoting to a Convex-based serverless backend. See `ORIENTATION.md` for more details.
- **Code Style.** We use ESLint to enforce a consistent style: tabs for indentation, double quotes for strings, and mandatory semicolons. Run `bun run lint:fix` to auto-format your changes.

## Code of Conduct

This project follows the [CivicTechWR Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## Getting Help

- Join the **CTWR Slack** and find the LoMo channel
- Attend **weekly Wednesday CTWR meetings**
- Open a [GitHub Issue](https://github.com/CivicTechWR/project-lomo/issues)
