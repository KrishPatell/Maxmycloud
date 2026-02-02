# MaxMyCloud Snowflake Cost Savings Calculator

A production-ready Snowflake cost savings calculator built with vanilla JavaScript, featuring dynamic calculations, Chart.js visualizations, and lead capture.

## 🚀 Quick Start

### Deploy to Vercel

1. **Connect this repo to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import this GitHub repository
   - Deploy!

2. **Or use Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Embed in Webflow

Add this iframe to your Webflow page:

```html
<iframe 
  src="https://your-vercel-url.vercel.app" 
  width="100%" 
  height="4000" 
  frameborder="0"
  scrolling="yes"
  style="border: none; width: 100%;"
  title="Snowflake Cost Savings Calculator"
></iframe>
```

## 📁 File Structure

```
├── index.html              # Main calculator page
├── styles/
│   └── calculator.css     # Calculator styles
└── js/
    ├── calculator-engine.js    # Calculation logic
    ├── form-validation.js      # Email validation
    ├── charts.js               # Chart.js integration
    └── calculator-ui.js        # UI interactions
```

## 🔧 Configuration

### Update Formspree Endpoint

Edit `js/calculator-ui.js` and update:
```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

### Update Calendly Link

Edit `index.html` and update:
```html
<a href="https://calendly.com/YOUR_USERNAME/30min" ...>
```

## 📚 Documentation

- `VERCEL_DEPLOYMENT_GUIDE.md` - Complete Vercel deployment guide
- `WEBFLOW_EMBED_STEPS.md` - Webflow integration steps
- `CALCULATOR_README.md` - Detailed calculator documentation

## 🎨 Features

- ✅ 2-step form (Spend → Infrastructure)
- ✅ Dynamic weighted calculations
- ✅ Chart.js visualizations (waterfall, gauge, donut)
- ✅ Personalized insights based on inputs
- ✅ Email capture modal with Formspree
- ✅ Mobile responsive
- ✅ Accessible (WCAG AAA)

## 📝 License

Private - MaxMyCloud
