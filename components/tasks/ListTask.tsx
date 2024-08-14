"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../UI/Card";
import axios from "axios";
import Loading from "../UI/Loading";
import { TEvent, TEvents } from "@/types/EventType";
import { getAllEvents, getAllTasks } from "@/api/api";
import { TTask, TTasks } from "@/types/TaskType";

const ListTask = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<TTasks>([]);
  const router = useRouter();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const data = await getAllTasks();
    console.log(data);
    setTasks(data);
    setIsLoading(false);
  };

  const onClickEvent = (task_id: string | undefined) => {
    const routeURL = "tasks?task_id=" + task_id;
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
      {tasks?.map((item: TTask, key) => (
        <div key={key} onClick={() => onClickEvent(item.taskId)}>
          <Card
            id={key + 50}
            label={item.taskName}
            itemDate={item.createdAt}
            details={item.description}
            location=""
          />
        </div>
      ))}
    </div>
  );
};

export default ListTask;
