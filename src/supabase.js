import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eyrygcsxvhmsfdxqtcqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5cnlnY3N4dmhtc2ZkeHF0Y3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMDg0MTQsImV4cCI6MjAzNDg4NDQxNH0.p7SRkddQ0Nq3ASo7rMai4fYFd2t27BQO8ZDVUUqfxlg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
