import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")|| null;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Doctor routes
    "/Dashboard/doctor-dashboard",
    "/request",
    "/appointments/doctor",
    "/available-timings",
    "/profile-edit/doctor",
    "/changed-password/doctor",

    // Patient routes
    "/Dashboard/patient-dashboard",
    "/appointments/patient",
    "/book-appointments",
    "/invoice",
    "/profile-edit/patient",
    "/changed-password/patient",
    "/patient-form-page",
  ],
};
