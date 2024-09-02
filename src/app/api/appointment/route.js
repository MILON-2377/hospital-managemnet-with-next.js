import connect from "@/dbConfig/dbConfig";
import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

// mongodb connnection
connect();

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page'), 10) || 1;

    const skip = (page - 1) * 10;
    const filter = {
      approved: false,
      rejected: false,
    };
    

    const total = await Appointments.countDocuments(filter);
    const appointments = await Appointments.find(filter).skip(skip).limit(10);

    // handle total pending appointments
    const data = await Appointments.find();
    const totalPendingAppointments = data.filter((item) => item.approved);
    const approvedAppointment = total - totalPendingAppointments.length;

    return NextResponse.json({
      total,
      appointments,
      totalPendingAppointments: totalPendingAppointments.length,
      approvedAppointment,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
