# E-Commerce Website - Route Course Final Project

A modern e-commerce web application built with React 19, TypeScript, and Tailwind CSS as the final project for Route Frontend Development Course (Week 3).

## 🚀 Project Overview

This is an e-commerce website project that demonstrates modern frontend development practices using the latest React features and development tools. The project is currently in its initial setup phase with a solid foundation ready for e-commerce functionality development. It's structured as a comprehensive final project for the Route Course frontend development program, focusing on building a complete online shopping experience.

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
ecommerce-website/
├── public/
│   ├── Logo.png                # Project logo
│   └── vite.svg                # Vite logo asset
├── src/
│   ├── assets/
│   │   └── react.svg           # React logo asset
│   ├── Components/             # React components directory
│   │   ├── Layout/
│   │   │   └── Layout.tsx     # Main layout with Navbar, Outlet, Footer
│   │   ├── Navbar/
│   │   │   └── Navbar.tsx     # Navigation component
│   │   ├── Footer/
│   │   │   └── Footer.tsx     # Footer component
│   │   └── NotFound/
│   │       └── NotFound.tsx   # 404 page component
│   ├── App.tsx                 # Router configuration with React Router DOM
│   ├── App.css                 # Component-specific styles (empty, using Tailwind)
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
├── pnpm-lock.yaml             # Package manager lock file
└── README.md                  # Project documentation
```

### Planned Structure for E-Commerce Features

```
src/
├── Components/                 # Current component structure
│   ├── Layout/                ✅ Layout with Navbar, Outlet, Footer
│   ├── Navbar/                ✅ Navigation component (basic)
│   ├── Footer/                ✅ Footer component (basic)
│   ├── NotFound/              ✅ 404 error page
│   ├── Product/               # Product-related components (planned)
│   ├── Cart/                  # Shopping cart components (planned)
│   ├── Auth/                  # Authentication components (planned)
│   └── Common/                # Reusable UI components (planned)
├── pages/                     # Page components (planned)
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductDetail.tsx
│   ├── Cart.tsx
│   └── Checkout.tsx
├── hooks/                     # Custom React hooks (planned)
├── services/                  # API services (planned)
├── types/                     # TypeScript type definitions (planned)
├── utils/                     # Utility functions (planned)
└── contexts/                  # React contexts for state management (planned)
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ecommerce-website
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

   The application now shows a proper layout structure with Navbar, main content area (currently showing NotFound component), and Footer sections.

## 📜 Available Scripts

- **`pnpm dev`** - Start the development server with hot reload
- **`pnpm build`** - Build the application for production
- **`pnpm lint`** - Run ESLint to check code quality
- **`pnpm preview`** - Preview the production build locally

## 🎨 Features

### Current Implementation ✅

- **Project Foundation** - Modern React 19 setup with TypeScript
- **React Router DOM** - Client-side routing with layout structure implemented
- **Component Architecture** - Layout, Navbar, Footer, and NotFound components created
- **Layout Structure** - Responsive layout with header, main content area, and footer
- **Development Environment** - Vite dev server with hot reload
- **Styling Framework** - Tailwind CSS ready for responsive design
- **Code Quality** - ESLint configuration for consistent code standards
- **Project Assets** - Logo.png added to public directory

### Component Details

- **Layout Component** - Main layout structure using React Router's `Outlet`
- **Navbar Component** - Basic navigation component (ready for expansion)
- **Footer Component** - Basic footer component (ready for expansion)
- **NotFound Component** - 404 error page for undefined routes

### Planned E-Commerce Features 📋

- **Home Page** - Landing page with featured products
- **Product Catalog** - Display products with images, prices, and descriptions
- **Shopping Cart** - Add/remove items, quantity management
- **User Authentication** - Login/signup functionality
- **Product Search & Filtering** - Search and filter products by categories
- **Responsive Design** - Mobile-first design approach with enhanced styling
- **API Integration** - REST API integration with Axios

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
- **Project Type**: Final Project - E-Commerce Website
- **Focus**: React, TypeScript, modern development practices, and building a complete online shopping platform
- **Current Status**: Initial setup phase with foundation ready for e-commerce development

## 🚀 Deployment

To build for production:

```bash
pnpm build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🎯 Current Application State

The application has progressed from initial setup to having a solid component foundation:

### ✅ What's Implemented

- **Layout Structure**: Complete layout with header, main content area, and footer
- **React Router**: Configured with layout structure and route handling
- **Component Architecture**: Basic Navbar, Footer, and NotFound components
- **Development Server**: Runs on `http://localhost:5173`
- **Build System**: Vite configured and ready
- **Styling**: Tailwind CSS properly configured with responsive layout
- **TypeScript**: Full type checking enabled
- **Linting**: ESLint rules active for code quality
- **Assets**: Project logo integrated

### 🎯 Current View

When you run the application, you'll see:

- **Navbar**: Basic navigation component at the top
- **Main Content**: Currently displays NotFound component (since no specific routes are defined yet)
- **Footer**: Basic footer component at the bottom
- **Layout**: Flexbox layout structure with proper spacing

### 📋 Next Steps

1. Create Home page component and route
2. Enhance Navbar with navigation links
3. Add product-related components
4. Implement shopping cart functionality

## 📝 Development Notes

- The project uses pnpm as the package manager for faster installations
- Vite provides extremely fast development builds and hot reload
- Tailwind CSS is configured for utility-first styling approach
- TypeScript ensures type safety across the entire application
- ESLint maintains code quality and consistency
- **Component Structure**: Uses PascalCase for component directories (Components/Layout/, Components/Navbar/, etc.)
- **React Router**: Implemented with layout pattern using Outlet for nested routing
- **Responsive Layout**: Uses Flexbox with min-height screen for proper footer positioning

## 🛣️ Development Roadmap

### Phase 1: Foundation Setup ✅

- [x] React 19 + TypeScript setup
- [x] Vite build configuration
- [x] Tailwind CSS integration
- [x] ESLint configuration
- [x] Basic project structure
- [x] React Router DOM configuration
- [x] Layout component with Navbar, Outlet, Footer
- [x] Basic component structure (Navbar, Footer, NotFound)
- [x] Project logo asset added

### Phase 2: Core Components & Pages 🚧

- [x] Layout structure implementation
- [x] Navigation component (basic structure)
- [x] Footer component (basic structure)
- [x] 404 NotFound page
- [ ] Home page component
- [ ] Product catalog page
- [ ] Product detail page
- [ ] Enhanced Navbar with navigation links
- [ ] Enhanced Footer with links and info

### Phase 3: E-Commerce Features 📋

- [ ] Create shopping cart functionality
- [ ] Implement local storage for cart persistence
- [ ] Product components (ProductCard, ProductList)
- [ ] User authentication system
- [ ] Product search and filtering
- [ ] Category navigation
- [ ] Checkout process
- [ ] Order history

### Phase 4: Advanced Features & Optimization 🎨

- [ ] Responsive design refinement
- [ ] Performance optimization
- [ ] Error handling and loading states
- [ ] Accessibility improvements
- [ ] API integration with Axios
- [ ] State management optimization

## 🤝 Contributing

### Development Guidelines

1. Follow the existing code style and TypeScript conventions
2. Run `pnpm lint` before committing changes
3. Ensure all TypeScript types are properly defined
4. Use Tailwind CSS classes for styling (avoid custom CSS when possible)
5. Follow the planned component structure for new features
6. Write meaningful commit messages
7. Test functionality in both desktop and mobile views

### E-Commerce Specific Guidelines

- **Product Data**: Use TypeScript interfaces for product models
- **State Management**: Use React Context for global state (cart, user)
- **API Integration**: Prepare for REST API integration with Axios
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Optimize images and implement lazy loading for products

### Getting Started with Development

1. **Pick a feature from the roadmap**
2. **Create a new branch**: `git checkout -b feature/your-feature-name`
3. **Implement the feature following the guidelines**
4. **Test thoroughly**
5. **Submit a pull request**

### Quick Development Tips

- **Adding New Pages**: Create components in `src/Components/` and add routes in `App.tsx`
- **Styling**: Use Tailwind classes; the layout already has responsive structure
- **Components**: Follow the existing pattern with individual component folders
- **TypeScript**: Define interfaces for props and data structures
- **Testing**: Test all components in both desktop and mobile viewports

## 📄 License

This project is part of the Route Frontend Development Course and is intended for educational purposes. It serves as a final project to demonstrate proficiency in React, TypeScript, and modern web development practices for building e-commerce applications.

---

**Project Status**: 🚧 In Development - Foundation Complete, E-Commerce Features Coming Soon!

Built with ❤️ using React 19, TypeScript, and Tailwind CSS
