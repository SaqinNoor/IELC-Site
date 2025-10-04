# IELC Website - React Application

The official website of the Ideal English Language Club (IELC), built with React. This project aims to remake the IELC website and make it visually appealing, and retaining a maintainable codebase for future volunteers and contributors.


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
   
   Using Bun:
   ```bash
   bun install
   ```

3. **Start development server**
   
   Using Bun:
   ```bash
   bun run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the website.


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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**A.K.M. Saqin Noor**
- Made for Ideal English Language Club
- Website: [Portfolio](https://saqinnoor.github.io/Portfolio)
- Email: [Contact](mailto:akmsaqinnoor@gmail.com)

## 🙏 Acknowledgments

- **Ideal English Language Club** for letting me make this site

---

**Built with ❤️ by Saqin for the Ideal English Language Club**
