import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const newDocument = new Appointments(reqBody);
    const saveDocument = await newDocument.save();

    return NextResponse.json({ message: "success", saveDocument });
  } catch (error) {
    
    return NextResponse.json({ message: error.message });
  }
}
