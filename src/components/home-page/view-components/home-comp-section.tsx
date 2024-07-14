import ContentWrapper from "@/common/components/content-wrapper";
import SectionHeader from "@/common/components/section-header";
import HomeComponentCard from "./home-component-card";
import { MovingButton } from "@/components/ui/moving-button";

const HomeComponentsSection = () => {
  return (
    <div>
      <ContentWrapper>
        <div>
          <SectionHeader
            title="Tailwind CSS"
            subtitle="Components"
            description="Based on the Tailwind CSS utility classes, Pixelwind UI's prebuilt components and UI elements help you quickly design and customize websites."
          />
          <div className="grid grid-cols-4 my-12 gap-6 px-32">
            <HomeComponentCard />
          </div>
          <div className="flex justify-center items-center">
            <MovingButton>View All Components</MovingButton>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HomeComponentsSection;
