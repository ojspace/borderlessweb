# Cloudflare Pages Deployment Guide

## Quick Summary

Your Borderless eSIM blog is ready to deploy to Cloudflare Pages! All the necessary files have been set up and pushed to GitHub.

## Build Configuration

Use these exact settings when connecting to Cloudflare Pages:

```
Production branch: main
Build command: npm run build
Build output directory: _site
Node version: 18 (automatically detected via .nvmrc)
```

## Step-by-Step Deployment

### 1. Access Cloudflare Pages Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your account
3. Navigate to **Pages** in the left sidebar
4. Click **Create a project**

### 2. Connect Your Repository

1. Click **Connect to Git**
2. Choose **GitHub** as your Git provider
3. Authorize Cloudflare to access your GitHub account (if not already done)
4. Select the **`ojspace/borderlessweb`** repository
5. Click **Begin setup**

### 3. Configure Build Settings

On the setup page, enter the following:

**Project name:** `borderless-esim` (or your preferred name)
**Production branch:** `main`
**Framework preset:** `None` (or `Eleventy` if available)

**Build settings:**
- **Build command:** `npm run build`
- **Build output directory:** `_site`
- **Root directory:** `/` (leave empty)

**Environment variables:** None required

### 4. Deploy

1. Click **Save and Deploy**
2. Cloudflare Pages will:
   - Clone your repository
   - Install dependencies with `npm install`
   - Build your site with `npm run build`
   - Deploy the `_site` directory

3. Your first deployment will take 2-3 minutes

### 5. Access Your Site

Once deployed, Cloudflare Pages will provide:

- **Production URL:** `https://borderless-esim.pages.dev` (or your chosen name)
- **Custom domain support:** You can add your own domain later

## Automatic Deployments

Cloudflare Pages will automatically rebuild and deploy your site whenever you:

- Push commits to the `main` branch
- Merge pull requests to `main`

## Adding a Custom Domain

Once deployed, you can connect your custom domain:

1. Go to your Pages project in Cloudflare Dashboard
2. Click on **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `blog.getborderless.space`)
5. Follow the DNS configuration instructions
6. Cloudflare will automatically issue a free SSL certificate

## Recommended: Set Up `blog.getborderless.space`

Since your main site is on `getborderless.space`, you should set up the blog as a subdomain:

1. **Domain:** `blog.getborderless.space`
2. **DNS Configuration:**
   - Add a `CNAME` record pointing to your Pages URL
   - Cloudflare will handle this automatically if your domain is on Cloudflare

## Local Development

To work on the blog locally:

```bash
# Install dependencies
npm install

# Start development server with live reload
npm start

# Build for production
npm run build

# Clean build output
npm run clean
```

The development server runs at `http://localhost:8080` with hot reloading.

## Adding New Blog Posts

1. Create a new Markdown file in `src/posts/`:

```markdown
---
title: "Your Post Title"
date: 2025-10-22
layout: post.njk
author: Borderless Team
excerpt: "Short description for the blog index"
---

Your blog post content here...
```

2. Commit and push:

```bash
git add src/posts/your-new-post.md
git commit -m "Add new blog post: Your Post Title"
git push origin main
```

3. Cloudflare Pages will automatically rebuild and deploy

## Project Structure

```
borderlessweb/
├── src/                     # Source files for Eleventy
│   ├── _includes/           # Templates (base.njk, post.njk)
│   ├── posts/              # Blog posts (Markdown)
│   ├── assets/css/         # Stylesheets
│   └── blog.njk            # Blog index page
├── static/                 # Static files (copied as-is)
│   ├── index.html          # Homepage
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── support/            # Support page
│   └── .well-known/        # Apple App Site Association
├── _site/                  # Build output (generated, not committed)
├── .eleventy.js            # Eleventy configuration
├── .nvmrc                  # Node version specification
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## Build Output

The `_site` directory contains your built website:

```
_site/
├── index.html              # Homepage
├── blog/
│   └── index.html          # Blog index
├── posts/
│   ├── 2025-10-21-what-is-borderless-launch/
│   │   └── index.html
│   └── 2025-10-20-5-benefits-borderless-launch/
│       └── index.html
├── privacy/
├── terms/
├── support/
├── assets/css/             # Blog stylesheets
└── .well-known/            # Apple App Site Association
```

## Troubleshooting

### Build Fails on Cloudflare Pages

1. **Check Node version:** Ensure `.nvmrc` specifies Node 18
2. **Check build logs:** Look for specific error messages
3. **Test locally:** Run `npm run build` locally to verify it works

### Blog posts not showing up

1. **Check frontmatter:** Ensure all required fields are present (title, date, layout, excerpt)
2. **Check date format:** Use `YYYY-MM-DD` format
3. **Rebuild locally:** Run `npm run build` to test

### Custom domain not working

1. **Check DNS:** Ensure CNAME record is correctly configured
2. **Wait for propagation:** DNS changes can take up to 24 hours
3. **Check SSL:** Cloudflare automatically issues certificates, but it may take a few minutes

## Performance Optimization

Your site is already optimized:

- ✅ Static HTML (no server-side processing)
- ✅ Minimal JavaScript (only Three.js for globe)
- ✅ Cloudflare CDN (global edge network)
- ✅ Automatic caching
- ✅ HTTP/2 and HTTP/3 support
- ✅ Brotli compression

## Monitoring

Monitor your site through:

1. **Cloudflare Analytics:** Traffic, performance, and security metrics
2. **Build logs:** Deployment history and build output
3. **Real-time updates:** Instant deployment status

## Support

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Eleventy Docs:** https://www.11ty.dev/docs/
- **GitHub Repo:** https://github.com/ojspace/borderlessweb

---

**Ready to deploy?** Follow the steps above to get your Borderless eSIM blog live on Cloudflare Pages in minutes!
