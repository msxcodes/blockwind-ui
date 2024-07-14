import { ISectionHeader } from "@/interfaces/home-page-interface";

const SectionHeader = ({ title, subtitle, description }: ISectionHeader) => {
  return (
    <div className="flex gap-2 justify-center items-center flex-col w-max mx-auto">
      <h2 className="text-4xl font-semibold">
        {title}{" "}
        <span className="bg-gradient-to-tr from-blue-500 to-purple-400 bg-clip-text text-transparent">
          {" "}
          {subtitle}{" "}
        </span>{" "}
      </h2>
      <p className="text-[1rem] font-medium opacity-60 text-center max-w-2xl">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
