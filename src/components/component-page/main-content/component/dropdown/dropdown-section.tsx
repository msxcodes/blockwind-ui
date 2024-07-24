import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";

export default function DropdownSection() {
  return (
    <div className="grid grid-cols-12 gap-12">
      <MainContainer>
        <ComponentHeader title="Dropdown" description="" />
      </MainContainer>
    </div>
  );
}
