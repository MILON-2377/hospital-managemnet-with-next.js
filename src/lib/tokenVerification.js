import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const secretKey = process.env.NEXT_PUBLIC_secret_key;

export function tokenVerification(req) {
  const token = req.cookies.get("token").value;

  const authHeader = req.headers.get('Authroization');

//   console.log("token", authHeader);

  if (!token) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    return { isValid: true, user: decoded };
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
