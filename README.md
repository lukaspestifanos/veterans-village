# Veterans Village website

Vite + React rebuild of veterans-village.org.

    npm install
    npm run dev      # local
    npm run build    # dist/ for Vercel (vercel.json rewrites all routes to index.html)

- Pages: `/`, `/help`, `/housing`, `/services`, `/about`, `/partners`, `/contact`
- Content lives in `src/data/` (properties, board, services, site details, background media).
- Background plates take an optional looping MP4 (`src/data/media.ts`). Until videos are added the property photos play a slow drift.
- The contact form is a stub: `submitContact` in `src/components/ContactForm.tsx` is where a real endpoint goes.
- `/contact?topic=housing&community=Quinn%20by%20Vintage` prefills the form; `/housing?type=senior&state=WA` prefilters the finder.
