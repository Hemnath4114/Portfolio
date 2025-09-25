# Overview

This is a personal portfolio website for Hemnath, a full-stack web developer. The application showcases his skills, projects, and provides a contact form for potential collaborators and recruiters. Built with modern web technologies including React, TypeScript, Express.js, and PostgreSQL with Drizzle ORM, the portfolio emphasizes clean design, smooth animations, and responsive layouts following Material Design principles with a minimal aesthetic.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development tooling
- **Styling**: Tailwind CSS with a comprehensive design system supporting light/dark themes
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and API caching

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submissions
- **Error Handling**: Centralized error middleware with proper status codes
- **Request Processing**: JSON body parsing and URL encoding support

## Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schemas with Zod validation
- **Tables**: Users and contact submissions with UUID primary keys
- **Migrations**: Managed through Drizzle Kit configuration

## Design System
- **Color Palette**: Monochromatic theme with HSL color variables for theme switching
- **Typography**: Inter font family via Google Fonts with weight-based hierarchy
- **Layout**: Responsive grid system using Tailwind's spacing primitives
- **Component Variants**: Class Variance Authority for consistent component styling
- **Theme Support**: System-based automatic light/dark mode detection

## Development Architecture
- **Build System**: Vite for fast development and optimized production builds
- **Type Safety**: Comprehensive TypeScript configuration with strict mode
- **Path Aliases**: Simplified imports using @ for client sources and @shared for common code
- **Development Tools**: Hot module replacement and runtime error overlays

## Portfolio Structure
- **Hero Section**: Name, role, and call-to-action buttons with smooth scroll navigation
- **About Section**: Professional background and technical focus areas
- **Skills Section**: Technology badges in responsive grid layout
- **Projects Section**: Featured project cards with descriptions and GitHub links
- **Contact Section**: Form submission with validation and social media links
- **Footer**: Copyright and technology attribution

# External Dependencies

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Modern icon library with consistent styling

## Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation and performance optimization
- **Zod**: Runtime type validation and schema definition

## Database and ORM
- **Neon Database**: PostgreSQL hosting service via @neondatabase/serverless
- **Drizzle ORM**: Type-safe database toolkit with migration support
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation

## Development Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

## Fonts and Assets
- **Google Fonts**: Inter, DM Sans, Fira Code, Geist Mono, and Architects Daughter
- **CDN Delivery**: Optimized font loading with preconnect hints

## Email Service (Prepared)
- **SendGrid**: Email API service for contact form notifications (configured but not actively used)

## Session Management (Prepared)
- **Connect PG Simple**: PostgreSQL session store for Express sessions (configured but not actively used)