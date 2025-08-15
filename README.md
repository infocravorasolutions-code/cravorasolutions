# Cravora Solutions - 3D React Website

A cutting-edge, fully 3D React website for Cravora Solutions, a professional tech agency. Built with modern web technologies and optimized for performance, accessibility, and SEO.

## 🚀 Features

### 3D & Visual
- **Immersive 3D Hero**: Interactive C-ring logo that morphs into a checkmark
- **Particle Systems**: Volumetric fog and particle fields with performance optimization
- **Interactive Constellations**: 3D tech stack visualization with spring physics
- **Glassmorphism UI**: Modern glass-effect cards and overlays
- **Scroll-driven Animations**: Camera movements and model transformations

### Performance
- **Lite Mode Toggle**: Reduces 3D effects and animations for better performance
- **Adaptive Quality**: Dynamic DPR and LOD based on device capabilities
- **Code Splitting**: Lazy-loaded 3D scenes and components
- **Optimized Assets**: Compressed textures and geometry

### Accessibility
- **Reduced Motion Support**: Respects `prefers-reduced-motion`
- **Keyboard Navigation**: Full keyboard accessibility
- **ARIA Labels**: Comprehensive screen reader support
- **High Contrast**: Sufficient color contrast ratios

### SEO & Performance
- **Lighthouse Optimized**: Target 90+ scores across all metrics
- **Meta Tags**: Complete OpenGraph and Twitter Cards
- **JSON-LD Schema**: Structured data for search engines
- **Performance Monitoring**: Built-in performance tracking

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **Animations**: Framer Motion + Framer Motion 3D
- **Styling**: Tailwind CSS with custom design tokens
- **Smooth Scrolling**: @studio-freight/react-lenis
- **State Management**: Zustand
- **Typography**: Space Grotesk + Inter

## 🎨 Design System

### Colors
- **Primary Teal**: #11C5A3
- **Cyan/Blue**: #0AA0FF  
- **Navy**: #0F2333
- **Off-white**: #F7FAFC
- **Gradient**: `linear-gradient(135deg, #11C5A3 0%, #0AA0FF 100%)`

### Typography
- **Headlines**: Space Grotesk (700 weight)
- **Body**: Inter (400/500 weight)
- **Tracking**: Tight, modern spacing

### Layout
- **Rounded Corners**: 16-24px radius
- **White Space**: Generous spacing for clarity
- **Glass Effects**: Subtle backdrop-blur overlays

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cravora/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

### Performance Mode
Users can toggle "Lite Mode" to:
- Disable post-processing effects
- Reduce particle counts
- Lower 3D quality settings
- Improve performance on lower-end devices

### Environment Variables
Create a `.env` file:

```env
VITE_ANALYTICS_ID=your-analytics-id
VITE_API_URL=your-api-endpoint
```

## 🎯 Performance Optimization

### 3D Scene Optimization
- **Adaptive DPR**: Adjusts pixel ratio based on device performance
- **LOD (Level of Detail)**: Reduces geometry complexity at distance
- **Frustum Culling**: Only renders visible objects
- **Texture Compression**: Optimized texture formats

### Bundle Optimization
- **Tree Shaking**: Removes unused code
- **Code Splitting**: Lazy-loads heavy components
- **Asset Optimization**: Compressed images and fonts

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

All 3D scenes adapt to screen size and input method (touch vs mouse).

## ♿ Accessibility Features

- **Screen Reader Support**: ARIA labels and landmarks
- **Keyboard Navigation**: Full keyboard access
- **Motion Preferences**: Respects `prefers-reduced-motion`
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators

## 🔍 SEO Features

- **Meta Tags**: Complete OpenGraph and Twitter Cards
- **Structured Data**: JSON-LD schema markup
- **Semantic HTML**: Proper heading hierarchy
- **Fast Loading**: Optimized Core Web Vitals
- **Mobile-Friendly**: Responsive design

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Performance audit
npm run lighthouse
```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/                 # 3D components and scenes
│   ├── layout/             # Header, Footer, Navigation
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and helpers
└── styles/                 # Global styles and tokens
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- **Website**: [cravora.com](https://cravora.com)
- **GitHub**: [github.com/cravora](https://github.com/cravora)
- **LinkedIn**: [linkedin.com/company/cravora](https://linkedin.com/company/cravora)

## 📞 Contact

- **Email**: hello@cravora.com
- **Phone**: +1 (555) 123-4567
- **Location**: San Francisco, CA

---

**Ship Faster. Smarter. Safer.** ✅