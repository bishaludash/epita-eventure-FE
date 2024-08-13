"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CreateEvent from "@/components/events/CreateEvent";
import ListEvent from "@/components/events/ListEvent";
import ShowEvent from "@/components/events/ShowEvent";
import EditEvent from "@/components/events/EditEvent";
import ManageEvent from "./ManageEvent";
import useLocalStorageUser from "@/utils/useLocalStorageUser";

export default function Events() {
  const [user, setUser] = useLocalStorageUser();

  const searchParams = useSearchParams();
  const router = useRouter();

  const event_id = searchParams.get("event_id");
  const edit_event_id = searchParams.get("edit_event_id");

  return (
    <section>
      <div role="tablist" className="tabs tabs-lifted ">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-primary  [--tab-border-color:gray] after:w-[150px]"
          aria-label="Events"
          onClick={() => router.push("/events")}
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content  bg-base-100  border-[#808080] rounded-box p-8 min-h-[700px]"
        >
          {event_id !== "" && event_id !== null ? <ShowEvent /> : <ListEvent />}
        </div>

        {user && (
          <>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-primary  [--tab-border-color:gray]  after:w-[150px]"
              aria-label="Create Events"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-[#808080] rounded-box p-8 min-h-[700px]"
            >
              <CreateEvent />
            </div>
          </>
        )}

        {user && (
          <>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-primary  [--tab-border-color:gray]  after:w-[150px]"
              aria-label="Manage Events"
              onClick={() => router.push("/events")}
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-[#808080] rounded-box p-8 min-h-[700px]"
            >
              {edit_event_id !== "" && edit_event_id !== null ? (
                <EditEvent />
              ) : (
                <ManageEvent />
              )}
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-4 gap-10"></div>
    </section>
  );
}
