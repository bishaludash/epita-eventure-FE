import Button from "@/components/Button";
import Overview from "./overview";

export const metadata = {
  title: "Eventure",
  description: "Lorem ipsum dolor sit amet.",
};

const page = () => {
  return (
    <div className=" mx-[10%] ">
      <Overview />
    </div>
  );
};

export default page;
