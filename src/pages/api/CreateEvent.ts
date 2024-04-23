import type { APIRoute } from "astro";
import { supabase } from '../../lib/supabase';



export const POST: APIRoute = async ({ request, cookies, redirect }) => {

  const formData = await request.formData();
  const event_title = formData.get('event_title')?.toString();
  const date = formData.get('date')?.toString() || null;
  const start_time = formData.get('start_time')?.toString() ;
  const end_time = formData.get('end_time')?.toString();
  const categories = formData.getAll('categories[]');
  const confirmed = formData.get('confirmed') || false;  // unstring test
  const published = formData.get('published') || false;
  const description = formData.get('description')?.toString();
  const image = formData.get('image')?.toString() || '';

  const { error } = await supabase
      .from('events')
      
      .insert([{
        event_title,
        date,
        start_time,
        end_time,
        categories,
        confirmed,
        published,
        description,
        image
      }]);

    if (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    };

    return new Response(JSON.stringify({ redirectTo: "/dashboard" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } 
