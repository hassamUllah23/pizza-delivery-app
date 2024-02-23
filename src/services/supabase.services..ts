import { createClient } from "@supabase/supabase-js";
// import type { SupabaseClientOptions } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "@env";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {});

export { supabase };
