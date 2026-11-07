# ETSEC Website — Redesign Notes

## Rebuilt experience

- Shared responsive navigation, accessible dropdown, mobile menu, persistent WhatsApp shortcut and redesigned footer.
- System-preference-aware light/dark theme switch with persisted selection.
- Homepage with a premium animated dashboard illustration, real client-brand asset strip, clear service cards, technology partnership messaging, portfolio previews, four-step process, academy section and interactive FAQ.
- Redesigned service index and service-detail pages for cybersecurity, web/SaaS engineering, AI, and specialised research.
- Redesigned About, Contact, FAQ and Insights pages.
- Existing Privacy, Terms, Refund and Service Delivery policy body text retained; shared global design applied.

## Contact conversion

- All enquiry CTAs point to the number configured in `src/lib/site.ts` (`+91 86885 78412`).
- Default WhatsApp text is `Hey there! i have an enquiry`.
- Contact form asks name and email, allows service selection and project details, and composes these into a WhatsApp message using URL encoding.
- No backend, third-party forms, saved submissions, or automated WhatsApp sends are involved. Visitor confirms Send inside WhatsApp.

## SEO, performance, accessibility

- Fixed site-wide canonical home URL inheritance by adding individual canonical URLs.
- Corrected duplicate title suffixes, added per-page social metadata and a 1200×630 sharing image, and reconciled robots/sitemap routes.
- Removed disabled newsletter and contact-maintenance blocks.
- Reduced heavy image sizes by using compressed WebP media in homepage previews.
- Removed remote font fetching; uses reliable system UI fonts.
- Keyboard focus states, labelled mobile menu, accessible FAQ, and reduced-motion support.
- CSS animations avoid a dependency on an external motion library.

## Validation performed

- TypeScript / TSX syntax transpilation passed for all 30 application modules.
- CSS stylesheet parsed without errors.
- Static-rendered homepage layout checked in headless Chromium at desktop (1440px), light mode (1440px) and mobile (390px), with no horizontal overflow.
- Asset paths checked against the project.
- **Full Next.js build was not run here:** the npm package registry was unreachable from the environment. Please run `npm ci && npm run build` on your machine before deploying.
