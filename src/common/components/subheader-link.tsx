import { SubHeaderLinkData } from "@/constants/quick-start.data";
import Link from "next/link";

const SubHeaderLink = () => {
  return (
    <>
      {SubHeaderLinkData.map((data, index) => {
        return (
          <div className="py-4" key={index} id={data.id}>
            <h4 className="text-2xl font-semibold">{data.title}</h4>
            <div className="flex items-center">
              <p className="opacity-70 font-medium gap-2">
                {data.subTitle}
                <Link
                  href={data.link}
                  target="_blank"
                  className="font-medium ml-1 text-blue-500 hover:opacity-100 transition-all duration-300  hover:underline cursor-pointer"
                >
                  {data.linkText}
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SubHeaderLink;
