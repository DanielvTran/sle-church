// Shadcn UI
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Components
import EventCard from "@/components/EventCard";

// Constants
import { tabDescriptions } from "@/lib/constants";

// Types
import { Event } from "@/lib/types";

const CarouselContainer = ({ events, activeTab }: { events: Event[]; activeTab: string }) => {
  return (
    <Carousel>
      <div className="flex flex-col items-center w-full">
        {/* Our Picks Heading */}
        <p className="OurPicksHeading text-center text-[#3b3b3b] font-bold text-xs 3xl:my-16 3xl:text-lg 3xl:w-3/4">
          {tabDescriptions[activeTab]?.description}
        </p>

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
      </div>

      {/* Carousel Navigation */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselContainer;
