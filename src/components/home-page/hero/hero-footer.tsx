import { heroFooterIcons } from "@/constants/hero-footer-items";

const HeroFooter = () => {
  return (
    <div className="flex justify-center items-center pt-4">
      <span className="uppercase text-xs font-semibold opacity-60 mr-4">
        Compatible with:
      </span>
      <div className="flex items-center space-x-2 mr-4">
        {heroFooterIcons.map((data, index) => {
          return (
            <span
              className="flex flex-col justify-center items-center mr-2"
              key={index}
            >
              {data}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HeroFooter;
