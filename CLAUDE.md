# Project Rules for Claude

## Git & Pull Requests

- **Never create PRs directly to `main`** - Always create a feature branch first and PR from that branch to `main`
- Use descriptive branch names: `feat/`, `fix/`, `chore/`, `docs/` prefixes
- Commit messages should be clear and follow conventional commit style

## Development

- This is a Next.js 15 project with TypeScript
- Uses next-intl for internationalization (EN/FR)
- Tailwind CSS for styling
- Always update both `messages/en.json` and `messages/fr.json` when adding translations
