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
