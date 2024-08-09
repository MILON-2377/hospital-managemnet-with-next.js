import connect from "@/dbConfig/dbConfig";
import Users from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

// mongodb connection
connect();

// user data store in the database post api
export async function POST(request = NextRequest) {
  try {
    const reqBody = await request.json();

    const newUser = new Users(reqBody);
    const saveUser = await newUser.save();

    return NextResponse.json({
      message: "user created successfully",
      saveUser,
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "user does not created", error });
  }
}

// user data get api
export async function GET(req) {
  await connect();

  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const userData = await Users.findOne({ email });

    return NextResponse.json({ message: "success", userData });
  } catch (error) {
    console.log("user data does not get", error);
    return NextResponse.json({ error: "user data does not laodded", error });
  }
}
