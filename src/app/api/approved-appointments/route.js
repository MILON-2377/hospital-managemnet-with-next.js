import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");

    const skip = (page - 1) * 10;
    const filter = {
      approved: true,
    };

    const total = await Appointments.countDocuments(filter);
    const appointments = await Appointments.find(filter).skip(skip).limit(10);

    return NextResponse.json({
      total,
      appointments,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
