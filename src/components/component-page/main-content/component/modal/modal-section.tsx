import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";

export default function ModalSection() {
  return (
    <div className="grid grid-cols-12 gap-12">
      <MainContainer>
        <ComponentHeader title="Modal" />
      </MainContainer>
    </div>
  );
}
