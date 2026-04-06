# Q-Generate-Me

A modern, professional QR code generator built with React and Vite. Generate high-resolution, customizable QR codes with brand overlays in a sleek, responsive web application.

---

## Features

- High-Resolution QR Codes: Generate QR codes up to 2000px with crisp, professional output
- Customizable Colors: Full control over QR code colors (dark dots and light background)
- Logo Embedding: Add your brand logo to the center of QR codes with adjustable sizing
- Error Correction Levels: Choose from Low (7%), Medium (15%), Quartile (25%), or High (30%)
- Real-Time Preview: Live preview updates as you adjust settings
- One-Click Download: Export QR codes as high-resolution PNG files
- Responsive Design: Works seamlessly on desktop, tablet, and mobile devices
- Professional UI: Modern design with Material Design 3 aesthetics

---

## Purpose

Q-Generate-Me is designed for businesses, marketers, and developers who need to create branded QR codes for:
- Marketing campaigns
- Product packaging
- Event management
- Print materials
- Digital content distribution

Streamline your QR code generation with architectural precision and real-time rendering.

---

## System Requirements

### Minimum Requirements
- Node.js: v16.0.0 or higher
- npm: v7.0.0 or higher
- RAM: 2GB minimum
- Storage: 500MB free space

### Recommended Requirements
- Node.js: v18.0.0 or higher
- npm: v9.0.0 or higher
- RAM: 4GB or more
- Browser: Chrome, Firefox, Safari, or Edge (latest versions)

### Supported Operating Systems
- Windows 10/11
- macOS 10.15+
- Linux (Ubuntu 18.04+, Debian 10+)

---

## Local Setup

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your system.

#### Check Installation
```bash
node --version
npm --version
```

### Installation Steps

1. Clone the Repository
   ```bash
   git clone https://github.com/yourusername/q-generate-me.git
   cd q-generate-me
   ```

2. Install Dependencies
   ```bash
   npm install
   ```

3. Start Development Server
   ```bash
   npm run dev
   ```

4. Open in Browser
   ```
   Visit: http://localhost:5173
   ```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## Project Structure

```
q-generate-me/
├── src/
│   ├── components/
│   │   ├── QRCodeGenerator.jsx       # Main QR generator component
│   │   └── QRCodeGenerator.css       # Component styles
│   ├── App.jsx                       # Application root
│   ├── main.jsx                      # Application entry point
│   ├── index.css                     # Global styles
│   └── assets/                       # Static assets
├── package.json                      # Project dependencies
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint rules
├── index.html                        # HTML template
└── README.md                         # This file
```

---

## Technologies Used

- React 19.2.4 - UI library
- Vite 8.0.1 - Build tool and dev server
- QRCode.js - QR code generation
- Lucide React - Icon library
- CSS3 - Styling with CSS variables and media queries

---

## Usage Guide

### Generate a QR Code

1. Enter URL or Text
   - Paste your URL or enter text in the destination URL field
   - The preview updates in real-time

2. Customize Colors
   - Click on the color pickers to change QR code colors
   - Adjust primary dots color and background color

3. Adjust Size
   - Use the size slider (200px - 2000px)
   - Larger sizes are recommended for print materials

4. Add Logo (Optional)
   - Click "Upload custom logo" to add your brand logo
   - Adjust logo size from 20% to 80%
   - Supports PNG, JPG, and SVG formats

5. Select Error Correction
   - High (30%) is recommended for most use cases
   - Provides better scanning reliability

6. Download
   - Click "Download High-Res Assets" to save as PNG

---

## Customization

### Color Presets

Quick access to popular color combinations:
- Primary Blue (default)
- Dark Gray
- Secondary Blue

### Error Correction Levels

| Level | Recovery | Use Case |
|-------|----------|----------|
| Low (7%) | ~7% | Low-risk applications |
| Medium (15%) | ~15% | General use |
| Quartile (25%) | ~25% | Print media |
| High (30%) | ~30% | Recommended |

---

## Responsive Design

Q-Generate-Me is optimized for all screen sizes:

- Desktop (1024px+): Full layout with sticky preview
- Tablet (768px - 1023px): Optimized grid layout
- Mobile (480px - 767px): Stacked layout
- Small Mobile (<480px): Minimal, full-width design

---

## Troubleshooting

### Issue: Port 5173 already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Issue: Dependencies installation fails
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: QR code not generating
- Ensure URL or text is entered in the input field
- Check browser console for errors
- Try refreshing the page

---

## Browser Support

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | Yes | Yes |
| Firefox | Yes | Yes |
| Safari | Yes (12+) | Yes (12+) |
| Edge | Yes | Yes |

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

## Support

For support, email support@qgenerateme.com or open an issue on GitHub.

---

## Learn More

- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev
- QR Code Specifications: https://www.qr-code.co.uk/

---

@2026-Q-Generate-Me Project

Made with inspiration to become open source dev.
 