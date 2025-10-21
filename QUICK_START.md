# Borderless eSIM Website - Quick Start

## 📍 Location

**This repository is now at:**
```
/Users/oj/Documents/HOSTMAN/e-sim/borderlessweb-site
```

**Separated from the backend app** (which is in `/Users/oj/Documents/HOSTMAN/e-sim/Borderless`)

## 🚀 Common Commands

### Local Development

```bash
# Navigate to website folder
cd /Users/oj/Documents/HOSTMAN/e-sim/borderlessweb-site

# Install dependencies (only needed once)
npm install

# Start development server (http://localhost:8080)
npm start

# Build for production
npm run build

# Clean build output
npm run clean
```

### Deploy to Cloudflare Pages

```bash
# Navigate to website folder
cd /Users/oj/Documents/HOSTMAN/e-sim/borderlessweb-site

# Build the site
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy _site --project-name=borderlessweb --branch=main

# Or use the script
./deploy-cloudflare.sh
```

### Git Operations

```bash
# Check status
git status

# Add new blog post
git add src/posts/new-post.md
git commit -m "Add new blog post"
git push origin main

# View recent commits
git log --oneline -5
```

## ✍️ Adding a New Blog Post

1. Create a new file in `src/posts/`:

```bash
cd /Users/oj/Documents/HOSTMAN/e-sim/borderlessweb-site
nano src/posts/2025-10-22-your-post-title.md
```

2. Add frontmatter and content:

```markdown
---
title: "Your Post Title"
date: 2025-10-22
layout: post.njk
author: Borderless Team
excerpt: "Brief description for the blog index"
---

Your blog post content here...
```

3. Build and deploy:

```bash
npm run build
wrangler pages deploy _site --project-name=borderlessweb --branch=main
```

## 🌐 Live URLs

- **Production:** https://getborderless.space/
- **Blog Index:** https://getborderless.space/blog/
- **GitHub Repo:** https://github.com/ojspace/borderlessweb
- **Cloudflare Dashboard:** https://dash.cloudflare.com/ (search for "borderlessweb")

## 📁 Project Structure

```
borderlessweb-site/
├── src/                  # Source files
│   ├── _includes/        # Templates (base.njk, post.njk)
│   ├── posts/           # Blog posts (Markdown)
│   ├── assets/css/      # Stylesheets
│   └── blog.njk         # Blog index
├── static/              # Static files (copied as-is)
│   ├── index.html       # Homepage
│   ├── privacy/
│   ├── terms/
│   └── support/
├── _site/               # Build output (auto-generated)
├── .eleventy.js         # Eleventy config
├── package.json         # Dependencies
└── deploy-cloudflare.sh # Deploy script
```

## 🔧 Troubleshooting

### Build fails
```bash
rm -rf node_modules _site
npm install
npm run build
```

### Deployment fails
```bash
# Check you're authenticated
wrangler whoami

# If not, login
wrangler login
```

### Can't find the project
```bash
# Make sure you're in the right directory
pwd
# Should show: /Users/oj/Documents/HOSTMAN/e-sim/borderlessweb-site

# If not, navigate there
cd /Users/oj/Documents/HOSTMAN/e-sim/borderlessweb-site
```

## 📚 Full Documentation

- **Deployment Guide:** See `CLOUDFLARE_DEPLOYMENT.md`
- **GitHub Build Fix:** See `GITHUB_BUILD_FIX.md`
- **Project README:** See `README.md`

---

**Quick reminder:** This website folder is completely separate from your backend app. You can work on the website without touching the main Borderless backend project!
