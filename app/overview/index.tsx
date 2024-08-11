import Card from "@/components/Card";

export const metadata = {
  title: "Eventure",
  description: "Lorem ipsum dolor sit amet.",
};

const Overview = () => {
  return (
    <section className="my-20">
      <h1 className=" text-4xl my-5 font-bold capitalize">
        Trending Events in Paris
      </h1>

      <div className="grid grid-cols-4 gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Overview;
