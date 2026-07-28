import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Kullanıcının oturumunu kontrol et
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Admin paneli için oturum kontrolü
  if (request.nextUrl.pathname.startsWith("/xloginpanel")) {
    if (!user) {
      // Giriş yapmamış kullanıcıyı giriş sayfasına yönlendir
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("redirect", "/xloginpanel");
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
