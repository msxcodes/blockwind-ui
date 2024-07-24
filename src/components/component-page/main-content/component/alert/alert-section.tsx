import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";
import ComponentTypeHeader from "@/common/components/component-type-header";
import AlertComponent from "./alert-component";
import MainContentNav from "@/common/components/main-content-nav";
import { AlertNavMenuData } from "@/constants/sidebar-component/alert/alert.data";
import MainContentFooter from "@/common/components/main-content-footer";

export default function AlertSection() {
  return (
    <div className="grid grid-cols-12">
      <MainContainer>
        <ComponentHeader
          title="Alert"
          description="The Alert is typically used to display important messages or notifications to users."
        />
        <AlertComponent />
        <MainContentFooter />
      </MainContainer>
      <MainContentNav data={AlertNavMenuData} />
    </div>
  );
}
