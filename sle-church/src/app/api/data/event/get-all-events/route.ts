import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prismaClient";

/**
 * API Route - GET /api/data/event/get-all-events
 *
 * Fetches a list of all events from the database.
 *
 * @param {Request} request - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} A JSON response containing event data or an error message.
 */
export async function GET(request: Request) {
  try {
    // Query the database for events
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

    // Respond with the retrieved events
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error(error);
    // Respond with an error if something goes wrong
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
