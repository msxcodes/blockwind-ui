import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ISwitchTab } from "@/interfaces/indi-component.interface";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { LuCopyCheck } from "react-icons/lu";
import CodeHighlight from "./code-syntax-highlighter";

export function SwitchTab({ preview, html, language }: ISwitchTab) {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopy(true);
    navigator.clipboard.writeText(html);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  return (
    <Tabs defaultValue="preview" className="w-full space-y-3">
      <div className="flex items-center pr-4 justify-between">
        <TabsList className="grid grid-cols-2 ">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="html">Code</TabsTrigger>
        </TabsList>
        <div
          onClick={handleCopy}
          className="flex items-center gap-1 text-sm font-medium cursor-pointer z-50 opacity-70"
        >
          {isCopy ? (
            <>
              <LuCopyCheck />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <BiCopy />
              <span>Copy</span>
            </>
          )}
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
    </Tabs>
  );
}
