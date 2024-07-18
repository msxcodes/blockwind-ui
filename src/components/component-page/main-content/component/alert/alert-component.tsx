import ComponentTypeHeader from "@/common/components/component-type-header";
import { SwitchTab } from "@/common/components/switch-tab";
import {
  AlertStyleData,
  SoftAlertStyleData,
} from "@/constants/sidebar-component/alert.data";
import { IMainContentComponent } from "@/interfaces/indi-component.interface";
import React from "react";

export default function AlertComponent() {
  return (
    <div className="flex flex-col gap-12">
      {_alertData.map((data) => {
        return (
          <div className="space-y-4" id={data.id} key={data.id}>
            <ComponentTypeHeader
              title={data.title}
              description={data.description}
            />
            <SwitchTab
              preview={data.preview}
              html={data.code}
              language={data.language}
            />
          </div>
        );
      })}
    </div>
  );
}

const _alertData: IMainContentComponent[] = [
  {
    id: "simple-alert",
    title: "Simple Alert",
    description: "The default form of solid color alert.",
    language: "html",
    code: "Code data",
    preview: AlertStyleData.map((data) => {
      return (
        <div
          key={data.id}
          className={`mt-3 font-medium text-sm rounded-lg p-4 ${data.backgroundColor} ${data.textColor}`}
          role="alert"
        >
          {data.text}
        </div>
      );
    }),
  },
  {
    id: "icon-alert",
    title: "Alert with icon",
    description: "The default form of solid color alert.",
    language: "html",
    code: "Code data",
    preview: SoftAlertStyleData.map((data) => {
      return (
        <div
          key={data.id}
          className={`mt-3 flex items-center font-medium text-sm rounded-lg p-4 ${data.backgroundColor} ${data.textColor}`}
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-3 h-5 w-5 flex-shrink-0"
          >
            <path
              fill-rule="evenodd"
              d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{data.text}</span>
          <button className="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      );
    }),
  },
];
