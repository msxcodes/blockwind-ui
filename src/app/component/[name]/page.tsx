import CodeHighlight from "@/common/components/code-syntax-highlighter";
import ComponentHeader from "@/common/components/component-header";
import { ComponentNavMenu } from "@/common/components/component-navmenu";
import ComponentTypeHeader from "@/common/components/component-type-header";
import { SwitchTab } from "@/common/components/switch-tab";
import { AvatarCodeData } from "@/constants/avatar-code.data";
import {
  AvatarImageData,
  AvatarPlaceholderIcon,
} from "@/constants/indi-component.data";
import Image from "next/image";
import React from "react";

export default function ComponentDetailPage() {
  return (
    <div className="py-8 flex flex-col gap-4 px-4 overflow-hidden overflow-y-auto h-[calc(100vh-6rem)]">
      <ComponentNavMenu />
      <ComponentHeader />
      <div className="flex flex-col gap-14">
        <div className="space-y-4">
          <ComponentTypeHeader
            title="Circular Avatar"
            description="Use the border radius utility classes to make avatars more rounded."
          />
          <SwitchTab
            preview={AvatarImageData.map((data) => {
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
            })}
            html={
              <CodeHighlight
                code={AvatarCodeData.CircularAvatarHtml}
                language="html"
              />
            }
          />
        </div>
        <div className="space-y-4">
          <ComponentTypeHeader
            title="Rounded Avatar"
            description="Use the border radius utility classes to make avatars more rounded."
          />
          <SwitchTab
            preview={AvatarImageData.map((data) => {
              return (
                <Image
                  key={data.id}
                  src={
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  className="mt-5 rounded-lg"
                  alt="avatar"
                  width={data.width}
                  height={data.height}
                />
              );
            })}
            html={
              <CodeHighlight
                code={AvatarCodeData.RoundedAvatarHtml}
                language="html"
              />
            }
          />
        </div>
        <div className="space-y-4">
          <ComponentTypeHeader
            title="Placeholder Icon Avatar"
            description="Use the border radius utility classes to make avatars more rounded."
          />
          <SwitchTab
            preview={AvatarPlaceholderIcon.map((data) => {
              return (
                <span
                  key={data.id}
                  className={`bg-gray-200 mt-5 rounded-full overflow-hidden size-${data.size} flex justify-center items-center`}
                >
                  <svg
                    width={data.width}
                    height={data.height}
                    className="text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"></path>
                  </svg>
                </span>
              );
            })}
            html={
              <CodeHighlight
                code={AvatarCodeData.PlaceholderIconAvatarHtml}
                language="html"
              />
            }
          />
        </div>
      </div>
      <span className="text-center mt-12 opacity-30 font-medium">
        © 2024 Blockwind UI.
      </span>
    </div>
  );
}
