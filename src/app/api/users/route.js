import connect from "@/dbConfig/dbConfig";
import { tokenVerification } from "@/lib/tokenVerification";
import PatientInformation from "@/models/patientInfoModels";
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

  const tokenValidation = tokenVerification(req);

  if (!tokenValidation.isValid) return tokenValidation;

  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const userData = await Users.findOne({ email });

    const profession = userData?.profession;

    const patientInfo =
      profession === "Patient"
        ? await PatientInformation.find({ patientId: email })
        : false;

    return NextResponse.json({ message: "success", userData, patientInfo });
  } catch (error) {
    return NextResponse.json({ error: "user data does not laodded", error });
  }
}
