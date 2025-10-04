# IELC Website - React Application

The official website of the Ideal English Language Club (IELC), built as a modern React application with Vite and Bun. This project maintains the exact same visual appearance and functionality as the original HTML website while leveraging React's component architecture for better maintainability and scalability.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Fast Development**: Powered by Vite for lightning-fast development and builds
- **Package Manager**: Uses Bun for efficient package management
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Advanced Animations**: Scroll-triggered animations and interactive effects
- **Glassmorphism UI**: Modern glassmorphism design with backdrop filters
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lazy loading, code splitting, and optimized animations

## 📁 Project Structure

```
ielc-website/
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   │   ├── Activities/        # Activities showcase component
│   │   ├── Accomplishments/   # Statistics counter component
│   │   ├── BackgroundEffects/ # Animated background elements
│   │   ├── Contact/          # Contact information component
│   │   ├── Footer/           # Footer component
│   │   ├── Hero/             # Hero section with animated slogans
│   │   ├── Journey/          # Club history component
│   │   ├── Links/            # Subpage links component
│   │   ├── Loader/           # Loading screen component
│   │   ├── Navigation/       # Navigation bar component
│   │   ├── Spotlight/        # Mouse-following spotlight effect
│   │   └── Statement/        # Moderator's statement component
│   ├── hooks/                 # Custom React hooks
│   │   └── useScrollReveal.js # Scroll animations and effects
│   ├── styles/               # CSS styles
│   │   └── index.css         # Global styles and animations
│   ├── assets/               # Fonts and static assets
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **Bun**: Version 1.0.0 or higher (recommended) or npm/yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ielc-website
   ```

2. **Install dependencies**
   
   Using Bun (recommended):
   ```bash
   bun install
   ```
   
   Using npm:
   ```bash
   npm install
   ```

3. **Start development server**
   
   Using Bun:
   ```bash
   bun run dev
   ```
   
   Using npm:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the website.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server with hot reload |
| `bun run build` | Build production-ready application |
| `bun run preview` | Preview production build locally |
| `bun run lint` | Run ESLint for code quality checks |
| `bun run lint:fix` | Fix ESLint issues automatically |

## 🎨 Design System

### Color Palette

```css
:root {
  --black: #050505;        /* Primary background */
  --dark-gray: #111111;    /* Secondary background */
  --mid-gray: #1c1c1c;    /* Tertiary background */
  --light-gray: #a0a0a0;   /* Secondary text */
  --red: #e50914;         /* Accent color */
  --white: #ffffff;        /* Primary text */
}
```

### Typography

- **Primary Font**: Urbanist (Google Fonts)
- **Display Font**: Monument Extended (Local font files)
- **Fallback**: System fonts (Segoe UI, Roboto, Helvetica, Arial)

### Animation Principles

- **Scroll Reveal**: Elements animate in as they enter the viewport
- **Hover Effects**: Interactive elements respond to user interaction
- **Smooth Transitions**: All animations use cubic-bezier easing
- **Performance**: Animations are optimized for 60fps

## 🧩 Component Architecture

### Core Components

1. **App.jsx**: Main application component that orchestrates all sections
2. **Navigation**: Responsive navigation with mobile menu
3. **Hero**: Animated hero section with rotating slogans
4. **Activities**: Grid of activity cards with hover effects
5. **Journey**: Club history with image and text content
6. **Accomplishments**: Animated counters for statistics
7. **Links**: Subpage navigation cards
8. **Statement**: Moderator's quote with glassmorphism design
9. **Contact**: Contact information with icons
10. **Footer**: Copyright and credits

### Background Effects

- **BackgroundEffects**: Concentric circles, geometric shapes, and radial pulses
- **Spotlight**: Mouse-following spotlight effect
- **Loader**: Animated loading screen

### Custom Hooks

- **useScrollReveal**: Handles scroll-triggered animations
- **useParallax**: Creates parallax effects for floating elements
- **useDynamicBackground**: Manages background intensity based on scroll

## 🔧 Configuration

### Vite Configuration

The project uses Vite with the following optimizations:

- **React Plugin**: JSX/TSX support with Fast Refresh
- **Code Splitting**: Automatic vendor chunk splitting
- **Asset Handling**: Font files and images optimization
- **CSS**: Source maps and preprocessing support
- **Path Aliases**: Shortened import paths for better DX

### ESLint Configuration

Code quality is maintained through ESLint with:

- **React Rules**: Best practices for React development
- **TypeScript Support**: Type checking and validation
- **Accessibility**: ARIA and accessibility rule enforcement
- **Performance**: Rules to prevent common performance issues

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: 1100px+ (Full layout)
- **Tablet**: 768px - 1099px (Adjusted layout)
- **Mobile**: < 768px (Stacked layout with mobile menu)

### Mobile Features

- **Hamburger Menu**: Collapsible navigation for mobile devices
- **Touch Optimized**: All interactive elements are touch-friendly
- **Performance**: Reduced animations on low-end devices
- **Accessibility**: Proper touch targets and screen reader support

## 🚀 Performance Optimizations

### Build Optimizations

- **Code Splitting**: Automatic vendor and route-based splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image and font optimization
- **CSS Optimization**: Minification and purging

### Runtime Optimizations

- **Intersection Observer**: Efficient scroll-based animations
- **RequestAnimationFrame**: Smooth 60fps animations
- **Passive Event Listeners**: Improved scroll performance
- **Lazy Loading**: Components load as needed

## 🎯 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use functional components with hooks
- Follow React best practices
- Maintain consistent naming conventions
- Add comprehensive comments for complex logic
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**A.K.M. Saqin Noor**
- Made for Ideal English Language Club
- Website: [Portfolio](https://akmsaqin.github.io)
- Email: [Contact](mailto:akmsaqin@gmail.com)

## 🙏 Acknowledgments

- **Ideal English Language Club** for providing the content and requirements
- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Bun Team** for the efficient package manager
- **Google Fonts** for the typography
- **Monument Extended** font creators for the display typography

---

**Built with ❤️ for the Ideal English Language Club**
