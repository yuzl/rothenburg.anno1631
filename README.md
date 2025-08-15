# Static site generation with Astro + React + Tailwindcss

- ✅ Astro v5
- ✅ Tailwindcss v4
- ✅ React v19
- ✅ TypeScript is implicitly supported by Astro
- ✅ Code formating for Astro, css, and tsx/js files
- ✅ Tailwind classes sorting

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system.

### Installation

1. **Install pnpm** (if not already installed):

   ```bash
   npm install -g pnpm
   ```

2. **Clone the repository**:

   ```bash
   git clone <your-repository-url>
   cd astro-react-tailwind-boilerplate
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

### Development

To start the development server:

```bash
pnpm dev
```

This will start the development server at `http://localhost:4321` (or the next available port).

### Building for Production

To build the project for production:

```bash
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
pnpm preview
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm astro` - Run Astro CLI commands

## Setup

### Enable code formating on Save

1. Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VSCode
2. Open VSCode settings (File > Preferences > Settings or `Cmd+,` on Mac, `Ctrl+,` on Windows)
3. Search for "Format On Save" and check the box to enable it
4. Alternatively, add this to your VSCode settings.json file:
   ```json
   {
     "editor.formatOnSave": true,
     "[astro]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[typescriptreact]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```
