import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function POST(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (email !== "false") {
        console.log(email === "false");
      const token = jwt.sign({ email }, process.env.NEXT_PUBLIC_secret_key, {
        expiresIn: "1h",
      });

      const jwtResponse = NextResponse.json({ success: true });

      jwtResponse.cookies.set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: true,
      });

      return jwtResponse;
    } else {

        console.log("token remove ")

      const jwtRes = NextResponse.json({ success: "token remove from the cookies" });

      jwtRes.cookies.delete("token", {
        httpOnly: true,
        secure: true,
        sameSite: true,
      });

      return jwtRes;
    }
  } catch (error) {
    console.log("jwt error", error);
    return NextResponse.json({ error: "jwt error", error });
  }
}
