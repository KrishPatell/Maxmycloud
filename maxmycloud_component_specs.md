# MaxMyCloud Component Specifications

This document outlines all reusable components and their specifications for redesign implementation.

## Navigation Component

**Type:** Header/Navigation Bar  
**Location:** Top of page, sticky  
**Props:**
- `logo`: SVG logo component
- `navItems`: Array of navigation links
- `mobileMenuOpen`: Boolean state
- `onMobileMenuToggle`: Function

**Structure:**
- Logo (left)
- Navigation links (center, hidden on mobile)
- Hamburger menu (mobile only)

**Responsive:**
- Desktop: Horizontal nav bar
- Mobile: Hamburger menu with slide-down

---

## Hero Section Component

**Type:** Hero/Banner  
**Location:** Top of page (#home)  
**Props:**
- `headline`: String
- `subheadline`: String
- `primaryCTA`: Object { text, action, modal }
- `secondaryCTA`: Object { text, action, url }
- `trustIndicators`: Array of strings

**Structure:**
- Gradient background (blue to purple, 135deg)
- Centered content
- Headline (large, bold)
- Subheadline (medium)
- Two CTA buttons
- Trust indicators (checkmarks)

**Background:** Gradient from blue-700 to purple-600

---

## Service Card Component

**Type:** Card  
**Location:** Services section  
**Props:**
- `id`: Number
- `name`: String
- `icon`: String (icon identifier)
- `description`: String

**Structure:**
- Icon (top)
- Title
- Description text
- Hover effect (lift + shadow)

**Styling:**
- Background: slate-800
- Border: slate-700
- Padding: p-8
- Border radius: rounded-xl
- Hover: translateY(-5px) + shadow

---

## Pricing Card Component

**Type:** Card  
**Location:** Pricing section  
**Props:**
- `id`: String
- `name`: String
- `price`: Number | null
- `priceDisplay`: String (for "Tailored pricing")
- `currency`: String
- `period`: String
- `popular`: Boolean
- `features`: Array of strings
- `cta`: Object { text, modal }

**Structure:**
- Popular badge (if popular)
- Plan name
- Price display
- Features list
- CTA button

**Styling:**
- Background: slate-800
- Border: slate-700
- Popular: Highlighted border or background
- Features: Bullet list

---

## Blog Card Component

**Type:** Card  
**Location:** Blog section  
**Props:**
- `id`: Number
- `title`: String
- `category`: String
- `readTime`: String
- `description`: String (optional)
- `onClick`: Function (opens article modal)

**Structure:**
- Category badge
- Title
- Read time
- Description (if provided)
- Clickable area

**Styling:**
- Background: slate-800
- Border: slate-700
- Hover: lift + shadow
- Category badge: Colored background

---

## Modal Component

**Type:** Overlay/Dialog  
**Location:** Overlay on page  
**Props:**
- `isOpen`: Boolean
- `onClose`: Function
- `title`: String (optional)
- `children`: React/Component children
- `size`: String ("sm" | "md" | "lg" | "xl")

**Structure:**
- Backdrop (black, 50% opacity)
- Modal container (centered)
- Close button (X, top right)
- Content area

**Behavior:**
- Close on backdrop click
- Close on Escape key
- Prevent body scrolling when open
- Smooth open/close animation

**Styling:**
- Background: slate-800
- Border radius: rounded-xl
- Padding: p-8
- Max width: Based on size prop

---

## Form Component

**Type:** Form  
**Location:** Modals, Contact section  
**Props:**
- `fields`: Array of field objects
- `action`: String (form endpoint)
- `method`: String ("POST")
- `onSubmit`: Function
- `submitText`: String
- `hiddenFields`: Object (key-value pairs)

**Field Object Structure:**
```javascript
{
  name: String,
  label: String,
  type: String ("text" | "email" | "textarea" | "select"),
  required: Boolean,
  validation: String (optional, e.g., "business_email"),
  options: Array (for select fields)
}
```

**Validation:**
- Business email: Rejects personal domains (gmail, yahoo, etc.)
- Required fields: Show error if empty
- Email format: Standard email validation

**Styling:**
- Input background: slate-700
- Input border: slate-600
- Focus: blue-500 border + ring
- Error: red-500 border

---

## Trust Indicator Component

**Type:** List Item  
**Location:** Hero, various sections  
**Props:**
- `text`: String
- `icon`: String (optional, default: checkmark)

**Structure:**
- Icon (✓)
- Text

**Styling:**
- Text color: slate-200
- Icon color: green-500 or white

---

## Statistics Card Component

**Type:** Card  
**Location:** Why Choose Us section  
**Props:**
- `value`: String (e.g., "30%")
- `label`: String

**Structure:**
- Large value (prominent)
- Label below

**Styling:**
- Background: slate-800
- Value: Large, bold text
- Label: Smaller, muted text

---

## CTA Button Component

**Type:** Button  
**Location:** Throughout page  
**Props:**
- `text`: String
- `type`: String ("primary" | "secondary")
- `action`: String ("modal" | "calendly" | "submit" | "link")
- `modal`: String (if action is "modal")
- `url`: String (if action is "calendly" or "link")
- `onClick`: Function (optional)

**Variants:**
- Primary: White background, blue text
- Secondary: Transparent, white border

**Styling:**
- Padding: px-6 py-3
- Border radius: rounded-lg
- Font weight: 600
- Hover: scale(1.05)

---

## Section Container Component

**Type:** Layout  
**Location:** Wraps all sections  
**Props:**
- `id`: String (section ID)
- `title`: String (optional)
- `subtitle`: String (optional)
- `children`: React/Component children
- `background`: String ("default" | "gradient" | "dark")

**Structure:**
- Container (max-w-7xl, mx-auto)
- Padding (py-20, px-4 md:px-8 lg:px-16)
- Title (if provided)
- Subtitle (if provided)
- Children content

**Styling:**
- Background: Based on prop
- Spacing: Consistent vertical padding

---

## Footer Component

**Type:** Footer  
**Location:** Bottom of page  
**Props:**
- `companyName`: String
- `description`: String
- `copyright`: String

**Structure:**
- Company name/logo
- Description text
- Copyright notice

**Styling:**
- Background: slate-800
- Text: slate-300
- Padding: py-8

---

## Snowflake Animation

**Type:** Animation  
**Location:** Throughout page (background)  
**Props:**
- `enabled`: Boolean
- `intensity`: Number (1-10, controls number of snowflakes)

**Behavior:**
- Continuous falling animation
- Random positioning
- Random duration (8-14 seconds)
- Shake animation for odd snowflakes
- Opacity fade in/out

**Styling:**
- Color: white/slate-200
- Size: Random (small to medium)
- Position: Absolute, random X positions

---

## Mobile Menu Component

**Type:** Navigation  
**Location:** Mobile header  
**Props:**
- `isOpen`: Boolean
- `onClose`: Function
- `navItems`: Array of navigation links

**Structure:**
- Slide-down menu
- Navigation links (vertical)
- Close button

**Behavior:**
- Opens from top
- Closes on link click
- Closes on backdrop click
- Smooth slide animation

**Styling:**
- Background: slate-800
- Full width
- Padding: py-4

---

## Component Usage Map

| Component | Used In | Count |
|-----------|---------|-------|
| Hero Section | Home | 1 |
| Service Card | Services | 6 |
| Pricing Card | Pricing | 3 |
| Blog Card | Blog | 20 |
| Modal | Various | 5 |
| Form | Modals, Contact | 5 |
| Trust Indicator | Hero, Various | 4+ |
| Statistics Card | Why Choose Us | 4 |
| CTA Button | Throughout | 8+ |
| Section Container | All sections | 8+ |

---

## Component Dependencies

- **Navigation** → Mobile Menu
- **Hero** → CTA Button, Trust Indicator
- **Services** → Service Card, Section Container
- **Pricing** → Pricing Card, Modal, Form, CTA Button
- **Blog** → Blog Card, Modal, CTA Button
- **Contact** → Form, Section Container
- **All Modals** → Modal, Form

---

## Implementation Notes

1. All components should be responsive (mobile-first)
2. Hover states required for interactive elements
3. Focus states required for accessibility
4. All animations should be performant (CSS transforms)
5. Forms must validate business emails
6. Modals must prevent body scrolling
7. All CTAs must track their action type
