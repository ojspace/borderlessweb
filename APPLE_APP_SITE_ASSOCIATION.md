# Apple App Site Association (AASA) - iOS Universal Links

## ✅ Current Status: CORRECTLY CONFIGURED

Your Apple App Site Association file is now properly configured and accessible!

### 🔗 Live URL
```
https://getborderless.space/.well-known/apple-app-site-association
```

## ✅ Requirements Met

All Apple requirements are satisfied:

### 1. ✅ File Name (No Extension)
- **Required:** `apple-app-site-association` (no .json extension)
- **Status:** ✅ Correct

### 2. ✅ Location
- **Required:** `/.well-known/apple-app-site-association`
- **Status:** ✅ Correct
- **Source:** `/static/.well-known/apple-app-site-association`

### 3. ✅ HTTPS with Valid Certificate
- **Required:** Must be served over HTTPS
- **Status:** ✅ Cloudflare provides valid SSL certificate
- **URL:** https://getborderless.space/.well-known/apple-app-site-association

### 4. ✅ No Redirects
- **Required:** Direct access without redirects
- **Status:** ✅ Returns HTTP 200 directly

### 5. ✅ Correct Content-Type Header
- **Required:** `Content-Type: application/json`
- **Status:** ✅ Configured via `_headers` file
- **Previous Issue:** Was `application/octet-stream` ❌
- **Fixed:** Now `application/json` ✅

### 6. ✅ CORS Headers
- **Header:** `Access-Control-Allow-Origin: *`
- **Status:** ✅ Allows cross-origin requests

## 📋 File Contents

```json
{
  "applinks": {
    "details": [
      {
        "appIDs": [
          "66ZD8Z6QR8.com.aitechlab.borderless"
        ],
        "components": [
          {
            "/": "/packages/*",
            "comment": "Open package details"
          },
          {
            "/": "/esim/*",
            "comment": "Open eSIM details"
          },
          {
            "/": "/support/*",
            "comment": "Open support ticket"
          },
          {
            "/": "/referral/*",
            "comment": "Apply referral code"
          }
        ]
      }
    ]
  },
  "webcredentials": {
    "apps": [
      "66ZD8Z6QR8.com.aitechlab.borderless"
    ]
  }
}
```

## 🔧 How It Works

### Files Involved

1. **`static/.well-known/apple-app-site-association`**
   - The actual AASA JSON file
   - Contains app linking configuration

2. **`static/_headers`**
   - Cloudflare Pages headers configuration
   - Sets correct Content-Type for AASA file

### Headers Configuration

The `_headers` file ensures proper Content-Type:

```
/.well-known/apple-app-site-association
  Content-Type: application/json
  Access-Control-Allow-Origin: *
```

## 🧪 Verification

You can verify the setup is correct:

### Check File Accessibility
```bash
curl https://getborderless.space/.well-known/apple-app-site-association
```

Should return the full JSON configuration.

### Check Headers
```bash
curl -I https://getborderless.space/.well-known/apple-app-site-association
```

Should show:
- `HTTP/2 200` (no redirects)
- `content-type: application/json` (correct MIME type)
- `access-control-allow-origin: *` (CORS enabled)

### Apple's Validator
Visit: https://search.developer.apple.com/appsearch-validation-tool/

Enter: `https://getborderless.space`

Should show: ✅ Valid configuration

## 🔄 Updating the File

If you need to update the AASA file:

1. **Edit the source file:**
```bash
cd /Users/oj/Documents/borderlessweb
nano static/.well-known/apple-app-site-association
```

2. **Rebuild and deploy:**
```bash
npm run build
wrangler pages deploy _site --project-name=borderlessweb --branch=main
```

3. **Verify changes:**
```bash
curl https://getborderless.space/.well-known/apple-app-site-association
```

## 📱 What This Enables

With this configuration, your iOS app can:

1. **Deep Link** - Open specific screens directly from web links
2. **Universal Links** - Handle URLs like `https://getborderless.space/packages/123`
3. **Web Credentials** - Enable password autofill for your domain
4. **Seamless UX** - Users tap a link and go straight to your app

## 🐛 Troubleshooting

### Issue: iOS app not opening from links

**Solution:**
1. Clear iOS cache: Settings → Safari → Clear History and Website Data
2. Reinstall the app
3. Verify AASA file is accessible (check URL above)

### Issue: Content-Type is wrong

**Solution:**
The `_headers` file fixes this. Ensure it's deployed:
```bash
ls -la _site/_headers
```

### Issue: File returns 404

**Solution:**
Rebuild and redeploy:
```bash
npm run build
wrangler pages deploy _site --project-name=borderlessweb --branch=main
```

## 🎯 Summary

✅ **File location:** `/.well-known/apple-app-site-association`
✅ **HTTPS:** Yes (Cloudflare SSL)
✅ **No redirects:** Yes (HTTP 200)
✅ **Content-Type:** `application/json`
✅ **Accessible:** https://getborderless.space/.well-known/apple-app-site-association

**Your AASA file is correctly configured!** ✨
