import { ComponentNavMenu } from "@/common/components/component-navmenu";
import MainContainer from "../main-content.layout";
import { GetStartedBreadcrumbData } from "@/constants/breadcrumbs.data";
import ComponentHeader from "@/common/components/component-header";
import {
  BlockwindAboutData,
  GetStartedNavData,
} from "@/constants/quick-start.data";
import SubHeaderLink from "@/common/components/subheader-link";
import MainContentNav from "@/common/components/main-content-nav";

const QuickStartSection = () => {
  return (
    <div className="grid grid-cols-12">
      <MainContainer>
        <ComponentNavMenu
          data={GetStartedBreadcrumbData}
          pageTitle="Quick Start"
        />
        <ComponentHeader
          title="Getting Started"
          description="Blockwind UI is a modern UI component library for Tailwind CSS, you just need to install Tailwind CSS and configure it."
        />
        <div className="space-y-2 py-4 pb-8">
          <h4 className="text-2xl font-semibold">What is BlockwindUI?</h4>
          <div className="space-y-4 " id="blockwind-ui">
            {BlockwindAboutData.map((data, index) => {
              return (
                <p key={index} className="text-base opacity-70 font-medium">
                  {data}
                </p>
              );
            })}
          </div>
          <SubHeaderLink />
        </div>
      </MainContainer>
      <div className="col-span-3 p-6">
        <MainContentNav data={GetStartedNavData} />
      </div>
    </div>
  );
};

export default QuickStartSection;
