# Deployment Instructions for Vercel

## Step 1: Install Dependencies

Run this command in the project directory:

```bash
npm install
```

## Step 2: Environment Variables for Vercel

When you connect this repository to Vercel, add these environment variables in your Vercel project settings:

### Required Environment Variables:

```
DATABASE_URL=postgres://63169b9a03e7b0797c4e496dfdc9edc7a587eec8d7c98502a22742b7d79b6a21:sk_A6EdzkuTyk4MFFOBkMupO@db.prisma.io:5432/postgres?sslmode=require

NEXT_PUBLIC_PEXELS_API_KEY=UPJp8zwqFjKnUL2CUqxcn3U90JtMAhPWUB3ItNMHqu01Sf06gvl0qNVT

NEXT_PUBLIC_SITE_URL=https://opervia.agency
```

**Note**: Change `NEXT_PUBLIC_SITE_URL` to your actual Vercel deployment URL once deployed.

## Step 3: Push to GitHub

```bash
git add .
git commit -m "Initial Opervia website deployment"
git push origin main
```

## Step 4: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `crynxmartinez/opervia`
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
5. Add the environment variables listed above
6. Click "Deploy"

## Step 5: Setup Prisma Database

After first deployment, run this in Vercel's terminal or locally:

```bash
npx prisma generate
npx prisma db push
```

## Step 6: Verify Deployment

Once deployed, verify:
- ✅ Homepage loads correctly
- ✅ Navigation works
- ✅ All pages are accessible
- ✅ SEO metadata is correct
- ✅ Images load properly

## Custom Domain Setup (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain: `opervia.agency`
3. Follow Vercel's DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` environment variable to `https://opervia.agency`

## Troubleshooting

### Build Fails
- Check that all environment variables are set correctly
- Verify Node.js version is 18.x or higher

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check Prisma connection with `npx prisma db pull`

### Images Not Loading
- Verify NEXT_PUBLIC_PEXELS_API_KEY is set
- Check Next.js image configuration in `next.config.mjs`

## Automatic Deployments

Vercel will automatically deploy when you push to the main branch:

```bash
git add .
git commit -m "Update website"
git push origin main
```

## Local Development

To run locally:

```bash
npm install
npm run dev
```

Visit http://localhost:3000
