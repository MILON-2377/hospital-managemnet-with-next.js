import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  console.log("middleware is working");

  const token = req.cookies.get("token")?.value || null;

  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard", "/dashboard/[id]"],
};
