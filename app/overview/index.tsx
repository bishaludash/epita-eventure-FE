export const metadata = {
  title: "Eventure",
  description: "Lorem ipsum dolor sit amet.",
};

const Overview = () => {
  return (
    <section>
      <div className=" mx-[10%] flex ">
        <div className="flex-1">Eventure</div>

        <ul className="flex flex-row gap-20">
          <li>Events</li>
          <li>Tasks</li>
          <li>Profile</li>
        </ul>
      </div>
    </section>
  );
};

export default Overview;
