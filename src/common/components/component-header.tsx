import React from "react";

interface IComponentHeaderProps {
  title: string;
  description?: string;
}

export default function ComponentHeader({
  title,
  description,
}: IComponentHeaderProps) {
  return (
    <div className="flex flex-col gap-2 border-b pb-12 border-neutral-800">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-base opacity-60 font-medium">{description}</p>
    </div>
  );
}
