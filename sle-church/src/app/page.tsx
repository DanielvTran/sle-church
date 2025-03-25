"use client";

import { useEffect, useState } from "react";

// Components
import EventCard from "@/components/EventCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  type Event = {
    id: number;
    eventName: string;
    eventDate: Date;
    startTime: string;
    endTime: string;
    description: string;
    location: string;
    tags: string[];
  };

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/data/event/get-event");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  return (
    <main className="flex flex-col w-full items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Heading */}
      <div className="flex flex-col w-fit items-center my-20">
        <h1 className="text-5xl font-bold text-[#3b3b3b] xl:text-7xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-5xl">
          What&apos;s On
        </h1>
        <div className="border-2 my-5 border-primary w-1/2"></div>
      </div>

      {/* Our Picks */}
      {/* <div className="flex flex-row w-full justify-between items-center">
        <div>
          <h2>Our Picks</h2>
        </div>
        <div></div>
      </div> */}

      <Carousel>
        <CarouselContent>
          {events.map((event) => (
            <CarouselItem key={event.id} className="basis-1/3">
              <EventCard
                eventName={event.eventName}
                startTime={event.startTime}
                endTime={event.endTime}
                eventDate={event.eventDate}
                description={event.description}
                location={event.location}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
