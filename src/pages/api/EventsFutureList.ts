// src/pages/api/EventsFutureList.ts 

import type { APIRoute } from "astro";
import { supabase } from '../../lib/supabase';
console.log(supabase) 
export const GET: APIRoute = async () => {
  console.log("API EventsFutureList exécutée")
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .gte("date", new Date().toISOString())
    .order("date", { ascending: true })
    .order("start_time", { ascending: true })

  if (error) {
    console.error("Error fetching upcoming events:", error);
    return ["Error fetching upcoming events: " + error.message];
  }

  console.log("reponse :" + data); // Debug


  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });

}
