# GitDeploy Studio — Landing Page

Premium Next.js landing page for **GitDeploy Studio** — a one-click Git deployment tool.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (optional, installed)
- **Lucide React** (icons)

## Design

- Linear/Stripe-inspired dark mode
- Syne (headings) + DM Sans (body) + JetBrains Mono (code)
- Indigo accent palette (`#6366f1`)
- Animated hero with live terminal demo
- Scroll-reveal animations on all sections
- Fully responsive

## Sections

1. **Navbar** — sticky, blur-on-scroll, mobile hamburger menu
2. **Hero** — animated terminal, floating badges, gradient headline
3. **Trust Banner** — infinite scrolling tech stack marquee
4. **Features** — 6-card grid with icons and hover effects
5. **Bento Grid** — Apple-style product showcase
6. **How It Works** — alternating timeline with code snippets
7. **Stats** — animated counter numbers
8. **Testimonials** — 6-card testimonial grid with star ratings
9. **Pricing** — 3-tier with monthly/yearly toggle + lifetime deal
10. **FAQ** — accordion with smooth open/close
11. **CTA** — final conversion section with grid background
12. **Footer** — full 5-column footer with social links

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- **Colors**: Edit CSS variables in `src/styles/globals.css`
- **Content**: All text/data is in the component files under `src/components/sections/`
- **Fonts**: Loaded via Google Fonts in `globals.css`

## Deployment

Deploy instantly to **Vercel**:

```bash
npx vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

---

Built with ❤️ for developers who ship fast.
