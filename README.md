# Portfolio Website

A modern, fast, and beautiful portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🎯 Features

- ⚡ **Static Site Generation** - Optimized for performance with Next.js static export
- 🎨 **Beautiful UI** - Tailwind CSS for responsive, modern styling
- ✨ **Smooth Animations** - Framer Motion for engaging interactions
- 📱 **Fully Responsive** - Mobile-first design approach
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- 🔧 **Type-Safe** - Full TypeScript support
- 🚀 **Netlify Ready** - Pre-configured for Netlify deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Linting**: ESLint
- **Hosting**: Netlify

## 📦 Installation

```bash
npm install
```

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build

Build for production:

```bash
npm run build
```

The static site will be generated in the `out/` directory, ready for deployment.

## 🚀 Deployment on Netlify

### Option 1: Connect GitHub Repository

1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Netlify will automatically detect the `netlify.toml` configuration
6. Click "Deploy site"

### Option 2: Manual Deploy

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable components (add as needed)
└── lib/                    # Utilities and helpers (add as needed)
```

## 🎨 Customization

### Update Metadata

Edit `src/app/layout.tsx` to customize:
- Title
- Description
- Favicon
- Social media metadata

### Customize Colors

Edit `src/app/globals.css` to modify:
- `--color-background`
- `--color-foreground`
- `--color-primary`
- `--color-secondary`

### Add Sections

The home page (`src/app/page.tsx`) has template sections you can customize:
- Hero Section
- Projects Section
- About Section
- Contact Section

## 📝 Environment Variables

Create a `.env.local` file (not committed to git):

```env
# Optional environment variables
# NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## 🔒 Security

- No external CSS dependencies (Tailwind CSS is bundled)
- Static site means no server vulnerabilities
- Safe defaults with TypeScript strict mode

## 📈 Performance

- ⚡ Static export for instant page loads
- 🖼️ Unoptimized images (Netlify handles compression)
- 📦 Minimal JavaScript bundle
- 🎯 Core Web Vitals optimized

## 📄 License

MIT - Feel free to use this template for your portfolio!

## 🤝 Contributing

Feel free to fork, modify, and customize this portfolio for your needs.

## ✨ Next Steps

1. Customize the home page content
2. Add your projects
3. Update metadata and favicon
4. Connect to Netlify
5. Deploy!

Happy coding! 🚀
