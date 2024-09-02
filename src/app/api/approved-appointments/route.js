import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page'), 10) || 1;
    const filterName = searchParams.get("filter");

    const skip = (page - 1) * 10;
    const filter = {
      approved: filterName,
    };



    // pending appointments total
    const pendings = await Appointments.countDocuments({
      approved: false,
    });
    const approveds = await Appointments.countDocuments({
      approved: true,
    });

    const total = await Appointments.countDocuments();
    const appointments = await Appointments.find(filter).skip(skip).limit(10);

    return NextResponse.json({
      total,
      appointments,
      pendings,
      approveds
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
