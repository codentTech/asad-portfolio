# Supabase Setup Guide for Asad Abbas Portfolio

Follow these steps to set up Supabase for your blog system.

## Step 1: Create Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in:
   - **Name**: `asad-abbas-portfolio` (or your preferred name)
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to you
5. Click "Create new project"
6. Wait 2-3 minutes for project to be ready

## Step 2: Get API Keys

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

## Step 3: Set Up Environment Variables

1. Create a `.env.local` file in the root directory (if it doesn't exist)
2. Add these variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

**Example:**

```env
NEXT_PUBLIC_SUPABASE_URL=https://pfwbalgahuyceuapiufh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_AZcKNxYsv9f3Nrm7Y8NkkQ_hdlAmr_a
```

## Step 4: Create Database Table

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste the entire contents of `supabase/schema.sql`
4. Click "Run" (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"

## Step 5: Set Up Authentication (Optional but Recommended)

### Option A: Email/Password Authentication

1. Go to **Authentication** → **Providers** in Supabase dashboard
2. Enable "Email" provider (it's enabled by default)
3. Create your admin user:
   - Go to **Authentication** → **Users**
   - Click "Add user" → "Create new user"
   - Enter your email and password
   - Click "Create user"

### Option B: Magic Link (Passwordless)

1. Go to **Authentication** → **Providers**
2. Enable "Email" provider
3. Users can sign in with just their email (magic link sent to email)

## Step 6: Test the Setup

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/admin/login`
3. Log in with your credentials
4. You should see the blog management page

## Step 7: Create Your First Blog Post

1. After logging in, click "New Post"
2. Fill in the form:
   - Title
   - Excerpt
   - Content (Markdown supported)
   - Featured image URL
   - Tags
   - Published date
3. Check "Featured" if you want it on homepage
4. Click "Create Post"
5. Visit `/blog` to see your post!

## Troubleshooting

### "Invalid API key" error

- Double-check your `.env.local` file
- Make sure there are no extra spaces or quotes
- Restart your dev server after changing `.env.local`

### "relation 'blog_posts' does not exist"

- Make sure you ran the SQL schema in Step 4
- Check the SQL Editor for any errors

### Can't log in

- Make sure you created a user in Supabase dashboard
- Check that Email provider is enabled
- Try resetting your password

### Posts not showing

- Check browser console for errors
- Verify your Supabase URL and key are correct
- Check Supabase dashboard → Table Editor → blog_posts to see if data exists

## Next Steps

- **Image Upload**: Set up Supabase Storage for image uploads
- **Custom Domain**: Configure custom domain in Supabase settings
- **Backup**: Set up automatic backups in Supabase dashboard

## Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- The `anon` key is safe to use in client-side code
- For admin operations, consider using Row Level Security (RLS) policies
- Keep your database password secure

## Support

If you encounter issues:

1. Check Supabase logs: **Logs** → **Postgres Logs**
2. Check Next.js console for errors
3. Verify all environment variables are set correctly
