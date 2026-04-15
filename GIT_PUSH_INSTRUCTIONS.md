# Git Push Instructions

## Quick Push to GitHub

Run these commands in order:

```bash
# 1. Stage all files
git add .

# 2. Commit with message
git commit -m "Initial Opervia website - Next.js with full SEO and Prisma setup"

# 3. Push to GitHub
git push origin main
```

## If this is your first push to the repository:

```bash
# Set the remote (only needed once)
git remote add origin https://github.com/crynxmartinez/opervia.git

# Push to main branch
git push -u origin main
```

## After Pushing to GitHub

1. **Go to Vercel** (https://vercel.com)
2. **Import the repository**:
   - Click "Add New Project"
   - Select "crynxmartinez/opervia"
   - Click "Import"

3. **Configure Environment Variables** (see VERCEL_ENV_SETUP.txt):
   - Add `DATABASE_URL`
   - Add `NEXT_PUBLIC_PEXELS_API_KEY`
   - Add `NEXT_PUBLIC_SITE_URL`

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site!

## Future Updates

After making changes:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Vercel will automatically redeploy!

## Troubleshooting

### If git push fails with authentication error:
- Make sure you're logged into GitHub
- You may need to use a Personal Access Token instead of password

### If you get "fatal: not a git repository":
```bash
git init
git remote add origin https://github.com/crynxmartinez/opervia.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### To check current remote:
```bash
git remote -v
```
