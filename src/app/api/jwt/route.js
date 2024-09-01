import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function POST(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const MAX_AGE = email ? 60 * 60 * 24 * 30 : -1;

    const token = jwt.sign({ email }, process.env.NEXT_PUBLIC_secret_key, {
      expiresIn: MAX_AGE,
    });

    const jwtResponse = NextResponse.json({ success: true });

    jwtResponse.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: MAX_AGE,
    });

    return jwtResponse;
  } catch (error) {
    console.log("jwt error", error);
    return NextResponse.json({ error: "jwt error", error });
  }
}
