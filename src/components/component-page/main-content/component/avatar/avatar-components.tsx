import ComponentTypeHeader from "@/common/components/component-type-header";
import { SwitchTab } from "@/common/components/switch-tab";
import {
  AvatarCodeData,
  AvatarImageData,
} from "@/constants/sidebar-component/avatar.data";
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
      </ScrollSpy>
    </div>
  );
}

const _avatarData: IMainContentComponent[] = [
  {
    id: "circular-avatar",
    title: "Circular Avatar",
    description:
      "Use the border radius utility classes to make avatars more rounded.",
    preview: AvatarImageData.map((data) => {
      return (
        <Image
          key={data.id}
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="mt-5 rounded-full"
          alt="avatar"
          width={data.width}
          height={data.height}
        />
      );
    }),
    code: AvatarCodeData.CircularAvatarHtml,
    language: "html",
  },
  {
    id: "rounded-avatar",
    title: "Rounded Avatar",
    description:
      "Use the border radius utility classes to make avatars more rounded.",
    preview: AvatarImageData.map((data) => {
      return (
        <Image
          key={data.id}
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="mt-5 rounded-md"
          alt="avatar"
          width={data.width}
          height={data.height}
        />
      );
    }),
    code: AvatarCodeData.RoundedAvatarHtml,
    language: "html",
  },
  {
    id: "placeholder-avatar",
    title: "Placeholder Avatar",
    description:
      "Use the border radius utility classes to make avatars more rounded.",
    preview: AvatarImageData.map((data) => {
      return (
        <Image
          key={data.id}
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="mt-5 rounded-md"
          alt="avatar"
          width={data.width}
          height={data.height}
        />
      );
    }),
    code: AvatarCodeData.PlaceholderIconAvatarHtml,
    language: "html",
  },
];
