import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prismaClient";

export async function GET() {
  try {
    // Fetch events
    const events = await prisma.event.findMany({
      select: {
        id: true,
        eventName: true,
        eventDate: true,
        startTime: true,
        endTime: true,
        description: true,
        location: true,
        tags: true,
      },
    });

    console.log(events);

    // Return events data
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
