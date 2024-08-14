import connect from "@/dbConfig/dbConfig";
import Appointments from "@/models/appointmentModels";
import { NextResponse } from "next/server";

// mongodb connection
connect();

export async function DELETE(req) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    const deleteDocument = await Appointments.deleteOne({ _id: id });

    return NextResponse.json({ message: "success", deleteDocument });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}

// update appointment data
export async function PUT(req) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    const reqBody = await req.json();

    const updateData = {
      $set: reqBody,
    };

    // Perform the update operation
    const updateDocument = await Appointments.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true, upsert: true }
    );

    return NextResponse.json({
      message: "success",
      updatedDocument: updateDocument,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
