"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface IHomeComponentData {
  code: React.ReactNode;
  title: string;
  number: string;
  link: string;
}

const HomeComponentCard = () => {
  const route = useRouter();

  return (
    <div className="grid grid-cols-4 my-12 gap-6 px-32">
      {_componentData.map((data) => {
        return (
          <Card
            onClick={() => route.push(data.link)}
            key={data.title}
            className="overflow-hidden  hover:-translate-y-3 transition-all duration-300 cursor-pointer bg-gradient-to-tr dark:from-black dark:to-neutral-950"
          >
            <div className="h-[200px] flex justify-center items-center  text-white border-b dark:border-gray-800">
              {data.code}
            </div>
            <CardFooter className="flex flex-col items-start py-4">
              <h4 className="text-lg font-semibold hover:text-blue-500 transition-all duration-150">
                {data.title}
              </h4>
              <span className="text-sm font-medium opacity-70">
                {data.number} Components
              </span>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default HomeComponentCard;

const _componentData: IHomeComponentData[] = [
  {
    title: "Avatar",
    number: "6",
    link: "/component/avatar",
    code: (
      <img
        className="size-16 rounded-full object-cover object-center"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt=""
      />
    ),
  },
  {
    title: "Button",
    number: "2",
    link: "/component/button",
    code: (
      <Button className="bg-indigo-500 text-white hover:bg-indigo-500 font-medium">
        Click Here
      </Button>
    ),
  },
];
