# 🎓 Online Course Platform

# Online Course Fiverr Gig Demo

A modern, responsive React-based online course platform featuring dark/light mode, interactive UI components, and a complete e-learning experience.

A professional React demo site for selling online course platforms on Fiverr. Includes all standard features, modern design, and advanced polish to impress buyers.

## ✨ Features

## Features

- **🌓 Dark/Light Mode Toggle** - Seamless theme switching with persistent preferences- Responsive, mobile-first design

- **📱 Fully Responsive** - Mobile-first design with Bootstrap integration- Modern UI with Bootstrap and custom styles

- **🎨 Modern UI/UX** - Clean interface with smooth animations and transitions- Animated page transitions

- **💬 Interactive Chat** - Multi-choice FAQ chat system- Global dark mode/light mode toggle

- **⭐ Review System** - User reviews with rating filters and sorting- Floating contact/chat button (demo Q&A)

- **💳 Demo Payment** - Mock checkout process for demonstration- Course catalog, details, reviews, and testimonials

- **🔐 User Authentication** - Login/signup modals (demo functionality)- Pricing page with demo checkout/payment flow

- **📊 Course Management** - Course catalog with detailed pages- Dashboard, FAQ, custom 404 illustration

- **🏆 Testimonials** - Customer testimonials carousel- Toast notifications, accessibility polish

- **♿ Accessibility** - WCAG compliant with keyboard navigation- SEO-friendly structure and meta tags



## 🚀 Quick Start## Getting Started

1. **Install dependencies:**

### Prerequisites	```bash

- Node.js 16+ 	npm install

- npm or yarn	```

2. **Run the development server:**

### Installation	```bash

	npm run dev

```bash	```

# Clone the repository3. **Open in browser:**

git clone [repository-url]	Visit `http://localhost:5173` (or shown URL)

cd online-course

## Project Structure

# Install dependencies- `src/`

npm install  - `components/` — All main UI components/pages

  - `App.jsx` — Routing and layout

# Start development server  - `index.css` — Global styles and dark mode

npm run dev  - `main.jsx` — App entry point

- `public/` — Static assets

# Build for production- `index.html` — Main HTML file (add meta tags for SEO)

npm run build

```## SEO Optimization

- Semantic HTML tags used in components

## 📁 Project Structure- Add custom `<title>`, `<meta name="description">`, and Open Graph tags in `index.html`

- Accessible navigation and ARIA labels

```- Fast loading, mobile-friendly

src/

├── components/## Customization

│   ├── layout/          # Layout components (Navbar, Footer)- Easily change colors, logo, and images in `Navbar.jsx`, `index.css`, and assets

│   ├── pages/           # Page components (Home, About, Courses, etc.)- Add/edit courses, reviews, testimonials in respective components

│   └── ui/              # Reusable UI components (Modals, Buttons, etc.)

├── context/             # React Context (Theme management)## Demo Payment Flow

├── hooks/               # Custom React hooks- Pricing page buttons link to a mock checkout

├── utils/               # Utility functions- No real transactions processed

├── assets/              # Static assets (images, icons)

├── App.jsx              # Main App component## Accessibility

├── main.jsx             # Application entry point- Keyboard navigation, focus styles

└── index.css            # Global styles- High contrast and readable fonts

```

## Deployment

### Component Organization- Ready for deployment on Vercel, Netlify, or your own host

- Build with:

**Layout Components (`/components/layout/`)**  ```bash

- `Navbar.jsx` - Navigation bar with responsive menu  npm run build

- `Footer.jsx` - Site footer  ```



**Page Components (`/components/pages/`)**## License

- `Home.jsx` - Landing page with hero sectionThis demo is for Fiverr gig preview purposes only. No real data or payments are processed.

- `About.jsx` - About page

- `Courses.jsx` - Course catalog---

- `CourseDetails.jsx` - Individual course pages

- `Dashboard.jsx` - User dashboard**Impress your buyers with a complete, professional demo!**

- `Reviews.jsx` - Reviews and testimonials
- `FAQ.jsx` - Frequently asked questions
- `Pricing.jsx` - Pricing plans
- `Contact.jsx` - Contact form
- `Checkout.jsx` - Payment checkout (demo)
- `ThankYou.jsx` - Order confirmation
- `NotFound.jsx` - 404 error page

**UI Components (`/components/ui/`)**
- `LoginModal.jsx` - Authentication modal
- `ContactButton.jsx` - Floating chat button
- `ChatModal.jsx` - Chat interface
- `BackToTop.jsx` - Scroll to top button
- `SectionDivider.jsx` - Visual section separator
- `TestimonialsCarousel.jsx` - Testimonials slider

## 🎨 Theme System

The platform features a comprehensive dark/light mode system:

```jsx
import { ThemeContext } from './context';

function MyComponent() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      {/* Component content */}
    </div>
  );
}
```

**CSS Classes:**
- `.dark-mode` - Applied to `<html>` element
- Custom CSS variables for consistent theming
- Bootstrap integration with theme overrides

## 🛠️ Technologies

- **Frontend:** React 18, Vite
- **Styling:** Bootstrap 5, Custom CSS
- **Routing:** React Router v6
- **Icons:** React Icons
- **Notifications:** React Toastify
- **State Management:** React Context API

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Breakpoints:** 
  - Mobile: < 768px
  - Tablet: 768px - 1024px  
  - Desktop: > 1024px
- **Components:** All components are fully responsive
- **Navigation:** Collapsible hamburger menu on mobile

## 🎯 SEO Optimization

- **Meta Tags:** Comprehensive meta tag implementation
- **Semantic HTML:** Proper HTML5 semantic structure
- **Performance:** Optimized bundle size and lazy loading
- **Accessibility:** ARIA labels and keyboard navigation

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style

- **ESLint** configuration included
- **Prettier** recommended for formatting
- **Component naming:** PascalCase
- **File structure:** Organized by feature/type

### Adding New Components

1. Create component in appropriate folder (`layout/`, `pages/`, or `ui/`)
2. Export from folder's `index.js`
3. Import using folder structure: `import { ComponentName } from '../ui'`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build folder contains optimized static files ready for deployment.

### Deployment Platforms

- **Vercel:** `vercel --prod`
- **Netlify:** Drag and drop `dist/` folder
- **GitHub Pages:** Use `gh-pages` package
- **Firebase Hosting:** `firebase deploy`

## 🎨 Customization

### Theme Colors

Edit `src/index.css` to customize the color scheme:

```css
:root {
  --primary-color: #1976d2;
  --secondary-color: #90caf9;
  --dark-bg: #121212;
  --dark-surface: #1e1e1e;
}
```

### Component Styling

Each component can be styled using:
- Bootstrap classes
- Custom CSS modules
- Inline styles with theme context

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: [your-email@example.com]
- Documentation: [Link to detailed docs]

## 🏷️ Version

Current Version: 1.0.0

## 🎯 Roadmap

- [ ] User authentication backend integration
- [ ] Real payment processing
- [ ] Course video player
- [ ] Progress tracking
- [ ] Certificates generation
- [ ] Advanced search and filtering
- [ ] Multi-language support

---

Built with ❤️ using React and modern web technologies.