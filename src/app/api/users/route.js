import verifyToken from "@/authMiddleware/authMiddleware";
import connect from "@/dbConfig/dbConfig";
import Users from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";


// user data store in the database post api
export async function POST(request=NextRequest){
    await connect();
    try {
        const reqBody = await request.json();
        
        const {userName, email, profession, isAdmin} = reqBody;

        // console.log(profession);

        const newUser = new Users({userName,email,profession,isAdmin});
        const saveUser = await newUser.save();

        return NextResponse.json({message:"appointment created successfully",saveUser});

    } catch (error) {
        console.error("Error",error);
        return NextResponse.json({error:"appointment does not created", error});
    }
}

// user data get api
export async function GET(req){
    await connect();


    try {
        const {searchParams} = new URL(req.url);
        const email = searchParams.get("email");

        const userData = await Users.findOne({email});

        return NextResponse.json({message:"success", userData});

    } catch (error) {
        console.log("user data does not get", error);
        return NextResponse.json({error:"user data does not laodded", error});
    }
}


