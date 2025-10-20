#!/bin/bash

# Cloudflare Pages Deployment Script
# This script builds and deploys your Borderless blog to Cloudflare Pages

set -e  # Exit on error

echo "🚀 Starting Cloudflare Pages deployment..."
echo ""

# Step 1: Clean previous build
echo "📦 Cleaning previous build..."
npm run clean

# Step 2: Build the site
echo "🔨 Building site with Eleventy..."
npm run build

# Step 3: Check if build was successful
if [ ! -d "_site" ]; then
    echo "❌ Build failed - _site directory not found"
    exit 1
fi

echo "✅ Build complete!"
echo ""
echo "📊 Build output:"
ls -lh _site/
echo ""

# Step 4: Deploy to Cloudflare Pages
echo "☁️  Deploying to Cloudflare Pages..."
echo ""

# Check if CLOUDFLARE_API_TOKEN is set
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "⚠️  CLOUDFLARE_API_TOKEN not set"
    echo ""
    echo "To deploy, you need to set your Cloudflare API token:"
    echo "1. Go to: https://dash.cloudflare.com/profile/api-tokens"
    echo "2. Create a token with 'Cloudflare Pages' permissions"
    echo "3. Run: export CLOUDFLARE_API_TOKEN=your_token_here"
    echo "4. Run this script again"
    echo ""
    echo "Alternatively, you can deploy manually:"
    echo "1. Go to: https://dash.cloudflare.com"
    echo "2. Navigate to Pages > Your Project"
    echo "3. Create a new deployment and upload the _site folder"
    exit 1
fi

# Deploy using Wrangler
# Replace 'borderlessweb' with your actual Cloudflare Pages project name if different
PROJECT_NAME="borderlessweb"

echo "Deploying to project: $PROJECT_NAME"
wrangler pages deploy _site --project-name=$PROJECT_NAME

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your blog should be live at your Cloudflare Pages URL"
