# Fix Cloudflare Pages GitHub Auto-Build

## Current Status

✅ **Blog is LIVE:** https://getborderless.space/
✅ **Direct deployments work:** Using `wrangler pages deploy _site`
❌ **GitHub auto-builds fail:** Need to configure build settings in Cloudflare dashboard

## The Problem

Cloudflare Pages is connected to your GitHub repo (`ojspace/borderlessweb`) but doesn't know HOW to build the Eleventy site. When you push to GitHub, it tries to deploy but returns 404 because the build settings are missing or incorrect.

## The Solution

You need to configure the build settings in your Cloudflare Pages dashboard:

### Step 1: Go to Cloudflare Pages Settings

1. Visit: https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → **Pages**
3. Click on your **borderlessweb** project
4. Go to **Settings** → **Builds & deployments**

### Step 2: Configure Build Settings

Set these exact values:

```
Production branch: main
Build command: npm run build
Build output directory: _site
Root directory: (leave empty or /)
Node version: 18 (from .nvmrc)
```

### Step 3: Trigger a Rebuild

After saving settings:
1. Go to **Deployments** tab
2. Click the "..." menu on the latest failed deployment
3. Click **Retry deployment**

OR simply push a new commit to GitHub:
```bash
git commit --allow-empty -m "Trigger rebuild with correct settings"
git push origin main
```

## Current Workaround

Until you fix the GitHub build settings, you can deploy manually using:

```bash
# Build the site
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy _site --project-name=borderlessweb --branch=main
```

This is what we've been using and it works perfectly!

## Automatic Deployments After Fix

Once you configure the build settings correctly, Cloudflare Pages will automatically:
- Build and deploy whenever you push to `main` branch
- Create preview deployments for pull requests
- Use the correct Node version from `.nvmrc`
- Generate the `_site` folder using Eleventy

## Files Already in Place

Your repo already has everything needed:
- ✅ `.eleventy.js` - Build configuration
- ✅ `package.json` - Dependencies and build scripts
- ✅ `.nvmrc` - Node version (18)
- ✅ `src/` - Source files (templates, posts, assets)
- ✅ `static/` - Static files (homepage, legal pages)

## Verify It's Working

After configuring, push a test commit and verify:

1. **Check deployment status:**
   ```bash
   wrangler pages deployment list --project-name=borderlessweb
   ```

2. **Test the URLs:**
   - Production: https://getborderless.space/
   - Blog index: https://getborderless.space/blog/
   - Blog post: https://getborderless.space/posts/2025-10-21-what-is-borderless-launch/

All should load correctly without any manual deployment.

---

**Quick Fix:** Just go to Cloudflare dashboard and set build command to `npm run build` and output to `_site`. That's it!
