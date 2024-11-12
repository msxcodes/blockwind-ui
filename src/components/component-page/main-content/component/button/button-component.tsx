import ComponentTypeHeader from "@/common/components/component-type-header";
import { SwitchTab } from "@/common/components/switch-tab";
import { IMainContentComponent } from "@/interfaces/indi-component.interface";
import React from "react";

export default function ButtonComponent() {
  return (
    <div className="flex flex-col gap-12">
      {_buttonData.map((data) => {
        return (
          <div className="space-y-4" id={data.id} key={data.id}>
            <ComponentTypeHeader
              title={data.title}
              description={data.description}
              sectionID="jd"
            />
            <SwitchTab
              preview={data.preview}
              html={data.html}
              language={data.language}
              jsx={"sjd"}
            />
          </div>
        );
      })}
    </div>
  );
}

const _buttonData: IMainContentComponent[] = [
  {
    id: "default-button",
    title: "Default Button",
    description: "The most commonly used button styles.",
    language: "html",
    html: "Code",
    jsx: "Code",
    sectionID: "default-button",
    preview: (
      <div className="flex justify-center mt-2 items-center gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-2 px-4 rounded-md">
          BlockwindUI
        </button>
      </div>
    ),
  },
  {
    id: "radius-button",
    title: "Radius Button",
    description: "Button having different border radius.",
    language: "html",
    html: "Code",
    jsx: "Code",
    sectionID: "radius-button",
    preview: (
      <div className="flex justify-center mt-2 items-center gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-2 px-4 rounded-sm">
          BlockwindUI
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-2 px-4 rounded-lg">
          BlockwindUI
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-2 px-4 rounded-full">
          BlockwindUI
        </button>
      </div>
    ),
  },
  {
    id: "Outline-button",
    title: "Outline Button",
    description: "Button having different border.",
    language: "html",
    html: "Code",
    jsx: "fdksjf",
    sectionID: "outline-button",
    preview: (
      <div className="flex justify-center mt-2 items-center gap-4">
        <button className="border border-blue-500 text-blue-500 transition-all duration-300 py-2 px-4 rounded-lg">
          Outline
        </button>
      </div>
    ),
  },
];
