# Next.js Enterprise Landing Page

A modern, high-performance landing page built with Next.js 14, TypeScript, and Tailwind CSS.

![Project Banner](public/images/readme-banner.png)

## 🚀 Tech Stack

- **Framework**: Next.js 15.0.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Animations**: AOS (Animate on Scroll)
- **Build Tool**: Turbopack (see package.json)
- **Font System**: Local Geist fonts with variable weights

## 🏗️ Project Structure

```
├── app/
│   ├── (auth)/           # Authentication routes
│   ├── (default)/        # Main application routes
│   ├── layout.tsx        # Root layout with font configuration
│   └── globals.css       # Global styles and CSS variables
├── components/
│   ├── ui/              # Reusable UI components
│   └── ...              # Feature-specific components
├── lib/
│   └── utils.ts         # Utility functions
└── public/
    └── images/          # Static assets
```

## 🔑 Key Features

- **Modern Authentication Flow**: Complete auth pages (Sign In, Sign Up, Reset Password)
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Dark Mode Support**: Built-in dark mode with CSS variables
- **Performance Optimized**:
  - Local font optimization
  - Image optimization with next/image
  - Turbopack for faster builds

## 🛠️ Development Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 🎨 Styling Architecture

The project uses a sophisticated CSS variable system for theming. Core design tokens are defined in:

```css:app/globals.css
startLine: 9
endLine: 63
```

## 🔒 Authentication Layouts

The auth layout provides a consistent structure for all authentication pages with:
- Branded header
- Responsive form layouts
- Background illustrations
- Gradient effects

See implementation:

```typescript:app/(auth)/layout.tsx
startLine: 6
endLine: 68
```

## 🎯 Component Architecture

Components follow a modular pattern with clear separation of concerns. Example of a complex component with animations and responsive design:

```typescript:components/hero-home.tsx
startLine: 15
endLine: 81
```

## ⚙️ Configuration

### TypeScript

Strict mode enabled with custom path aliases. See:

```json:tsconfig.json
startLine: 2
endLine: 24
```

### Tailwind

Extended configuration with custom colors and animations:

```typescript:tailwind.config.ts
startLine: 3
endLine: 62
```

## 🔄 State Management

- Local state management using React hooks
- AOS for scroll-based animations
- Component-level state for UI interactions

## 📱 Responsive Design

The application uses Tailwind's responsive classes with custom breakpoints:
- Mobile: Default
- Tablet: sm (640px)
- Desktop: lg (1024px)
- Wide: xl (1280px)

## 🚀 Deployment

The project is optimized for Vercel deployment with:
- Automatic preview deployments
- Edge-optimized static assets
- API route support

## 🧪 Best Practices

- TypeScript strict mode enabled
- ESLint configuration for code quality
- Proper image optimization
- SEO-friendly meta tags
- Accessible UI components

## 📝 Notes for Developers

- Use the `cn()` utility for conditional classes
- Follow the existing component patterns
- Maintain CSS variable naming conventions
- Keep components modular and reusable
- Utilize TypeScript strict mode

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.
