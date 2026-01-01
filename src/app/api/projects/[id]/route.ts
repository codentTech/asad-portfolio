import { NextRequest, NextResponse } from "next/server";
import { createApiClient } from "@/lib/supabase/api";
import { generateSlug } from "@/lib/utils";

// GET - Fetch single project
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createApiClient();

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ project: data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

// PUT - Update project
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { 
      title, 
      description, 
      longDescription, 
      image, 
      gallery,
      video,
      techStack, 
      liveUrl, 
      githubUrl, 
      problem, 
      solution, 
      result, 
      featured, 
      slug 
    } = body;

    if (!title || !description || !longDescription || !image || !problem || !solution || !result) {
      return NextResponse.json(
        { error: "Title, description, longDescription, image, problem, solution, and result are required" },
        { status: 400 }
      );
    }

    const supabase = createApiClient();

    const updateData: any = {
      title,
      description,
      long_description: longDescription,
      image,
      gallery: gallery || [],
      video: video || null,
      tech_stack: techStack || [],
      live_url: liveUrl || null,
      github_url: githubUrl || null,
      problem,
      solution,
      result,
      featured: featured || false,
    };

    // Only update slug if provided and different
    if (slug) {
      // Check if new slug conflicts with another project
      const { data: existing } = await supabase
        .from("projects")
        .select("id")
        .eq("slug", slug)
        .neq("id", params.id)
        .single();

      if (existing) {
        return NextResponse.json(
          { error: "A project with this slug already exists" },
          { status: 400 }
        );
      }
      updateData.slug = slug;
    }

    const { data, error } = await supabase
      .from("projects")
      .update(updateData)
      .eq("id", params.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ project: data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE - Delete project
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createApiClient();

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", params.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
