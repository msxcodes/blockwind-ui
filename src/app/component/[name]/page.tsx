"use client";
import AlertSection from "@/components/component-page/main-content/component/alert/alert-section";
import AvatarSection from "@/components/component-page/main-content/component/avatar/avatar-section";
import BadgeSection from "@/components/component-page/main-content/component/badge/badge-section";
import ButtonSection from "@/components/component-page/main-content/component/button/button-section";
import CardSection from "@/components/component-page/main-content/component/card/card-section";
import DividerSection from "@/components/component-page/main-content/component/divider/divider-section";
import DropdownSection from "@/components/component-page/main-content/component/dropdown/dropdown-section";
import ModalSection from "@/components/component-page/main-content/component/modal/modal-section";
import PaginationSection from "@/components/component-page/main-content/component/pagination/pagination-section";
import ProgressSection from "@/components/component-page/main-content/component/progress/progress-section";
import TabSection from "@/components/component-page/main-content/component/tab/tab-section";
import TableSection from "@/components/component-page/main-content/component/tabel/tabel-section";
import TooltipSection from "@/components/component-page/main-content/component/tooltip/tooltip-section";
import QuickStartSection from "@/components/component-page/main-content/quick-start/quick-start-section";
import { usePathname } from "next/navigation";

export default function ComponentDetailPage() {
  const path = usePathname();
  const componentName = path.split("/")[2];
  return (
    <div>
      {(() => {
        switch (componentName) {
          case "quick-start":
            return <QuickStartSection />;
            break;

          case "alert":
            return <AlertSection />;
            break;

          case "avatar":
            return <AvatarSection />;
            break;

          case "button":
            return <ButtonSection />;
            break;

          case "badge":
            return <BadgeSection />;
            break;

          case "card":
            return <CardSection />;
            break;

          case "divider":
            return <DividerSection />;
            break;

          case "dropdown":
            return <DropdownSection />;
            break;

          case "modal":
            return <ModalSection />;
            break;

          case "pagination":
            return <PaginationSection />;
            break;

          case "progress":
            return <ProgressSection />;
            break;

          case "tab":
            return <TabSection />;
            break;

          case "table":
            return <TableSection />;
            break;

          case "tooltip":
            return <TooltipSection />;
            break;

          default:
            return (
              <div className="flex justify-center items-center">
                Page Not Found | 404{" "}
              </div>
            );
            break;
        }
      })()}
    </div>
  );
}
