// Shadcn UI
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Components
import EventCard from "@/components/EventCard";

// Constants
import { tabDescriptions } from "@/lib/constants";

// Types
import { Event } from "@/lib/types";

const CarouselContainer = ({ events, activeTab }: { events: Event[]; activeTab: string }) => {
  return (
    <Carousel>
      <div className="CarouselContainer flex flex-col items-center w-full ">
        {/* Our Picks Heading */}
        <p className="OurPicksHeading text-center text-[#3b3b3b] font-bold text-xs 3xl:my-16 3xl:text-lg 3xl:w-3/4 2xl:my-8 2xl:text-lg 2xl:w-3/4">
          {tabDescriptions[activeTab]?.description}
        </p>

        <CarouselContent className="CarouselContent flex gap-4 w-full ">
          {events.map((event) => (
            <CarouselItem key={event.id} className="flex-1 min-w-[250px] max-w-[350px]">
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

      {/* TODO: Need to figure out if we want the buttons or its a scroll by grabbing and sliding */}
      {/* Carousel Navigation */}
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
};

export default CarouselContainer;
