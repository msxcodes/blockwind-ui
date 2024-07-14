import ContentWrapper from "@/common/components/content-wrapper";
import { LeftSideBar } from "@/components/component-page/left-sidebar/left-sidebar";
import React from "react";

export default function ComponentPage() {
  return (
    <div className="pt-20 h-screen w-full">
      <ContentWrapper>
        <div className="grid grid-cols-12 h-full px-12">
          <div className="col-span-3 px-4">
            <LeftSideBar />
          </div>
          <div className="col-span-7 ">2</div>
          <div className="col-span-2 ">3</div>
        </div>
      </ContentWrapper>
    </div>
  );
}
