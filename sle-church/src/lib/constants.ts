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
