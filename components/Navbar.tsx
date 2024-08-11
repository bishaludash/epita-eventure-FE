"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="  flex mt-2 mb-20 text-md">
      <div className="flex-1 text-2xl mt-2">
        <Link href="/">Eventure</Link>
      </div>

      <ul className="flex flex-row gap-20">
        <li className=" py-2 cursor-pointer border-b-4 border-transparent hover:border-primary transition">
          <Link href="/events">Events</Link>
        </li>
        <li className=" py-2  cursor-pointer border-b-4 border-transparent hover:border-primary transition">
          <Link href="/tasks">Tasks</Link>
        </li>

        <li className=" py-2  cursor-pointer border-b-4 border-transparent hover:border-primary transition">
          <Link href="/profile">Profile</Link>
        </li>

        <li className=" py-2 cursor-pointer rounded-md px-4 border-b-4 border-transparent text-gray-50 bg-opacity-50 bg-[#13171b] hover:bg-opacity-100 transition delay-75">
          <Link href="/login">Signin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
