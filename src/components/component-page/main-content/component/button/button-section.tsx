import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";
import ButtonComponent from "./button-component";
import MainContentNav from "@/common/components/main-content-nav";
import { ButtonNavData } from "@/constants/sidebar-component/button.data";

export default function ButtonSection() {
  return (
    <div className="grid grid-cols-12">
      <MainContainer>
        <ComponentHeader
          title="TailwindCSS Button"
          description="Use different button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
        />
        <ButtonComponent />
      </MainContainer>
      <MainContentNav data={ButtonNavData} />
    </div>
  );
}
