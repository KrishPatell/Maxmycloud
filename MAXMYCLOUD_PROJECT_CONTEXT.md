# MaxMyCloud Project — Full Context for AI Assistants

**Purpose:** This document gives an AI assistant full context on the MaxMyCloud project so it can answer questions, make edits, and stay consistent with brand, structure, and past decisions. Use it as persistent context when chatting with a cloud-based AI.

**Last updated:** January 2026  
**Workspace path:** `Maxcloud Webflow` (or `MaxMyCloud Webflow`)  
**GitHub repo:** `https://github.com/KrishPatell/Maxmycloud.git` (branch: `main`)

---

## 1. Project Overview

**MaxMyCloud** is a Snowflake cost optimization service. The project includes:

1. **Main marketing website** — Lives on **Webflow** at https://www.maxmycloud.com (content, structure, and design specs are in this repo for reference/redesign).
2. **Snowflake Cost Savings Calculator** — Standalone HTML/CSS/JS app in this repo; intended to be **deployed on Vercel** and **embedded in Webflow via iframe**.

There is also a **blog CSV** (created earlier, not in this repo by default): `MaxMyCloud - Blogs - Complete.csv` — 20 Snowflake optimization blog posts formatted for Webflow; one post had original Webflow CDN images preserved; the rest use Unsplash placeholders where needed.

---

## 2. Repository Structure (This Repo)

```
Maxcloud Webflow/
├── index.html                 # Calculator entry (used for Vercel; rename from calculator.html)
├── calculator.html            # Legacy name; same content as index for local use
├── styles/
│   └── calculator.css         # All calculator styles
├── js/
│   ├── calculator-engine.js   # Snowflake ROI math (Gemini-style formula)
│   ├── calculator-ui.js       # Steps, results, charts wiring, no email modal
│   ├── charts.js              # Chart.js: waterfall, gauge, donut
│   └── form-validation.js    # Business email validation
├── README.md                  # Calculator quick start, deploy, embed
├── CALCULATOR_README.md       # Deep calculator docs (formula, insights, brand)
├── VERCEL_DEPLOYMENT_GUIDE.md # Deploy to Vercel + iframe in Webflow
├── WEBFLOW_EMBED_STEPS.md     # Step-by-step Webflow embed (assets + custom code)
├── WEBFLOW_INTEGRATION_GUIDE.md
├── WEBFLOW_QUICK_START.md
├── webflow-calculator-embed.html   # HTML snippet for Webflow embed (if not using iframe)
├── webflow-responsive-iframe.html # Optional: iframe + JS for auto height
├── responsive-iframe.html     # Standalone test page for responsive iframe
├── SEO_META_TAGS.md           # Recommended title/description for calculator page
├── maxmycloud_essentials.md    # Website: light mode, copy, forms, integrations
├── maxmycloud_content_structure.json # Full site content (nav, hero, services, pricing, blog, contact, forms)
├── maxmycloud_design_system.json    # Design tokens (note: some docs say dark, essentials say LIGHT)
├── maxmycloud_redesign_quick_reference.md
├── maxmycloud_component_specs.md
├── maxmycloud_redesign_prompt_revised.md
├── maxmycloud_complete_analysis.md
├── maxmycloud_all_blog_posts.md      # Full text of 20 blog articles
├── raj_feedback_quick_reference.md   # Raj's requested fixes (main site)
├── raj_feedback_detailed_fixes.md
├── raj_feedback_checklist.md
├── prompt_analysis_and_fixes.md
└── .gitignore
```

**Important:** For **Vercel**, the app is served from **`index.html`** at repo root. Keep `styles/` and `js/` paths as-is; no build step.

---

## 3. Brand & Messaging (MaxMyCloud)

- **Tagline:** "Reduce Your Snowflake Costs by 30%"
- **Secondary:** "Snowflake Automation & Cloud Optimization Powered by AI"
- **Guarantee:** "Cut Your Cloud Spend by at least 20% — Or You Don't Pay"
- **Description:** MaxMyCloud specializes in Snowflake cost optimization; proven strategies and expert analysis to reduce cloud data warehouse spend while keeping performance.
- **Key messages:** 30% cost reduction, 20% savings guarantee, setup in 30 minutes, no credit card required, Snowflake Certified Experts, 24/7 support.

**Design (website):**  
- **Critical:** Main site is **LIGHT MODE** (see `maxmycloud_essentials.md`): white/off-white backgrounds (`#FFFFFF`, `#FAFAFA`), dark text (`#0F172A`, `#1E293B`).  
- **Calculator:** Uses its own styles in `calculator.css`; primary buttons and active step use **`#060f16`** (dark navy). Container widths: 1500px (page), 1200px (hero-content), 1100px (calculator-container).  
- **Accents (both):** Blue `#3b82f6`, purple `#8b5cf6`; gradient for accents only. Font: **Inter** (Google Fonts).

**Note:** `maxmycloud_design_system.json` and `maxmycloud_redesign_quick_reference.md` describe a dark theme; for the **live website** and **essentials**, treat **light mode** as the source of truth unless the user says otherwise.

---

## 4. Main Website (Webflow) — Content & Behavior

- **URL:** https://www.maxmycloud.com  
- **Sections (order):** Navigation → Hero (#home) → Services (#services) → Why Choose Us → Pricing (#pricing) → Blog (#blog) → Contact (#contact) → Footer.
- **Nav items:** Home, Services, Pricing, Blog, Contact.
- **Hero CTAs:** "Start Your Free 30 Day Trial" (opens modal), "Book a Demo" (Calendly).
- **Trust:** No credit card, setup in under 30 minutes, trusted by enterprise, 20% guarantee.
- **Services:** 6 items (Cost Analysis & Audit, Query Optimization, Warehouse Right-Sizing, Auto-Scaling Setup, Storage Optimization, Ongoing Monitoring).
- **Pricing:** Starter ($0), Professional ($399/mo), Enterprise (tailored); **"Most Popular"** on **Enterprise** only (per Raj’s feedback).
- **Blog:** 20 articles; categories include Warehouse Optimization, Query Optimization, Storage Optimization, etc. (see `maxmycloud_content_structure.json`).
- **Contact form:** Company Name, Email (business only), Yearly Snowflake Spend dropdown, Tell us about your Snowflake usage. Submit: "Get My Free Cost Analysis".
- **Modals (main site):** Free Trial, Starter, Professional, Enterprise (each with Name, Company Email, Message); plus Blog Article modal. All forms submit to **Formspree**; business email required (block gmail, yahoo, hotmail, etc.).
- **Footer:** contact@maxmycloud.com; "Features" (not "Feature"); newsletter text includes "for free optimization techniques"; only **LinkedIn** shown for social (Raj). No testimonials section; no "Voice of our customers" (Raj). H1 is not "Preferred by top brands across the globe" (Raj). Calendly links: **https://calendly.com/maxmycloud/30min**.

**Integrations (main site):**
- **Formspree:** `https://formspree.io/f/xvgqlgyo`
- **Calendly:** `https://calendly.com/maxmycloud/30min` (use this for customer-facing CTAs; some older docs have raj-aiyer-maxmycloud — treat maxmycloud as canonical)
- **Tawk.to:** Account ID `689e79c93e106b19234f4a48`
- **Leadsy.ai:** `https://r2.leadsy.ai/tag.js` (Project: `156g9c8oHswefsTCB`)

---

## 5. Snowflake Cost Savings Calculator (This Repo)

### 5.1 Role and deployment

- **Purpose:** Let users enter monthly Snowflake spend and infrastructure details; show estimated savings, charts, and insights; drive leads to Contact and Calendly.
- **Stack:** Vanilla HTML/CSS/JS; Chart.js (CDN). No framework.
- **Deployment:** Vercel (static; root file `index.html`). Then embed in Webflow via **iframe** (recommended). Alternative: paste HTML into Webflow embed and link CSS/JS from Webflow Assets (see WEBFLOW_EMBED_STEPS.md).

### 5.2 Calculator flow

- **Step 1 — Spend:** Monthly Snowflake spend (required). Input + dropdown range. Validation: roughly $100–$100M. Buttons: "Continue →", "Skip to calculation".
- **Step 2 — Infrastructure:** Warehouses count, workload type (ETL, Ad-hoc, BI, Data Science), sliders: Provisioning Level, Maturity Level, Idle Intensity, Team Size. Then "Calculate Savings".
- **Results:** Summary cards (current spend, monthly savings, annual impact), **Savings Waterfall** chart, **Efficiency Score** gauge, **Cost Waste Distribution** donut, **Optimization Opportunities** (insights), **Executive Summary**, **blurred "Detailed 90-Day Savings Roadmap"** with one CTA.

### 5.3 Calculator formula (calculator-engine.js)

- **Model:** `Total Savings = (S × P_r) + (S × P_a) + (S × P_q)` (Gemini-style).
  - **S** = monthly spend.
  - **P_r** = Right-Sizing Potential (base 5%; +warehouse sprawl, low maturity, over-provisioning).
  - **P_a** = Auto-Suspend Potential (base 3%; +idle intensity, “always on”).
  - **P_q** = Query Efficiency Potential (base 4%; +workload type, team size, maturity).
- Workload adjustments: ETL +7%, Ad-hoc +12%, BI +3%, Data Science +5%.

### 5.4 Calculator UI and copy (current state)

- **No headline/subheadline** on the calculator page (removed per request).
- **No trust-signals block** (removed).
- **No email capture modal.** The "Unlock Full PDF Report" is a **link**, not a pop-up:
  - **Unlock Full PDF Report** → `https://www.maxmycloud.com/contact-us` (same tab or target="_blank" as in index.html).
  - **Book 30-Min Strategy Call** → `https://calendly.com/maxmycloud/30min`.
- Monthly spend input: **transparent** (no heavy overlay/styling). Modal styling was removed; if any modal remains in an older file, it’s legacy.
- **Fixed-height iframe:** User prefers fixed height (e.g. 3200–3400px) for the Webflow iframe; optional auto-height code exists in `webflow-responsive-iframe.html` and in Vercel guide but is not required.

### 5.5 Calculator integrations

- **Formspree:** Not used for the calculator itself (no email modal). If you re-add a form, use `https://formspree.io/f/xvgqlgyo` or the project’s form ID.
- **Calendly:** `https://calendly.com/maxmycloud/30min` for "Book 30-Min Strategy Call".
- **Contact:** "Unlock Full PDF Report" → `https://www.maxmycloud.com/contact-us`.

### 5.6 SEO (calculator page)

- **Recommended title:** "Snowflake Cost Savings Calculator - Reduce Cloud Spend by 30-50% | MaxMyCloud"
- **Recommended meta description:** "Calculate your Snowflake cost savings instantly. Our free calculator analyzes your infrastructure and shows potential savings from warehouse optimization, auto-suspend policies, and query tuning. Get personalized estimate in 60 seconds - no credit card required."
- See `SEO_META_TAGS.md` for more variants and OG/Twitter tags.

### 5.7 Key files to edit

- **Content/structure:** `index.html`
- **Layout/visuals:** `styles/calculator.css`
- **Logic:** `js/calculator-engine.js`
- **Charts:** `js/charts.js`
- **Steps, results, buttons:** `js/calculator-ui.js` (no modal logic; Unlock is a link in HTML)
- **Validation (if you add forms):** `js/form-validation.js`

---

## 6. Design and Copy Decisions (Summary)

- **Website:** Light mode only; white/light gray BG; dark text; Inter; accent blue/purple.
- **Calculator:** No hero headline/subheadline; no trust strip; no email modal; Unlock = link to maxmycloud.com/contact-us; Calendly = maxmycloud/30min; primary/active color #060f16; transparent spend input; container widths 1500/1200/1100.
- **Main site (Raj):** Testimonials/customer voice section hidden; H1 not “Preferred by top brands…”; “Most Popular” only on Enterprise; contact email contact@maxmycloud.com; Calendly maxmycloud/30min; only LinkedIn in footer; blog without author/dates; “Feature” → “Features”; header height reduced; “Calculate Your Savings” link hidden in nav; Storage Optimization copy without “warehousing”; no Google/Nextiva ratings; no stock images in testimonial area.

---

## 7. URLs and Links Quick Reference

| Purpose | URL |
|--------|-----|
| Main site | https://www.maxmycloud.com |
| Contact / Unlock report | https://www.maxmycloud.com/contact-us |
| Calendly (canonical) | https://calendly.com/maxmycloud/30min |
| Formspree | https://formspree.io/f/xvgqlgyo |
| GitHub repo | https://github.com/KrishPatell/Maxmycloud |
| Calculator (after Vercel deploy) | https://&lt;your-project&gt;.vercel.app |

---

## 8. Inconsistencies to Be Aware Of

- **Calendly:** Some docs say `https://calendly.com/raj-aiyer-maxmycloud/30min`. **Canonical for user-facing links is** `https://calendly.com/maxmycloud/30min`.
- **Theme:** Design system JSON and redesign quick reference describe a dark theme; **maxmycloud_essentials.md** and Raj’s context specify **light mode** for the main website.
- **Calculator vs rest:** Calculator has its own CSS and no Webflow classes; keep calculator and main-site design docs separate when making style changes.

---

## 9. How to Update Things

- **Calculator copy/links:** Edit `index.html` and, if needed, `js/calculator-ui.js`.
- **Calculator math/insights:** Edit `js/calculator-engine.js` and optionally `js/charts.js`.
- **Calculator look:** Edit `styles/calculator.css`.
- **Main site content (for reference or redesign):** Use `maxmycloud_content_structure.json` and `maxmycloud_essentials.md`; update those files if you change positioning or copy so the AI context stays accurate.
- **Deploy calculator:** Push to `main` on GitHub; Vercel builds from this repo. Embed in Webflow with iframe (fixed height ~3200–3400px or use responsive snippet if you prefer).
- **Formspree:** If you add or change forms, set endpoint to `https://formspree.io/f/xvgqlgyo` (or the correct form ID) and whitelist Vercel/Webflow domains if required.

---

## 10. Documentation Index (Where to Look)

- **Calculator only:** README.md, CALCULATOR_README.md, VERCEL_DEPLOYMENT_GUIDE.md, WEBFLOW_EMBED_STEPS.md, SEO_META_TAGS.md.
- **Main site content/structure:** maxmycloud_essentials.md, maxmycloud_content_structure.json, maxmycloud_complete_analysis.md.
- **Design (website light mode):** maxmycloud_essentials.md. Design tokens: maxmycloud_design_system.json (use with light-mode override).
- **Components/specs:** maxmycloud_component_specs.md, maxmycloud_redesign_quick_reference.md.
- **Raj’s changes:** raj_feedback_quick_reference.md, raj_feedback_detailed_fixes.md, raj_feedback_checklist.md.
- **Blog (full text):** maxmycloud_all_blog_posts.md. For Webflow import, use the CSV (e.g. MaxMyCloud - Blogs - Complete.csv) if available in the user’s environment.

---

*End of context document. Use this as the single source of truth for project context when chatting with an AI that has no prior knowledge of the repo.*
Implement this design from Figma.
@https://www.figma.com/design/x585EBy11veptCqorwcV1R/Better-Nurses-Services-LLC-Website-Project--Copy-?node-id=2208-77&m=dev