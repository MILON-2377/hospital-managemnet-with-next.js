import connect from "@/dbConfig/dbConfig";
import Appointments from "@/models/appointmentModels";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req = NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();
    const {
      fullName,
      dateOfBirth,
      Doctors,
      reason,
      appointmentMethod,
      email,
      appointmentDate,
    } = reqBody;
    const newAppointment = new Appointments({
      fullName,
      dateOfBirth,
      reason,
      appointmentMethod,
      Doctors,
      email,
      appointmentDate,
    });

    const saveAppointment = await newAppointment.save();
    return NextResponse.json({
      message: "appointments data created successfully",
      saveAppointment,
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "user does not created", error });
  }
}

// appointments data loadin
export async function GET(req) {
  await connect();
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const data = await Appointments.find({ email });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: "data not found" });
  }
}
