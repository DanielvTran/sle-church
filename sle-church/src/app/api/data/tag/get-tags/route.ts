import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prismaClient";

/**
 * API Route - GET /api/data/tag/get-tags
 *
 * Fetches a list of unique tags attached to at least one event.
 *
 * @returns {Promise<NextResponse>} A JSON response containing unique tag data or an error message.
 */
export async function GET() {
  try {
    // Fetch only tags that are linked to at least one event
    const tags = await prisma.tag.findMany({
      where: {
        eventTags: {
          some: {}, // This means "at least one EventTag exists"
        },
      },
      select: {
        id: true,
        value: true,
        name: true,
      },
    });

    if (!tags || tags.length === 0) {
      return NextResponse.json({ error: "No tags found" }, { status: 404 });
    }

    return NextResponse.json(tags, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
