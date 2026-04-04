# Gooey Mooey - Product Requirements Document

## Original Problem Statement
Build a modern, premium, mobile-first responsive website for a bakery named **"Gooey Mooey"** with:
- Two-page structure: Home (landing/conversion) + Menu & Order (browsing products)
- Brand-compliant design with Lavender (#E1CAFF), Dark Purple (#2B243F), Pinks (#FF859F, #FFB8CB)
- Typography: Playfair Display (headings) + Montserrat (body)
- Sticky Header, Hero, Trust Strip, Featured Products, About, Reviews, Contact/Enquiry form, Footer
- Mobile-optimized with sticky bottom bar CTAs
- WhatsApp links with pre-filled messages, SEO optimization, lazy-loaded images

## Architecture
- **Frontend**: React (CRA) + Tailwind CSS + shadcn/ui + lucide-react + React Router
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **No Auth Required** - Public bakery website

## What's Been Implemented

### Frontend (Complete)
- Home page: Hero section with optimized background image, Trust Strip, Sweet Collection grid, About, Reviews, Contact/Enquiry form, Footer
- Menu page: Accordion-based menu with categories and prices, WhatsApp CTA
- Mobile bottom bar with Call + WhatsApp CTAs
- All WhatsApp links include pre-filled text parameter (`?text=Hi! I'd like to place an order from Gooey Mooey`)
- SEO meta tags (title, description, keywords) per page
- Image lazy loading on Hero and Sweet Collection images
- Sonner toast notifications for form feedback

### Backend (Complete)
- POST `/api/enquiry` - Submit enquiry (name, phone, occasion, date, servings, flavour, design, delivery_area, message)
- GET `/api/enquiries` - List all enquiries
- MongoDB persistence with proper _id exclusion

### Data
- All product data is mocked in `frontend/src/data/mock.js`
- Enquiries are stored in MongoDB `enquiries` collection

## Prioritized Backlog

### P2 - Future Enhancements
- Admin dashboard to view/manage enquiries
- Real product images for Cupcakes and Cheesecake categories (currently show placeholder)
- Analytics integration (Google Analytics)
- Image gallery / Instagram feed integration
