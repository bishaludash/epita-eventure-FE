"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../UI/Card";
import Loading from "../UI/Loading";
import { TEvent, TEvents } from "@/types/EventType";
import {
  getAllEvents,
  getParticipations,
  updateParticipation,
} from "@/api/api";
import useLocalStorageUser from "@/utils/useLocalStorageUser";
import {
  TParticipateEvent,
  TParticipateEvents,
} from "@/types/ParticipateEventType";
import SubmitButton from "../UI/SubmitButton";
import Toast from "../UI/Toast";

const ManageEvent = () => {
  const [user, setUser] = useLocalStorageUser();
  const [isLoading, setIsLoading] = useState(true);
  const [setshowToast, setSetshowToast] = useState<Boolean>(false);
  const [toast, setToast] = useState({ message: "", color: "" });

  const [events, setEvents] = useState<TEvents>([]);
  const [participateEvent, setParticipateEvent] = useState<TParticipateEvents>(
    [],
  );
  const router = useRouter();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    let data: TEvents = await getAllEvents();
    data = data.filter((item) => item.manager === user.sub);

    const eventParticipation = await getParticipations();
    if (eventParticipation.length > 0) {
      let filterParticipation = eventParticipation.filter(
        (item: TParticipateEvent) =>
          item.userId === user.sub && item.status === "active",
      );

      setParticipateEvent(filterParticipation);
    }

    setEvents(data);
    setIsLoading(false);
  };

  const onClickEvent = (eventId: string | undefined) => {
    const routeURL = "events?edit_event_id=" + eventId;
    router.push(routeURL);
  };
  const CancelEvent = async (data: TParticipateEvent) => {
    const newData = participateEvent.filter(
      (item: TParticipateEvent) => item.eventId !== data.eventId,
    );

    data.status = "cancel";
    await updateParticipation(data);

    setToast({ message: "Event Registration Canceled", color: "alert-info" });
    setSetshowToast(true);
    setParticipateEvent(newData);
  };

  if (isLoading) {
    return (
      <div className="w-full m-auto text-center pt-10">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-bold mb-2">Created Events</h2>
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

      {participateEvent?.length > 0 ? (
        <div className="mt-8">
          <h2 className="font-bold mb-2">Participated Events</h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}

              <thead>
                <tr>
                  <th></th>
                  <th>Event Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {participateEvent.map(
                  (item: TParticipateEvent, key: number) => (
                    <tr key={key}>
                      <th>{key + 1}</th>
                      <td>{item.eventName}</td>
                      <td>{item.userName}</td>
                      <td>
                        {" "}
                        <SubmitButton
                          text="Cancel"
                          btnStyle="btn-sm  btn-primary"
                          onSubmit={() => CancelEvent(item)}
                        />
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
      {setshowToast && <Toast message={toast.message} color={toast.color} />}
    </div>
  );
};

export default ManageEvent;
