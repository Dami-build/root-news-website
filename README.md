# AI News Website

A modern, professional website for the AI News mobile application. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design inspired by Cal AI
- 📱 Fully responsive mobile-first design
- ⚡ Fast loading with Next.js optimizations
- 🔍 SEO optimized with comprehensive meta tags
- 🌙 Dark theme matching the mobile app
- 📄 Privacy Policy and Terms of Service pages
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-news-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── privacy/           # Privacy Policy page
│   ├── terms/             # Terms of Service page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features showcase
│   ├── AppShowcase.tsx    # App download section
│   └── Footer.tsx         # Footer with links
├── public/                # Static assets
└── ...config files
```

## Customization

### Update Company Information

1. Replace placeholder text in:
   - `app/layout.tsx` - Update metadata and domain
   - `app/privacy/page.tsx` - Add your company address and contact info
   - `app/terms/page.tsx` - Add your jurisdiction and company details

### Add Your App Store Links

Update the download buttons in:
- `components/Hero.tsx`
- `components/AppShowcase.tsx`
- `components/Header.tsx`

### SEO Configuration

Update the following in `app/layout.tsx`:
- `metadataBase` - Your actual domain
- `verification.google` - Your Google verification code
- OpenGraph images - Add your og-image.jpg to public folder

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Performance

This website is optimized for:
- ⚡ Fast loading times
- 📱 Mobile responsiveness
- 🔍 SEO best practices
- ♿ Accessibility standards

## License

[Your License Here]

## Support

For questions or support, contact [your-email@domain.com] 