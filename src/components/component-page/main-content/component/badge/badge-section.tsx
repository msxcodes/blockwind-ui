import MainContentNav from "@/common/components/main-content-nav";
import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";

export default function BadgeSection() {
  return (
    <div className="grid grid-cols-12 gap-12">
      <MainContainer>
        <ComponentHeader title="TailwindCSS Badge" description="" />
      </MainContainer>
    </div>
  );
}
