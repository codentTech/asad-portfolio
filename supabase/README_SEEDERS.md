# Portfolio Seeders

This directory contains SQL seeders for adding portfolio projects to the database.

## PropertyAxis Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_propertyaxis.sql`
4. Run the query
5. The project will be added to your portfolio

### Option 2: TypeScript Script

If you prefer running via command line:

```bash
# Make sure you have tsx installed (or use ts-node)
npx tsx scripts/seed-propertyaxis.ts
```

## OGOW Health Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_ogow.sql`
4. Run the query
5. The project will be added to your portfolio

### Option 2: TypeScript Script

If you prefer running via command line:

```bash
# Make sure you have tsx installed (or use ts-node)
npx tsx scripts/seed-ogow.ts
```

## Quick Steps Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_quicksteps.sql`
4. Run the query
5. The project will be added to your portfolio

### Option 2: TypeScript Script

If you prefer running via command line:

```bash
# Make sure you have tsx installed (or use ts-node)
npx tsx scripts/seed-quicksteps.ts
```

## Bio Tail Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_biotail.sql`
4. Run the query
5. The project will be added to your portfolio

### Option 2: TypeScript Script

If you prefer running via command line:

```bash
# Make sure you have tsx installed (or use ts-node)
npx tsx scripts/seed-biotail.ts
```

## Health Sure Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_healthsure.sql`
4. Run the query
5. The project will be added to your portfolio

### Option 2: TypeScript Script

If you prefer running via command line:

```bash
# Make sure you have tsx installed (or use ts-node)
npx tsx scripts/seed-healthsure.ts
```

## Travel Expert Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_travelexpert.sql`
4. Run the query
5. The project will be added to your portfolio

### Option 2: TypeScript Script

If you prefer running via command line:

```bash
# Make sure you have tsx installed (or use ts-node)
npx tsx scripts/seed-travelexpert.ts
```

## MY PSYCHIATRIST Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_mypsychiatrist.sql`
4. Run the query
5. The project will be added to your portfolio

### Option 2: TypeScript Script

If you prefer running via command line:

```bash
# Make sure you have tsx installed (or use ts-node)
npx tsx scripts/seed-mypsychiatrist.ts
```

## WORK HIVE Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_workhive.sql`
4. Run the query
5. The project will be added to your portfolio

### Option 2: TypeScript Script

If you prefer running via command line:

```bash
# Make sure you have tsx installed (or use ts-node)
npx tsx scripts/seed-workhive.ts
```

## Customizing the Image

The seeders use placeholder image URLs. Before running, you may want to:
1. Upload your project images to a hosting service (e.g., Supabase Storage, Cloudinary, etc.)
2. Update the `image` field in the seeder with your actual image URL

## Services Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_services.sql`
4. Run the query
5. All 6 services will be added to your services table

This seeder adds the following services:
- AI-Powered Application Development
- Intelligent Automation & Workflow Optimization
- Backend & API Engineering
- Full-Stack Application Development
- AI Integration for Existing Products
- Technical Consulting & Architecture

## Blog Posts Seeder

### Option 1: SQL Script (Recommended)

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `seed_blogs.sql`
4. Run the query
5. All 6 blog posts will be added to your blog_posts table

This seeder adds blog posts related to portfolio projects:
- Building AI-Driven Real Estate Platforms: Lessons from PropertyAxis
- Revolutionizing Healthcare Access: Building OGOW Health for Underserved Communities
- Building Comprehensive SaaS Platforms: The WORK HIVE Story
- Building HIPAA-Compliant Telepsychiatry Platforms: MY PSYCHIATRIST Case Study
- Connecting Travelers and Agents: Building Travel-Expert Platform
- Building Specialized E-Commerce Platforms: The Bio Tail Experience

## Adding More Projects

To add more projects, you can:
1. Create similar SQL files following the same structure
2. Use the admin panel at `/admin/portfolio/new` for easier management
3. Copy the structure from existing seeders and modify the values
