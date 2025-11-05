# Borderless eSIM Website

A modern, static website for Borderless eSIM featuring a blog powered by Eleventy (11ty).

## Features

- **Landing Page**: Interactive 3D globe with key features and App Store download
- **Blog**: Powered by Eleventy with Markdown-based content
- **Static Pages**: Privacy, Terms, and Support pages
- **Responsive Design**: Mobile-friendly with modern glassmorphism effects
- **Fast & Lightweight**: Pure static HTML/CSS/JS with minimal dependencies
- **Modular CSS Architecture**: Design tokens and CSS variables for consistent styling
- **Automatic Deployment**: GitHub Actions automatically deploys on push

## Tech Stack

- **Static Site Generator**: Eleventy (11ty)
- **Template Engine**: Nunjucks
- **Styling**: Modular CSS with design tokens (CSS custom properties)
- **3D Graphics**: Three.js for the globe visualization
- **Deployment**: GitHub Actions → Cloudflare Pages (automatic)
- **Hosting**: Cloudflare Pages

## Project Structure

```
borderlessweb/
├── src/                      # Eleventy source files
│   ├── _includes/            # Layout templates (Nunjucks)
│   │   ├── base.njk         # Base layout
│   │   └── post.njk         # Blog post layout
│   ├── posts/               # Blog posts (Markdown)
│   │   ├── 2025-10-20-5-benefits-borderless-launch.md
│   │   └── 2025-10-21-what-is-borderless-launch.md
│   ├── assets/              # Static assets
│   │   ├── css/             # Modular CSS
│   │   │   ├── variables.css   # Design tokens
│   │   │   ├── base.css        # CSS reset & base
│   │   │   ├── blog.css        # Blog styles
│   │   │   └── homepage.css    # Homepage styles
│   │   └── js/
│   │       └── globe.js     # Three.js globe animation
│   └── blog.njk             # Blog index page
├── static/                  # Static files (copied as-is)
│   ├── index.html           # Landing page
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of service
│   ├── support/             # Support page
│   └── .well-known/         # Apple App Site Association
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automatic deployment
├── _site/                   # Build output (generated)
├── .eleventy.js             # Eleventy configuration
├── package.json             # Node dependencies
└── .gitignore               # Git ignore rules

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development Server

Run Eleventy with live reload:

```bash
npm start
```

This will start a local server at `http://localhost:8080` with hot reloading.

### Build for Production

Generate the static site in `_site/`:

```bash
npm run build
```

### Clean Build Files

Remove the `_site/` directory:

```bash
npm run clean
```

## Deployment

### Automatic Deployment (Recommended)

This project uses **GitHub Actions** for automatic deployment to Cloudflare Pages.

**How it works:**
- Push to `main` or `claude/**` branches
- GitHub Actions automatically builds and deploys
- Live in ~1 minute

**Setup:** See `GITHUB_ACTIONS_SETUP.md` for instructions.

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
wrangler pages deploy _site
```

**Configuration:**
- **Build Command**: `npm run build`
- **Build Output Directory**: `_site`
- **Node Version**: 18 or higher

## Adding New Blog Posts

1. Create a new Markdown file in `src/posts/`:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2025-10-22
   layout: post.njk
   author: Borderless Team
   excerpt: "A short excerpt for the blog index page"
   ---

   Your blog post content here...
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Commit and push to deploy:
   ```bash
   git add .
   git commit -m "Add new blog post"
   git push
   ```

## Customization

### Styling

The website uses a **modular CSS architecture** with design tokens:

- **Design tokens**: `src/assets/css/variables.css` - Colors, spacing, typography
- **Base styles**: `src/assets/css/base.css` - CSS reset and global styles
- **Blog styles**: `src/assets/css/blog.css` - Blog-specific styles
- **Homepage styles**: `src/assets/css/homepage.css` - Homepage-specific styles

**To change colors/spacing site-wide**, edit the CSS variables in `variables.css`.

See `CSS_ARCHITECTURE.md` for detailed documentation.

### Templates

- Base layout: `src/_includes/base.njk`
- Blog post layout: `src/_includes/post.njk`
- Blog index: `src/blog.njk`

### Configuration

Edit `.eleventy.js` to:
- Add custom collections
- Configure passthrough copy
- Add filters or shortcodes
- Modify template formats

## Documentation

- **`CSS_ARCHITECTURE.md`** - CSS structure and design tokens
- **`GITHUB_ACTIONS_SETUP.md`** - Automatic deployment setup
- **`PROJECT_STRUCTURE.md`** - Complete project organization
- **`HOW_TO_ADD_BLOG_POST.md`** - Blog post creation guide
- **`CLOUDFLARE_DEPLOYMENT.md`** - Manual deployment guide

## Content

### Blog Posts

Currently includes:
1. **What is a Borderless Launch?** - Introduction to borderless eSIM connectivity
2. **5 Reasons Why Borderless Launch is a Game-Changer** - Benefits for digital nomads and travelers

### Static Pages

- **Homepage** (`/`): Landing page with 3D globe and key features
- **Blog** (`/blog/`): Blog post index
- **Privacy** (`/privacy/`): Privacy policy
- **Terms** (`/terms/`): Terms of service
- **Support** (`/support/`): Contact and support information

## License

ISC

## Support

For questions or issues, contact: support@getborderless.space
