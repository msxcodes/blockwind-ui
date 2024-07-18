import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";
import CardComponent from "./card-component";

export default function CardSection() {
  return (
    <div className="grid grid-cols-12 gap-12">
      <MainContainer>
        <ComponentHeader
          title="TailwindCSS Card"
          description="Cards provide a flexible and extensible content container with multiple variants and options."
        />
        <CardComponent />
      </MainContainer>
    </div>
  );
}
