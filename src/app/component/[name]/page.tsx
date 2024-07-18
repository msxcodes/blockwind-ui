"use client";
import AlertSection from "@/components/component-page/main-content/component/alert/alert-section";
import AvatarSection from "@/components/component-page/main-content/component/avatar/avatar-section";
import ButtonSection from "@/components/component-page/main-content/component/button/button-section";
import CardSection from "@/components/component-page/main-content/component/card/card-section";
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

          case "card":
            return <CardSection />;
            break;

          default:
            return <div>Not FOund</div>;
            break;
        }
      })()}
    </div>
  );
}
