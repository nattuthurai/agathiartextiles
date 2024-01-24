import { PrismaClient } from '@prisma/client';
import { NextRequest,NextResponse } from "next/server";

export async function GET(){
  const prisma = new PrismaClient();
  const yarns = await prisma.yarns.findMany();
  return NextResponse.json(yarns)
}


