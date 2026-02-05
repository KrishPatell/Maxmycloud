# MaxMyCloud Website - Essential Reference

**URL:** https://maxmycloud.com/  
**Purpose:** Condensed content & structure reference for LLM redesign

## ⚠️ CRITICAL: LIGHT MODE DESIGN

**This design must be in LIGHT MODE / WHITE MODE:**
- White/light backgrounds (`#FFFFFF` or `#FAFAFA`)
- Dark text (`#0F172A` or `#1E293B`)
- White cards with subtle shadows
- No dark themes or dark backgrounds

---

## BRAND & MESSAGING

**Company:** MaxMyCloud  
**Tagline:** "Reduce Your Snowflake Costs by 30%"  
**Description:** Snowflake cost optimization service provider  
**Guarantee:** "Cut Your Cloud Spend by at least 20% — Or You Don't Pay"

**Key Messages:**
- 30% cost reduction
- 20% savings guarantee
- Setup in 30 minutes
- No credit card required
- Snowflake Certified Experts
- 24/7 support

---

## DESIGN SYSTEM (LIGHT MODE)

### Colors
- **Background:** `#FFFFFF` (white) or `#FAFAFA` (off-white)
- **Cards:** `#FFFFFF` (white) with subtle shadows
- **Borders:** `#E2E8F0` (slate-200) or `#CBD5E1` (slate-300)
- **Text Primary:** `#0F172A` (slate-900) or `#1E293B` (slate-800)
- **Text Secondary:** `#475569` (slate-600) or `#64748B` (slate-500)
- **Text Muted:** `#94A3B8` (slate-400)
- **Accent Blue:** `#3b82f6` (blue-500)
- **Accent Purple:** `#8b5cf6` (purple-500)
- **Gradient:** `linear-gradient(135deg, #3b82f6, #8b5cf6)` (for accents, not backgrounds)

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700
- **Headings:** Bold, text-2xl to text-6xl
- **Body:** Regular, text-base to text-xl

### Effects
- Card hover: `translateY(-5px)` + shadow
- Border radius: `rounded-xl` (cards), `rounded-lg` (buttons)
- Transitions: `0.3s ease`
- Snowflake animation (optional)

---

## PAGE STRUCTURE

### Navigation
- Sticky header (white/light gray with subtle border)
- Links: Home, Services, Pricing, Blog, Contact
- Mobile: Hamburger menu

### Hero (#home)
- **Headline:** "Reduce Your Snowflake Costs by 30%"
- **Subheadline:** "MaxMyCloud specializes in Snowflake cost optimization. Our proven strategies and expert analysis help businesses dramatically reduce their cloud data warehouse expenses while maintaining peak performance."
- **CTAs:**
  - Primary: "Start Your Free 30 Day Trial" → Opens modal
  - Secondary: "Book a Demo" → Opens Calendly
- **Trust Indicators:**
  - ✓ No credit card required
  - ✓ Setup in under 30 minutes
  - ✓ Trusted by Enterprise Customers
  - ✓ Cut Your Cloud Spend by at least 20% — Or You Don't Pay

### Services (#services)
**Title:** "Our Snowflake Optimization Services"  
**Subtitle:** "Comprehensive cost reduction strategies tailored to your Snowflake environment"

**6 Services (3 columns desktop):**
1. Cost Analysis & Audit - "Deep dive into your Snowflake usage patterns to identify cost optimization opportunities and wasteful spending."
2. Query Optimization - "Optimize your SQL queries and data models to reduce compute costs while improving performance."
3. Warehouse Right-Sizing - "Right-size your virtual warehouses based on actual workload requirements to eliminate over-provisioning."
4. Auto-Scaling Setup - "Implement intelligent auto-scaling policies to automatically adjust resources based on demand."
5. Storage Optimization - "Optimize data storage strategies, implement data lifecycle policies, and reduce unnecessary data retention."
6. Ongoing Monitoring - "Continuous monitoring and alerting to prevent cost overruns and maintain optimal performance."

### Why Choose Us
**Title:** "Why Choose MaxMyCloud for Snowflake Optimization?"  
**Description:** "We specialize exclusively in Snowflake cost optimization and have helped companies reduce their monthly Snowflake bills by 25-30% without sacrificing performance or functionality."

**3 Points:**
1. Snowflake Certified Experts
2. Guaranteed Results (20% or don't pay)
3. No Performance Impact

**Stats (2x2 grid):**
- 60% Storage Cost Savings
- 24/7 Global Support
- 30% Average Cost Reduction
- 2 Hours Average Implementation

### Pricing (#pricing)
**Title:** "Simple, Transparent Pricing"  
**Subtitle:** "Choose the plan that fits your Snowflake optimization needs"

**3 Plans:**

**Starter - $0/month**
- 1 Snowflake account
- 20 emails/month monitoring
- Realtime warehouse optimization
- Storage optimization
- Serverless optimization
- Unused resource identification
- Complete cost analysis

**Professional - $399/month**
- Everything in Starter
- 8 Snowflake accounts
- 200 emails/month monitoring
- Full implementation support
- Warehouse utilization analysis
- Cost optimization recommendations
- 30 days post-implementation support

**Enterprise - Tailored pricing** (Most Popular)
- Everything in Professional
- Unlimited accounts
- Unlimited alerts
- Multi-account optimization
- Custom dashboard
- Enterprise SSO
- Private link
- Quarterly reviews
- AI-powered optimization (beta)
- Priority support
- Team training

**Guarantee:** "All plans include our 20% savings guarantee. If we don't reduce your Snowflake costs by at least 20%, you don't pay"

### Blog (#blog)
**Title:** "Snowflake Optimization Blog"  
**Subtitle:** "Expert tips, best practices, and proven strategies to reduce your Snowflake costs"  
**20 Articles** (3 columns desktop) - Categories: Warehouse Optimization, Query Optimization, Storage Optimization, etc.  
**CTA:** "Want personalized optimization advice?" → "Schedule a Free Consultation"

### Contact (#contact)
**Title:** "Ready to Reduce Your Snowflake Costs?"  
**Subtitle:** "Get a free cost analysis and see exactly how much you can save on your Snowflake bill"

**Benefits:**
1. ⚡ Setup in Minutes - "Connect your Snowflake account and start seeing savings within hours. No complex configuration required."
2. 🔒 Enterprise Security - "Your data stays where it belongs—securely in your Snowflake account. With Azure, Okta, and Snowflake OAuth integration plus optional Private Link, we deliver seamless access without ever moving your data."
3. 🛟 24/7 Support - "Our team of Snowflake experts is available around the clock to help you maximize your savings."

**Form Fields:**
- Company Name (required)
- Email (required, business email validation)
- Yearly Snowflake Spend (dropdown: Under $200K, $200K–$500K, $500K–1M, $1M–$5M, $5M+)
- Tell us about your Snowflake usage (textarea)
- Submit: "Get My Free Cost Analysis"

### Footer
- MaxMyCloud logo/text
- "Specializing in Snowflake cost optimization. We help reduce your cloud data warehouse spend by over 30%."
- "© 2025 MaxMyCloud. All rights reserved. Snowflake cost optimization specialists."

---

## FORMS & MODALS

### Form Validation
- **Business Email Required:** Rejects gmail.com, yahoo.com, hotmail.com, outlook.com, aol.com, icloud.com
- **Error:** "Please use your business email address. Personal email addresses (Gmail, Yahoo, Hotmail, etc.) are not accepted."

### Modals (5 total)
All modals: backdrop (50% black), close on outside click/Escape, prevent body scroll

1. **Free Trial Modal**
   - Trigger: "Start Your Free 30 Day Trial"
   - Fields: Name, Company Email, Message (all required)
   - Hidden: `form_type = "free_trial"`
   - Success: "Thank you for your message. We will be in touch within the same business day to set up your free trial."

2. **Starter Package Modal**
   - Trigger: "Get Started" (Starter plan)
   - Fields: Same as trial
   - Hidden: `form_type = "starter_package"`

3. **Professional Package Modal**
   - Trigger: "Get Started" (Professional plan)
   - Fields: Same as trial
   - Hidden: `form_type = "professional_package"`

4. **Enterprise Package Modal**
   - Trigger: "Get Started" (Enterprise plan)
   - Fields: Same as trial
   - Hidden: `form_type = "enterprise_package"`

5. **Blog Article Modal**
   - Trigger: Click blog card
   - Content: Full article (20 articles available)
   - Back button to blog section

### Form Endpoint
**All forms submit to:** `https://formspree.io/f/xvgqlgyo` (POST)

---

## INTEGRATIONS

- **Formspree:** `https://formspree.io/f/xvgqlgyo`
- **Calendly:** `https://calendly.com/raj-aiyer-maxmycloud/30min` (popup 800x600)
- **Tawk.to:** Account ID `689e79c93e106b19234f4a48`
- **Leadsy.ai:** `https://r2.leadsy.ai/tag.js` (Project: `156g9c8oHswefsTCB`)

---

## TECHNICAL

### Stack
- **Framework:** Next.js (React) or Remix recommended
- **Styling:** Tailwind CSS (preferred) or CSS Modules
- **Language:** TypeScript (required)
- **Responsive:** mobile-first (sm: 768px, md: 1024px, lg: 1024px+)

### Recommended Libraries
**Component Libraries:**
- Shadcn/ui (built on Radix UI) - Primary component library
- Radix UI - Accessible component primitives
- Headless UI - Unstyled accessible components
- Mantine or Chakra UI - Alternative component libraries

**Styling & Animation:**
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - React animation library
- GSAP - Advanced animation library

**Data Visualization:**
- Recharts - React charting library
- Chart.js - JavaScript charting
- D3.js - Data visualization
- Victory - React visualization components

**Forms:**
- React Hook Form - Form handling
- Zod - Schema validation

**Utilities:**
- clsx/classnames - Conditional classes
- date-fns - Date utilities

### Functionality
- Smooth scrolling navigation
- Modal management (open/close, body scroll lock)
- Business email validation
- Mobile hamburger menu
- Blog article modal loading
- Calendly popup integration
- All components must be accessible (WCAG 2.1 AA)

### SEO
- **Title:** "MaxMyCloud — Snowflake Automation & Cloud Optimization Powered by AI"
- **Keywords:** Snowflake optimization, cost reduction, cloud data warehouse, FinOps

---

## CTAs

1. "Start Your Free 30 Day Trial" → Free trial modal
2. "Book a Demo" → Calendly popup
3. "Get Started" (Pricing) → Package-specific modal
4. "Get My Free Cost Analysis" → Contact form submit
5. "Schedule a Free Consultation" → Calendly popup

---

## RESPONSIVE LAYOUTS

- **Services:** 1 col mobile, 2 col tablet, 3 col desktop
- **Blog:** 1 col mobile, 2 col tablet, 3 col desktop
- **Pricing:** 1 col mobile, 3 col desktop
- **Contact:** 1 col mobile, 2 col desktop

---

## KEY REQUIREMENTS FOR REDESIGN

✅ **Must Preserve:**
- All content and messaging
- 5 functional forms with business email validation
- All pricing tiers and features
- **LIGHT MODE theme** (white/light backgrounds, dark text)
- All CTAs and integrations
- Formspree endpoint
- Calendly integration

✅ **Design Constraints:**
- **LIGHT MODE ONLY** - White/light backgrounds with dark text
- Background: `#FFFFFF` or `#FAFAFA`
- Cards: `#FFFFFF` with subtle shadows
- Text: Dark (`#0F172A` or `#1E293B`)
- Accent gradient: blue to purple (for accents only)
- Font: Inter
- Responsive breakpoints

---

*Condensed from full 15,000+ word analysis. Essential information only.*
