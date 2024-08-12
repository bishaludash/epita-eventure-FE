import CreateEvent from "@/components/events/CreateEvent";

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
          className="tab  text-primary  [--tab-border-color:gray]"
          aria-label="My Events"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content  bg-base-100  border-[#808080] rounded-box p-8 min-h-[700px]"
        >
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-primary  [--tab-border-color:gray]"
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
          className="tab text-primary  [--tab-border-color:gray]"
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
