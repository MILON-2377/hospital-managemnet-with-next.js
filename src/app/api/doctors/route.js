import connect from "@/dbConfig/dbConfig";
import Doctors from "@/models/doctor/doctorInfo";
import { NextResponse } from "next/server";

// mongodb connection
connect();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const search = searchParams.get("search");


    const skip = (page - 1) * 10;
    const filter = {};

    if(search){
      filter["$text"] = {$search: search};
    }

    const total = await Doctors.countDocuments(filter);

    const doctors = await Doctors.find(filter).skip(skip).limit(10);

    return NextResponse.json({ total, doctors });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
