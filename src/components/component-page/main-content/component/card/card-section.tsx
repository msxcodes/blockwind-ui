import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";
import CardComponent from "./card-component";
import MainContentNav from "@/common/components/main-content-nav";
import { CardNavData } from "@/constants/sidebar-component/card.data";

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
      <MainContentNav data={CardNavData} />
    </div>
  );
}
