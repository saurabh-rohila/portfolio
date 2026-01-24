# Gooey Mooey - Premium Bakery Landing Page

A modern, conversion-optimized landing page for **Gooey Mooey**, a premium bakery brand in Gurugram specializing in custom cakes and gourmet desserts.

## 🎨 Brand Identity

### Colors
- **Primary Lavender**: `#E1CAFF` (Background base)
- **Primary Purple**: `#7662B2` (Interactive elements)
- **Dark Purple**: `#2B243F` (Text & contrast)
- **Pink Accent**: `#FF859F` (Call-to-actions)
- **Soft Pink**: `#FFB8CB` (Accents)
- **Secondary Lavender**: `#C0C2FD` (Gradients)

### Typography
- **Primary Font**: Playfair Display (Headings, brand elements)
  - Weights: Regular, Bold, Italic
- **Secondary Font**: Montserrat (Body text, UI elements)
  - Weights: Regular, Medium, Semibold

### Logo
Custom SVG logo featuring:
- Dessert dome arch with gradient fill
- Two pink hearts (brand signature)
- "Gooey Mooey" brand name
- "Love at First Bite" tagline

## 📱 Features

### ✅ Implemented Sections

1. **Header**
   - Sticky navigation with logo
   - Smooth scroll to sections
   - Mobile-responsive hamburger menu
   - Primary CTA: Order on WhatsApp

2. **Hero Section**
   - Compelling headline with trust indicators
   - Dual CTA buttons (WhatsApp + Menu)
   - Product image placeholder
   - Trust badges strip

3. **Products Collection**
   - 6 product categories with placeholders
   - Hover animations
   - Direct WhatsApp order links

4. **About Section**
   - Brand story and values
   - Three core pillars (Freshly Baked, Premium Presentation, Custom Creations)

5. **Menu Section**
   - Stylish accordion-based menu
   - 6 categories: Cakes, Bento Cakes, Cupcakes, Cookies, Brownies, Cheesecake Jars
   - Full pricing information
   - Customization note with WhatsApp CTA

6. **Bestsellers**
   - Top 6 most popular items
   - Badge system (Most Popular, Trending, etc.)
   - Direct order CTAs

7. **Reviews/Instagram Section**
   - 6 Instagram post cards with mock data
   - Customer testimonials
   - Star ratings and engagement metrics
   - Instagram follow CTA

8. **Contact Section**
   - WhatsApp contact button
   - Instagram link
   - Location and response time info
   - Order guidance (what to share)

9. **Footer**
   - Full branding
   - Quick links navigation
   - Social media icons
   - Contact information

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS with custom Gooey Mooey theme
- **Components**: Shadcn UI (Accordion, Button, etc.)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Montserrat)

## 📂 File Structure

```
/app/frontend/src/
├── components/
│   ├── Logo.jsx              # Custom brand logo SVG
│   ├── Header.jsx            # Sticky navigation
│   ├── Hero.jsx              # Hero section with CTAs
│   ├── Products.jsx          # Product grid
│   ├── About.jsx             # About section
│   ├── Menu.jsx              # Accordion menu
│   ├── Bestsellers.jsx       # Top products
│   ├── Reviews.jsx           # Instagram reviews
│   ├── Contact.jsx           # Contact section
│   ├── Footer.jsx            # Footer
│   └── ui/                   # Shadcn components
│       └── accordion.jsx
├── data/
│   └── mock.js               # Mock Instagram posts data
├── App.js                    # Main app component
├── App.css                   # Global styles
└── index.css                 # Tailwind + custom theme
```

## 🎯 Conversion Optimization Features

1. **Multiple WhatsApp CTAs** throughout the page
2. **Trust indicators**: Star ratings, customer count
3. **Social proof**: Instagram reviews and engagement
4. **Clear value propositions** in each section
5. **Response time promise** (under 5 minutes)
6. **Microcopy** to reduce friction ("Fast response • Custom designs accepted")
7. **Badge system** on bestsellers (Most Popular, Trending)
8. **Hover animations** for engagement
9. **Mobile-first responsive design**
10. **Smooth scroll** and professional animations

## 📝 Next Steps (Backend Integration)

Currently, this is a **frontend-only implementation** with mock data. To add backend functionality:

1. **Contact Form** (optional - currently WhatsApp only)
2. **Product Management** (if you want dynamic product updates)
3. **Instagram Feed Integration** (live feed from Instagram API)
4. **Analytics** (track conversions, page views)
5. **Order Management System** (if moving beyond WhatsApp)

## 🚀 Getting Started

```bash
# Frontend is already running on localhost:3000
# No additional setup needed!

# To restart frontend
sudo supervisorctl restart frontend

# To view logs
tail -f /var/log/supervisor/frontend.out.log
```

## 📞 Contact Integration

All contact buttons link to:
- **WhatsApp**: https://wa.me/919266987600
- **Instagram**: https://www.instagram.com/gooeymooey.in/

## 🎨 Design Guidelines Followed

✅ Official Gooey Mooey brand colors  
✅ Playfair Display + Montserrat typography  
✅ Logo with proper clear space (height of "G")  
✅ Minimum logo size: 100px width  
✅ Light backgrounds preferred  
✅ Gradient usage within brand guidelines  
✅ No emoji icons (using Lucide React instead)  
✅ Premium, romantic, indulgent personality  
✅ Mobile-first responsive design  
✅ Conversion-optimized layout  

## 📷 Image Placeholders

Currently using **placeholder spaces** for:
- Hero section image
- Product photos (6 categories)
- Bestseller images (6 items)
- Instagram review images (6 posts)

**To add your photos**: Simply replace the placeholder divs with `<img>` tags pointing to your actual product images.

## 🎉 Launch Checklist

- [x] Brand colors implemented
- [x] Typography setup (Playfair Display + Montserrat)
- [x] Custom logo created
- [x] All sections built
- [x] Mobile responsive
- [x] WhatsApp integration
- [x] Instagram links
- [x] SEO meta tags
- [ ] Add real product photos
- [ ] Test on multiple devices
- [ ] Add real Instagram feed (optional)
- [ ] Deploy to production

---

**Built with ❤️ for Gooey Mooey - Love at First Bite**
