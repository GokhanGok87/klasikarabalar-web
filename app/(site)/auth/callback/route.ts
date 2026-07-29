import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// GET - Supabase email confirmation ve password reset callback'leri buraya gelir
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const type = requestUrl.searchParams.get("type");

  if (code) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return []; },
          setAll() {},
        },
      }
    );

    await supabase.auth.exchangeCodeForSession(code);
  }

  // Password reset sonrası şifre değiştirme sayfasına yönlendir
  if (type === "recovery") {
    return NextResponse.redirect(
      new URL("/sifremi-unuttum?step=new-password", requestUrl.origin)
    );
  }

  // Email confirmation sonrası login sayfasına yönlendir
  return NextResponse.redirect(
    new URL("/login?confirmed=true", requestUrl.origin)
  );
}
