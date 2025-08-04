# Oljebra Group - Professional Landing Page

A modern, responsive landing page for Oljebra Group, showcasing technology solutions for business process improvement and digital transformation.

## 🚀 Features

- **Modern Design**: Clean, professional interface with responsive design
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Friendly**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Mobile First**: Fully responsive across all device sizes
- **Interactive Components**: Smooth animations and user interactions

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## 📋 Sections

1. **Header**: Navigation with mobile menu
2. **Hero**: Compelling value proposition with statistics
3. **Services**: Comprehensive technology service offerings
4. **About**: Company information and mission
5. **Contact**: Contact form and business information
6. **Footer**: Links and social media

## 🎯 Services Highlighted

- Process Automation
- Digital Transformation
- System Integration
- Custom Software Development
- Business Intelligence
- Cybersecurity Solutions

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Services.tsx
    ├── About.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## 🎨 Customization

### Colors

The primary brand color is blue (#2563eb). You can customize the color scheme by modifying the Tailwind classes throughout the components.

### Content

Update the content in each component file to match your specific business requirements:

- Company name and branding
- Service descriptions
- Contact information
- Statistics and achievements

### Styling

All styling is handled through Tailwind CSS classes. Modify the className props in components to adjust the design.

## 📝 Form Handling

The contact form is currently set up with client-side state management. To make it functional, integrate with your preferred form handling service:

- Formspree
- Netlify Forms
- EmailJS
- Custom API endpoint

## 🔧 Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Export static files (if needed)
npm run export
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance

## 🚀 Deployment

This Next.js application can be deployed on:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean**
- Any platform supporting Node.js

## 📄 License

This project is created for Oljebra Group. All rights reserved.

## 🤝 Support

For questions or support regarding this landing page, please contact the development team.
