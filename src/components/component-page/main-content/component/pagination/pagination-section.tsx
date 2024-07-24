import React from "react";
import MainContainer from "../../main-content.layout";
import ComponentHeader from "@/common/components/component-header";

export default function PaginationSection() {
  return (
    <div className="grid grid-cols-12 gap-12">
      <MainContainer>
        <ComponentHeader title="Pagination" />
      </MainContainer>
    </div>
  );
}
