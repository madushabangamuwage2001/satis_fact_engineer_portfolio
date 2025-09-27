# Satis-Fact Engineering Portfolio Website 🏗️

A modern, responsive website for Satis-Fact Engineering showcasing construction and maintenance services. Built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0.8-yellow.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-teal.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🌟 Features

- **Modern Design**: Clean, professional UI with construction industry aesthetics
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth transitions powered by Framer Motion
- **Contact Form**: EmailJS integration for client inquiries
- **Service Showcase**: Detailed presentation of construction services
- **Project Portfolio**: Gallery of completed construction projects
- **Performance Optimized**: Fast loading with Vite build system
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Error Handling**: Comprehensive error boundaries and fallbacks

## 🚀 Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks and concurrent features
- **React Router DOM 6.15.0** - Client-side routing with future flags enabled
- **Vite 5.0.8** - Next-generation frontend tooling
- **Tailwind CSS 3.4.0** - Utility-first CSS framework

### Animations & UI
- **Framer Motion 10.16.0** - Production-ready motion library
- **Custom CSS animations** - Shimmer effects and loading states

### Email Services
- **EmailJS Browser 4.4.1** - Send emails directly from frontend
- **Nodemailer 7.0.5** - Email handling utilities

### Development Tools
- **ESLint 8.55.0** - Code linting with Airbnb config
- **Prettier** - Code formatting
- **Jest 29.7.0** - JavaScript testing framework
- **React Testing Library** - Component testing utilities
- **Babel** - JavaScript transpilation

## 📁 Project Structure

```
frontend/
├── public/
│   ├── assets/
│   │   └── cover-video.mp4      # Hero video
│   └── vite.svg                 # Vite logo
├── src/
│   ├── assets/                  # Images and media files
│   ├── components/              # Reusable React components
│   │   ├── ContactModal.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── FloatingCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Navbar.jsx
│   │   ├── projects.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/                   # Route components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── services/                # API and service utilities
│   │   └── emailService.js
│   ├── styles/                  # Custom CSS
│   │   └── shimmer.css
│   ├── __tests__/               # Test files
│   ├── __mocks__/               # Jest mocks
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css               # Global styles
├── config files
└── documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js >= 16.0.0
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/madushabangamuwage2001/satis_fact_engineer_portfolio.git
cd satis_fact_engineer_portfolio/frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure EmailJS (Required for Contact Form)
1. Follow the detailed setup guide in [`EMAILJS_SETUP.md`](./EMAILJS_SETUP.md)
2. Update the configuration in `src/services/emailService.js`

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
npm run preview      # Preview production build locally
```

### Building
```bash
npm run build        # Build for production
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically
```

### Testing
```bash
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

## 🎨 Customization

### Colors & Theming
The project uses a custom Tailwind CSS configuration with construction-themed colors:

```javascript
// tailwind.config.js
colors: {
  construction: {
    red: "#8B0000",      // Primary brand color
    yellow: "#FACC15",   // Accent color
    gray: "#4B5563",     // Text color
    darkGray: "#374151", // Dark text
    lightGray: "#F3F4F6" // Background
  }
}
```

### Fonts
- **Headings**: Poppins (Google Fonts)
- **Body Text**: Open Sans (Google Fonts)

### Animations
Custom animations are defined in `src/styles/shimmer.css` and implemented using Framer Motion.

## 📧 Contact Form Setup

The contact form uses EmailJS for client-side email sending. This allows the website to send emails without a backend server.

**Important**: You must configure EmailJS for the contact form to work. See [`EMAILJS_SETUP.md`](./EMAILJS_SETUP.md) for detailed instructions.

## 🚀 Deployment

This project is optimized for static hosting platforms. For detailed deployment instructions with custom domain setup, see the [**Complete Netlify Deployment Guide**](./NETLIFY_DEPLOYMENT_GUIDE.md).

### Quick Deploy Options:

#### Netlify (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

The project includes a `netlify.toml` configuration file for optimal deployment with proper redirects and caching.

### Other Platforms
- **GitHub Pages**: Enable GitHub Pages and deploy the build output
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Surge.sh**: Simple static hosting
- **AWS S3 + CloudFront**: AWS static hosting solution

## 🧪 Testing

The project includes comprehensive test coverage:

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: User interaction testing
- **Accessibility Tests**: ARIA compliance testing

Test files are located in `src/__tests__/` and follow the naming convention `ComponentName.test.jsx`.

## 🔧 Configuration Files

- **`vite.config.js`** - Vite configuration with React plugin
- **`tailwind.config.js`** - Tailwind CSS customization
- **`eslint.config.js`** - ESLint rules and configuration
- **`jest.config.js`** - Jest testing configuration
- **`babel.config.js`** - Babel transpilation settings
- **`postcss.config.js`** - PostCSS plugins

## 🚨 Error Handling

The application includes comprehensive error handling:

- **Error Boundaries**: React error boundaries to catch and display user-friendly error messages
- **Loading States**: Loading spinners and skeleton screens
- **Network Error Handling**: Graceful handling of EmailJS failures
- **404 Fallbacks**: Proper routing error handling

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic vendor and animation library chunking
- **Image Optimization**: Optimized asset loading
- **Bundle Analysis**: Configured for production optimization
- **Lazy Loading**: Components load on demand
- **Caching**: Optimized for static hosting platforms

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

### Code Standards
- Follow ESLint rules (Airbnb configuration)
- Use Prettier for code formatting
- Write tests for new components
- Follow React best practices and hooks guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Satis-Fact Engineering**
- Website: [Your Website URL]
- Email: [Your Contact Email]
- Phone: [Your Phone Number]

## 🐛 Bug Reports & Feature Requests

If you encounter any issues or have suggestions for improvements, please create an issue on the GitHub repository.

## 📞 Support

For technical support or questions about the codebase, please contact the development team or create an issue on GitHub.

---

**Built with ❤️ by Satis-Fact Engineering**