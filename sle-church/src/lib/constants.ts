import { EventTabsTrigger } from "./types";

/**
 * A record of all available event types.
 * Each key corresponds to a specific event category with its value and display name.
 * This is used for events categorization and display in the application.
 */
export const eventTypes: EventTabsTrigger[] = [
  { value: "ourpicks", name: "Our Picks" },
  { value: "connect", name: "Connect" },
  { value: "worship", name: "Worship" },
  { value: "explore", name: "Explore" },
  { value: "grow", name: "Grow" },
  { value: "serve", name: "Serve" },
] as const;

/**
 * A record mapping each event tab to its corresponding description.
 *
 * Each key represents a tab identifier (e.g., 'ourpicks', 'connect'),
 * and the value holds a description that provides context about that tab.
 *
 * Used to dynamically display descriptions for event categories throughout the application.
 */
export const tabDescriptions: Record<string, { description: string }> = {
  ourpicks: {
    description:
      "Whether you're new or regular at our church, there's something for you this season. Explore, get connected, and grow with our community in likeness of Christ",
  },
  connect: { description: "Connect with our church and people!" },
  worship: { description: "Come together as we worship God as a church" },
  explore: { description: "Explore who Jesus is and what he came to do" },
  grow: { description: "Learn more about God and His Word in becoming like Jesus" },
  serve: { description: "Opportunities to serve the church and God's Kingdom" },
} as const;
