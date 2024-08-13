import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TextInput from "../UI/TextInput";
import TextArea from "../UI/TextArea";
import Toast from "../UI/Toast";
import { getEventsById } from "@/api/api";
import Loading from "../UI/Loading";
import Select from "../UI/Select";
import { defaultEventData, TEvent } from "@/types/EventType";
import moment from "moment";

const ShowEvent = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState<TEvent>(defaultEventData);

  const event_id = searchParams.get("event_id");
  useEffect(() => {
    if (event_id) {
      getEventdata(event_id);
    }
  }, [event_id]);

  const getEventdata = async (id: string) => {
    const data = await getEventsById(id);
    console.log(data);
    setEventData(data);
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
          value={eventData.manager}
          onChange={() => console.log("ici")}
          disabled={true}
        />

        <TextArea
          name="description"
          label="Description"
          value={eventData.description}
          onChange={() => console.log("ici")}
          disabled={true}
        />
      </div>
      <div>
        <figure>
          <img src={`https://picsum.photos/id/1/400/200`} alt="Shoes" />
        </figure>
        <button className="btn btn-primary text-sm w-full mt-4">
          Book Event
        </button>
      </div>

      {/* <Toast /> */}
    </div>
  );
};

export default ShowEvent;
