# 🚀 Complete Webflow Embed Guide - Step by Step

## Quick Overview
You'll be embedding the calculator HTML and linking to the CSS/JS files via Webflow's Custom Code feature.

---

## 📋 Step 1: Upload Files to Webflow Assets

1. **Open Webflow Designer** → Go to your project
2. **Click "Assets"** panel (left sidebar, folder icon)
3. **Upload these 5 files:**
   - `styles/calculator.css`
   - `js/calculator-engine.js`
   - `js/form-validation.js`
   - `js/charts.js`
   - `js/calculator-ui.js`

4. **Copy the URLs:**
   - Right-click each file → **"Copy URL"**
   - Save these URLs somewhere (you'll need them in Step 2)

---

## 📝 Step 2: Add Custom Code to Page Settings

1. **Go to:** Page Settings (gear icon top right) → **"Custom Code"** tab

2. **Add to `<head>` tag:**
```html
<!-- Inter Font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

<!-- Calculator CSS - REPLACE WITH YOUR WEBFLOW ASSET URL -->
<link rel="stylesheet" href="PASTE_CALCULATOR_CSS_URL_HERE">
```

3. **Add before `</body>` tag:**
```html
<!-- Calculator Scripts - REPLACE WITH YOUR WEBFLOW ASSET URLS -->
<script src="PASTE_CALCULATOR_ENGINE_JS_URL_HERE"></script>
<script src="PASTE_FORM_VALIDATION_JS_URL_HERE"></script>
<script src="PASTE_CHARTS_JS_URL_HERE"></script>
<script src="PASTE_CALCULATOR_UI_JS_URL_HERE"></script>
```

**Replace the placeholders** (`PASTE_CALCULATOR_CSS_URL_HERE`, etc.) with the actual URLs you copied from Assets.

---

## 🎨 Step 3: Add HTML Structure

### Option A: Using Embed Element (Easiest)

1. **Add an Embed element** to your page:
   - Drag **"Embed"** from the Add panel
   - Place it where you want the calculator

2. **Open `webflow-calculator-embed.html`** file

3. **Copy ALL content** from that file (starts with `<section class="calculator-hero"...`)

4. **Paste into the Embed element** in Webflow

5. **Click "Save & Close"** on the Embed element

### Option B: Build with Webflow Elements (More Control)

If you prefer building it with Webflow's visual elements, see `WEBFLOW_INTEGRATION_GUIDE.md` for the structure.

---

## ⚙️ Step 4: Update Formspree Endpoint

1. **Open `js/calculator-ui.js`** in a text editor

2. **Find this line** (around line 332):
```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgqlgyo';
```

3. **Replace with your Formspree form ID:**
   - Go to [formspree.io](https://formspree.io)
   - Create a new form or use existing one
   - Copy the form ID (looks like `xvgqlgyo`)
   - Replace in the code

4. **Re-upload** `calculator-ui.js` to Webflow Assets
5. **Update the URL** in Custom Code (Step 2)

---

## 🔗 Step 5: Update Calendly Link (Optional)

1. **Open `webflow-calculator-embed.html`** or the Embed element

2. **Find this line:**
```html
<a href="https://calendly.com/maxmycloud/30min" ...>
```

3. **Replace with your Calendly link**

---

## ✅ Step 6: Test & Publish

1. **Preview** your page in Webflow Designer (eye icon)
2. **Test the calculator:**
   - Enter a spend amount
   - Complete Step 2
   - Verify results show
   - Test email modal

3. **Check browser console** (F12) for any errors

4. **Publish** your site

---

## 🐛 Troubleshooting

### Calculator Not Showing
- ✅ Check all 5 files uploaded to Assets
- ✅ Verify URLs in Custom Code are correct
- ✅ Check browser console for errors

### Styles Not Applied
- ✅ Make sure CSS file URL is correct
- ✅ Check CSS file loaded (Network tab in browser)

### Charts Not Working
- ✅ Verify Chart.js loads before calculator scripts
- ✅ Check `charts.js` loads after `calculator-engine.js`

### Form Not Submitting
- ✅ Verify Formspree endpoint URL
- ✅ Check Formspree form is active
- ✅ Test with browser Network tab

---

## 📱 Mobile Testing

After publishing, test on:
- iPhone (Safari)
- Android (Chrome)
- iPad
- Desktop browsers

---

## 🎯 Quick Checklist

- [ ] All 5 files uploaded to Webflow Assets
- [ ] Custom Code added to page (`<head>` and `</body>`)
- [ ] URLs replaced with actual Webflow asset URLs
- [ ] HTML added via Embed element
- [ ] Formspree endpoint updated
- [ ] Calculator tested in preview
- [ ] Site published
- [ ] Tested on live site

---

## 💡 Pro Tips

1. **Test locally first** - Make sure calculator works at `http://localhost:8000/calculator.html` before embedding
2. **Use Webflow's staging** - Test on staging site before going live
3. **Keep file URLs** - Save the Webflow asset URLs in case you need to update files
4. **Version control** - If you update JS files, re-upload to Assets and update URLs

---

## 📞 Need Help?

If something doesn't work:
1. Check browser console (F12) for errors
2. Verify all file URLs are correct
3. Make sure Chart.js loads first
4. Test calculator locally first

---

**That's it!** Your calculator should now be live on Webflow. 🎉
