# 🔧 Troubleshooting Universal Links - Why It's Not Working

## 🐛 Common Issues & Solutions

### Issue #1: iOS Caches the Old AASA File (MOST COMMON!)

**Problem:** iOS downloads and caches the AASA file when the app is first installed. Even after we fix the file on the server, iOS still uses the old cached version.

**Solution - MUST DO THESE STEPS:**

1. **Delete the app completely from iPhone**
   ```
   Long press app icon → Remove App → Delete App
   ```

2. **Clear Safari cache**
   ```
   Settings → Safari → Clear History and Website Data
   ```

3. **Restart iPhone**
   ```
   Power off and power on
   ```

4. **Reinstall the app**
   ```
   Download fresh from App Store/TestFlight
   ```

5. **Wait 30 seconds** before testing
   - iOS needs time to download the AASA file from the server

### Issue #2: Content-Type Header (CURRENTLY AN ISSUE!)

**Problem:** Cloudflare is serving the file with wrong Content-Type

**Current Status:**
- ❌ Being served as: `application/octet-stream`
- ✅ Should be: `application/json`

**Why this matters:** iOS might reject the file if Content-Type is wrong.

**Solution:** Need to configure Cloudflare Pages correctly (working on this)

### Issue #3: Testing Method

**WRONG WAY TO TEST:**
❌ Opening link in Safari and tapping
❌ Copy-paste URL in Notes app
❌ Testing immediately after app install

**RIGHT WAY TO TEST:**

1. **Method 1: Messages App**
   ```
   - Send yourself a message with link: https://getborderless.space/packages/test
   - Tap the link in Messages
   - Should open app directly (if working)
   ```

2. **Method 2: Safari + Long Press**
   ```
   - Go to website in Safari
   - Long press a link
   - Should see "Open in [App Name]" option
   ```

3. **Method 3: Notes App (Second Tap)**
   ```
   - Paste link in Notes
   - Tap once (might open Safari)
   - Go back to Notes
   - Tap again (should open app)
   ```

### Issue #4: Domain Mismatch

**Problem:** App is registered for wrong domain

**Check:**
- ✅ AASA file at: `https://getborderless.space/.well-known/apple-app-site-association`
- ✅ App bundle: `66ZD8Z6QR8.com.aitechlab.esim`
- ✅ Domain in Xcode: Must be `getborderless.space` (NOT `www.getborderless.space`)

**Where to check in Xcode:**
```
Target → Signing & Capabilities → Associated Domains
Should have: applinks:getborderless.space
```

### Issue #5: App Not in Production

**Problem:** Universal Links only work for apps distributed via:
- ✅ App Store
- ✅ TestFlight
- ❌ NOT Xcode direct install

**Solution:** Make sure testing with TestFlight or App Store build

### Issue #6: URL Pattern Mismatch

**Current patterns in AASA:**
```
/packages/*  - Opens package details
/esim/*      - Opens eSIM details
/support/*   - Opens support
/referral/*  - Applies referral
```

**Test URLs that SHOULD work:**
```
https://getborderless.space/packages/123
https://getborderless.space/esim/abc
https://getborderless.space/support/ticket
https://getborderless.space/referral/CODE
```

**URLs that WON'T work:**
```
https://getborderless.space/  (homepage - not in patterns)
https://getborderless.space/blog/  (not in patterns)
https://getborderless.space/random  (not in patterns)
```

## ✅ Step-by-Step Testing Guide

### For Developer (Orkhan/Shamxal):

**Step 1: Verify AASA File**
```bash
curl https://getborderless.space/.well-known/apple-app-site-association
```

Should return JSON with your app ID: `66ZD8Z6QR8.com.aitechlab.esim`

**Step 2: Check Xcode Configuration**

1. Open Xcode project
2. Select app target
3. Go to "Signing & Capabilities"
4. Find "Associated Domains"
5. Should have: `applinks:getborderless.space`

**Step 3: Clean Install**

1. Delete app from device
2. Settings → Safari → Clear History and Website Data
3. Restart device
4. Install fresh from TestFlight/App Store
5. Wait 30 seconds

**Step 4: Test in Messages**

1. Open Messages
2. Send yourself: `https://getborderless.space/packages/test123`
3. Tap the link
4. Should open app!

**Step 5: Check iOS Logs (If Still Not Working)**

1. Connect iPhone to Mac
2. Open Console app on Mac
3. Filter for: "swcd"
4. Test the link
5. Look for errors about AASA file

## 🔍 Debugging Commands

### Check if iOS downloaded the AASA file:
```bash
# On Mac with iPhone connected
# Open Console app → Filter: "swcd"
# Look for: "Successfully downloaded"
```

### Verify file is accessible:
```bash
curl -I https://getborderless.space/.well-known/apple-app-site-association
```

Should show:
- `HTTP/2 200` ✅
- `content-type: application/json` ❌ (currently wrong!)

### Verify JSON is valid:
```bash
curl https://getborderless.space/.well-known/apple-app-site-association | python3 -m json.tool
```

Should print formatted JSON without errors.

## 🎯 Most Likely Issue

Based on testing in Safari/Notes not working, the problem is likely:

1. **iOS cache** - Old AASA file is cached
   - **Solution:** Delete app, clear Safari, restart, reinstall

2. **Wrong testing method** - Safari/Notes don't always trigger Universal Links on first tap
   - **Solution:** Use Messages app or long-press in Safari

3. **Content-Type header** - File served with wrong MIME type
   - **Solution:** We're working on fixing this

## 📝 Tell Your Dev Team

**Do this first (99% chance this fixes it):**

1. Delete app completely
2. Settings → Safari → Clear History and Website Data
3. Restart iPhone
4. Reinstall app from TestFlight
5. Wait 30 seconds
6. Test in Messages app (send link to yourself)

**If still not working:**

Check Xcode Associated Domains:
- Must have: `applinks:getborderless.space`
- NOT: `applinks:www.getborderless.space`
- NOT: `applinks:*.getborderless.space`

## 🆘 Need More Help?

Send us:
1. Screenshot of Xcode → Associated Domains
2. iOS Console logs (search for "swcd")
3. Exact URL being tested
4. How the link is being opened (Safari, Messages, Notes?)

---

**TL;DR:** Delete app, clear Safari cache, restart phone, reinstall app, test in Messages app (not Safari/Notes).
