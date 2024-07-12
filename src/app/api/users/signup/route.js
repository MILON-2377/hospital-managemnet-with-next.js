import connect from "@/dbConfig/dbConfig";
import Users from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request=NextRequest){
    await connect();
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        // const {userName, email, proffession, isAdmin} = reqBody;

        // const newUser = new Users({userName,email,proffession,isAdmin});
        // const saveUser = await newUser.save();

        return NextResponse.json({message:"user created successfully"});

    } catch (error) {
        console.error("Error",error);
        return NextResponse.json({error:"user does not created", error});
    }
}