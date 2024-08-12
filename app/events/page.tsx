import CreateEvent from "@/components/events/CreateEvent";
import ListEvent from "@/components/events/ListEvent";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Eventure - Events",
  description: "Create events",
};

export default function Events() {
  return (
    <section>
      <div role="tablist" className="tabs tabs-lifted ">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-primary  [--tab-border-color:gray] after:w-[150px]"
          aria-label="My Events"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content  bg-base-100  border-[#808080] rounded-box p-8 min-h-[700px]"
        >
          <ListEvent />
        </div>

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

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-primary  [--tab-border-color:gray]  after:w-[150px]"
          aria-label="Manage Events"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-[#808080] rounded-box p-8 min-h-[700px]"
        >
          Events Responsible
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10"></div>
    </section>
  );
}
