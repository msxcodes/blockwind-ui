import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ISwitchTab } from "@/interfaces/indi-component.interface";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { LuCopyCheck } from "react-icons/lu";
import CodeHighlight from "./code-syntax-highlighter";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./theme-toggle";

export function SwitchTab({ preview, html, language, jsx }: ISwitchTab) {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("preview");

  const handleCopy = () => {
    setIsCopy(true);
    if (activeTab === "html") {
      navigator.clipboard.writeText(html);
    } else {
      navigator.clipboard.writeText(jsx);
    }
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  return (
    <Tabs defaultValue="preview" className="w-full space-y-3">
      <div className="flex items-center pr-4 justify-between">
        <TabsList className="grid grid-cols-3 ">
          <TabsTrigger value="preview" onClick={() => setActiveTab("preview")}>
            Preview
          </TabsTrigger>
          <TabsTrigger value="html" onClick={() => setActiveTab("html")}>
            HTML
          </TabsTrigger>
          <TabsTrigger value="jsx" onClick={() => setActiveTab("jsx")}>
            JSX
          </TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-3">
          <div
            onClick={handleCopy}
            className="flex items-center gap-1 text-sm font-medium cursor-pointer z-50 opacity-70"
          >
            {isCopy ? (
              <Button
                variant={"outline"}
                className="flex justify-center items-center gap-2"
              >
                <LuCopyCheck />
                <span>Copied!</span>
              </Button>
            ) : (
              <Button
                variant={"outline"}
                className="flex justify-center items-center gap-2"
              >
                <BiCopy />
                <span>Copy</span>
              </Button>
            )}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <TabsContent value="preview">
        <Card className="pt-4">
          <CardContent className="px-12 h-full gap-4 items-center">
            {preview}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="html">
        <Card className="bg-black">
          <CardContent className="overflow-hidden overflow-x-auto py-2">
            <CodeHighlight code={html} language={language} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="jsx">
        <Card className="bg-black">
          <CardContent className="overflow-hidden overflow-x-auto py-2 ">
            <CodeHighlight code={jsx} language={language} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
