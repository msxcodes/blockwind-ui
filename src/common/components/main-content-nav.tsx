import { IComponentNavMenu } from "@/interfaces/component-page.interface";
import Link from "next/link";
import React from "react";

export default function MainContentNav({
  data,
}: {
  data: IComponentNavMenu[];
}) {
  return (
    <div className="space-y-3 col-span-3 p-6">
      <h4 className="text font-bold text-blue-500 dark:text-blue-400">
        On This Page
      </h4>
      <div className="flex flex-col ">
        {data.map((data, index) => {
          return (
            <Link
              href={data.href}
              key={index}
              className={`border-l px-4 font-medium text-[0.9rem] py-1 hover:opacity-100 hover:font-semibold transition-all duration-300 opacity-60
              `}
            >
              {data.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
