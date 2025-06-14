# 🛒 FreshCart E-commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. This comprehensive shopping platform features user authentication, product browsing, cart management, advanced filtering, and a beautiful UI designed for optimal user experience.

## 🌐 Live Demo & Repository

- **🔗 Live Demo**: [https://ecommerce-website-7aja.vercel.app/](https://ecommerce-website-7aja.vercel.app/)
- **📂 GitHub Repository**: [https://github.com/AhmedEsam2002/ecommerce-website/](https://github.com/AhmedEsam2002/ecommerce-website/)

### 🔐 Authentication System

- **User Registration**: Complete registration with form validation
- **User Login**: Secure JWT-based authentication
- **Protected Routes**: Route-level access control
- **Persistent Sessions**: Auto-login with stored tokens
- **Form Validation**: Real-time validation with Formik & Yup
- **Egyptian Phone Validation**: Specific validation for Egyptian phone numbers

### 🛍️ Shopping Experience

- **Product Catalog**: Browse through extensive product collections
- **Advanced Filtering**: Filter by categories, brands, and price range
- **Product Search**: Quick product discovery
- **Product Details**: Comprehensive product information pages
- **Shopping Cart**: Full cart management with quantity controls
- **Stock Management**: Real-time stock status and availability
- **Product Reviews**: Star-based rating system

### 🎨 User Interface & Design

- **Responsive Design**: Mobile-first approach for all devices
- **Modern UI**: Clean interface with Tailwind CSS
- **Interactive Elements**: Smooth animations and transitions
- **Loading States**: Professional loading indicators
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time user feedback
- **Badge System**: Product status indicators (sale, stock, sold count)

### 📱 Mobile-First Features

- **Mobile Navigation**: Collapsible hamburger menu
- **Touch Optimization**: Touch-friendly interactions
- **Responsive Grids**: Adaptive layouts for all screen sizes
- **Mobile Filters**: Collapsible filter sidebar

## 🚀 Technology Stack

### Frontend Framework

- **React 19.1.0**: Latest React with hooks and context
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool and development server
- **React Router DOM 7.6.2**: Client-side routing with latest features

### Styling & UI

- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **FontAwesome 6.7.2**: Comprehensive icon library
- **HeroUI 2.7.9**: Additional UI components
- **PostCSS & Autoprefixer**: CSS processing and optimization

### State Management

- **React Context API**: Global state for authentication and cart
- **TanStack Query 5.80.6**: Server state management and caching
- **Custom Hooks**: Reusable business logic abstraction

### Form Handling & Validation

- **Formik 2.4.6**: Advanced form management
- **Yup 1.6.1**: Schema-based validation
- **Real-time Validation**: Instant feedback on user input

### HTTP & API

- **Axios 1.9.0**: HTTP client with interceptors
- **Route E-commerce API**: Integration with external API

### Development Tools

- **ESLint 9.25.0**: Code linting and best practices
- **TypeScript ESLint**: TypeScript-specific linting rules
- **React Loader Spinner**: Loading indicators

### Notifications & UX

- **React Toastify 11.0.5**: Toast notifications system

## 📁 Detailed Project Structure

```
src/
├── Components/                    # All React components
│   ├── Brands/                   # Brand listing and showcase
│   │   └── Brands.tsx           # Brand catalog page
│   ├── Cart/                    # Shopping cart functionality
│   │   └── Cart.tsx             # Cart management and checkout
│   ├── Categories/              # Product categories
│   │   └── Categories.tsx       # Category showcase page
│   ├── Footer/                  # Site footer
│   │   └── Footer.tsx           # Footer component
│   ├── Home/                    # Homepage components
│   │   ├── Home.tsx             # Main homepage
│   │   └── Components/          # Homepage sections
│   │       ├── BrandsSection.tsx        # Featured brands
│   │       ├── CategoriesSection.tsx    # Category preview
│   │       ├── FeaturedProductsSection.tsx # Top products
│   │       ├── FeaturesSection.tsx      # Key features
│   │       ├── HeroSection.tsx          # Hero banner
│   │       ├── NewsletterSection.tsx    # Email subscription
│   │       ├── ProductCard.tsx          # Reusable product card
│   │       ├── StarRating.tsx           # Rating component
│   │       └── StatsSection.tsx         # Company statistics
│   ├── Layout/                  # App layout wrapper
│   │   └── Layout.tsx           # Main layout structure
│   ├── Login/                   # Authentication
│   │   └── Login.tsx            # Login form with validation
│   ├── Navbar/                  # Navigation
│   │   └── Navbar.tsx           # Responsive navigation bar
│   ├── NotFound/                # Error handling
│   │   └── NotFound.tsx         # 404 error page
│   ├── PrivateRoute/            # Route protection
│   │   └── PrivateRoute.tsx     # Authentication guard
│   ├── ProductDetails/          # Product information
│   │   └── ProductDetails.tsx   # Detailed product view
│   ├── Products/                # Product catalog
│   │   ├── Products.tsx         # Main products page
│   │   └── FilterSide.tsx       # Advanced filtering sidebar
│   └── Register/                # User registration
│       └── Register.tsx         # Registration form
├── Contexts/                    # React Context providers
│   ├── AuthContextProvider.tsx      # Authentication state
│   └── CartContextProvider/         # Shopping cart state
│       └── CartContextProvider.tsx
├── Hooks/                       # Custom React hooks
│   ├── useAuth.tsx              # Authentication logic
│   ├── useBrands.tsx            # Brand data management
│   ├── useCart.tsx              # Cart operations
│   ├── useCategories.tsx        # Category data
│   └── useProducts.tsx          # Product data and filtering
└── assets/                      # Static assets and images
```

## 🔧 Installation & Development

### Prerequisites

- **Node.js** (v16 or higher)
- **pnpm** (recommended) or npm/yarn
- **Git** for version control

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/AhmedEsam2002/ecommerce-website.git
   cd ecommerce-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build Commands

```bash
# Development
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## 🌐 API Integration

### Base Configuration

- **API Base URL**: `https://ecommerce.routemisr.com/api/v1/`
- **Authentication**: JWT Bearer token
- **Data Format**: JSON

### Available Endpoints

#### Authentication

- `POST /auth/signin` - User login
- `POST /auth/signup` - User registration

#### Products

- `GET /products` - Fetch all products
- `GET /products/{id}` - Get product details

#### Categories & Brands

- `GET /categories` - Fetch all categories
- `GET /brands` - Fetch all brands

#### Cart Management

- `GET /cart` - Get user cart
- `POST /cart` - Add item to cart
- `PUT /cart/{id}` - Update cart item
- `DELETE /cart/{id}` - Remove from cart

## 📱 Route Structure

### Public Routes

| Route           | Component      | Description                    |
| --------------- | -------------- | ------------------------------ |
| `/`             | Home           | Homepage with featured content |
| `/login`        | Login          | User authentication            |
| `/register`     | Register       | New user registration          |
| `/products/:id` | ProductDetails | Individual product view        |

### Protected Routes (Authentication Required)

| Route         | Component  | Description              |
| ------------- | ---------- | ------------------------ |
| `/products`   | Products   | Complete product catalog |
| `/categories` | Categories | Category browsing        |
| `/brands`     | Brands     | Brand showcase           |
| `/cart`       | Cart       | Shopping cart management |

### Error Routes

| Route | Component | Description    |
| ----- | --------- | -------------- |
| `*`   | NotFound  | 404 error page |

## 🎯 Key Features Deep Dive

### Authentication System

- **JWT Token Management**: Secure token storage in localStorage
- **Auto-login**: Persistent sessions across browser restarts
- **Form Validation**: Real-time validation with custom schemas
- **Error Handling**: Comprehensive error messages
- **Egyptian Phone Format**: Specific validation for local users

### Product Filtering System

- **Multi-Category Filter**: Select multiple categories
- **Brand Selection**: Filter by preferred brands
- **Price Range**: Min/max price filtering
- **Real-time Updates**: Instant filter application
- **Filter Persistence**: Maintains filters during session
- **Clear Filters**: One-click filter reset

### Shopping Cart Features

- **Add to Cart**: Quick product addition
- **Quantity Management**: Increase/decrease item quantities
- **Item Removal**: Individual item deletion
- **Price Calculation**: Real-time total updates
- **Stock Validation**: Prevents over-ordering
- **Persistent Cart**: Cart state maintained across sessions

### Product Display System

- **Product Cards**: Image, title, price, rating display
- **Status Badges**: Sale, stock alerts, sold count
- **Stock Management**: Real-time availability status
- **Rating System**: 5-star visual rating display
- **Hover Effects**: Interactive product previews
- **Responsive Grid**: Adaptive layout for all devices

### User Interface Features

- **Loading States**: Professional skeleton screens
- **Error Boundaries**: Graceful error handling
- **Toast Notifications**: Success/error feedback
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: CSS transitions and transforms
- **Accessibility**: Keyboard navigation and screen reader support

## 🎨 Design System

### Color Palette

- **Primary Green**: `#16a34a` - Trust, growth, success
- **Secondary Blue**: `#3b82f6` - Reliability, professionalism
- **Accent Red**: `#dc2626` - Urgency, sales, warnings
- **Warning Orange**: `#f59e0b` - Alerts, limited stock
- **Neutral Grays**: Various shades for text and backgrounds

### Typography

- **Font Family**: System fonts for optimal performance
- **Heading Scale**: Clear hierarchy (text-4xl to text-base)
- **Weight Variations**: Light, regular, medium, semibold, bold
- **Responsive Sizing**: Adaptive text sizes across breakpoints

### Component Patterns

- **Card Design**: Consistent shadow and border radius
- **Button States**: Hover, active, disabled variations
- **Form Elements**: Consistent input styling and validation
- **Navigation**: Responsive menu with mobile considerations

## 🔒 Security Implementation

### Authentication Security

- **JWT Tokens**: Secure stateless authentication
- **Token Storage**: Secure localStorage implementation
- **Route Protection**: Automatic redirection for unauthorized access
- **Form Validation**: Client-side and server-side validation
- **XSS Prevention**: Safe HTML rendering practices

### Data Validation

- **Input Sanitization**: Formik and Yup validation schemas
- **Type Safety**: TypeScript for compile-time error prevention
- **API Validation**: Server-side validation backup
- **Error Boundaries**: Prevents application crashes

## 📊 Performance Optimizations

### Code Optimization

- **Tree Shaking**: Unused code elimination
- **Code Splitting**: Route-based lazy loading
- **Bundle Analysis**: Optimized bundle sizes
- **TypeScript**: Compile-time optimizations

### Runtime Performance

- **React Query Caching**: Efficient server state management
- **Memoization**: Optimized re-rendering prevention
- **Lazy Loading**: On-demand component loading
- **Image Optimization**: Proper sizing and lazy loading

### Build Optimizations

- **Vite**: Fast development and build times
- **PostCSS**: CSS optimization and autoprefixing
- **Minification**: Production code compression
- **Vendor Splitting**: Optimized caching strategies

## 🧪 Development Best Practices

### Code Quality

- **TypeScript**: Type safety throughout the application
- **ESLint**: Consistent code formatting and standards
- **Component Architecture**: Modular and reusable components
- **Custom Hooks**: Reusable business logic abstraction
- **Context API**: Efficient global state management

### File Organization

- **Feature-based Structure**: Logical component grouping
- **Index Files**: Clean import paths
- **Type Definitions**: Centralized interface definitions
- **Asset Management**: Organized static resources

### Git Workflow

- **Semantic Commits**: Clear commit message standards
- **Branch Strategy**: Feature-based development
- **Code Reviews**: Quality assurance process
- **Version Control**: Proper tagging and releases

## 🚧 Future Enhancement Roadmap

### Planned Features

- **User Profile Management**: Account settings and preferences
- **Order History**: Past purchase tracking and management
- **Wishlist System**: Save favorite products for later
- **Product Reviews**: User-generated reviews and ratings
- **Advanced Search**: Full-text search with filters
- **Payment Integration**: Stripe/PayPal checkout process
- **Admin Dashboard**: Product and order management
- **Inventory Management**: Stock tracking and alerts

### Technical Improvements

- **Unit Testing**: Jest and React Testing Library integration
- **E2E Testing**: Cypress for end-to-end testing
- **PWA Features**: Offline support and push notifications
- **Performance Monitoring**: Analytics and error tracking
- **Internationalization**: Multi-language support
- **Dark Mode**: Theme switching capabilities

### UX Enhancements

- **Product Comparison**: Side-by-side product comparison
- **Recently Viewed**: Track user browsing history
- **Recommendation Engine**: AI-powered product suggestions
- **Live Chat**: Customer support integration
- **Voice Search**: Voice-activated product search
- **AR Preview**: Augmented reality product preview

## 🤝 Contributing

We welcome contributions to improve the FreshCart e-commerce platform!

### How to Contribute

1. **Fork the repository**

   ```bash
   git fork https://github.com/AhmedEsam2002/ecommerce-website.git
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**

   - Follow the existing code style
   - Add TypeScript types for new features
   - Update documentation as needed

4. **Test your changes**

   ```bash
   pnpm dev  # Test in development
   pnpm build  # Ensure production build works
   ```

5. **Commit your changes**

   ```bash
   git commit -m 'feat: add amazing feature'
   ```

6. **Push to your branch**

   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**

### Contribution Guidelines

- Follow TypeScript best practices
- Maintain responsive design principles
- Add appropriate error handling
- Update documentation for new features
- Ensure compatibility across devices

## 📄 License & Usage

This project is developed as part of the **Route Frontend Development Course** and is intended for educational purposes.

### Educational Use

- ✅ Learning and educational purposes
- ✅ Portfolio demonstrations
- ✅ Code reference and study
- ✅ Non-commercial use

### Commercial Use

- ❌ Direct commercial deployment without permission
- ❌ Selling or redistributing without attribution
- ✅ Inspiration for commercial projects (with attribution)

## 👨‍💻 Developer Information

**Ahmed Esam**

- **Email**: ahmedesamnew2002@gmail.com
- **Phone**: +20 1200997915
- **GitHub**: [AhmedEsam2002](https://github.com/AhmedEsam2002)

### Professional Background

- Frontend Developer specializing in React and TypeScript
- Student at Route Academy Frontend Development Program
- Passionate about creating user-friendly web applications
- Experienced in modern web technologies and best practices

## 🙏 Acknowledgments

### Educational Credits

- **Route Academy**: Comprehensive frontend development training
- **Route E-commerce API**: Backend services and data provision
- **Instructors**: Guidance and mentorship throughout the course

### Technology Credits

- **React Team**: Amazing framework and ecosystem
- **Vercel**: Excellent deployment platform
- **Tailwind CSS**: Utility-first CSS framework
- **FontAwesome**: Beautiful icon library
- **TanStack Query**: Powerful server state management

### Community Support

- **React Community**: Continuous learning and support
- **Stack Overflow**: Problem-solving assistance
- **GitHub**: Open source collaboration platform
- **Frontend Development Community**: Inspiration and best practices

---

## 📈 Project Statistics

- **Total Components**: 25+ React components
- **Lines of Code**: 3000+ lines of TypeScript/TSX
- **API Endpoints**: 8+ integrated endpoints
- **Responsive Breakpoints**: 5 device categories
- **Form Validations**: 10+ validation rules
- **State Management**: 4 context providers
- **Custom Hooks**: 5 reusable hooks

---

## 🔗 Quick Links

- 🌐 **Live Demo**: [ecommerce-website-7aja.vercel.app](https://ecommerce-website-7aja.vercel.app/)
- 📂 **Source Code**: [GitHub Repository](https://github.com/AhmedEsam2002/ecommerce-website/)
- 📧 **Contact**: ahmedesamnew2002@gmail.com
- 🎓 **Course**: Route Academy Frontend Development Program

---

**Built with ❤️ by Ahmed Esam as part of the Route Frontend Development Course**

_This project demonstrates modern React development practices, responsive design principles, and comprehensive e-commerce functionality. It serves as a complete learning resource for frontend development students and a professional portfolio piece._

### State Management

- **React Context**: Global state management for auth and cart
- **TanStack Query**: Server state management and caching
- **Custom Hooks**: Reusable logic for products, brands, categories

### UI Components & Icons

- **FontAwesome**: Beautiful icons for enhanced UX
- **HeroUI**: Additional UI components
- **React Router DOM**: Client-side routing

### Form Handling & Validation

- **Formik**: Form management
- **Yup**: Schema validation
- **Toast Notifications**: User feedback

### HTTP Client

- **Axios**: API communication with interceptors

### Development Tools

- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **AutoPrefixer**: Vendor prefixes

## 📁 Project Structure

```
src/
├── Components/           # Reusable UI components
│   ├── Brands/          # Brand listing page
│   ├── Categories/      # Category showcase
│   ├── Footer/          # Site footer
│   ├── Home/            # Homepage components
│   │   └── Components/  # Homepage sections
│   ├── Layout/          # Main layout wrapper
│   ├── Login/           # Authentication forms
│   ├── Navbar/          # Navigation component
│   ├── NotFound/        # 404 error page
│   ├── PrivateRoute/    # Route protection
│   ├── Products/        # Product catalog
│   └── Register/        # User registration
├── Contexts/            # React Context providers
│   ├── AuthContextProvider.tsx      # Authentication state
│   └── CartContextProvider/         # Shopping cart state
├── Hooks/               # Custom React hooks
│   ├── useAuth.tsx      # Authentication logic
│   ├── useBrands.tsx    # Brand data fetching
│   ├── useCart.tsx      # Cart management
│   ├── useCategories.tsx # Category data
│   └── useProducts.tsx  # Product data fetching
└── assets/              # Static assets
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm/yarn

### Installation Steps

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

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## 🌐 API Integration

The application integrates with the Route E-commerce API:

- **Base URL**: `https://ecommerce.routemisr.com/api/v1/`
- **Endpoints**:
  - `GET /products` - Fetch all products
  - `GET /categories` - Fetch all categories
  - `GET /brands` - Fetch all brands
  - `POST /auth/signin` - User login
  - `POST /auth/signup` - User registration

## 📱 Pages & Routes

### Public Routes

- **/** - Homepage with featured products and categories
- **/login** - User authentication
- **/register** - New user registration

### Protected Routes (Require Authentication)

- **/products** - Complete product catalog
- **/categories** - Category listing
- **/brands** - Brand showcase

### Error Handling

- **404 Page** - Custom not found page for invalid routes

## 🎯 Key Features Breakdown

### Homepage Components

- **Hero Section**: Welcome banner with call-to-action
- **Features Section**: Key selling points (shipping, security, quality)
- **Categories Section**: Product category overview
- **Featured Products**: Top-selling products showcase
- **Brands Section**: Featured brand partners
- **Newsletter**: Subscription form
- **Stats Section**: Company statistics

### Product Display

- **Product Cards**: Image, title, price, rating, stock status
- **Badges**: Category, sale, stock alerts, sold count
- **Interactive Elements**: Hover effects, add to cart buttons
- **Stock Management**: Real-time availability display

### Authentication System

- **JWT Token Management**: Secure token storage and validation
- **Form Validation**: Real-time validation with error messages
- **Protected Routes**: Automatic redirection for unauthorized access
- **Persistent Login**: Remember user sessions

### Shopping Cart

- **Add to Cart**: Quick product addition
- **Cart Counter**: Real-time item count in navigation
- **Context Management**: Global cart state

## 🎨 Design System

### Color Scheme

- **Primary**: Green (#16a34a) - Trust and growth
- **Secondary**: Blue (#3b82f6) - Reliability
- **Accent**: Red (#dc2626) - Urgency and sales
- **Neutral**: Gray scales for text and backgrounds

### Typography

- **Font**: System fonts for performance
- **Hierarchy**: Clear heading and text sizes
- **Responsive**: Scales appropriately across devices

### Animations

- **Hover Effects**: Product cards, buttons, navigation
- **Transitions**: Smooth state changes
- **Loading States**: Skeleton screens and spinners
- **Micro-interactions**: Cart bounce, badge pulse

## 🔒 Security Features

- **Token-based Authentication**: JWT implementation
- **Protected Routes**: Route-level access control
- **Form Validation**: Client-side and server-side validation
- **XSS Prevention**: Safe HTML rendering

## 📊 Performance Optimizations

- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Lazy loading and proper sizing
- **Caching**: TanStack Query for server state caching
- **Bundle Size**: Tree shaking and minimization

## 🧪 Development Guidelines

### Code Quality

- **TypeScript**: Type safety throughout the application
- **ESLint**: Consistent code formatting and best practices
- **Component Organization**: Modular and reusable components
- **Custom Hooks**: Reusable business logic

### State Management

- **Context API**: Global state for auth and cart
- **TanStack Query**: Server state and caching
- **Local State**: Component-level state for UI

## 🚧 Future Enhancements

### Planned Features

- **Product Details Page**: Individual product pages
- **User Profile**: Account management
- **Order History**: Past purchase tracking
- **Wishlist**: Save favorite products
- **Product Reviews**: User-generated reviews
- **Advanced Search**: Filters and sorting
- **Payment Integration**: Checkout process
- **Admin Panel**: Product and order management

### Technical Improvements

- **Unit Testing**: Jest and React Testing Library
- **E2E Testing**: Cypress integration
- **PWA Features**: Offline support and push notifications
- **Performance Monitoring**: Analytics and error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the Route Frontend Course and is for educational purposes.

## 👨‍💻 Developer

**Ahmed Esam**

- Email: ahmedesamnew2002@gmail.com
- Phone: +20 1200997915

## 🙏 Acknowledgments

- **Route Academy**: For the comprehensive frontend course
- **Route E-commerce API**: For providing the backend services
- **React Community**: For the amazing ecosystem
- **Tailwind CSS**: For the utility-first CSS framework

---

_This project demonstrates modern React development practices, responsive design, and e-commerce functionality. Built with ❤️ as part of the Route Frontend Development Course._
