import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");

    const skip = (page - 1) * 10;
    const filter = {};

    const total = await Appointments.countDocuments(filter);
    const appointments = await Appointments.find(filter).skip(skip).limit(10);

    // handle total pending appointments
    const data = await Appointments.find();
    const totalPendingAppointments = data.filter(item => item.approved);
    const approvedAppointment = total - totalPendingAppointments.length;

    return NextResponse.json({total,appointments,totalPendingAppointments:totalPendingAppointments.length, approvedAppointment});
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
