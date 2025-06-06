# React Final Project - Route Course (Frontend)

A modern React application built with TypeScript, Vite, and Tailwind CSS as part of the Route Frontend Development Course (Week 3 Final Project).

## 🚀 Project Overview

This project is a React-based web application that demonstrates modern frontend development practices using the latest React features and development tools. It's structured as a comprehensive final project for the Route Course frontend development program.

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.0** - Latest React with modern hooks and features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 6.3.5** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.4** - CSS transformation and optimization
- **Autoprefixer 10.4.21** - Automatic vendor prefixes

### Routing & HTTP

- **React Router DOM 7.6.2** - Client-side routing for React
- **Axios 1.9.0** - HTTP client for API requests

### Development Tools

- **ESLint 9.25.0** - Code linting and quality assurance
- **TypeScript ESLint 8.30.1** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin** - React hooks linting
- **React Refresh ESLint Plugin** - Fast refresh support

## 📁 Project Structure

```
├── public/
│   └── vite.svg                 # Vite logo asset
├── src/
│   ├── assets/
│   │   └── react.svg           # React logo asset
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Component-specific styles
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles with Tailwind imports
│   └── vite-env.d.ts          # Vite environment type definitions
├── eslint.config.js            # ESLint configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.ts              # Vite build configuration
├── tsconfig.json               # TypeScript configuration (references)
├── tsconfig.app.json           # App-specific TypeScript config
├── tsconfig.node.json          # Node-specific TypeScript config
├── postcss.config.js           # PostCSS configuration
├── package.json                # Project dependencies and scripts
└── pnpm-lock.yaml             # Package manager lock file
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Project
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- **`pnpm dev`** - Start the development server with hot reload
- **`pnpm build`** - Build the application for production
- **`pnpm lint`** - Run ESLint to check code quality
- **`pnpm preview`** - Preview the production build locally

## 🎨 Features

- **Modern React 19** - Utilizing the latest React features and patterns
- **TypeScript Integration** - Full type safety throughout the application
- **Responsive Design** - Built with Tailwind CSS for mobile-first design
- **Fast Development** - Vite provides instant hot module replacement
- **Code Quality** - ESLint configuration for consistent code standards
- **Routing Ready** - React Router DOM configured for navigation
- **API Ready** - Axios configured for HTTP requests

## 🔧 Configuration

### Tailwind CSS

The project uses a standard Tailwind CSS configuration with support for:

- HTML and JSX/TSX files in the src directory
- Utility classes for rapid UI development
- PostCSS for additional CSS processing

### TypeScript

TypeScript is configured with:

- Separate configurations for app and Node.js code
- Strict type checking enabled
- Modern ES2020+ features support

### ESLint

Code quality is maintained through:

- React-specific linting rules
- TypeScript ESLint integration
- React Hooks rules enforcement
- Fast Refresh compatibility checks

## 🎯 Course Context

This project is part of the **Route Course (Frontend)** curriculum:

- **Course**: Frontend Development
- **Week**: 3
- **Project Type**: Final Project
- **Focus**: React, TypeScript, and modern development practices

## 🚀 Deployment

To build for production:

```bash
pnpm build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 📝 Development Notes

- The project uses pnpm as the package manager for faster installations
- Vite provides extremely fast development builds and hot reload
- Tailwind CSS is configured for utility-first styling approach
- TypeScript ensures type safety across the entire application
- ESLint maintains code quality and consistency

## 🤝 Contributing

1. Follow the existing code style and TypeScript conventions
2. Run `pnpm lint` before committing changes
3. Ensure all TypeScript types are properly defined
4. Use Tailwind CSS classes for styling

## 📄 License

This project is part of an educational course and is intended for learning purposes.
