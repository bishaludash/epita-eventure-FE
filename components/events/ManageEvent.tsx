"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../UI/Card";
import Loading from "../UI/Loading";
import { TEvent, TEvents } from "@/types/EventType";
import { getAllEvents } from "@/api/api";
import useLocalStorageUser from "@/utils/useLocalStorageUser";

const ManageEvent = () => {
  const [user, setUser] = useLocalStorageUser();
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<TEvents>([]);
  const router = useRouter();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    let data: TEvents = await getAllEvents();
    data = data.filter((item) => item.manager === user.nickname);

    setEvents(data);
    setIsLoading(false);
  };

  const onClickEvent = (eventId: string | undefined) => {
    const routeURL = "events?edit_event_id=" + eventId;
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

export default ManageEvent;
