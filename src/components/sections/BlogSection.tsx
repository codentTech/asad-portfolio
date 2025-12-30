import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getFeaturedBlogPosts } from "@/lib/supabase/blog";
import BlogClient from "./BlogClient";

export default async function BlogSection() {
  const featuredBlogs = await getFeaturedBlogPosts();

  if (featuredBlogs.length === 0) {
    return null;
  }

  return <BlogClient blogs={featuredBlogs} />;
}
