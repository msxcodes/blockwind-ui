import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ISwitchTab } from "@/interfaces/indi-component.interface";
import { BiCopy } from "react-icons/bi";

export function SwitchTab({ preview, html }: ISwitchTab) {
  return (
    <Tabs defaultValue="preview" className="w-full space-y-3">
      <div className="flex items-center pr-4 justify-between">
        <TabsList className="grid grid-cols-2 ">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="html">Code</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-1 text-sm font-medium opacity-70">
          <BiCopy />
          <span>Copy</span>
        </div>
      </div>
      <TabsContent value="preview">
        <Card className="">
          <CardContent className="flex px-12 justify-start h-full gap-4 items-center">
            {preview}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="html">
        <Card>
          <CardContent className="overflow-hidden overflow-x-auto py-2">
            {html}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
