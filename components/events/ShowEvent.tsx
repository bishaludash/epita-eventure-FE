"use client";
import React, { useEffect, useState } from "react";
import useLocalStorageUser from "@/utils/useLocalStorageUser";
import { useSearchParams } from "next/navigation";
import TextInput from "../UI/TextInput";
import Toast from "../UI/Toast";
import { getAllUsers, getEventsById } from "@/api/api";
import Loading from "../UI/Loading";
import { defaultEventData, TEvent, TUsers } from "@/types/EventType";
import moment from "moment";
import { useRouter } from "next/navigation";

const ShowEvent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [user, setUser] = useLocalStorageUser();
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState<TEvent>(defaultEventData);
  const [userList, setUserList] = useState<TUsers>([]);

  const event_id = searchParams.get("event_id");
  useEffect(() => {
    if (event_id) {
      getEventdata(event_id);
      const data = getAllUsers();
      setUserList(data);
    }
  }, [event_id]);

  const getEventdata = async (id: string) => {
    const data = await getEventsById(id);
    setEventData(data);
    setIsLoading(false);
  };

  const handleBookEvent = () => {
    if (!user) {
      console.log("redirect to login page");
      router.push("/api/auth/login");
      return true;
    }
    // TO DO register participant
    console.log(user);
    console.log(eventData);
    console.log("book the event");
  };

  const getManager = () => {
    const manager = userList?.filter((item) => item.sub === eventData.manager);
    if (manager) {
      return manager[0].nickname;
    }
    return eventData.manager;
  };

  if (isLoading) {
    return (
      <div className="w-full m-auto text-center pt-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="my-4 flex  flex-row gap-10">
      <div className="w-[800px]">
        <TextInput
          label={"Event Name"}
          name="eventName"
          value={eventData.eventName}
          disabled={true}
          onChange={() => console.log("ici")}
        />
        <input
          type="date"
          name="eventDate"
          className="input input-bordered  gap-2 w-full text-white disabled:text-white"
          value={moment(eventData.eventDate).format("YYYY-MM-DD")}
          onChange={() => console.log("ici")}
          disabled={true}
        />

        <TextInput
          label={"Event Location"}
          name="location"
          value={eventData.location}
          onChange={() => console.log("ici")}
          disabled={true}
        />

        <TextInput
          label={"Manager"}
          name="manager"
          value={getManager()}
          onChange={() => console.log("ici")}
          disabled={true}
        />

        <label className="text-white ml-2 ">Description</label>
        <div className="text-white p-4 border border-1 border-[#191e24] bg-[#191e24] rounded-lg">
          <p>{eventData.description}</p>
        </div>
      </div>
      <div>
        <figure>
          <img src={`https://picsum.photos/id/1/400/200`} alt="Shoes" />
        </figure>
        <button
          className="btn btn-primary text-sm w-full mt-4"
          onClick={handleBookEvent}
        >
          Book Event
        </button>
      </div>

      {/* <Toast /> */}
    </div>
  );
};

export default ShowEvent;
