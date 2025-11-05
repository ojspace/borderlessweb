# 📁 Project Structure - Clean & Organized

## ✅ Final Clean Structure

After cleanup, your projects are now properly organized:

```
/Users/oj/Documents/
└── borderlessweb/                    # 🌐 Your website (ONLY COPY!)
    ├── src/                          # Source files
    │   ├── _includes/                # Templates
    │   │   ├── base.njk              # Base layout
    │   │   └── post.njk              # Blog post layout
    │   ├── posts/                    # Blog posts (Markdown)
    │   ├── assets/
    │   │   ├── css/                  # Modular CSS structure
    │   │   │   ├── variables.css     # Design tokens (colors, spacing, etc.)
    │   │   │   ├── base.css          # CSS reset & base styles
    │   │   │   ├── blog.css          # Blog-specific styles
    │   │   │   └── homepage.css      # Homepage-specific styles
    │   │   └── js/                   # JavaScript files
    │   │       └── globe.js          # Three.js globe animation
    │   └── blog.njk                  # Blog index
    ├── static/                       # Static files
    │   ├── index.html                # Homepage (uses external CSS/JS)
    │   ├── privacy/
    │   ├── terms/
    │   └── support/
    ├── _site/                        # Build output
    ├── node_modules/                 # Dependencies
    ├── .git/                         # Git repository
    ├── package.json                  # NPM config
    ├── .eleventy.js                  # Build config
    └── *.md                          # Documentation

/Users/oj/Documents/HOSTMAN/e-sim/
└── Borderless/                       # 🔒 Backend API (FastAPI)
    ├── main.py
    ├── routes/
    ├── db.py
    └── ... (backend files)
```

## 🗑️ Removed Folders (Cleanup Complete)

The following duplicate/old folders have been removed:

- ❌ `/Users/oj/Documents/HOSTMAN/e-sim/borderlessweb/` (old static site copy)
- ❌ `/Users/oj/Documents/HOSTMAN/e-sim/Borderless/marketing-site/` (moved out)
- ❌ `/Users/oj/Documents/HOSTMAN/e-sim/borderlessweb-site/` (temporary location)
- ❌ `/Users/oj/Documents/borderlessweb/marketing-site/` (empty nested folder)

## ✨ Benefits of Clean Structure

### 1. Easy to Find
```bash
# Always work from Documents folder
cd ~/Documents/borderlessweb
```

### 2. No Confusion
- Only ONE website folder exists
- Backend and website are completely separate
- No nested directories or duplicates

### 3. Safe Development
- Working on website never touches backend
- Working on backend never touches website
- Each has its own git repository

## 🎯 How to Navigate

### Working on Website
```bash
cd ~/Documents/borderlessweb
npm start                    # Development
npm run build               # Build
wrangler pages deploy _site # Deploy
```

### Working on Backend
```bash
cd ~/Documents/HOSTMAN/e-sim/Borderless
# Your backend commands here
```

## 📊 Project Summary

| Project | Location | Purpose | Git Repo |
|---------|----------|---------|----------|
| Website | `/Users/oj/Documents/borderlessweb` | Marketing site + blog | `ojspace/borderlessweb` |
| Backend | `/Users/oj/Documents/HOSTMAN/e-sim/Borderless` | FastAPI + MongoDB | (separate repo) |

## 🚫 What NOT to Do

❌ **DON'T** create new website folders elsewhere
❌ **DON'T** copy/duplicate the website folder
❌ **DON'T** move the website folder
❌ **DON'T** mix backend and website work

## ✅ What TO Do

✅ **DO** always work from `/Users/oj/Documents/borderlessweb`
✅ **DO** keep this location permanent
✅ **DO** commit and push changes regularly
✅ **DO** deploy after every change

## 🔍 Quick Verification

To verify your structure is correct:

```bash
# Should show ONLY ONE result
find ~/Documents -name ".eleventy.js" 2>/dev/null

# Expected output:
# /Users/oj/Documents/borderlessweb/.eleventy.js
```

If you see multiple results, you have duplicates!

## 🎨 CSS Architecture

The website now uses a **modular CSS architecture** with design tokens:

```
src/assets/css/
├── variables.css    # All design tokens (colors, spacing, typography)
├── base.css         # CSS reset and base element styles
├── blog.css         # Blog page styles
└── homepage.css     # Homepage styles
```

**Benefits:**
- ✅ Consistent design system using CSS variables
- ✅ Easy to update colors/spacing site-wide
- ✅ No inline styles (better performance & caching)
- ✅ Modular and maintainable

See **`CSS_ARCHITECTURE.md`** for detailed documentation.

## 📝 Related Documentation

- **`QUICK_START.md`** - Daily commands
- **`DEPLOYMENT_SAFETY.md`** - Never break the site
- **`HOW_TO_ADD_BLOG_POST.md`** - Create blog posts
- **`CLOUDFLARE_DEPLOYMENT.md`** - Deployment guide
- **`CSS_ARCHITECTURE.md`** - CSS structure and design tokens

---

**Your projects are now clean and organized!** 🎉

Website: `/Users/oj/Documents/borderlessweb` (ONLY LOCATION)
