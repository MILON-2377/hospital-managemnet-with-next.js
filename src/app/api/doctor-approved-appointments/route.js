// pages/api/appointments.js
import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");
    const page = parseInt(url.searchParams.get("page"), 10) || 1;
    const search = url.searchParams.get("search");

    const skip = (page - 1) * 10;

    const filter = { approved: true, "doctor.id": email };

    if (search) {
      filter["patient.name"] = { $regex: search, $options: "i" }; // Case-insensitive search
    }

    const total = await Appointments.countDocuments(filter);
    const appointments = await Appointments.find(filter).skip(skip).limit(10);

    return NextResponse.json({ appointments, total });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
