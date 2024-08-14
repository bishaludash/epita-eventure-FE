"use client";

import React, { useEffect, useState } from "react";
import TextInput from "@/components/UI/TextInput";
import { usePathname, useSearchParams } from "next/navigation";
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
import { createTask, getAllEvents, getAllTasks, getAllUsers } from "@/api/api";
import { defaultTaskData, TTask } from "@/types/TaskType";
import Loading from "../UI/Loading";

const CreateTask = () => {
  const searchParams = useSearchParams();
  const task_id = searchParams.get("task_id");
  const [isLoading, setIsLoading] = useState(true);
  const [setshowToast, setSetshowToast] = useState<Boolean>(false);
  const [users, setUsers] = useState<TUsers>([]);
  const [toast, setToast] = useState({ message: "", color: "" });
  const [events, setEvents] = useState<TEvents>([]);
  const [task, setTask] = useState<TTask>();

  useEffect(() => {
    if (task_id) {
    }
  }, [task_id]);

  useEffect(() => {
    fetchUsers();
    getEvents();
    getAllTask();
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
    setIsLoading(false);
  };

  const getAllTask = async () => {
    const tasks = await getAllTasks();
    const data = tasks.filter((item: TTask) => item.taskId === task_id);
    setTask(data[0]);
  };

  console.log(task);
  if (isLoading) {
    return (
      <div className="w-full m-auto text-center pt-10">
        <Loading />
      </div>
    );
  }
  return (
    <div className="my-4 w-[500px]">
      <TextInput
        label={"Task Name"}
        name="taskName"
        value={task?.taskName ?? ""}
        onChange={() => console.log("ici")}
        disabled={true}
      />

      <Select
        label={"Event name"}
        name="eventId"
        value={task?.eventId ?? ""}
        optionData={events}
        onChange={() => console.log("ici")}
        disabled={true}
      />

      <Select
        label={"Assignee"}
        name="assignee"
        value={task?.assignee ?? ""}
        optionData={users}
        onChange={() => console.log("ici")}
        disabled={true}
      />

      <TextArea
        name="description"
        label="Description"
        value={task?.description ?? ""}
        onChange={() => console.log("ici")}
        disabled={true}
      />

      {setshowToast && <Toast message={toast.message} color={toast.color} />}
    </div>
  );
};

export default CreateTask;
