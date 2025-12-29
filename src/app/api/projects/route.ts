import { NextRequest, NextResponse } from "next/server";
import { createApiClient } from "@/lib/supabase/api";
import { generateSlug } from "@/lib/utils";

// GET - Fetch all projects
export async function GET() {
  try {
    const supabase = createApiClient();

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ projects: data || [] });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST - Create new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      title, 
      description, 
      longDescription, 
      image, 
      images, 
      video,
      techStack, 
      liveUrl, 
      githubUrl, 
      problem, 
      solution, 
      result, 
      featured 
    } = body;

    if (!title || !description || !longDescription || !image || !problem || !solution || !result) {
      return NextResponse.json(
        { error: "Title, description, longDescription, image, problem, solution, and result are required" },
        { status: 400 }
      );
    }

    const supabase = createApiClient();
    const slug = body.slug || generateSlug(title);

    // Check if slug already exists
    const { data: existing } = await supabase
      .from("projects")
      .select("id")
      .eq("slug", slug)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "A project with this slug already exists" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("projects")
      .insert({
        title,
        slug,
        description,
        long_description: longDescription,
        image,
        images: images || [],
        video: video || null,
        tech_stack: techStack || [],
        live_url: liveUrl || null,
        github_url: githubUrl || null,
        problem,
        solution,
        result,
        featured: featured || false,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ project: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
