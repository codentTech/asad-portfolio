import { createClient } from "@supabase/supabase-js";

// Simple client for API routes (no cookies needed)
export function createApiClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
