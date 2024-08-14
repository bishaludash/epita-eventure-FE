"use client";

import React, { useEffect, useState } from "react";
import TextInput from "@/components/UI/TextInput";
import { usePathname } from "next/navigation";
import Select from "../UI/Select";
import TextArea from "../UI/TextArea";
import Button from "../UI/SubmitButton";
import Toast from "../UI/Toast";
import {
  defaultEventData,
  TEvent,
  TEvents,
  TUser,
  TUsers,
} from "@/types/EventType";
import { createEvent, createTask, getAllEvents, getAllUsers } from "@/api/api";
import { defaultTaskData, TTask } from "@/types/TaskType";

const CreateTask = () => {
  const [setshowToast, setSetshowToast] = useState<Boolean>(false);
  const [users, setUsers] = useState<TUsers>([]);
  const [toast, setToast] = useState({ message: "", color: "" });
  const [taskData, setTaskData] = useState<TTask>(defaultTaskData);
  const [events, setEvents] = useState<TEvents>([]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const name = e.target["name"];
    console.log(name);
    setTaskData({ ...taskData, [name]: e.target.value });
  };

  useEffect(() => {
    fetchUsers();
    getEvents();
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

  const getEvents = async () => {
    const data = await getAllEvents();
    setEvents(data);
  };

  const handleSubmit = async () => {
    console.log(taskData);
    // validate
    if (
      taskData.taskName === "" ||
      taskData.eventId === "" ||
      taskData.assignee === ""
    ) {
      setToast({ message: "Form field cannot be empty", color: "alert-error" });
      setSetshowToast(true);
      return false;
    } else {
      await createTask(taskData);

      // empty the form field
      setTaskData(defaultTaskData);
      setToast({ message: "Task created successfully", color: "" });
      setSetshowToast(true);
    }
  };

  return (
    <div className="my-4 w-[500px]">
      <TextInput
        label={"Task Name"}
        name="taskName"
        value={taskData.taskName}
        onChange={handleChange}
      />

      <Select
        label={"Select Event"}
        name="eventId"
        value={taskData.eventId}
        optionData={events}
        onChange={handleChange}
      />

      <Select
        label={"Select Assignee"}
        name="assignee"
        value={taskData.assignee}
        optionData={users}
        onChange={handleChange}
      />

      <TextArea
        name="description"
        label="Description"
        value={taskData.description}
        onChange={handleChange}
      />

      <Button onSubmit={handleSubmit} />

      {setshowToast && <Toast message={toast.message} color={toast.color} />}
    </div>
  );
};

export default CreateTask;
