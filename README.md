# ETSEC Corporate Website — 2026 Redesign

A responsive, accessibility-conscious Next.js 16 / React 19 corporate website for ETSEC, featuring a modern dark/light theme, CSS/SVG animations, cybersecurity and technology service pages, project showcases and WhatsApp-first lead capture.

## Quick start

```bash
npm ci
npm run dev
```

Visit `http://localhost:3000`. To check the production bundle run `npm run build`.

For deployment on Cloudflare Workers, the original OpenNext and Wrangler configuration is retained:

```bash
npm run build:cloudflare
npx wrangler deploy
```

Confirm production environment variables, custom domain routing and Workers permissions before deployment.

## Customise key links

Edit `src/lib/site.ts` to update:

- `phoneDigits`: WhatsApp destination, digits only (currently `918688578412`).
- `whatsappGreeting`: default prefilled enquiry (currently `Hey there! i have an enquiry`).
- `email`, `academy`, `portfolio` and other brand/contact details.
- `services`, `serviceDetails`, and `faqItems` for new offerings or messaging.

### Contact page behaviour

- Header, footer and primary CTA buttons open `wa.me/<phone>?text=<encoded-message>` in WhatsApp.
- The contact form **does not send data to a server**: it creates a WhatsApp message prefilled with the visitor's name, email, selected service and optional details, then opens WhatsApp when they submit.
- The visitor must **tap Send in WhatsApp** to deliver their enquiry. No automatic messages or backend email are sent, and no submissions are stored.

### Theme behaviour

Dark/light toggle in the header. The browser's system preference is used when no selection has been saved. Selection is stored in `localStorage` using `etsec-theme`. Both themes are styled through CSS variables in `src/app/globals.css`.

### Animation and accessibility

CSS/SVG hero dashboard, scroll-revealed sections, card hover transitions, orbit animations and floating chips. Motion is disabled when a visitor selects `prefers-reduced-motion: reduce`. Keyboard-focus states, semantic headings, accessible FAQ accordion and mobile navigation are implemented.

## Pages

- `/` — Home
- `/services` — Expertise
- `/services/cyber-security`
- `/services/web-development`
- `/services/ai-development`
- `/services/satellite-security`
- `/about` — About and leadership
- `/contact` — WhatsApp enquiry form and direct contact details
- `/faq` — FAQ
- `/updates` — Practical perspectives instead of a non-functional coming-soon page
- `/privacy`, `/terms`, `/refund`, `/shipping` — Existing legal and policy text retained
- `/robots.txt` and `/sitemap.xml` — Next.js metadata routes

## Deployment checklist

1. Review all legal/policy copy, leadership information, client relationships and technical service claims before launch.
2. Verify that `portfolio.etsecinc.in` and `academy.etsecinc.com` are live and intended destinations.
3. Confirm WhatsApp number, email, and links.
4. Check UI on mobile, tablet and desktop after deployment; use Lighthouse for performance and accessibility.
5. Check custom domain, SSL, and the deployed `/robots.txt` and `/sitemap.xml`.

No third-party animation or icon library was added; the redesign uses existing Next.js/React dependencies.
