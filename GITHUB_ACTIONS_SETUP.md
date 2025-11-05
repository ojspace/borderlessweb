# GitHub Actions Automatic Deployment Setup

This guide will help you set up automatic deployments to Cloudflare Pages using GitHub Actions.

## 🚀 What This Does

Every time you push code to:
- `main` branch
- Any `claude/**` branch

GitHub Actions will automatically:
1. ✅ Install dependencies
2. ✅ Build your site with Eleventy
3. ✅ Deploy to Cloudflare Pages

**No manual deployment needed!**

## 📋 Prerequisites

You need two pieces of information from Cloudflare:
1. **Cloudflare API Token**
2. **Cloudflare Account ID**

## 🔑 Step 1: Get Your Cloudflare API Token

### Option A: Create New API Token (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on your profile icon (top right) → **My Profile**
3. Click **API Tokens** in the left sidebar
4. Click **Create Token**
5. Use the **Edit Cloudflare Workers** template
6. Configure the token:
   - **Token name**: `GitHub Actions - Borderless Web`
   - **Permissions**:
     - Account → Cloudflare Pages → Edit
   - **Account Resources**: Include → Your Account
   - **Zone Resources**: All zones (or specific zone if preferred)
7. Click **Continue to summary** → **Create Token**
8. **COPY THE TOKEN** - you'll only see it once! ⚠️

### Option B: Use Existing API Token

If you already have a Cloudflare API token with Pages permissions, you can use that.

## 🆔 Step 2: Get Your Cloudflare Account ID

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on **Pages** in the left sidebar
3. Click on your **borderlessweb** project
4. Your Account ID is visible in the right sidebar under **Account ID**
   - Or find it in the URL: `dash.cloudflare.com/<ACCOUNT_ID>/pages/...`

## 🔐 Step 3: Add Secrets to GitHub

1. Go to your GitHub repository: https://github.com/ojspace/borderlessweb
2. Click **Settings** (top right)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**

### Add Secret #1: CLOUDFLARE_API_TOKEN

- **Name**: `CLOUDFLARE_API_TOKEN`
- **Value**: Paste the API token you copied from Step 1
- Click **Add secret**

### Add Secret #2: CLOUDFLARE_ACCOUNT_ID

- Click **New repository secret** again
- **Name**: `CLOUDFLARE_ACCOUNT_ID`
- **Value**: Paste your Account ID from Step 2
- Click **Add secret**

## ✅ Step 4: Verify Setup

After adding both secrets:

1. Push any change to your repository:
   ```bash
   git push
   ```

2. Go to the **Actions** tab in your GitHub repository
3. You should see a workflow running
4. Click on it to watch the deployment progress
5. When it turns green ✅, your site is deployed!

## 📁 Workflow File Location

The workflow is located at:
```
.github/workflows/deploy.yml
```

## 🔧 How It Works

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main
      - claude/**

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js 20
      - Install dependencies (npm ci)
      - Build site (npm run build)
      - Deploy to Cloudflare Pages
```

## 🎯 Trigger Deployment

The workflow automatically triggers on:
- ✅ Push to `main` branch
- ✅ Push to any `claude/**` branch
- ✅ Merge of pull request to main

Manual trigger is NOT needed - just push your code!

## 🐛 Troubleshooting

### Workflow fails with "API Token invalid"

- Check that `CLOUDFLARE_API_TOKEN` secret is set correctly
- Verify the API token has **Cloudflare Pages Edit** permissions
- Token might be expired - create a new one

### Workflow fails with "Account ID invalid"

- Check that `CLOUDFLARE_ACCOUNT_ID` secret is set correctly
- Verify it matches your Cloudflare account

### Workflow doesn't trigger

- Make sure you pushed to `main` or a `claude/**` branch
- Check the **Actions** tab is enabled for your repository
- Go to Settings → Actions → General → ensure "Allow all actions" is selected

### Build fails

- Check the build logs in the Actions tab
- Ensure `package.json` and dependencies are correct
- Try running `npm install && npm run build` locally first

## 📊 Monitoring Deployments

### View Deployment Status

1. **GitHub Actions**: See build logs and status
   - Go to repository → **Actions** tab

2. **Cloudflare Dashboard**: See deployment history
   - Go to [Cloudflare Pages](https://dash.cloudflare.com/) → **Pages** → **borderlessweb**

### Deployment Timeline

```
Push Code → GitHub Actions triggers
  ↓
Install dependencies (~20 seconds)
  ↓
Build site (~5 seconds)
  ↓
Deploy to Cloudflare (~30 seconds)
  ↓
✅ Site live!
```

**Total time**: ~1 minute from push to live

## 🎉 Benefits

1. **No manual deployment** - Just push code
2. **Consistent builds** - Same environment every time
3. **Build logs** - Easy to debug if something goes wrong
4. **Preview deployments** - Every branch gets a preview URL
5. **Rollback capability** - Easy to revert in Cloudflare dashboard

## 🔄 Updating the Workflow

The workflow file is in `.github/workflows/deploy.yml`. To modify:

1. Edit the file locally
2. Commit and push
3. The new workflow will be used for the next deployment

## 📖 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Cloudflare Pages CI/CD](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)
- [Wrangler Action](https://github.com/cloudflare/wrangler-action)

---

**Once set up, you'll never need to manually deploy again!** 🚀

Just push your code and GitHub Actions handles the rest.
