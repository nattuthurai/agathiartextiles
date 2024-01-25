import { PrismaClient } from '@prisma/client';
import { NextRequest,NextResponse } from "next/server";

export async function POST(request:NextRequest){

    const prisma = new PrismaClient();
    const body = await request.json();
    const {name,date} = body;

    const isNameExists = await prisma.colors.findFirst({ where: { name: name } });

    if(isNameExists){
        return NextResponse.json({error: "Color already exists"}, {status: 401})
    }

     const newNamerDetails = await prisma.colors.create({
        data: {
            name: name,
            date: date,
        },
     })
    return NextResponse.json({output: "Color added successfully!"}, {status: 200})

}