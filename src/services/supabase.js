import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ibzicsyezkrfbezvdmsh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imliemljc3llemtyZmJlenZkbXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMDIzMTQsImV4cCI6MjA3MTY3ODMxNH0.avaJhjkgK6_PW9QHkJ-MeVcUTOx8SRtLKGiv6pfiVgE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
