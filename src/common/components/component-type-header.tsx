import { IComponentTypeHeader } from "@/interfaces/indi-component.interface";
import Link from "next/link";
import React from "react";

export default function ComponentTypeHeader({
  title,
  description,
  sectionID,
}: IComponentTypeHeader) {
  return (
    <div className="mt-6 flex flex-col gap-1">
      <Link
        href={sectionID}
        className="flex group text-lg hover:text-blue-500 transition-all hover:dark:text-blue-400 duration-300 font-semibold items-center gap-1 opacity-80 hover:opacity-100"
      >
        <span className="">#</span>
        <h4 className="">{title}</h4>
      </Link>
      <p className="opacity-60 font-medium">{description}</p>
    </div>
  );
}
