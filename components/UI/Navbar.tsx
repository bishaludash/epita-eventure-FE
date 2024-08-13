"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const isPageActive = (page: string): boolean => {
    if (pathname.includes(page)) {
      return true;
    }
    return false;
  };

  return (
    <div className="  flex mt-4 mb-20 text-md">
      <div className="flex flex-1">
        <img
          className="h-10 -mt-1 mr-2"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <Link className=" text-2xl " href="/">
          Eventure
        </Link>
      </div>

      <ul className="flex flex-row gap-20">
        <li>
          <Link
            className={` py-2 cursor-pointer border-b-4  hover:border-primary transition ${
              isPageActive("events") ? "border-primary" : "border-transparent"
            }`}
            href="/events"
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            className={` py-2 cursor-pointer border-b-4  hover:border-primary transition ${
              isPageActive("tasks") ? "border-primary" : "border-transparent"
            }`}
            href="/tasks"
          >
            Tasks
          </Link>
        </li>

        <li>
          <Link
            className={` py-2 cursor-pointer border-b-4  hover:border-primary transition ${
              isPageActive("profile") ? "border-primary" : "border-transparent"
            }`}
            href="/profile"
          >
            Profile
          </Link>
        </li>

        <li>
          <Link
            className=" py-2 cursor-pointer rounded-md px-4 border-b-4 border-transparent text-gray-50 bg-opacity-50 bg-[#13171b] hover:bg-opacity-100 transition delay-75"
            href="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
