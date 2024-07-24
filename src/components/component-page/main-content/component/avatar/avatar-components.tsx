import ComponentTypeHeader from "@/common/components/component-type-header";
import { SwitchTab } from "@/common/components/switch-tab";
import {
  AvatarHtmlCodeData,
  AvatarJsxCodeData,
  AvatarPreviewCode,
} from "@/constants/sidebar-component/avatar/avatar.code";
import { IMainContentComponent } from "@/interfaces/indi-component.interface";
import Image from "next/image";
import React from "react";
import ScrollSpy from "react-ui-scrollspy";

export default function AvatarComponents() {
  return (
    <div className="flex flex-col gap-14">
      <ScrollSpy>
        {_avatarData.map((data) => {
          return (
            <div className="space-y-4" id={data.id} key={data.id}>
              <ComponentTypeHeader
                sectionID={data.sectionID}
                title={data.title}
                description={data.description}
              />
              <SwitchTab
                preview={data.preview}
                html={data.html}
                jsx={data.jsx}
                language={data.language}
              />
            </div>
          );
        })}
      </ScrollSpy>
    </div>
  );
}

const _avatarData: IMainContentComponent[] = [
  {
    id: "circular-avatar",
    title: "Circular Avatar",
    sectionID: "#circular-avatar",
    preview: AvatarPreviewCode.circularAvatar,
    html: AvatarHtmlCodeData.circularAvatar,
    jsx: AvatarJsxCodeData.circularAvatar,
    language: "html",
  },
  {
    id: "rounded-avatar",
    title: "Rounded Avatar",
    sectionID: "#rounded-avatar",
    preview: AvatarPreviewCode.roundAvatar,
    html: AvatarHtmlCodeData.roundAvatar,
    jsx: AvatarJsxCodeData.roundAvatar,
    language: "html",
  },
  {
    id: "rounded-avatar",
    title: "Rounded Avatar",
    sectionID: "#rounded-avatar",
    preview: AvatarPreviewCode.bottomStateAvatar,
    html: AvatarHtmlCodeData.bottomStateAvatar,
    jsx: AvatarJsxCodeData.bottomStateAvatar,
    language: "html",
  },
  {
    id: "rounded-avatar",
    title: "Rounded Avatar",
    sectionID: "#rounded-avatar",
    preview: AvatarPreviewCode.topStateAvatar,
    html: AvatarHtmlCodeData.topStateAvatar,
    jsx: AvatarJsxCodeData.topStateAvatar,
    language: "html",
  },
];
