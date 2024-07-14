import ContentWrapper from "@/common/components/content-wrapper";
import AboutUsCard from "./about-card";
import { AboutCardData } from "@/constants/home-page.data";

const AboutSection = () => {
  return (
    <div className="">
      <ContentWrapper>
        <div className="flex mx-6 md:mx-0">
          {AboutCardData.map((data) => {
            return (
              <div className="flex items-center" key={data.id}>
                <AboutUsCard
                  title={data.title}
                  description={data.description}
                  image={data.image}
                />
                <div
                  className={`w-[1px] h-[60px] bg-gradient-to-tr rounded-full  opacity-80 from-blue-500 to-purple-400 ${
                    data.id === 3 && "hidden"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AboutSection;
