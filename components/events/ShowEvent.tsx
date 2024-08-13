import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TextInput from "../UI/TextInput";
import TextArea from "../UI/TextArea";
import Toast from "../UI/Toast";
import { getEventsById } from "@/api/api";
import Loading from "../UI/Loading";
import Select from "../UI/Select";
import { defaultEventData, TEvent } from "@/types/EventType";

const ShowEvent = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [Event, setEvent] = useState<TEvent>(defaultEventData);

  const event_id = searchParams.get("event_id");
  useEffect(() => {
    if (event_id) {
      getEventdata(event_id);
    }
  }, [event_id]);

  const getEventdata = async (id: string) => {
    const data = await getEventsById(id);
    setEvent(data);
    setIsLoading(false);
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
          value={Event.eventName}
          onChange={() => console.log("ici")}
          disabled={true}
        />
        <input
          type="date"
          name="eventDate"
          value={Event?.eventDate}
          onChange={() => console.log("ici")}
          className="input input-bordered text-white gap-2 w-full"
          disabled={true}
        />

        <TextInput
          label={"Event Location"}
          name="location"
          value={Event.location}
          onChange={() => console.log("ici")}
          disabled={true}
        />

        <Select
          label={"Manager"}
          name="eventName"
          value={Event.eventName}
          optionData={[]}
          onChange={() => console.log("ici")}
          disabled={true}
        />

        <TextArea />
      </div>
      <div>
        <figure>
          <img src={`https://picsum.photos/id/1/400/200`} alt="Shoes" />
        </figure>
      </div>

      <Toast />
    </div>
  );
};

export default ShowEvent;
