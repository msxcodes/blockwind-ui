import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";

const HomeComponentCard = () => {
  return (
    <Card className="overflow-hidden border-gray-800 hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-indigo-600 bg-gradient-to-tr from-black to-neutral-950">
      <div className="h-[200px] flex justify-center items-center  text-white border-b border-gray-800 ">
        {/* <Image src={""} alt="" className="" /> */}
        <Button className="bg-blue-500 text-white">Click Here</Button>
      </div>
      <CardFooter className="flex flex-col items-start py-4">
        <h4 className="text-lg font-semibold">Button</h4>
        <span className="text-sm font-medium opacity-70">9 Components</span>
      </CardFooter>
    </Card>
  );
};

export default HomeComponentCard;
