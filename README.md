# Chuks Kitchen - Food Ordering System

A modern food ordering and customer management web application built for Chuks Kitchen, allowing customers to browse meals, place orders, and manage their profiles.

## 📋 Project Overview

This is a **frontend-only** web application developed as part of the Trueminds Innovations Ltd internship program. The project demonstrates the conversion of a Figma UI design into a functional, responsive web interface.

**Client**: Mr. Chukwudi Okorie (Mr. Chuks)  
**Business**: Chuks Kitchen  
**Purpose**: Digitize food ordering and customer management

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM v6
- **Language**: JavaScript (JSX)
- **Fonts**: Google Fonts (Inter, Poppins)

### Why These Technologies?

- **React**: Component-based architecture for reusable UI elements
- **Vite**: Lightning-fast development server and optimized builds
- **Tailwind CSS**: Utility-first CSS framework for rapid, consistent styling
- **React Router**: Client-side routing for seamless navigation

## 📁 Project Structure

```
chuks-kitchen/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/        # Generic components (Button, Card, Input, etc.)
│   │   ├── layout/        # Layout components (Header, Footer, Sidebar)
│   │   └── features/      # Feature-specific components
│   ├── pages/             # Page components (screens)
│   │   ├── Home.jsx       # Landing page with hero & featured meals
│   │   ├── Menu.jsx       # Full menu with filters
│   │   ├── FoodDetails.jsx # Individual food item details
│   │   ├── Cart.jsx       # Shopping cart
│   │   └── Profile.jsx    # Customer profile/registration
│   ├── assets/            # Images, icons, fonts
│   │   ├── images/        # Food images, banners
│   │   └── icons/         # Icon files
│   ├── data/              # Mock data (since no backend)
│   │   ├── foods.js       # Food items catalog
│   │   ├── categories.js  # Food categories
│   │   └── mockOrders.js  # Sample order data
│   ├── utils/             # Helper functions
│   ├── styles/            # Additional CSS (if needed)
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles + Tailwind
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind customization
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the repository**

   ```bash
   cd chuks-kitchen
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Interpretation

### Figma to Code Translation

The design was converted from the provided Figma file following these principles:

1. **Layout Fidelity**: Maintained exact spacing, alignment, and visual hierarchy
2. **Responsive Breakpoints**:
   - Mobile: < 640px
   - Tablet: 640px - 1024px
   - Desktop: > 1024px
3. **Color Palette**: Extracted and configured in `tailwind.config.js`
4. **Typography**: Using Inter (body) and Poppins (headings) fonts
5. **Component Reusability**: Identified repeating patterns and created reusable components

### Design Assumptions

Since this is a frontend-only implementation:

- **Mock Data**: All food items, categories, and orders are hardcoded in `/src/data/`
- **Cart State**: Managed with React state (not persisted)
- **Authentication**: UI only - no actual login/registration functionality
- **Form Validation**: Client-side only
- **Images**: Placeholder images or generated images used where Figma assets weren't exportable

## ✨ Features Implemented

### 5+ Screens

1. **Home Page** - Hero section, featured meals, categories
2. **Menu Page** - Full food catalog with search and filters
3. **Food Details** - Detailed view of individual items
4. **Shopping Cart** - Cart management with add/remove items
5. **Profile/Registration** - Customer information form
6. **Order Tracking** (Bonus) - View order history and status

### Responsive Design

- Mobile-first approach
- Flexible layouts using Flexbox and CSS Grid
- Tailwind responsive utilities (`sm:`, `md:`, `lg:`)
- Touch-friendly interactive elements

### Code Quality

- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, etc.
- **Component Organization**: Logical separation by function
- **Clean Code**: Consistent formatting, meaningful variable names
- **Comments**: Key sections documented

## 🚧 Current Limitations

- **No Backend**: All data is static/mock data
- **No Persistence**: Cart and user data reset on page reload
- **No API Integration**: Ready for backend integration but not connected
- **No Real Authentication**: Login/registration is UI only
- **No Payment Processing**: Checkout button is non-functional

## 🔮 Future Improvements

If given more time or scope, the following enhancements would be valuable:

1. **Backend Integration**
   - Connect to REST API or GraphQL
   - Real-time order tracking
   - User authentication with JWT

2. **State Management**
   - Implement Redux or Context API for global state
   - Persist cart data to localStorage

3. **Enhanced Features**
   - Search autocomplete
   - Advanced filtering (price range, dietary restrictions)
   - Favorites/wishlist
   - Order history with details
   - Real-time notifications

4. **Performance**
   - Image optimization and lazy loading
   - Code splitting for faster initial load
   - Progressive Web App (PWA) features

5. **Accessibility**
   - ARIA labels for screen readers
   - Keyboard navigation improvements
   - Color contrast optimization

6. **Testing**
   - Unit tests (Jest + React Testing Library)
   - Integration tests
   - E2E tests (Playwright)

## 📸 Screenshots

_(Screenshots will be added once screens are implemented)_

## 🤝 Internship Context

This project was developed as **Deliverable 1** for the Trueminds Innovations Ltd Frontend Developer internship program. The goal was to demonstrate:

- Ability to translate UI designs into functional code
- Understanding of modern frontend technologies
- Clean code practices and documentation skills
- Responsive design implementation
- Technical communication abilities

## 📝 Documentation Notes

This README is written for another frontend developer who might continue this work. Key considerations:

- The project is ready for backend integration - all components accept props that could be populated from API calls
- Mock data structure mirrors expected API response structure
- Component architecture supports easy feature additions
- Tailwind configuration allows for theme customization

## 👨‍💻 Developer

Developed by [Your Name] as part of Trueminds Innovations Ltd Internship Program

---

**Last Updated**: February 15, 2026  
**Version**: 1.0.0
