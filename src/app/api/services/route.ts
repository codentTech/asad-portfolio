import { NextRequest, NextResponse } from "next/server";
import { createApiClient } from "@/lib/supabase/api";
import { generateSlug } from "@/lib/utils";

// GET - Fetch all services
export async function GET() {
  try {
    const supabase = createApiClient();

    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ services: data || [] });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

// POST - Create new service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, icon, features, content, image, featured } = body;

    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: "Title, description, and icon are required" },
        { status: 400 }
      );
    }

    const supabase = createApiClient();
    const slug = body.slug || generateSlug(title);

    // Check if slug already exists
    const { data: existing } = await supabase
      .from("services")
      .select("id")
      .eq("slug", slug)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "A service with this slug already exists" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("services")
      .insert({
        title,
        slug,
        description,
        icon,
        features: features || [],
        content: content || null,
        image: image || null,
        featured: featured || false,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ service: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}

