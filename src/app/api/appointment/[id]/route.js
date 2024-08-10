import connect from "@/dbConfig/dbConfig";
import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

// mongodb connection
connect();

export async function DELETE(req) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    const deleteDocument = await Appointments.deleteOne({_id: id});

    return NextResponse.json({message:"success", deleteDocument});
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}


// update appointment data
export async function PUT(req) {
  try {
    
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({message:error.message});
  }
}
