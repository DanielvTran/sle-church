"use client";

import { useEffect, useState } from "react";

// Components
import CarouselContainer from "@/components/CarouselContainer";

// Shadcn UI Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Types
import { EventTabsTrigger, Event } from "@/lib/types";

export default function Home() {
  // Initialise
  const { toast } = useToast();

  // State to hold events data
  const [events, setEvents] = useState<Event[]>([]);
  const [availableTabs, setAvailableTabs] = useState<EventTabsTrigger[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAvailableTabs() {
      try {
        // Fetch all tabs from the API
        const response = await fetch("/api/data/tag/get-tags");
        const tags: EventTabsTrigger[] = await response.json();

        // Notify if no events are found
        if (!tags) {
          console.error("No tags found");
          toast({
            description: "No tags found.",
          });

          return;
        }

        // Make tags available to the tabs for navigation and render
        setAvailableTabs(tags);

        // Set the first tag as the default active tab
        setActiveTab(tags[0].value);
      } catch (error) {
        console.error("Error fetching available tabs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAvailableTabs();
  }, []);

  useEffect(() => {
    if (!activeTab) return; // Don't fetch if activeTab is still null

    const fetchEvents = async () => {
      try {
        const response = await fetch(`/api/data/event/get-events?active_tab=${activeTab}`);
        const data = await response.json();

        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [activeTab]);

  if (loading) return <p>Loading events...</p>;
  return (
    <main className="flex flex-col w-3/4 items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Heading */}
      <div className="flex flex-col w-fit items-center my-20">
        <h1 className="text-5xl font-bold text-[#3b3b3b] xl:text-7xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-4xl">
          What&apos;s On
        </h1>
        <div className="border-2 mt-5 border-primary w-1/2"></div>
      </div>

      {/* 
          Tabs Navigation Buttons:
          Dynamically create a <TabsTrigger> component for each available tab for the navigation bar.
        */}
      <Tabs value={activeTab ?? ""} onValueChange={setActiveTab} className="w-full">
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

        {/* 
          Tabs Content Containers:
          Dynamically create a <TabsContent> component for each available tab.
        */}
        {availableTabs.map((types) => (
          <TabsContent value={types.value}>
            <CarouselContainer events={events} activeTab={activeTab} />
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
