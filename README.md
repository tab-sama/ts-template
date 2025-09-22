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

### 🧹 Code Quality

This template uses **Biome** for both linting and formatting:

```bash
# Check for linting issues
bun run lint

# Auto-fix linting issues and format code
bun run format
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
