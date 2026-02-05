# Detailed Fix Guide - MaxMyCloud Website
## Exact Locations & Instructions for Developer

**Website:** https://maxmycloud-stagging.webflow.io/  
**Date:** January 21, 2026  
**Source:** Raj's WhatsApp feedback (1:10 AM onwards)

---

## 🔴 CRITICAL FIXES (Must Fix Before Launch)

### 1. TESTIMONIALS SECTION - HIDE ENTIRELY
**Location:** Main page, "Voice of our customers" section  
**Current Status:** ✅ Visible on page  
**Action Required:** ❌ **HIDE THE ENTIRE SECTION**  
**Raj's Comment:** "Let's hide this for now as we don't have any customers and don't want to mislead" (3:24 AM)

**Instructions:**
- Find the section with heading "Voice of our customers"
- Hide/remove the entire testimonials section including:
  - All testimonial cards (John D, Carlos Jonson, Emily Rox, Michael Zingg, Samantha Roy, Carla Jonson, Lisa W)
  - The section heading
  - All testimonial images

---

### 2. H1 HEADER TEXT - REPLACE
**Location:** Hero section, below main headline  
**Current Text:** "Preferred by top brands across the globe"  
**Action Required:** ❌ **REPLACE WITH NEW TEXT**  
**Raj's Comment:** "under h1 header - instead of saying Preffd by top brands across the globe and scrolling logos, please replace with" (2:52 AM)

**Instructions:**
- Find text: "Preferred by top brands across the globe"
- Replace with the text Raj provided (check WhatsApp message 2:52 AM for exact replacement text)
- Also remove/update any scrolling logos if present

**Note:** The exact replacement text was cut off in the message. Please check WhatsApp for complete text.

---

### 3. PRICING - MOST POPULAR BADGE
**Location:** Pricing section  
**Current Status:** Both "Professional" and "Enterprise" show "🔥Most popular" badge  
**Action Required:** ❌ **REMOVE from Professional, KEEP only on Enterprise**  
**Raj's Comment:** "Pricing - actually Enterprise is our most popular plan.. ik typically most pop is in the middle, but can we shift that pls." (1:21 AM)

**Instructions:**
- Find Professional plan card
- Remove the "🔥Most popular" badge/text from Professional
- Keep "🔥Most popular" badge ONLY on Enterprise plan
- Ensure Enterprise is visually highlighted as the most popular option

---

### 4. TESTIMONIAL - CARLOS JONSON → CARLA
**Location:** Testimonials section (if not hidden)  
**Current:** "Carlos Jonson" with male image  
**Action Required:** ❌ **CHANGE TO:** "Carla" with female picture  
**Raj's Comment:** "Carlos Jonson → change to 'Carla' (female picture)" (1:24 AM)

**Instructions:**
- Find testimonial card showing "Carlos Jonson"
- Change name to: "Carla"
- Update image to female picture
- Update quote to: "I can't imagine running my business without it!"
- Update title if needed

---

### 5. TESTIMONIAL - LISA W TITLE
**Location:** Testimonials section (if not hidden)  
**Current:** "Lisa W - Entrepreneur"  
**Action Required:** ❌ **CHANGE TO:** "Lisa W - Director"  
**Raj's Comment:** "Lisa W - Entrepreneur → change to 'Director'" (1:24 AM)

**Instructions:**
- Find testimonial card showing "Lisa W"
- Change title from "Entrepreneur" to "Director"

---

### 6. BLOG POSTS - REMOVE AUTHOR & DATE
**Location:** Blog section ("Snowflake Optimization Blog")  
**Current:** Each blog post shows:
- "Raj CEO, MaxMyCloud"
- Date: "Jan 18, 2026"
- "5 Min Read"

**Action Required:** ❌ **REMOVE author name and date, KEEP read time**  
**Raj's Comment:** "Remove name and date from blogs since it's only Raj writing" (1:24 AM)

**Instructions:**
- Find all blog post cards in the blog section
- Remove: "Raj CEO, MaxMyCloud"
- Remove: "Jan 18, 2026" (or any date shown)
- Keep: "5 Min Read" (or read time)
- Keep: Blog title, category, and description

**Affected Posts:**
- "Keeping cloud applications secure"
- "Why speed & reliability matter in the cloud"
- "Advanced analytics for smarter decisions"
- Any other blog posts

---

### 7. NEWSLETTER TEXT - ADD TEXT
**Location:** Footer, newsletter subscription section  
**Current Text:** "Subscribe to our newsletter"  
**Action Required:** ❌ **ADD:** "Subscribe to our newsletter **for free optimization techniques**"  
**Raj's Comment:** "in the bottom 'Subscribe to our newsletter' let's add 'for free optimization techniques'" (9:56 PM)

**Instructions:**
- Find footer newsletter section
- Change text from: "Subscribe to our newsletter"
- To: "Subscribe to our newsletter for free optimization techniques"

---

### 8. EMAIL ADDRESS - UPDATE
**Location:** Footer and/or Contact section  
**Current:** (Need to verify current email)  
**Action Required:** ❌ **CHANGE TO:** contact@maxmycloud.com  
**Raj's Comment:** "Pl change email to contact@maxmycloud.com" (3:30 AM)

**Instructions:**
- Find all email addresses on the site (footer, contact form, privacy policy, etc.)
- Replace with: contact@maxmycloud.com
- Check:
  - Footer contact info
  - Contact form
  - Privacy policy page
  - Any other pages with email

---

### 9. SOCIAL ICONS - HIDE ALL EXCEPT LINKEDIN
**Location:** Footer  
**Current:** Multiple social icons (Facebook, Twitter, Instagram, etc.)  
**Action Required:** ❌ **HIDE all social icons EXCEPT LinkedIn**  
**Raj's Comment:** "on social icons in bottom we can hide others and only keep linkedin for now - https://www.linkedin.com/company/maxmycloud/" (1:34 AM)

**Instructions:**
- Find footer social media icons section
- Hide/remove all icons except LinkedIn
- Ensure LinkedIn icon links to: https://www.linkedin.com/company/maxmycloud/
- Verify LinkedIn icon is visible and clickable

---

### 10. FOOTER SITEMAP - FIX TYPO
**Location:** Footer, sitemap/links section  
**Current:** "Feature" (singular)  
**Action Required:** ❌ **CHANGE TO:** "Features" (plural)  
**Raj's Comment:** "in footer sitemap - pl change word Feature to Features" (1:36 AM)

**Instructions:**
- Find footer sitemap section
- Find the word "Feature" in the links
- Change to "Features"

---

### 11. GOOGLE/NEXTIVA RATINGS - REMOVE
**Location:** Somewhere on the page (need to locate)  
**Current:** Shows 4.5/5.0 ratings with Google/Nextiva logos  
**Action Required:** ❌ **REMOVE ENTIRE SECTION**  
**Raj's Comment:** "Please remove this" with screenshot showing Google/Nextiva ratings (2:54 AM)

**Instructions:**
- Search for any section showing:
  - Google ratings (4.5/5.0)
  - Nextiva ratings
  - Star ratings with company logos
- Remove the entire ratings/reviews section

---

### 12. HEADER HEIGHT - REDUCE
**Location:** Top navigation header  
**Current:** Approximately 1 inch height  
**Action Required:** ❌ **REDUCE TO 1/2 inch**  
**Raj's Comment:** "So I know we are basing our site's several features on select.dev's... the header they use is also floating like ours, but it's close to the top. Can you please make our header 1/2 inch instead of 1 inch?" (3:04 AM)

**Instructions:**
- Find the sticky/floating header navigation
- Reduce padding/height from ~1 inch to ~0.5 inch (half inch)
- Ensure header is closer to top of page
- Maintain functionality and readability

---

### 13. HUMAN STOCK IMAGES - REMOVE
**Location:** Near testimonials section (or elsewhere)  
**Current:** 2 stock images of people  
**Action Required:** ❌ **REMOVE both images**  
**Raj's Comment:** "Thanks Krish. One more request, let's remove 'human' stock images from the site if any ... i believe there were 2 people near testimonials... surveys show that ppl don't like stock images .. let's rather show our tech" (8:41 PM)

**Instructions:**
- Search for stock photos of people (not avatars in testimonials)
- Find 2 human stock images near testimonials area
- Remove both images
- Replace with tech/product images if needed

---

### 14. CALCULATOR LINK - HIDE
**Location:** Navigation or CTA buttons  
**Current:** "Calculate Your Savings" or "Calculator" link visible  
**Action Required:** ❌ **HIDE THE LINK**  
**Raj's Comment:** "we will can have the site go live tomo! we can hide the calculator link for now if possible" (1:32 AM)

**Instructions:**
- Find "Calculate Your Savings" button/link
- Find "Calculator" link in navigation (if present)
- Hide both (don't delete, just hide for future use)
- Check:
  - Navigation menu
  - Hero section CTAs
  - Footer links
  - Any other calculator references

---

### 15. STORAGE OPTIMIZATION TEXT - UPDATE
**Location:** Features section, "Storage Optimization" card  
**Current:** Text mentions "warehousing"  
**Action Required:** ❌ **UPDATE TEXT**  
**Raj's Comment:** "Instead of the verbiage used here, please use the verbiage from the original website. Also storage talks about warehousing, so we need to update that" (3:02 AM)

**Instructions:**
- Find "Storage Optimization" feature card
- Check current text (likely mentions "warehousing")
- Replace with text from original MaxMyCloud website
- Original text should be: "Optimize data storage strategies, implement data lifecycle policies, and reduce unnecessary data retention."
- Ensure no mention of "warehousing" (that's for warehouses, not storage)

---

### 16. CALENDLY LINKS - VERIFY ALL
**Location:** Multiple locations (CTAs, buttons)  
**Current:** Various "Schedule a call" / "Book a call" buttons  
**Action Required:** ❌ **VERIFY ALL LINK TO:** https://calendly.com/maxmycloud/30min  
**Raj's Comment:** "in schedule a call or book a call button you can add this link - https://calendly.com/maxmycloud/30min" (1:15 AM)

**Instructions:**
- Find all instances of:
  - "Schedule a call"
  - "Book a call"
  - "Book a Demo"
  - "Schedule a Free Consultation"
- Verify each button links to: https://calendly.com/maxmycloud/30min
- Update any that don't match
- Check:
  - Hero section CTAs
  - Blog section CTAs
  - Footer CTAs
  - Any other call-to-action buttons

---

### 17. TAWK.TO CHAT WIDGET - INTEGRATE
**Location:** Bottom right corner (typically)  
**Current:** May not be present  
**Action Required:** ❌ **ADD TAWK.TO WIDGET**  
**Raj's Comment:** "Please add this chat widget from tawk.to" (4:02 AM) + script code shared

**Instructions:**
- Raj shared Tawk.to script code in WhatsApp
- Add the Tawk.to chat widget script to the website
- Widget should appear in bottom right corner
- Ensure it's functional and visible
- Check WhatsApp message 4:02 AM for exact script code

**Script Location:** Add before closing `</body>` tag or in Webflow custom code section

---

### 18. RB2B SCRIPT - ADD
**Location:** Before closing `</body>` tag  
**Current:** Not present  
**Action Required:** ❌ **ADD RB2B SCRIPT**  
**Raj's Comment:** "and lastly before going live pl add rb2b script below" (4:05 AM)

**Instructions:**
- Add rb2b script before closing `</body>` tag
- Raj mentioned: "ill activate that subscription when we are ready to go"
- Check WhatsApp message 4:05 AM for exact script code
- Add to Webflow custom code section (footer code)

---

## ✅ VERIFIED CORRECT (No Changes Needed)

1. ✅ **FAQ #4 - Cost Reduction:** Shows "30-50% reduction" ✓
2. ✅ **FAQ #9 - Setup Time:** Shows "less than 15 minutes" ✓
3. ✅ **FAQ #8 - Environments:** Shows "Standard, Enterprise & Business Critical" ✓
4. ✅ **FAQ #10 - Refund:** Shows "100% refund. No questions asked" ✓
5. ✅ **Why Choose Us - Percentage:** Shows "30-50%" ✓
6. ✅ **Guaranteed Savings:** Includes "Snowflake" in text ✓

---

## 📋 CHECKLIST FOR DEVELOPER

### Before Launch - Must Fix:
- [ ] Hide testimonials section entirely
- [ ] Replace H1 header text ("Preferred by top brands...")
- [ ] Fix pricing badges (only Enterprise = Most Popular)
- [ ] Update newsletter text (add "for free optimization techniques")
- [ ] Change email to contact@maxmycloud.com
- [ ] Hide social icons (keep only LinkedIn)
- [ ] Fix footer sitemap ("Feature" → "Features")
- [ ] Remove Google/Nextiva ratings section
- [ ] Reduce header height to 1/2 inch
- [ ] Remove human stock images (2 images)
- [ ] Hide calculator link
- [ ] Update Storage Optimization text
- [ ] Verify all Calendly links point to correct URL
- [ ] Add Tawk.to chat widget
- [ ] Add rb2b script

### If Testimonials Stay Visible (shouldn't):
- [ ] Change "Carlos Jonson" → "Carla" (female picture)
- [ ] Change "Lisa W - Entrepreneur" → "Director"
- [ ] Update Carla's quote to "I can't imagine running my business without it!"

### Blog Section:
- [ ] Remove "Raj CEO, MaxMyCloud" from all blog posts
- [ ] Remove dates from all blog posts
- [ ] Keep read time ("5 Min Read")

---

## 🎯 PRIORITY ORDER

**P0 - Critical (Fix Immediately):**
1. Hide testimonials section
2. Fix pricing "Most Popular" badge
3. Replace H1 header text
4. Add Tawk.to widget
5. Add rb2b script

**P1 - High Priority:**
6. Update email address
7. Fix newsletter text
8. Hide social icons (keep LinkedIn)
9. Remove blog author/dates
10. Verify Calendly links

**P2 - Medium Priority:**
11. Fix footer sitemap typo
12. Remove Google/Nextiva ratings
13. Reduce header height
14. Hide calculator link
15. Update Storage Optimization text
16. Remove human stock images

---

## 📝 NOTES FOR DEVELOPER

1. **Testimonials:** Raj explicitly said to hide the entire section because they don't have customers yet. This is critical.

2. **Pricing Badge:** Only Enterprise should show "Most Popular" - currently both Professional and Enterprise show it.

3. **H1 Header Text:** The replacement text was cut off in WhatsApp. Please check Raj's message at 2:52 AM for the complete replacement text.

4. **Calendly Links:** All "Schedule a call" / "Book a call" buttons should link to: https://calendly.com/maxmycloud/30min

5. **Scripts:** Both Tawk.to and rb2b scripts need to be added. Check WhatsApp messages 4:02 AM and 4:05 AM for exact code.

6. **Email:** Search entire site for email addresses and update all to: contact@maxmycloud.com

---

## ✅ FINAL VERIFICATION

After fixes, verify:
- [ ] Testimonials section is completely hidden
- [ ] Only Enterprise shows "Most Popular"
- [ ] All Calendly links work correctly
- [ ] Tawk.to chat widget appears and functions
- [ ] Email addresses are updated site-wide
- [ ] Newsletter text includes "for free optimization techniques"
- [ ] Only LinkedIn icon visible in footer
- [ ] Blog posts have no author names or dates
- [ ] Header is 1/2 inch height
- [ ] Calculator link is hidden
- [ ] No human stock images visible
- [ ] Storage Optimization text updated
- [ ] Footer sitemap says "Features" not "Feature"
- [ ] Google/Nextiva ratings removed
- [ ] rb2b script added

---

**End of Fix Guide**
