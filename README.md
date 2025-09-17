# 🚀 TypeScript Template

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.2-orange.svg)](https://bun.sh/)
[![Biome](https://img.shields.io/badge/Biome-1.9-green.svg)](https://biomejs.dev/)

A modern, production-ready template for TypeScript projects with all the essential tools and configurations you need to
get started quickly! 🎯

## ✨ Features

This template comes pre-configured with:

- 🔥 **Bun Runtime**: Ultra-fast JavaScript runtime and package manager
- 📘 **TypeScript**: Type-safe JavaScript with modern ES features
- 🧹 **Biome**: Fast linter and formatter (Prettier + ESLint replacement)
- 🔧 **Modern Configuration**: ESNext target with strict type checking
- 🌐 **HTTP Server**: Simple Bun server with health endpoint example
- 📦 **ES Modules**: Modern module system
- 🚨 **Git Integration**: Pre-configured with Biome VCS integration
- 🪝 **Git Hooks**: Lefthook for automated quality checks
- 📝 **GitHub Templates**: CODE_OF_CONDUCT.md, SECURITY.md, and LICENSE included
- ⚡ **Proto Tool Manager**: Automated tool management with [moonrepo proto](https://moonrepo.dev/proto)

## 🚀 Quick Start

### Prerequisites

- [proto](https://moonrepo.dev/proto) - A multi-language version manager that will manage all required tools
- Alternatively, you can install tools separately:
    - [Bun](https://bun.sh/) (latest version)
    - [Biome](https://biomejs.dev/) (latest version)

### Installation

1. **Use this template** by clicking the "Use this template" button on GitHub
2. **Clone your new repository**:
   ```bash
   git clone https://github.com/yourusername/your-project-name.git
   cd your-project-name
   ```
3. **Install tools and dependencies**:
   ```bash
   # Install all required tools (bun, biome) using proto
   proto install
   
   # Install project dependencies
   bun install
   ```

### 🏃‍♂️ Running the Project

```bash
# Start the development server (with watch mode)
bun run dev

# Start the production server
bun run start
```

## 🛠️ Development

### Available Scripts

| Script           | Description                                 |
|------------------|---------------------------------------------|
| `bun run start`  | Start the production server                 |
| `bun run dev`    | Start development server with file watching |
| `bun run lint`   | Run Biome linter                            |
| `bun run format` | Format code with Biome                      |
| `bun run prepare`| Install Lefthook Git hooks                  |

### 🧹 Code Quality

This template uses **Biome** for both linting and formatting:

```bash
# Check for linting issues
bun run lint

# Auto-fix linting issues and format code
bun run format
```

### 🪝 Git Hooks & Conventional Commits

This template includes **Lefthook** for automated Git hooks and **Commitlint** for enforcing Conventional Commits:

#### Automatic Quality Checks

Git hooks will automatically run on:

- **Pre-commit**: Format code, run linter, and type-check
- **Commit-msg**: Validate commit message format
- **Pre-push**: Final lint and type checks

#### Conventional Commits

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# ✅ Valid commit messages
git commit -m "feat: add user authentication"
git commit -m "fix: resolve memory leak in data processing"
git commit -m "docs: update API documentation"
git commit -m "refactor: simplify error handling logic"

# ❌ Invalid commit messages
git commit -m "add feature"           # Missing type
git commit -m "Fix bug"              # Wrong case
git commit -m "feat!: breaking change" # Use BREAKING CHANGE footer instead
```

**Available commit types:**
- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `build` - Build system changes
- `ci` - CI configuration changes
- `chore` - Other changes (maintenance, etc.)
- `revert` - Reverting previous commits

#### Managing Git Hooks

```bash
# Install hooks (automatically runs after `bun install`)
bun run prepare

# Skip hooks for a single commit (use sparingly)
git commit -m "feat: add feature" --no-verify

# Temporarily disable hooks
lefthook uninstall

# Re-enable hooks
lefthook install
```

### 📁 Project Structure

```
├── src/
│   └── index.ts          # Main application entry point
├── biome.json           # Biome configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
└── README.md            # You are here! 📍
```

## 🔧 Configuration

### TypeScript Configuration

The `tsconfig.json` is configured for modern TypeScript development:

- ESNext target and library
- Strict type checking enabled
- Bun-optimized module resolution
- React JSX support ready

### Biome Configuration

The `biome.json` includes:

- All recommended rules enabled
- Tab indentation (configurable)
- Git integration
- Import organization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run the linter and formatter: `bun run format`
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📋 Customization

To customize this template for your project:

1. **Update package.json** with your project details
2. **Modify the server** in `src/index.ts` to fit your needs
3. **Adjust TypeScript/Biome configs** as needed
4. **Update this README** with your project-specific information

## 🔒 Security

Please see [SECURITY.md](SECURITY.md) for our security policy and how to report security vulnerabilities.

## 📄 License

This project is licensed under the Apache License—see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Bun](https://bun.sh/) for the amazing runtime
- [Biome](https://biomejs.dev/) for fast linting and formatting
- [TypeScript](https://www.typescriptlang.org/) for type safety

---

**Happy coding! 🎉** If you find this template useful, please give it a ⭐️
