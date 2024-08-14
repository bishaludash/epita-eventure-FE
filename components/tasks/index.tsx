"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CreateEvent from "@/components/events/CreateEvent";
import ListEvent from "@/components/events/ListEvent";
import ShowEvent from "@/components/events/ShowEvent";
import EditEvent from "@/components/events/EditEvent";
import ManageEvent from "./ManageTask";
import useLocalStorageUser from "@/utils/useLocalStorageUser";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import ShowTask from "./ShowTask";

export default function Tasks() {
  const [user, setUser] = useLocalStorageUser();

  const searchParams = useSearchParams();
  const router = useRouter();

  const task_id = searchParams.get("task_id");
  const edit_event_id = searchParams.get("edit_event_id");

  return (
    <section>
      <div role="tablist" className="tabs tabs-lifted ">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-primary  [--tab-border-color:gray] after:w-[150px]"
          aria-label="Tasks"
          onClick={() => router.push("/tasks")}
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content  bg-base-100  border-[#808080] rounded-box p-8 min-h-[700px]"
        >
          {task_id !== "" && task_id !== null ? <ShowTask /> : <ListTask />}
        </div>

        {user && (
          <>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-primary  [--tab-border-color:gray]  after:w-[150px]"
              aria-label="Create Tasks"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-[#808080] rounded-box p-8 min-h-[700px]"
            >
              <CreateTask />
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-4 gap-10"></div>
    </section>
  );
}
