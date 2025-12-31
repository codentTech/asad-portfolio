# Asad Abbas Portfolio

A world-class personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Supabase. Features a modern design, full blog system, and portfolio management with an admin panel.

## 🚀 Features

- **Modern Design**: Clean, premium UI with smooth animations and gradients
- **Blog System**: Full CRUD blog management powered by Supabase
- **Portfolio Management**: Dynamic portfolio projects with admin panel
- **SEO Optimized**: Full metadata, sitemap, robots.txt, and structured data
- **Performance**: Optimized images, lazy loading, and Core Web Vitals
- **Dark Mode**: Full dark mode support with smooth transitions
- **Responsive**: Mobile-first design that works on all devices
- **Admin Panel**: Secure admin interface for managing blog posts and portfolio projects
- **Authentication**: Secure login system with Supabase Auth

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Markdown**: React Markdown with syntax highlighting
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/              # Admin panel (blog & portfolio management)
│   │   ├── blog/           # Blog admin pages
│   │   ├── portfolio/      # Portfolio admin pages
│   │   └── login/          # Admin login
│   ├── api/                # API routes
│   │   ├── blog/           # Blog API endpoints
│   │   └── projects/       # Portfolio API endpoints
│   ├── blog/               # Public blog pages
│   ├── portfolio/          # Portfolio showcase pages
│   └── ...                 # Other pages (about, services, contact)
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── blog/               # Blog-specific components
├── lib/                    # Utility functions
│   └── supabase/           # Supabase client setup & helpers
├── data/                   # Static data (services, testimonials, etc.)
└── types/                  # TypeScript type definitions

supabase/
├── schema.sql              # Blog posts database schema
└── projects_schema.sql     # Portfolio projects database schema
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Supabase account ([Sign up for free](https://supabase.com))

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd asad-abbas-portfolio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Set up Supabase:**

   - Follow the detailed instructions in `SUPABASE_SETUP.md`
   - Run the SQL schemas from `supabase/schema.sql` and `supabase/projects_schema.sql` in your Supabase SQL Editor
   - Create an admin user in Supabase Authentication

5. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 📝 Admin Panel

### Accessing the Admin Panel

1. Navigate to `/admin/login`
2. Log in with your Supabase credentials
3. Manage blog posts and portfolio projects

### Features

- **Blog Management**: Create, edit, and delete blog posts
- **Portfolio Management**: Create, edit, and delete portfolio projects
- **Rich Text Editor**: Markdown support for blog content
- **Image Upload**: Support for featured images and project screenshots
- **SEO Fields**: Custom slugs, descriptions, and metadata

## 🎨 Customization

### Update Personal Information

1. **About Page**: Edit `src/data/about.ts`
2. **Services**: Edit `src/data/services.ts`
3. **Testimonials**: Edit `src/data/testimonials.ts`
4. **Metadata**: Update `src/app/layout.tsx` with your information

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme. The portfolio uses an indigo/purple gradient theme.

### Add New Pages

Create new routes in `src/app/` following the Next.js App Router structure.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy with one click

### Environment Variables for Production

Make sure to add these in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📚 Documentation

- **Supabase Setup**: See `SUPABASE_SETUP.md` for detailed database setup instructions
- **API Routes**: All API routes are in `src/app/api/`
- **Components**: Reusable components are in `src/components/ui/`

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Security

- Admin routes are protected by authentication
- Only logged-in users can access `/admin/*`
- Public pages are accessible to everyone
- API routes validate data before saving
- Row Level Security (RLS) can be configured in Supabase

## 🐛 Troubleshooting

**"Invalid API key"**

- Check `.env.local` file exists
- Verify no extra spaces in values
- Restart dev server after changes

**"relation 'blog_posts' does not exist"**

- Run the SQL schema in Supabase SQL Editor
- Check for errors in SQL Editor

**Can't log in**

- Verify user exists in Supabase → Authentication → Users
- Check Email provider is enabled

**Posts/Projects not showing**

- Check Supabase → Table Editor → blog_posts / projects
- Verify environment variables are correct
- Check browser console for errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Asad Abbas**

- Portfolio: [asadabbas.com](https://asadabbas.com)
- GitHub: [@asadabbas](https://github.com/asadabbas-dev)
- LinkedIn: [asadabbas](https://www.linkedin.com/in/asad-abbas-the-consultant/)

---

Built with ❤️ using Next.js, TypeScript, and Supabase
