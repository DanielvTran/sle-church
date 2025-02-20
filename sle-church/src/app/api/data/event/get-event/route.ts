import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prismaClient";

export async function GET() {
  try {
    // Fetch budget
    const events = await prisma.event.findMany({
      select: {
        id: true,
        title: true,
      },
    });

    // Return categories data
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
