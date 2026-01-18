# Portfolio Website

A modern, fast, and beautiful portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🎯 Features

- ⚡ **Static Site Generation** - Optimized for performance with Next.js static export
- 🎨 **Beautiful UI** - Tailwind CSS for responsive, modern styling
- ✨ **Smooth Animations** - Framer Motion for engaging interactions
- 📱 **Fully Responsive** - Mobile-first design approach with mobile navigation
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- 🔧 **Type-Safe** - Full TypeScript support
- 🚀 **Netlify Ready** - Pre-configured for Netlify deployment
- 💼 **Work Experience Section** - Timeline view of your professional journey
- 🛠️ **Skills Showcase** - Categorized skills with visual presentation
- 📂 **Project Portfolio** - Detailed project cards with technologies used
- 👤 **About Section** - Personal introduction and values
- 📧 **Contact Section** - Multiple ways to get in touch

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
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Global styles and animations
└── components/
    ├── Navigation.tsx      # Fixed navigation with active section tracking
    ├── Hero.tsx            # Hero section with introduction
    ├── About.tsx           # About me section
    ├── WorkExperience.tsx  # Work experience timeline
    ├── Skills.tsx          # Skills categorized by type
    ├── Projects.tsx        # Featured projects showcase
    └── Contact.tsx         # Contact information and social links
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

### Customize Content

Update the following components with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name and title
   - Modify introduction text

2. **About Section** (`src/components/About.tsx`):
   - Add your personal story
   - Update values and descriptions

3. **Work Experience** (`src/components/WorkExperience.tsx`):
   - Replace `experiences` array with your work history
   - Update company names, positions, dates, and descriptions
   - Add technologies used at each role

4. **Skills** (`src/components/Skills.tsx`):
   - Update `skillCategories` array with your skills
   - Organize by Frontend, Backend, Tools, etc.

5. **Projects** (`src/components/Projects.tsx`):
   - Replace `projects` array with your actual projects
   - Add live URLs and GitHub links
   - Update descriptions and technologies

6. **Contact** (`src/components/Contact.tsx`):
   - Update email address
   - Add your social media links (LinkedIn, GitHub, Twitter, etc.)

7. **Navigation** (`src/components/Navigation.tsx`):
   - Update portfolio name/brand if desired

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

1. **Update Personal Information**:
   - Replace placeholder content in all components
   - Add your work experience, skills, and projects
   - Update contact information and social links

2. **Customize Design** (optional):
   - Adjust colors in `globals.css`
   - Modify Tailwind classes for different styling
   - Add your own images or graphics

3. **SEO Optimization**:
   - Update metadata in `layout.tsx`
   - Add your actual name and description
   - Consider adding Open Graph images

4. **Deploy**:
   - Connect to Netlify or your preferred hosting
   - Deploy and share your portfolio!

## 📝 Important Notes

- All placeholder content (like "Your Name", "Company Name", etc.) should be replaced with your actual information
- Update all email addresses and social media links in the Contact component
- The work experience timeline uses a vertical layout - adjust if needed
- Project cards use gradient backgrounds - you can replace with actual project screenshots
- Make sure to test on mobile devices - the navigation includes a mobile menu

Happy coding! 🚀
