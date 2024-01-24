import { PrismaClient } from '@prisma/client';
import { NextRequest,NextResponse } from "next/server";

export async function POST(request:NextRequest){

    const prisma = new PrismaClient();
    const body = await request.json();
    const {name,address,date} = body;

    const isNameExists = await prisma.yarns.findFirst({ where: { name: name } });

    if(isNameExists){
        return NextResponse.json({error: "Name already exists"}, {status: 401})
    }

     const newNamerDetails = await prisma.yarns.create({
        data: {
            name: name,
            address: address,
            date: date,
        },
     })
    return NextResponse.json({output: "Name added successfully!"}, {status: 200})

}