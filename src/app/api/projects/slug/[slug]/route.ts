import { NextRequest, NextResponse } from "next/server";
import { createApiClient } from "@/lib/supabase/api";

// GET - Fetch project by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const supabase = createApiClient();

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", params.slug)
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
