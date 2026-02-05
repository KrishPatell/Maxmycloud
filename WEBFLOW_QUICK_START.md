# Webflow Quick Start Guide

## 🚀 Fastest Way to Add Calculator to Webflow

### Step 1: Upload Files to Webflow Assets

1. Go to **Webflow Designer** → **Assets** panel
2. Upload these 5 files:
   - `styles/calculator.css`
   - `js/calculator-engine.js`
   - `js/form-validation.js`
   - `js/charts.js`
   - `js/calculator-ui.js`

3. **Copy the URLs** of each uploaded file (right-click → Copy URL)

### Step 2: Add Custom Code to Page

**Go to:** Page Settings → Custom Code tab

**Add to `<head>` tag:**
```html
<!-- Inter Font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

<!-- Calculator CSS -->
<link rel="stylesheet" href="PASTE_CALCULATOR_CSS_URL_HERE">
```

**Add before `</body>` tag:**
```html
<!-- Calculator Scripts -->
<script src="PASTE_CALCULATOR_ENGINE_JS_URL_HERE"></script>
<script src="PASTE_FORM_VALIDATION_JS_URL_HERE"></script>
<script src="PASTE_CHARTS_JS_URL_HERE"></script>
<script src="PASTE_CALCULATOR_UI_JS_URL_HERE"></script>
```

### Step 3: Add HTML Structure

**Option A: Use Embed Element (Easiest)**

1. Add an **Embed** element to your page
2. Copy the HTML from `calculator.html` starting from line 19 (`<section class="calculator-hero"...`) to line 307 (`</section>`)
3. Paste into the Embed element

**Option B: Build with Webflow Elements**

See `WEBFLOW_INTEGRATION_GUIDE.md` for detailed structure.

### Step 4: Update Formspree Endpoint

1. Open `js/calculator-ui.js`
2. Find line with `FORMSPREE_ENDPOINT`
3. Replace with your Formspree form ID:
```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

### Step 5: Test & Publish

1. Test calculator in Webflow Designer preview
2. Check browser console for errors
3. Publish site
4. Test on live site

---

## ✅ Quick Checklist

- [ ] Files uploaded to Webflow Assets
- [ ] Custom Code added to page
- [ ] HTML structure added (Embed or built)
- [ ] Formspree endpoint updated
- [ ] Calculator tested
- [ ] Site published

---

## 🎯 That's It!

Your calculator should now be live on Webflow. If you need help, see `WEBFLOW_INTEGRATION_GUIDE.md` for detailed instructions.
