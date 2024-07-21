import connect from "@/dbConfig/dbConfig";
import Appointments from "@/models/appointmentModels";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req=NextRequest){
    await connect();
    try {
        const reqBody = await req.json();
        const newAppointment = new Appointments({...reqBody});

        const saveAppointment = await newAppointment.save();
        return NextResponse.json({message:"appointments data created successfully", saveAppointment});
    
        
    } catch (error) {
        console.error("Error",error);
        return NextResponse.json({error:"user does not created", error});
    }
}