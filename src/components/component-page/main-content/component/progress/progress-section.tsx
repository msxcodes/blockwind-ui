import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";

export default function ProgressSection() {
  return (
    <div className="flex flex-col gap-12">
      <MainContainer>
        <ComponentHeader title="TailwindCSS Progress" />
      </MainContainer>
    </div>
  );
}
