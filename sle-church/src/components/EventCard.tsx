import Image from "next/image";
import image from "../../src/static/image.png";

// Libraries
import { format, parse } from "date-fns";

const EventCard = ({
  eventName,
  startTime,
  endTime,
  eventDate,
  description,
  location,
}: {
  eventName: string;
  startTime: string;
  endTime: string;
  eventDate: Date;
  description: string;
  location: string;
}) => {
  // Format the date as "23 MAR (SUN)"
  const formattedDate = format(eventDate, "dd MMM (EEE)").toUpperCase();

  // Parse the start and end time strings into Date objects (assuming they are in "HH:mm" format)
  const startTimeParsed = parse(startTime, "HH:mm", new Date());
  const endTimeParsed = parse(endTime, "HH:mm", new Date());

  // Format the start and end times as "9am to 10.30am"
  const formattedStartTime = format(startTimeParsed, "h:mm a").toLowerCase();
  const formattedEndTime = format(endTimeParsed, "h:mm a").toLowerCase();

  return (
    <div className="border rounded-sm shadow-md bg-white">
      <Image src={image} alt="testing" />

      <div className="eventContent flex flex-col p-5 gap-2">
        <p className="EventDate text-sm text-[#f63a21] font-bold 3xl:text-md">
          {formattedDate}, {formattedStartTime} to {formattedEndTime}
        </p>
        <h3 className="EventName text-lg font-semibold text-gray-900 3xl:text-xl">{eventName}</h3>
        <p className="EventDescription text-sm text-gray-600 3xl:text-lg">{description}</p>
        <p className="EventLocation text-sm text-gray-600 3xl:text-lg">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
