import ComponentTypeHeader from "@/common/components/component-type-header";
import { SwitchTab } from "@/common/components/switch-tab";
import {
  alertHtmlCodeData,
  alertJsxCodeData,
  alertPreviewCodeData,
} from "@/constants/sidebar-component/alert/alert.code";
import { IMainContentComponent } from "@/interfaces/indi-component.interface";
import React from "react";

export default function AlertComponent() {
  return (
    <div className="flex flex-col gap-12">
      {_alertData.map((data) => {
        return (
          <div className="space-y-4" id={data.id} key={data.id}>
            <ComponentTypeHeader
              sectionID={data.sectionID}
              title={data.title}
            />
            <SwitchTab
              preview={data.preview}
              html={data.html}
              language={data.language}
              jsx={data.jsx}
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
    sectionID: "#simple-alert",
    title: "Simple Alert",
    language: "html",
    preview: alertPreviewCodeData.defaultAlert,
    html: alertHtmlCodeData.defaultAlert,
    jsx: alertJsxCodeData.defaultAlert,
  },
  {
    id: "info-alert",
    sectionID: "#info-alert",
    title: "Info Alert",
    language: "html",
    preview: alertPreviewCodeData.infoAlert,
    html: alertHtmlCodeData.infoAlert,
    jsx: alertJsxCodeData.infoAlert,
  },
  {
    id: "success-alert",
    sectionID: "#success-alert",
    title: "Success Alert",
    language: "html",
    preview: alertPreviewCodeData.successAlert,
    html: alertHtmlCodeData.successAlert,
    jsx: alertJsxCodeData.successAlert,
  },
  {
    id: "danger-alert",
    sectionID: "#danger-alert",
    title: "Danger Alert",
    language: "html",
    preview: alertPreviewCodeData.dangerAlert,
    html: alertHtmlCodeData.dangerAlert,
    jsx: alertJsxCodeData.dangerAlert,
  },
  {
    id: "warning-alert",
    sectionID: "#warning-alert",
    title: "Warning Alert",
    language: "html",
    preview: alertPreviewCodeData.warningAlert,
    html: alertHtmlCodeData.warningAlert,
    jsx: alertJsxCodeData.warningAlert,
  },
  {
    id: "button-alert",
    sectionID: "#button-alert",
    title: "Alert with buttons",
    language: "html",
    preview: alertPreviewCodeData.buttonAlert,
    html: alertHtmlCodeData.buttonAlert,
    jsx: alertJsxCodeData.buttonAlert,
  },
  {
    id: "bordered-alert",
    sectionID: "#bordered-alert",
    title: "Bordered Alert",
    language: "html",
    preview: alertPreviewCodeData.borderedAlert,
    html: alertHtmlCodeData.borderedAlert,
    jsx: alertJsxCodeData.borderedAlert,
  },
];
