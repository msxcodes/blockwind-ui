import ContentWrapper from "@/common/components/content-wrapper";
import Header from "@/common/header/header";
import { LeftSideBar } from "@/components/component-page/left-sidebar/left-sidebar";

export default function MainContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="col-span-9 py-8 flex flex-col gap-4 px-4 scrollContainer overflow-hidden overflow-y-auto h-[calc(100vh-6rem)]">
      {children}
    </div>
  );
}
