# پروتئینیفای (Proteinify)

Persian nutrition lookup tool — search and filter 500+ foods by protein, calories, carbs, and health score.

**Stack:** Next.js 16, Tailwind CSS v4, TypeScript, Vercel

---

## Run Locally

```bash
# Install dependencies
npm install

# Copy env file and fill in values
cp .env.example .env.local

# Add font files to public/fonts/
# - Ravi-VF.ttf
# - RaviFaNum-VF.ttf
# - RaviNoEn-VF.ttf
# Add logo to public/logo.svg

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CTA_URL` | URL for the navbar CTA button ("یه کیلو مرغ برام بخر") |

## Deploy to Vercel

```bash
# One-command deploy
npx vercel

# Set env var
vercel env add NEXT_PUBLIC_CTA_URL
```

No build configuration needed — Next.js detects the App Router automatically.

## Assets Required (manual copy)

Before running, place these files:

- `public/fonts/Ravi-VF.ttf`
- `public/fonts/RaviFaNum-VF.ttf`
- `public/fonts/RaviNoEn-VF.ttf`
- `public/logo.svg`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # RTL + Persian font setup
│   ├── page.tsx            # Main food list page
│   ├── about/page.tsx      # About page
│   └── globals.css         # Design tokens + fonts
├── components/
│   ├── Navbar.tsx
│   ├── FoodTable.tsx       # Sort, search, filter
│   ├── FoodRow.tsx         # Desktop row + mobile card
│   └── HealthBadge.tsx
├── data/
│   └── foods.ts            # Food dataset (500 items)
├── hooks/
│   └── useStarred.ts       # localStorage star persistence
└── lib/
    └── healthScore.ts      # Health score formula
```
