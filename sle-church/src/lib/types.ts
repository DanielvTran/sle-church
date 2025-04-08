/**
 * Represents an event type with a machine-readable value and a human-readable name.
 */
export type EventTabsTrigger = {
  value: string /** The internal value of the event type (used in logic, URLs, etc.) */;
  name: string /** The display name of the event type (shown to users) */;
};

/**
 * Represents an event fetched from the database.
 * Mirrors the structure of the "Event" model in the database schema.
 */
export type Event = {
  id: number;
  eventName: string;
  eventDate: Date;
  startTime: string;
  endTime: string;
  description: string;
  location: string;
  tags: string;
};
