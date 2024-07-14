import ContentWrapper from "@/common/components/content-wrapper";
import { GetStartedDetails } from "./getstarted-details";
import SectionHeader from "@/common/components/section-header";

const GetStarted = () => {
  return (
    <div className="my-28">
      <ContentWrapper>
        <div className="flex flex-col gap-12">
          <SectionHeader
            title="Get Started For"
            subtitle="Free"
            description="Bring your ideas to life in no time. Pixelwind UI provides all the
        essential components you need to convert your vision into
        thriving start-ups."
          />
          <GetStartedDetails />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default GetStarted;
