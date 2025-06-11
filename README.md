# 🛒 FreshCart E-commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. This project features a complete shopping experience with product browsing, user authentication, cart management, and more.

## 📸 Screenshots

![Homepage](public/finalProject%20assets/screens/homepage.png)
![Products](public/finalProject%20assets/screens/productdetails.png)
![Cart](public/finalProject%20assets/screens/cart.png)

## ✨ Features

### 🔐 Authentication

- **User Registration**: Create new accounts with validation
- **User Login**: Secure authentication with JWT tokens
- **Protected Routes**: Access control for authenticated users
- **Persistent Sessions**: Auto-login with stored tokens

### 🛍️ Shopping Experience

- **Product Catalog**: Browse through a wide range of products
- **Product Categories**: Organized product categories for easy navigation
- **Brand Showcase**: Featured brands section
- **Product Details**: Detailed product information with images, descriptions, and ratings
- **Shopping Cart**: Add/remove items from cart
- **Stock Management**: Real-time stock status and availability

### 🎨 User Interface

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and intuitive interface with Tailwind CSS
- **Interactive Elements**: Smooth animations and transitions
- **Search Functionality**: Find products quickly
- **Rating System**: Star-based product ratings
- **Toast Notifications**: User feedback for actions

### 📱 Mobile-First Design

- **Mobile Navigation**: Collapsible mobile menu
- **Touch-Friendly**: Optimized for touch interactions
- **Cross-Platform**: Works seamlessly across devices

## 🚀 Tech Stack

### Frontend

- **React 19.1.0**: Modern React with hooks and context
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

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
