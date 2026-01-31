# QR Payment Code Generator

## 🌟 Overview

**QR Payment Code Generator** is a web application for generating QR codes with embedded payment information. Built with modern web technologies, it provides a fast, reliable, and user-friendly interface for creating QR codes that can be used for digital payment transfers and transactions.

## 💡 Motivation

Digital payments require efficient, scannable solutions. This application simplifies the process of generating QR codes containing payment details, enabling quick and secure payment information sharing across various platforms and devices.

## ✨ Tech Stack & Features

### Core Technologies
| Technology | Version | Description |
|------------|---------|-------------|
| [Vite](https://vitejs.dev/) | v6 | Fast build tool based on ES modules, Rollup, and esbuild |
| [React](https://react.dev/) | v19 | Latest version with all modern features |
| [TypeScript](https://www.typescriptlang.org/) | Latest | Type-safe JavaScript for better development |
| [MUI](https://mui.com/) | v6 | Comprehensive UI framework for responsive design |

### Key Features
- **QR Code Generation**: Create QR codes with payment information
- **Routing**: [React Router v7](https://reactrouter.com/) for flexible client-side routing
- **State Management**: [Jotai](https://jotai.org/) for simple, efficient state handling
- **Theming**: Customizable dark/light mode with MUI [theme system](https://mui.com/material-ui/customization/theming/)
- **PWA Support**: Works offline and installs on any device
- **Notifications**: Alert system with MUI Toolpad integration
- **Hotkeys**: Built-in keyboard shortcuts for common actions
- **Error Handling**: Graceful error boundaries with custom fallbacks
- **Performance**: Optimized bundle size and fast load times

### Developer Tools
- **Testing**: Vitest for unit tests, Playwright for e2e tests
- **CI/CD**: GitHub Actions workflows for quality checks and testing
- **Code Quality**: ESLint, Prettier, TypeScript integration
- **Git Hooks**: Husky with lint-staged for pre-commit quality enforcement
- **Local HTTPS**: Built-in support for local HTTPS development

## 🚀 Getting Started

### Quick Start

```bash
# Clone the repository
git clone https://github.com/suren-atoyan/react-pwa.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run prettier:check` | Check formatting |
| `npm run lint:check` | Check linting |
| `npm run ts:check` | Check TypeScript |
| `npm run test:unit` | Run unit tests |
| `npm run test:e2e` | Run e2e tests |
| `npm run test:e2e:ui` | Run e2e tests in UI mode |
| `npm run preview` | Preview production build locally |
| `npm run https-preview` | Preview with HTTPS |

## 📁 Project Structure

```
qr-payment-code-generator/
├── ...
├── src/
│   ├── components/     # Reusable UI components (QR preview, form inputs, etc.)
│   ├── config/         # Application configuration
│   ├── error-handling/ # Error management
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Application pages/routes
│   ├── routes/         # Routing configuration
│   ├── sections/       # Self-contained sections (QR generator, payment form, etc.)
│   ├── theme/          # Theme configuration
│   └── utils/          # Utility functions (QR code generation, validation, etc.)
└── ...
```

### Component Organization

Each component follows this structure:
```
ComponentName/
├── index.ts          # Default exports the component
├── ComponentName.tsx # Pure component implementation
├── types.ts          # Component-related types (optional)
├── styled.ts         # Styled components (optional)
└── utils.ts          # Component-specific utilities (optional)
```

## 🔍 Key Features Explained

### UI Framework
MUI ensures consistency, accessibility, and performance while remaining highly customizable to match your brand's design language.

```jsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// styled components
const NewButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: theme.palette.text.disabled,
}));

// sx prop
function MyComponent() {
  return <Box sx={{ borderRadius: theme.shape.borderRadius }}>...</Box>;
}
```

### 🎨 Theming
The theme system is based on MUI Theme, supporting dark/light modes and customization.

```jsx
import { useThemeMode } from '@/theme';

function MyComponent() {
  const { themeMode, toggle } = useThemeMode();
  
  return <Button onClick={toggle}>Toggle Theme</Button>;
}
```

### State Management
Jotai provides simple atoms-based state management for cross-application state, complementing React's useState and data fetching libraries.

### Notifications
Utilizes MUI Toolpad’s `useNotification` for handling alerts in an elegant, customizable way:

```jsx
function MyComponent() {
  const notifications = useNotifications();

  function showNotification() {
    notifications.show('Operation successful!', {
      autoHideDuration: 5000,
    });
  }
}
```

### 🔑 Hotkeys
- `Alt+s`: Toggle theme mode
- `Alt+t`: Toggle sidebar
- `Alt+/`: Open hotkeys dialog

### PWA Features
- Works offline with service worker caching
- Installable on mobile and desktop devices
- Automatic updates (configurable in `vite.config.ts`)

### 📱 Performance
- Bundle size: ~65KB for largest chunk
- Initial load: ~0.6s
- Cached loads: ~0.01s

<img src="./public/bundle.png" title="bundle">
<img src="./public/audit.png" alt="Performance audit" title="Performance audit">

### Error Handling
The `withErrorHandler` HOC catches errors and displays friendly fallback UIs:

```jsx
// In your component:
export default withErrorHandler(MyComponent);

// Or for the entire app:
export default withErrorHandler(App);
```

## 🧪 Testing

### Unit Tests
```bash
npm run test:unit
```

### E2E Tests
```bash
npm run test:e2e
# or with UI
npm run test:e2e:ui
```

## 🌐 Environment Variables

Place your environment variables in a `.env` file (prefixed with `VITE_`):
- Templates available in the `env/` directory
- Access via `import.meta.env.VITE_VARIABLE_NAME`

## ❓ FAQ

### How are QR codes generated?
QR codes are created using industry-standard encoding libraries that embed payment information (amount, recipient, account details, etc.) into scannable QR code format.

### Why TypeScript?
TypeScript reduces runtime errors, improves code maintainability, and enhances developer experience with static typing and better IDE support—critical for handling payment-related data.

### Why use Prettier?
Prettier enforces consistent style across all contributors, reducing discussions in PR reviews and ensuring code quality.

### What payment formats are supported?
The application generates QR codes compatible with common payment standards and digital wallet formats.

## 📄 License

[MIT](./LICENSE)
