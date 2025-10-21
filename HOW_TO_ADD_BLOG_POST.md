# How to Add a New Blog Post

## 📝 Create a New Post File

1. **Navigate to posts folder:**
```bash
cd /Users/oj/Documents/borderlessweb/src/posts
```

2. **Create a new markdown file:**
```bash
nano your-post-slug.md
```

**File naming:** Use descriptive slug (no dates needed in filename anymore!)
- ✅ Good: `best-esim-for-europe.md`
- ✅ Good: `how-to-activate-esim.md`
- ❌ Bad: `2025-10-22-post.md` (don't include dates)

## 📋 Post Template

Copy this template into your new file:

```markdown
---
title: "Your Post Title Here"
date: 2025-10-22
layout: post.njk
author: Borderless Team
excerpt: "A brief 1-2 sentence description that appears in the blog index"
permalink: /your-clean-url-slug/
---

Your blog post content starts here...

## Section Heading

Your content with proper markdown formatting.

### Subsection

- Bullet points
- Are supported

**Bold text** and *italic text* work too.

[Links work like this](https://example.com)

---

**Ready to try Borderless eSIM?** [Download now](https://apps.apple.com/ph/app/borderless-esim-by-ai-tech-lab/id6748566873?uo=2) and get connected in 190+ countries!
```

## 🔑 Important Fields

### permalink (Required!)
This creates your clean URL without dates:

```yaml
permalink: /best-esim-for-europe/
```

**Your URL will be:**
```
https://getborderless.space/best-esim-for-europe/
```

**NOT:**
```
https://getborderless.space/posts/2025-10-22-best-esim-for-europe/  ❌
```

### title
The main heading displayed on the post

### date
Publication date (YYYY-MM-DD format)

### excerpt
Short description shown on blog index page

### layout
Always use `post.njk`

### author
Usually "Borderless Team"

## 🚀 Deploy Your Post

After creating the post:

```bash
# 1. Navigate to website folder
cd /Users/oj/Documents/borderlessweb

# 2. Build the site
npm run build

# 3. Deploy to Cloudflare Pages
wrangler pages deploy _site --project-name=borderlessweb --branch=main

# 4. Commit to git
git add src/posts/your-new-post.md
git commit -m "Add blog post: Your Title"
git push origin main
```

## ✅ Verify It Works

Check your new post at:
```
https://getborderless.space/your-clean-url-slug/
```

Check it appears in blog index:
```
https://getborderless.space/blog/
```

## 📚 Example Posts

Look at existing posts for reference:

- `src/posts/2025-10-21-what-is-borderless-launch.md`
  - URL: https://getborderless.space/what-is-borderless-launch/

- `src/posts/2025-10-20-5-benefits-borderless-launch.md`
  - URL: https://getborderless.space/5-reasons-borderless-launch-game-changer/

## 💡 URL Best Practices

**Good URL slugs:**
- `/best-countries-for-digital-nomads/`
- `/esim-vs-physical-sim/`
- `/how-to-use-esim-iphone/`
- `/traveling-europe-connectivity-guide/`

**Bad URL slugs:**
- `/post1/` (not descriptive)
- `/2025-10-22-blog-post/` (includes date)
- `/this-is-a-very-long-url-that-goes-on-forever/` (too long)

## 🔧 Troubleshooting

**Post not showing up?**
- Check frontmatter syntax (proper YAML format)
- Ensure `permalink` starts with `/` and ends with `/`
- Run `npm run build` to rebuild

**404 Error?**
- Verify permalink format: `/slug/` (not `slug` or `/slug`)
- Check for typos in permalink
- Redeploy: `wrangler pages deploy _site --project-name=borderlessweb --branch=main`

**Old URL still working?**
- Cloudflare Pages caches old URLs
- New URLs are active immediately
- Old URLs may work for a while (this is okay)

---

**Remember:** Clean URLs are better for SEO and sharing! Always use the `permalink` field. 🎯
