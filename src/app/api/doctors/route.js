import connect from "@/dbConfig/dbConfig";
import Doctors from "@/models/doctor/doctorInfo";
import { NextResponse } from "next/server";

// mongodb connection
connect();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");

    const skip = (page - 1) * 10;

    const total = await Doctors.countDocuments();

    const doctors = await Doctors.find().skip(skip).limit(10);

    return NextResponse.json({ total, doctors });
  } catch (error) {
    console.log("hello errror",error.message);
    return NextResponse.json({ message: error.message });
  }
}
