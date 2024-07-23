import connect from "@/dbConfig/dbConfig";
import Appointments from "@/models/appointmentModels";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest, res) {
  await connect();
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    const searchBy = searchParams.get("searchBy");
    // console.log(searchBy);
    let filter = {};
    if (search) {
      filter = { fullName: search };
    }

    if (searchBy) {
      searchBy === "Prescribed"
        ? (filter = { approved: true })
        : (filter = { approved: false });
    }

    const patientsData = await Appointments.find(filter);

    if (patientsData.length === 0) {
      return NextResponse.json({
        message: "No matching patients found",
        patientsData,
      });
    }

    return NextResponse.json({ message: "success", patientsData });
  } catch (error) {
    console.log("user data does not get", error);
    return NextResponse.json({ error: "user data does not laodded", error });
  }
}

// update related api
export async function PUT(req) {
  await connect();
  try {
    const reqBody = await req.json();
    const { id, appointmentDate } = reqBody;

    const updatePatient = await Appointments.findByIdAndUpdate(id, {
      appointmentDate: appointmentDate,
      approved: true,
    });

    if (!updatePatient) {
      return NextResponse.status(404).json({ message: "Patient not found" });
    }

    return NextResponse.json({ messsage: "success", updatePatient });
  } catch (error) {
    return NextResponse.json({ message: "data not updated ", error });
  }
}

// delete related api
export async function DELETE(req = NextRequest) {
  await connect();
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const deletePatient = await Appointments.findByIdAndDelete(id);

    if (!deletePatient) {
      return NextResponse.json(
        { message: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Patient deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
