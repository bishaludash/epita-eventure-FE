"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../UI/Card";
import axios from "axios";
import Loading from "../UI/Loading";
import { TEvent, TEvents } from "@/types/EventType";

const ListEvent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<TEvents>([]);
  const router = useRouter();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const res = await axios.get("http://localhost:8080/events");

    setEvents(res.data);
    setIsLoading(false);
  };

  const onClickEvent = (eventId: string | undefined) => {
    const routeURL = "events?event_id=" + eventId;
    router.push(routeURL);
  };

  if (isLoading) {
    return (
      <div className="w-full m-auto text-center pt-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-10">
      {events?.map((item: TEvent, key) => (
        <div key={item.id} onClick={() => onClickEvent(item?.id)}>
          <Card
            id={key + 50}
            label={item.eventName}
            itemDate={item?.eventDate}
            details={item.description}
            location={item.location}
          />
        </div>
      ))}
    </div>
  );
};

export default ListEvent;
