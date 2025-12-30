import { NextRequest, NextResponse } from "next/server";
import { createApiClient } from "@/lib/supabase/api";
import { generateSlug } from "@/lib/utils";

// GET - Fetch single service
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createApiClient();

    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ service: data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch service" },
      { status: 500 }
    );
  }
}

// PUT - Update service
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Check if slug already exists (excluding current service)
    const { data: existing } = await supabase
      .from("services")
      .select("id")
      .eq("slug", slug)
      .neq("id", params.id)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "A service with this slug already exists" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("services")
      .update({
        title,
        slug,
        description,
        icon,
        features: features || [],
        content: content || null,
        image: image || null,
        featured: featured || false,
        updated_at: new Date().toISOString(),
      })
      .eq("id", params.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ service: data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update service" },
      { status: 500 }
    );
  }
}

// DELETE - Delete service
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createApiClient();

    const { error } = await supabase
      .from("services")
      .delete()
      .eq("id", params.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete service" },
      { status: 500 }
    );
  }
}

