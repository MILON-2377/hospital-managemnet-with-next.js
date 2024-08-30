import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    const search = searchParams.get("search");

    const skip = (page - 1) * 10;
    console.log(search);

    // Construct the filter object dynamically
    const filter = { approved: true, "doctor.id": email };

    if (search) {
      filter["patient.name"] = { $regex: search, $options: "i" }; // Case-insensitive search
    }

    const total = await Appointments.countDocuments(filter);
    const appointments = await Appointments.find(filter).skip(skip).limit(10);

    return NextResponse.json({ appointments, total });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
