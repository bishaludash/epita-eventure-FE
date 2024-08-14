"use client";

import React, { useEffect, useState, useMemo } from "react";
import TextInput from "@/components/UI/TextInput";
import { useRouter, useSearchParams } from "next/navigation";
import Select from "../UI/Select";
import TextArea from "../UI/TextArea";
import Button from "../UI/SubmitButton";
import Toast from "../UI/Toast";
import { defaultEventData, TEvent, TUser, TUsers } from "@/types/EventType";
import {
  deleteEvent,
  getAllUsers,
  getEventsById,
  updateEvent,
} from "@/api/api";
import moment from "moment";
import { getRandomInt } from "@/utils/utils";

const EditEvent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [setshowToast, setSetshowToast] = useState<Boolean>(false);
  const [users, setUsers] = useState<TUsers>([]);
  const [toast, setToast] = useState({ message: "", color: "" });
  const [eventData, setEventData] = useState<TEvent>(defaultEventData);
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState<TUsers>([]);

  const event_id = searchParams.get("edit_event_id");
  const randomNumb = useMemo(() => getRandomInt(50), []);

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
      await updateEvent(eventData);

      setToast({ message: "Event Updated successfully", color: "alert-info" });
      setSetshowToast(true);
    }
  };

  const handleDelete = async () => {
    await deleteEvent(eventData);
    router.push("/events");
  };

  return (
    <div className="my-4 flex  flex-row gap-10">
      <div className="my-4 w-[800px]">
        <TextInput
          label={"Event Name"}
          name="eventName"
          value={eventData.eventName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="eventDate"
          value={moment(eventData.eventDate).format("YYYY-MM-DD")}
          className="input input-bordered  gap-2 w-full text-white "
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

        <Button text="Update" onSubmit={handleSubmit} />
        <Button
          text="Delete"
          btnStyle="btn-error ml-4"
          onSubmit={handleDelete}
        />

        {setshowToast && <Toast message={toast.message} color={toast.color} />}
      </div>

      <div>
        <figure>
          <img
            src={`https://picsum.photos/id/${randomNumb}/400/200`}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
};

export default EditEvent;
