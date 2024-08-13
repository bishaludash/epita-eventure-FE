import Overview from "./overview";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Eventure",
  description: "Lorem ipsum dolor sit amet.",
};

const page = () => {
  return (
    <UserProvider>
      <div>
        <Overview />
      </div>
    </UserProvider>
  );
};

export default page;
