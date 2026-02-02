# 🚀 Deploy Calculator to Vercel & Embed via iFrame

## Why This Approach?
- ✅ **Easier to maintain** - Update calculator without touching Webflow
- ✅ **Reusable** - Embed on multiple pages/sites
- ✅ **Better performance** - Separate deployment
- ✅ **Version control** - Track changes in Git
- ✅ **Simple Webflow integration** - Just add an iframe

---

## 📋 Step 1: Prepare Files for Vercel

### Option A: Standalone HTML File (Simplest)

1. **Create a new folder** called `calculator-vercel`

2. **Copy these files** into that folder:
   - `calculator.html` → Rename to `index.html`
   - `styles/calculator.css` → Keep in `styles/` folder
   - `js/calculator-engine.js` → Keep in `js/` folder
   - `js/form-validation.js` → Keep in `js/` folder
   - `js/charts.js` → Keep in `js/` folder
   - `js/calculator-ui.js` → Keep in `js/` folder

3. **Update `index.html`** paths if needed (should already be correct):
```html
<link rel="stylesheet" href="styles/calculator.css">
<script src="js/calculator-engine.js"></script>
<script src="js/form-validation.js"></script>
<script src="js/charts.js"></script>
<script src="js/calculator-ui.js"></script>
```

### Option B: Next.js/React (Advanced - Optional)

If you want a more robust setup, I can help you convert to Next.js, but the standalone HTML approach works perfectly fine.

---

## 🌐 Step 2: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Easiest)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login

2. **Click "Add New Project"**

3. **Import Git Repository:**
   - Connect GitHub/GitLab/Bitbucket
   - Or drag & drop your `calculator-vercel` folder
   - Or use Vercel CLI (see Method 2)

4. **Configure Project:**
   - **Framework Preset:** Other (or Static HTML)
   - **Root Directory:** `./` (or leave default)
   - **Build Command:** Leave empty (static files)
   - **Output Directory:** `./` (or leave default)

5. **Deploy!**
   - Vercel will give you a URL like: `https://your-project.vercel.app`

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to calculator folder
cd calculator-vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? calculator (or your choice)
# - Directory? ./
# - Override settings? No
```

### Method 3: Drag & Drop (Quick Test)

1. **Zip your `calculator-vercel` folder**
2. **Go to Vercel Dashboard**
3. **Drag & drop the zip file**
4. **Get your URL**

---

## 🔧 Step 3: Configure Vercel (Important!)

### Add `vercel.json` for Proper Routing

Create `vercel.json` in your project root:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Note:** For iframe embedding, you might need to allow it. Update headers:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "ALLOWALL"
        },
        {
          "key": "Content-Security-Policy",
          "value": "frame-ancestors *;"
        }
      ]
    }
  ]
}
```

---

## 📐 Step 4: Embed in Webflow via iFrame

### Option A: Using Embed Element

1. **In Webflow Designer:**
   - Add an **Embed** element to your page
   - Paste this code:

```html
<iframe 
  src="https://your-project.vercel.app" 
  width="100%" 
  height="800" 
  frameborder="0"
  scrolling="no"
  style="border: none; min-height: 800px;"
  title="Snowflake Cost Savings Calculator"
></iframe>
```

2. **Replace `https://your-project.vercel.app`** with your actual Vercel URL

3. **Adjust height** as needed (calculator is ~3500px tall when showing results)

### Option B: Responsive iFrame (Recommended)

Use this code for better mobile responsiveness:

```html
<div style="position: relative; width: 100%; padding-bottom: 200%; height: 0; overflow: hidden;">
  <iframe 
    src="https://your-project.vercel.app" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    scrolling="no"
    title="Snowflake Cost Savings Calculator"
    allow="clipboard-read; clipboard-write"
  ></iframe>
</div>
```

**Or use a fixed height with scrolling:**

```html
<div style="width: 100%; max-width: 1500px; margin: 0 auto;">
  <iframe 
    src="https://your-project.vercel.app" 
    width="100%" 
    height="4000" 
    frameborder="0"
    scrolling="yes"
    style="border: none; display: block;"
    title="Snowflake Cost Savings Calculator"
  ></iframe>
</div>
```

### Option C: Dynamic Height iFrame (Best UX)

This automatically adjusts height based on calculator content:

```html
<iframe 
  id="calculator-iframe"
  src="https://your-project.vercel.app" 
  width="100%" 
  height="800" 
  frameborder="0"
  scrolling="no"
  style="border: none; min-height: 800px; width: 100%;"
  title="Snowflake Cost Savings Calculator"
  onload="adjustIframeHeight(this)"
></iframe>

<script>
function adjustIframeHeight(iframe) {
  try {
    // Try to get iframe content height
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const height = iframeDoc.body.scrollHeight;
    iframe.style.height = height + 'px';
  } catch (e) {
    // Cross-origin - use postMessage instead
    // You'll need to add this to calculator's JS
    console.log('Cross-origin iframe - height adjustment needed');
  }
}

// Listen for height updates from calculator
window.addEventListener('message', function(event) {
  if (event.data.type === 'calculator-height') {
    const iframe = document.getElementById('calculator-iframe');
    if (iframe) {
      iframe.style.height = event.data.height + 'px';
    }
  }
});
</script>
```

**Add to calculator's `calculator-ui.js`** to send height updates:

```javascript
// At end of handleCalculate function, add:
if (window.parent !== window) {
  window.parent.postMessage({
    type: 'calculator-height',
    height: document.body.scrollHeight
  }, '*');
}
```

---

## 🎨 Step 5: Style the iFrame Container (Optional)

Add custom CSS in Webflow to style the iframe:

```css
.calculator-iframe-wrapper {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.calculator-iframe-wrapper iframe {
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

---

## ✅ Step 6: Test & Optimize

### Testing Checklist:
- [ ] Calculator loads in iframe
- [ ] All styles render correctly
- [ ] Forms work (Step 1, Step 2)
- [ ] Charts display properly
- [ ] Email modal opens
- [ ] Form submission works
- [ ] Mobile responsive
- [ ] No console errors

### Common Issues:

**Issue: Calculator doesn't load**
- ✅ Check Vercel URL is correct
- ✅ Verify X-Frame-Options allows embedding
- ✅ Check browser console for errors

**Issue: Styles broken**
- ✅ Verify CSS file paths are relative (`styles/calculator.css`)
- ✅ Check Network tab - are files loading?

**Issue: Charts not showing**
- ✅ Verify Chart.js CDN loads
- ✅ Check `charts.js` loads after `calculator-engine.js`

**Issue: Form doesn't submit**
- ✅ Check Formspree endpoint
- ✅ Verify CORS allows Vercel domain

---

## 🔒 Step 7: Security & Best Practices

### Update Formspree to Allow Vercel Domain

1. Go to Formspree dashboard
2. Add your Vercel domain to allowed domains
3. Or use Formspree's domain whitelist feature

### Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `calculator.maxmycloud.com`)
   - Update DNS records

2. **Update iframe src** in Webflow to use custom domain

---

## 📱 Mobile Optimization

The calculator is already responsive. The iframe will:
- Scale to mobile width
- Maintain aspect ratio
- Allow scrolling if needed

**For better mobile experience**, use the dynamic height iframe (Option C above).

---

## 🚀 Advantages of Vercel Deployment

✅ **Fast CDN** - Global edge network  
✅ **Auto HTTPS** - SSL certificate included  
✅ **Easy updates** - Push to Git, auto-deploys  
✅ **Analytics** - Built-in Vercel Analytics  
✅ **Preview deployments** - Test before production  
✅ **Free tier** - Generous free plan  

---

## 🔄 Updating Calculator

1. **Make changes** to files locally
2. **Push to Git** (if using Git)
3. **Or drag & drop** updated files to Vercel
4. **Vercel auto-deploys** - usually < 30 seconds
5. **Webflow iframe** automatically shows new version

---

## 📊 Analytics (Optional)

Add Vercel Analytics to track calculator usage:

1. **In Vercel Dashboard:**
   - Go to Project Settings → Analytics
   - Enable Vercel Analytics

2. **Or add Google Analytics** to calculator:
   - Add GA script to `index.html` `<head>`
   - Track calculator interactions

---

## 🎯 Quick Start Summary

1. ✅ Copy files to `calculator-vercel` folder
2. ✅ Deploy to Vercel (drag & drop or Git)
3. ✅ Get Vercel URL
4. ✅ Add iframe to Webflow Embed element
5. ✅ Test and publish!

---

## 💡 Pro Tips

1. **Use custom domain** for professional look
2. **Enable Vercel Analytics** to track usage
3. **Set up preview deployments** for testing
4. **Use dynamic height** iframe for best UX
5. **Keep calculator separate** - easier to maintain

---

**That's it!** Your calculator is now on Vercel and can be embedded anywhere via iframe. 🎉
