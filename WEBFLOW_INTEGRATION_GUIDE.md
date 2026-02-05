# Webflow Integration Guide: Snowflake Calculator

## 🎯 Overview

This guide will help you integrate the Snowflake Cost Savings Calculator into your Webflow site. The calculator uses vanilla JavaScript and can be added via Webflow's Custom Code feature.

---

## 📋 Prerequisites

- Webflow account with Designer access
- Access to your site's Custom Code settings
- Chart.js CDN (will be added automatically)

---

## 🚀 Integration Steps

### Option 1: Single Page Integration (Recommended)

#### Step 1: Create the Calculator Page in Webflow

1. In Webflow Designer, create a new page called **"Calculator"** or add to existing page
2. Add a **Section** element with ID: `calculator`
3. Add a **Div Block** inside with class: `calculator-hero`
4. Add a **Container** inside with class: `container`
5. Add a **Div Block** inside with class: `hero-content`

#### Step 2: Add Custom Code to Page Settings

1. Go to **Page Settings** → **Custom Code** tab
2. Add the following code blocks:

**In `<head>` tag:**
```html
<!-- Inter Font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

**Before `</body>` tag:**
```html
<!-- Calculator Scripts -->
<script src="https://your-domain.com/js/calculator-engine.js"></script>
<script src="https://your-domain.com/js/form-validation.js"></script>
<script src="https://your-domain.com/js/charts.js"></script>
<script src="https://your-domain.com/js/calculator-ui.js"></script>
```

#### Step 3: Add CSS to Site Settings

1. Go to **Project Settings** → **Custom Code** tab
2. Add the CSS file content in the **`<head>` tag** section
3. Or upload `calculator.css` and link it:
```html
<link rel="stylesheet" href="https://your-domain.com/styles/calculator.css">
```

#### Step 4: Add HTML Structure

Copy the HTML from `calculator.html` starting from `<div class="hero-content">` and paste it into your Webflow page using an **Embed** element or by building it with Webflow elements.

---

### Option 2: Embed Code Block (Simpler, but less flexible)

#### Step 1: Create Embed Element

1. Add an **Embed** element to your page
2. Copy the entire content from `calculator.html` (excluding `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` tags)
3. Paste into the Embed element

#### Step 2: Add CSS & JS

Add CSS and JS via Site Settings → Custom Code (same as Option 1, Step 2-3)

---

## 📁 File Hosting Options

### Option A: Webflow Assets (Recommended)

1. Upload files to Webflow **Assets**:
   - `calculator.css` → Upload to Assets
   - `calculator-engine.js` → Upload to Assets
   - `form-validation.js` → Upload to Assets
   - `charts.js` → Upload to Assets
   - `calculator-ui.js` → Upload to Assets

2. Get the URLs from Assets panel
3. Update the script/link tags with Webflow asset URLs

### Option B: External CDN/Hosting

1. Upload files to:
   - AWS S3 + CloudFront
   - GitHub Pages
   - Netlify
   - Your own server

2. Update URLs in Custom Code

### Option C: Inline Code (Smaller sites)

For smaller sites, you can inline CSS/JS directly in Custom Code (see files below)

---

## 🔧 Webflow-Specific Adjustments

### 1. Container Width

The calculator uses `.container` class. Make sure your Webflow container matches:
- Max-width: 1500px (already set in CSS)
- Padding: 1.5rem left/right

### 2. Form Submission

The calculator uses Formspree. Update the endpoint in `calculator-ui.js`:
```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

### 3. Calendly Integration

Update the Calendly link in `calculator.html`:
```html
<a href="https://calendly.com/YOUR_USERNAME/30min" ...>
```

---

## 📝 Step-by-Step: Building in Webflow Designer

### Structure to Build:

```
Section (ID: calculator, Class: calculator-hero)
└── Container (Class: container)
    └── Div Block (Class: hero-content)
        ├── Heading 1 (Class: headline)
        ├── Paragraph (Class: subheadline)
        ├── Div Block (Class: trust-signals)
        │   └── [3x Trust Items]
        └── Div Block (Class: calculator-container)
            ├── Div Block (Class: step-indicator)
            ├── Form (ID: savings-calculator)
            │   ├── Step 1 Div (Class: calc-step)
            │   └── Step 2 Div (Class: calc-step)
            ├── Results Div (ID: results-container, Class: results hidden)
            └── Email Modal (ID: email-modal, Class: modal hidden)
```

### Key Classes to Add:

- `.calculator-hero` - Main section
- `.hero-content` - Content wrapper
- `.calculator-container` - Calculator box
- `.calc-step` - Form steps
- `.results` - Results container
- `.hidden` - Hide/show utility

---

## 🎨 Styling in Webflow

### Option 1: Use Custom CSS (Recommended)

Add `calculator.css` via Custom Code. This gives you full control.

### Option 2: Webflow Designer Styles

You can recreate styles in Webflow Designer, but it's time-consuming. The CSS file is ~1600 lines.

**Key Styles to Match:**
- Colors: Blue (#3B82F6), Purple (#8B5CF6)
- Font: Inter, 16px base
- Border radius: 8px, 12px, 16px
- Shadows: Use Webflow's shadow presets

---

## ✅ Testing Checklist

After integration:

- [ ] Calculator loads without errors
- [ ] Step 1 (Spend input) works
- [ ] Step 2 (Infrastructure) displays sliders
- [ ] Calculation executes correctly
- [ ] Charts render (waterfall, gauge, donut)
- [ ] Email modal opens
- [ ] Form submission works (Formspree)
- [ ] Mobile responsive (test on phone)
- [ ] No console errors

---

## 🐛 Troubleshooting

### Calculator Not Showing
- Check browser console for JS errors
- Verify all script files are loading
- Ensure Chart.js CDN loads first

### Styles Not Applied
- Check CSS file is linked correctly
- Verify class names match HTML
- Check for CSS conflicts with Webflow styles

### Charts Not Rendering
- Verify Chart.js loads before calculator scripts
- Check canvas elements have correct IDs
- Ensure `charts.js` loads after `calculator-engine.js`

### Form Not Submitting
- Verify Formspree endpoint URL
- Check Formspree form is active
- Test with browser network tab

---

## 🔗 External Dependencies

The calculator requires:

1. **Chart.js** (CDN) - Already included in guide
2. **Formspree** - Update endpoint URL
3. **Calendly** - Update booking link
4. **Google Fonts (Inter)** - Already included

---

## 📱 Mobile Optimization

The calculator is already responsive. Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop (Chrome, Safari, Firefox)

---

## 🚀 Next Steps

1. **Upload files** to Webflow Assets or external hosting
2. **Add Custom Code** to page/site settings
3. **Build HTML structure** in Webflow Designer
4. **Test** calculator functionality
5. **Publish** and verify on live site

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all file URLs are correct
3. Test calculator on localhost first
4. Review Webflow Custom Code documentation

---

**Version:** 1.0.0  
**Last Updated:** February 2, 2026  
**Files Required:** 5 files (1 HTML, 1 CSS, 4 JS)
