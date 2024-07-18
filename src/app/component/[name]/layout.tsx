import ContentWrapper from "@/common/components/content-wrapper";
import Header from "@/common/header/header";
import { LeftSideBar } from "@/components/component-page/left-sidebar/left-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="pt-20 h-screen w-full">
        <ContentWrapper>
          <div className="grid grid-cols-12 h-full px-12">
            <div className="col-span-3 px-4">
              <LeftSideBar />
            </div>
            <div className="col-span-9">{children}</div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}
