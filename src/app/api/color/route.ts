import { PrismaClient } from '@prisma/client';
import { NextRequest,NextResponse } from "next/server";

export async function GET(){
  const prisma = new PrismaClient();
  const colors = await prisma.colors.findMany();
  return NextResponse.json(colors)
}


