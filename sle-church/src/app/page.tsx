"use client";

import { use, useEffect, useState } from "react";

// Components
import EventCard from "@/components/EventCard";

// Shadcn UI Components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Types
import { EventTabsTrigger, Event } from "@/lib/types";

// Global Constants
import { eventTypes } from "@/lib/constants";

export default function Home() {
  // Initialise
  const { toast } = useToast();

  // State to hold events data
  const [events, setEvents] = useState<Event[]>([]);
  const [availableTabs, setAvailableTabs] = useState<EventTabsTrigger[]>([]);
  const [activeTab, setActiveTab] = useState("ourpicks");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAvailableTabs() {
      try {
        // Fetch all tabs from the API
        const response = await fetch("/api/data/tag/get-tags");
        const tags: EventTabsTrigger[] = await response.json();

        // Notify if no events are found
        if (!tags) {
          console.error("No tag found");
          toast({
            description: "No tags found.",
          });

          return;
        }

        // Make tags available to the tabs for navigation and render
        setAvailableTabs(tags);

        // Set the default active tab to the first available tab
        if (tags.length > 0) {
          setActiveTab(tags[0].value);
        }
      } catch (error) {
        console.error("Error fetching available event types:", error);
      }
    }

    fetchAvailableTabs();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`/api/data/event/get-events?active_tab=${activeTab}`);
        const data = await response.json();

        console.log("Fetched events:", data);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [activeTab]);

  // if (loading) return <p>Loading events...</p>;
  return (
    <main className="flex flex-col w-3/4 items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Heading */}
      <div className="flex flex-col w-fit items-center my-20">
        <h1 className="text-5xl font-bold text-[#3b3b3b] xl:text-7xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-4xl">
          What&apos;s On
        </h1>
        <div className="border-2 mt-5 border-primary w-1/2"></div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="ourpicks" className="w-full">
        {/* Tabs Navigation Buttons */}
        <TabsList className="flex justify-center items-center gap-20 bg-white w-full">
          {availableTabs.map((types) => (
            <TabsTrigger
              key={types.value}
              value={types.value}
              className="data-[state=active]:bg-white data-[state=active]:text-[#A3D43D] data-[state=active]:shadow-none rounded-none data-[state=active]:border-t-2 data-[state=active]:border-[#A3D43D] transition 3xl:text-2xl 3xl:py-2 px-4"
            >
              {types.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs Content Containers */}
        <TabsContent value="ourpicks">
          <Carousel>
            <div className="flex flex-col items-center w-full">
              {/* Our Picks Heading */}
              <p className="OurPicksHeading text-center text-[#3b3b3b] font-bold text-xs 3xl:my-16 3xl:text-lg 3xl:w-3/4">
                Whether you're new or regular at our church, there's something for you this season. Explore, get
                connected, and grow with our community in likeness of Christ.
              </p>
              <CarouselContent>
                <CarouselItem key={1} className="basis-1/4">
                  <EventCard
                    eventName={"test"}
                    startTime={"09:30"}
                    endTime={"13:00"}
                    eventDate={new Date("2025-04-02 16:15:29.670")}
                    description={"Test"}
                    location={"SLE Church"}
                  />
                </CarouselItem>
                <CarouselItem key={1} className="basis-1/4">
                  <EventCard
                    eventName={"test"}
                    startTime={"09:30"}
                    endTime={"13:00"}
                    eventDate={new Date("2025-04-02 16:15:29.670")}
                    description={"Test"}
                    location={"SLE Church"}
                  />
                </CarouselItem>
                <CarouselItem key={1} className="basis-1/4">
                  <EventCard
                    eventName={"test"}
                    startTime={"09:30"}
                    endTime={"13:00"}
                    eventDate={new Date("2025-04-02 16:15:29.670")}
                    description={"Test"}
                    location={"SLE Church"}
                  />
                </CarouselItem>
                <CarouselItem key={1} className="basis-1/4">
                  <EventCard
                    eventName={"test"}
                    startTime={"09:30"}
                    endTime={"13:00"}
                    eventDate={new Date("2025-04-02 16:15:29.670")}
                    description={"Test"}
                    location={"SLE Church"}
                  />
                </CarouselItem>
              </CarouselContent>
            </div>

            {/* Carousel Navigation */}
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="connect">Connect Content</TabsContent>
        <TabsContent value="worship">Worship Content</TabsContent>
        <TabsContent value="explore">Explore Content</TabsContent>
      </Tabs>

      <Carousel>
        <CarouselContent>
          {/* {events.map((event) => (
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
          ))} */}
        </CarouselContent>
      </Carousel>
    </main>
  );
}
