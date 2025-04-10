import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prismaClient";

/**
 * API Route - GET /api/data/event/get-events
 *
 * Fetches a group of events based on active tab from the database.
 *
 * @param {Request} request - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} A JSON response containing event data or an error message.
 */
export async function GET(request: Request) {
  try {
    // Extract query parameters from the URL
    const url = new URL(request.url);
    const activeTab = url.searchParams.get("active_tab"); // Has to be active_tab matches the query parameter in the request URL

    if (!activeTab) {
      return NextResponse.json({ error: "Tab parameter is required" }, { status: 400 });
    }

    // Query the database for events that have a tag matching activeTab
    const events = await prisma.event.findMany({
      where: {
        eventTags: {
          some: {
            tag: {
              value: activeTab, // Match the tag's value
            },
          },
        },
      },
      select: {
        id: true,
        eventName: true,
        eventDate: true,
        startTime: true,
        endTime: true,
        description: true,
        location: true,
        eventTags: {
          select: {
            tag: {
              select: {
                id: true,
                value: true,
                name: true,
              },
            },
          },
        },
      },
    });

    // Respond with the filtered events
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
