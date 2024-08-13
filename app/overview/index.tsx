"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllEvents } from "@/api/api";
import Card from "@/components/UI/Card";
import { TEvent, TEvents } from "@/types/EventType";
import { useUser } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Eventure",
  description: "Lorem ipsum dolor sit amet.",
};

const Overview = () => {
  const { user, error, isLoading } = useUser();
  const [allEvents, setAllEvents] = useState<TEvents>([]);
  const router = useRouter();
  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (user !== undefined || user !== null) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const getEvents = async () => {
    const data = await getAllEvents();
    setAllEvents(data);
  };

  const onClickEvent = (eventId: string | undefined) => {
    const routeURL = "events?event_id=" + eventId;
    router.push(routeURL);
  };

  return (
    <div>
      <section>
        <h1 className=" text-4xl my-5 font-bold capitalize">
          Trending Events in Paris
        </h1>

        <div className="grid grid-cols-4 gap-10 mb-10">
          {allEvents?.map((item: TEvent, key: number) => (
            <div key={item.id} onClick={() => onClickEvent(item?.id)}>
              <Card
                id={key + 50}
                label={item.eventName}
                itemDate={item.eventDate}
                details={item.description}
                location={item.location}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview;
