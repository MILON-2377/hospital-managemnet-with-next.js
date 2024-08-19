import connect from "@/dbConfig/dbConfig";
import PatientInformation from "@/models/patientInfoModels";
import { NextResponse } from "next/server";


// mongodb connection
connect();

export async function POST(req) {
    try {

        const reqBody = await req.json();

        // console.log(reqBody);

        const newDocument = new PatientInformation(reqBody);
        const saveDocument = await newDocument.save();

        return NextResponse.json({message:"success", saveDocument});
        
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({message:error.message});
    }
}