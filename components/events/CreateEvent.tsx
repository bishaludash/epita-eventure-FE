"use client";

import React, { useEffect, useState } from "react";
import TextInput from "@/components/UI/TextInput";
import { usePathname } from "next/navigation";
import Select from "../UI/Select";
import TextArea from "../UI/TextArea";
import Button from "../UI/SubmitButton";
import Toast from "../UI/Toast";
import { defaultEventData, TEvent, TUser, TUsers } from "@/types/EventType";
import { createEvent, getAllUsers } from "@/api/api";

const CreateEvent = () => {
  const [setshowToast, setSetshowToast] = useState<Boolean>(false);
  const [users, setUsers] = useState<TUsers>([]);
  const [toast, setToast] = useState({ message: "", color: "" });
  const [eventData, setEventData] = useState<TEvent>(defaultEventData);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const name = e.target["name"];
    setEventData({ ...eventData, [name]: e.target.value });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSetshowToast(false);
    }, 5000);
  }, [setshowToast]);

  const fetchUsers = async () => {
    const userData = await getAllUsers();
    setUsers(userData);
  };
  const handleSubmit = async () => {
    // validate
    if (
      eventData.eventName === "" ||
      eventData.eventDate === "" ||
      eventData.location === ""
    ) {
      setToast({ message: "Form field cannot be empty", color: "alert-error" });
      setSetshowToast(true);
      return false;
    } else {
      if (eventData?.eventDate) {
        eventData.eventDate = new Date(eventData?.eventDate)?.toISOString();
      }
      await createEvent(eventData);

      // empty the form field
      setEventData(defaultEventData);
      setToast({ message: "Event created successfully", color: "" });
      setSetshowToast(true);
    }
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
        value={eventData.eventDate}
        className="input input-bordered  gap-2 w-full text-white"
        onChange={handleChange}
      />

      <TextInput
        label={"Event Location"}
        name="location"
        value={eventData.location}
        onChange={handleChange}
      />

      <Select
        label={"Manager"}
        name="manager"
        value={eventData.manager}
        optionData={users}
        onChange={handleChange}
      />

      <TextArea
        name="description"
        label="Description"
        value={eventData.description}
        onChange={handleChange}
      />

      <Button onSubmit={handleSubmit} />

      {setshowToast && <Toast message={toast.message} color={toast.color} />}
    </div>
  );
};

export default CreateEvent;
