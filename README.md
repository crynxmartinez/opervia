# Opervia.agency

White-label technical partner for agencies. We build custom portals, dashboards, and backend systems using GoHighLevel API.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Database**: PostgreSQL (Prisma)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `DATABASE_URL` - Your PostgreSQL connection string from Prisma
- `NEXT_PUBLIC_PEXELS_API_KEY` - Your Pexels API key for images
- `NEXT_PUBLIC_SITE_URL` - Your site URL (http://localhost:3000 for dev)

### 3. Setup Database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Deployment to Vercel

### Prerequisites
- GitHub repository connected to Vercel
- Environment variables configured in Vercel dashboard

### Environment Variables for Vercel

Add these in your Vercel project settings:

```
DATABASE_URL=postgres://your_connection_string_here
NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_api_key_here
NEXT_PUBLIC_SITE_URL=https://opervia.agency
```

### Deploy

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Vercel will automatically deploy when you push to main branch

## Project Structure

```
opervia/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with SEO
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── header.tsx        # Site header
│   └── footer.tsx        # Site footer
├── lib/                   # Utility functions
│   ├── utils.ts          # Helper functions
│   └── prisma.ts         # Prisma client
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
└── public/               # Static assets

```

## SEO Keywords

Primary keywords:
- white label technical partner for agencies
- gohighlevel api developer
- custom agency software development

Secondary keywords:
- white label saas development
- custom client portal development
- agency fulfillment partner
- backend partner for agencies
- gohighlevel custom app development

## Features

- ✅ Fully responsive design
- ✅ SEO optimized with metadata
- ✅ Modern UI with Shadcn components
- ✅ Tailwind CSS for styling
- ✅ TypeScript for type safety
- ✅ Prisma ORM for database
- ✅ Contact form ready
- ✅ Mobile-friendly navigation

## License

© 2024 Opervia. All rights reserved.
