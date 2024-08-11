import Link from "next/link";

const Navbar = () => {
  return (
    <div className="  mx-[10%] flex mt-5 text-xl">
      <div className="flex-1">
        <Link href="/">Eventure</Link>
      </div>

      <ul className="flex flex-row gap-20">
        <li className=" cursor-pointer border-b-4 border-transparent hover:border-primary transition">
          <Link href="/events">Events</Link>
        </li>
        <li className=" cursor-pointer border-b-4 border-transparent hover:border-primary transition">
          <Link href="/tasks">Tasks</Link>
        </li>

        <li className=" cursor-pointer border-b-4 border-transparent hover:border-primary transition">
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
