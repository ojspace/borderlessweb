# 🛡️ Deployment Safety Guide - NEVER Break the Website

## ⚠️ Critical Rules to Prevent Downtime

### Rule #1: ALWAYS Test Before Deploying

```bash
# 1. Build locally first
npm run build

# 2. Check for errors
# If build succeeds, you're good to deploy

# 3. Deploy to Cloudflare
wrangler pages deploy _site --project-name=borderlessweb --branch=main
```

### Rule #2: NEVER Move/Delete Files While Site is Live

**What happened before:**
- We moved the repository folder
- This didn't break files, but it's risky
- Always deploy immediately after any changes

**Safe Practice:**
```bash
# After ANY change to the repo location or structure:
cd /Users/oj/Documents/borderlessweb
npm run build
wrangler pages deploy _site --project-name=borderlessweb --branch=main
```

### Rule #3: Keep a Backup of _site Folder

```bash
# Before making major changes, backup the working build
cp -r _site _site_backup

# If something breaks, you can quickly redeploy:
wrangler pages deploy _site_backup --project-name=borderlessweb --branch=main
```

## 🚀 Safe Deployment Checklist

Use this checklist for EVERY deployment:

- [ ] Navigate to website folder: `cd /Users/oj/Documents/borderlessweb`
- [ ] Pull latest changes (if working with git): `git pull origin main`
- [ ] Clean old build: `npm run clean`
- [ ] Build fresh: `npm run build`
- [ ] Check build succeeded (no errors in console)
- [ ] Verify _site folder exists: `ls -la _site`
- [ ] Deploy: `wrangler pages deploy _site --project-name=borderlessweb --branch=main`
- [ ] Test live site: Open https://getborderless.space/
- [ ] Test blog: Open https://getborderless.space/blog/
- [ ] Commit changes: `git add . && git commit -m "..." && git push`

## ⚡ Quick Emergency Recovery

If website goes down:

```bash
# 1. Navigate to website
cd /Users/oj/Documents/borderlessweb

# 2. Rebuild
npm run build

# 3. Redeploy immediately
wrangler pages deploy _site --project-name=borderlessweb --branch=main

# Site will be back in 30 seconds!
```

## 🔒 What NOT to Do

❌ **DON'T** move repository while making changes
❌ **DON'T** deploy without building first
❌ **DON'T** delete _site folder without rebuilding
❌ **DON'T** modify files in _site directly (always edit in src/)
❌ **DON'T** push to GitHub without testing locally first

## ✅ What TO Do

✅ **DO** always build before deploying
✅ **DO** test locally with `npm start` first
✅ **DO** keep the repository in `/Users/oj/Documents/borderlessweb`
✅ **DO** commit working states frequently
✅ **DO** redeploy immediately after any repo changes

## 📍 Website Location - NEVER CHANGE

**Always work from:**
```
/Users/oj/Documents/borderlessweb
```

**NEVER:**
- Move this folder without redeploying
- Work from multiple locations
- Delete this folder without backup

## 🎯 Standard Workflow

### Adding a Blog Post

```bash
cd /Users/oj/Documents/borderlessweb
nano src/posts/your-new-post.md
npm run build
wrangler pages deploy _site --project-name=borderlessweb --branch=main
git add . && git commit -m "Add new post" && git push
```

### Updating Homepage

```bash
cd /Users/oj/Documents/borderlessweb
nano static/index.html
npm run build
wrangler pages deploy _site --project-name=borderlessweb --branch=main
git add . && git commit -m "Update homepage" && git push
```

### Updating Styles

```bash
cd /Users/oj/Documents/borderlessweb
nano src/assets/css/blog.css
npm run build
wrangler pages deploy _site --project-name=borderlessweb --branch=main
git add . && git commit -m "Update styles" && git push
```

## 🌐 Live URL Monitoring

Always verify these after deploying:

- **Homepage:** https://getborderless.space/
- **Blog Index:** https://getborderless.space/blog/
- **Test Post:** https://getborderless.space/posts/2025-10-21-what-is-borderless-launch/

If any return 404, redeploy immediately!

---

**Remember: Build → Deploy → Test → Commit**

Never skip the build step! 🛡️
