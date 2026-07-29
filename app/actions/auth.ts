"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;
  const fullName = formData.get("fullName") as string;
  const city = formData.get("city") as string;

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username, full_name: fullName, city },
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}
