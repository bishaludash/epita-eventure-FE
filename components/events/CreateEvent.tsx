"use client";

import TextInput from "@/components/UI/TextInput";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Select from "../UI/Select";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";

export type TEvent = {
  eventName: string;
  eventDate: Date | null;
  location: string;
  description: string;
  manager: string;
};

const CreateEvent = () => {
  const pathname = usePathname();
  const [setshowToast, setSetshowToast] = useState(false);
  const [eventData, setEventData] = useState<TEvent>({
    eventName: "",
    eventDate: null,
    location: "",
    description: "",
    manager: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target["name"];
    setEventData({ ...eventData, [name]: e.target.value });
  };

  return (
    <div className="my-4 w-[500px]">
      <TextInput
        label={"Event Name"}
        name="eventName"
        value={eventData.eventName}
        onChange={handleChange}
      />
      <input
        type="date"
        name="eventDate"
        className="input input-bordered  gap-2 w-full"
      />

      <TextInput
        label={"Event Location"}
        name="location"
        value={eventData.location}
        onChange={handleChange}
      />

      <Select
        label={"Select Event Responsible"}
        name="eventName"
        value={eventData.eventName}
        optionData={[]}
        onChange={handleChange}
      />

      <TextArea />

      <Button />

      <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Event created successfully.</span>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
