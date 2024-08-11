"use client";

import Card from "@/components/Card";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Events() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section>
      <h1 className=" text-4xl my-5 font-bold capitalize">
        Trending Events in Paris
      </h1>

      <div className="grid grid-cols-4 gap-10"></div>
    </section>
  );
}
