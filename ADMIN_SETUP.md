# 🚀 Admin Dashboard Setup Guide

## Phase 1: Foundation - COMPLETED ✅

### What We Built:
- ✅ Supabase configuration
- ✅ Database schema (SQL file)
- ✅ Authentication system
- ✅ Admin layout with navigation
- ✅ Login page
- ✅ Dashboard overview

---

## 📦 Setup Instructions

### Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new organization (if needed)
4. Create a new project:
   - **Name:** opervia-admin
   - **Database Password:** (save this!)
   - **Region:** Choose closest to you
5. Wait for project to be ready (~2 minutes)

### Step 2: Run Database Schema

1. In your Supabase project, go to **SQL Editor**
2. Click "New query"
3. Copy the entire content from `supabase/schema.sql`
4. Paste it into the SQL editor
5. Click "Run" to execute
6. You should see: "Success. No rows returned"

### Step 3: Get API Keys

1. In Supabase, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key
   - **service_role** key (keep this secret!)

### Step 4: Configure Environment Variables

1. Create `.env.local` file in project root:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 5: Create Your Admin Account

1. In Supabase, go to **Authentication** → **Users**
2. Click "Add user" → "Create new user"
3. Enter:
   - **Email:** your-email@opervia.agency
   - **Password:** (create a strong password)
   - **Auto Confirm User:** ✅ YES
4. Click "Create user"
5. Copy the **User UID** (you'll need it next)

### Step 6: Add Admin User Entry

1. Go to **Table Editor** → **admin_users**
2. Click "Insert" → "Insert row"
3. Fill in:
   - **id:** (paste the User UID from step 5)
   - **full_name:** Your Name
   - **role:** admin
   - **avatar_url:** (optional, leave empty for now)
4. Click "Save"

### Step 7: Test Login

1. Start your dev server:
```bash
npm run dev
```

2. Go to: `http://localhost:3000/admin/login`
3. Login with your email and password
4. You should be redirected to `/admin/dashboard`

---

## 🎯 What's Next?

### Phase 2: Blog Management (READY TO BUILD)
- Blog list page
- Create/edit blog posts
- Rich text editor
- Image upload
- SEO fields

### Phase 3: Portfolio Management
- Portfolio list page
- Add/edit projects
- Multiple image upload

### Phase 4: Lead Management
- Lead list with filters
- Status updates
- Notes system

### Phase 5: Calendar & Analytics
- Calendar integration
- Analytics dashboard

### Phase 6: Settings & Team
- Team member management
- Profile settings

---

## 🔐 Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Keep service_role key secret** - It has full database access
3. **Use strong passwords** for admin accounts
4. **Enable 2FA** in Supabase when possible

---

## 🐛 Troubleshooting

### "Cannot connect to Supabase"
- Check your `.env.local` file
- Verify Project URL is correct
- Make sure keys don't have extra spaces

### "You do not have admin access"
- Verify you added entry to `admin_users` table
- Check the `id` matches your User UID exactly
- Make sure `role` is set to `'admin'`

### "Database error"
- Make sure you ran the schema.sql file
- Check Supabase logs in Dashboard → Logs

---

## 📞 Need Help?

If you encounter any issues:
1. Check Supabase logs
2. Check browser console for errors
3. Verify all environment variables are set
4. Make sure database schema was created successfully

---

## ✅ Checklist

- [ ] Supabase project created
- [ ] Database schema executed
- [ ] Environment variables configured
- [ ] Admin user created in Authentication
- [ ] Admin user entry added to admin_users table
- [ ] Successfully logged in to /admin/login
- [ ] Dashboard loads correctly

**Once all checked, you're ready for Phase 2!** 🚀
