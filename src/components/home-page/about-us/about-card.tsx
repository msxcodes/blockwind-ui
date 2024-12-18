import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import ComponentIcon from "../../../public/icons/component-icon1.png";

interface IAboutCardProps {
  id: number | undefined;
  title: string;
  description: string;
  image: string; // Replace with ImageProps type when available in Next.js 13.4+
  // Add more props as needed for the AboutCard component, such as author, date, etc.
}

export default function AboutUsCard({
  id,
  title,
  description,
  image,
}: IAboutCardProps) {
  return (
    <>
      <Card className="border-opacity-20 border-purple-500 p-4">
        <CardHeader className="flex gap-4">
          <div className="size-[100px] pt-2">
            <Image
              alt="logo"
              width={55}
              height={55}
              className="rounded-xl p-2 border-[2px] border-violet-800 border-opacity-80"
              src={image}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md font-semibold">{title}</p>
            <p className="text-sm  font-medium opacity-50 text-default-500">
              {description}
            </p>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
