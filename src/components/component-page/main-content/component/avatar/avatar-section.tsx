"use client";
import ComponentHeader from "@/common/components/component-header";
import { ComponentNavMenu } from "@/common/components/component-navmenu";
import React, { useState } from "react";
import { AvatarBreadcrumbData } from "@/constants/breadcrumbs.data";
import MainContainer from "../../main-content.layout";
import MainContentNav from "../../../../../common/components/main-content-nav";
import AvatarComponents from "./avatar-components";
import MainContentFooter from "@/common/components/main-content-footer";
import { AvatarNavData } from "@/constants/sidebar-component/avatar/avatar.data";

export default function AvatarSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleSetActive = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="grid grid-cols-12">
      <MainContainer>
        <ComponentNavMenu data={AvatarBreadcrumbData} pageTitle="Avatar" />
        <ComponentHeader
          title="Avatar"
          description="Cards provide a flexible and extensible content container with multiple
        variants and options."
        />
        <AvatarComponents />
        <MainContentFooter />
      </MainContainer>
      <MainContentNav data={AvatarNavData} />
    </div>
  );
}
