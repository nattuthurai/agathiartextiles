import { PrismaClient } from '@prisma/client';
import { NextRequest,NextResponse } from "next/server";

export async function POST(request:NextRequest){

    const prisma = new PrismaClient();
    const body = await request.json();
    const {name,emailid,mobileno,address,date} = body;

    const isNameExists = await prisma.users.findFirst({ where: { name: name } });

    if(isNameExists){
        return NextResponse.json({error: "Name already exists"}, {status: 401})
    }

     const newNamerDetails = await prisma.users.create({
        data: {
            name: name,
            emailid:emailid,
            mobileno:mobileno,
            address: address,
            date: date,
        },
     })
    return NextResponse.json({output: "Name added successfully!"}, {status: 200})

}