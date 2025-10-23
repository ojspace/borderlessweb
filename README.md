# Borderless eSIM Website

A modern, static website for Borderless eSIM featuring a blog powered by Eleventy (11ty).

## Features

- **Landing Page**: Interactive 3D globe with key features and App Store download
- **Blog**: Powered by Eleventy with Markdown-based content
- **Bilingual Support**: Full English and Spanish versions
- **Static Pages**: Privacy, Terms, and Support pages
- **Responsive Design**: Mobile-friendly with modern glassmorphism effects
- **Fast & Lightweight**: Pure static HTML/CSS/JS with minimal dependencies

## Tech Stack

- **Static Site Generator**: Eleventy (11ty)
- **Template Engine**: Nunjucks
- **Styling**: Vanilla CSS with custom properties
- **3D Graphics**: Three.js for the globe visualization
- **Hosting**: Cloudflare Pages (recommended)

## Project Structure

```
borderlessweb/
├── src/                      # Eleventy source files
│   ├── _includes/            # Layout templates (Nunjucks)
│   │   ├── base.njk         # English base layout
│   │   ├── base-es.njk      # Spanish base layout
│   │   ├── post.njk         # English post layout
│   │   └── post-es.njk      # Spanish post layout
│   ├── posts/               # English blog posts
│   │   ├── 2025-10-20-5-benefits-borderless-launch.md
│   │   └── 2025-10-21-what-is-borderless-launch.md
│   ├── posts-es/            # Spanish blog posts
│   │   ├── 2025-10-20-5-beneficios-lanzamiento-sin-fronteras.md
│   │   └── 2025-10-21-que-es-lanzamiento-sin-fronteras.md
│   ├── assets/              # Static assets
│   │   └── css/
│   │       └── blog.css     # Blog styling
│   ├── blog.njk             # English blog index
│   └── blog-es.njk          # Spanish blog index
├── static/                  # Static files (copied as-is)
│   ├── index.html           # English landing page
│   ├── privacy/             # English privacy policy
│   ├── terms/               # English terms of service
│   ├── support/             # English support page
│   ├── es/                  # Spanish site
│   │   ├── index.html       # Spanish landing page
│   │   ├── privacy/         # Spanish privacy policy
│   │   ├── terms/           # Spanish terms of service
│   │   └── support/         # Spanish support page
│   └── .well-known/         # Apple App Site Association
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

## Deployment to Cloudflare Pages

### Configuration

- **Build Command**: `npm run build`
- **Build Output Directory**: `_site`
- **Node Version**: 18 or higher

### Steps

1. Push your code to GitHub
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/?to=/:account/pages)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Framework preset**: None (or Eleventy if available)
   - **Build command**: `npm run build`
   - **Build output directory**: `_site`
6. Click "Save and Deploy"

Cloudflare Pages will automatically rebuild and deploy your site whenever you push to your repository.

## Bilingual Support (English & Spanish)

The website is fully bilingual with English and Spanish versions.

### Language Structure

- **English**: `/` (root)
  - Homepage: `/`
  - Blog: `/blog/`
  - Posts: `/posts/post-name/`

- **Spanish**: `/es/`
  - Homepage: `/es/`
  - Blog: `/es/blog/`
  - Posts: `/es/posts/post-name/`

### Language Switching

All pages include language switchers:
- English pages link to `/es/` (Spanish)
- Spanish pages link to `/` (English)

### Adding Translated Content

**For Blog Posts:**

1. **English post** in `src/posts/`:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2025-10-22
   layout: post.njk
   author: Borderless Team
   excerpt: "Short excerpt"
   ---
   Content...
   ```

2. **Spanish post** in `src/posts-es/`:
   ```markdown
   ---
   title: "Título de Tu Post"
   date: 2025-10-22
   layout: post-es.njk
   author: Equipo Borderless
   excerpt: "Breve extracto"
   permalink: /es/posts/post-name/
   ---
   Contenido...
   ```

**For Static Pages:**

- English pages in `static/`
- Spanish pages in `static/es/`

## Adding New Blog Posts

1. Create a new Markdown file in `src/posts/` (English):
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

- Blog styles: `src/assets/css/blog.css`
- Homepage styles: Inline in `static/index.html`

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
