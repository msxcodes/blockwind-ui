import { IComponentTypeHeader } from "@/interfaces/indi-component.interface";
import React from "react";

export default function ComponentTypeHeader({
  title,
  description,
}: IComponentTypeHeader) {
  return (
    <div className="mt-6 flex flex-col gap-1">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="opacity-60 font-medium">{description}</p>
    </div>
  );
}
