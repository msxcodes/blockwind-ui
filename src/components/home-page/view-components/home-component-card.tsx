import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";

interface IHomeComponentData {
  code: React.ReactNode;
  title: string;
  number: string;
}

const HomeComponentCard = () => {
  return (
    <div>
      {_componentData.map((data) => {
        return (
          <Card
            key={data.title}
            className="overflow-hidden  hover:-translate-y-3 transition-all duration-300 cursor-pointer bg-gradient-to-tr dark:from-black dark:to-neutral-950"
          >
            <div className="h-[200px] flex justify-center items-center  text-white border-b dark:border-gray-800">
              {data.code}
            </div>
            <CardFooter className="flex flex-col items-start py-4">
              <h4 className="text-lg font-semibold">{data.title}</h4>
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
    title: "Button",
    number: "2",
    code: <Button className="bg-blue-500 text-white">Click Here</Button>,
  },
];
