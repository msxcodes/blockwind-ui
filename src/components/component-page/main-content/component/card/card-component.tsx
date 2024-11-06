import ComponentTypeHeader from "@/common/components/component-type-header";
import { SwitchTab } from "@/common/components/switch-tab";
import { IMainContentComponent } from "@/interfaces/indi-component.interface";
import { divider } from "@nextui-org/react";
import React from "react";

export default function CardComponent() {
  return (
    <div className="flex flex-col gap-12">
      {_cardData.map((data) => {
        return (
          <div className="space-y-4" id={data.id} key={data.id}>
            <ComponentTypeHeader
              title={data.title}
              description={data.description}
              sectionID=""
            />
            <SwitchTab
              preview={data.preview}
              language={data.language}
              html={data.html}
            />
          </div>
        );
      })}
    </div>
  );
}

const _cardData: IMainContentComponent[] = [
  {
    id: "simple-card",
    title: "Simple Card",
    description:
      "Cards provide a flexible and extensible content container with multiple variants and options.",
    code: "Card Code",
    language: "html",
    preview: (
      <div className="flex justify-center items-center mt-2">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl max-w-[300px]  dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <img
            className="w-full h-auto rounded-t-xl"
            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Card Title
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "background-card",
    title: "Card with background",
    description:
      "Cards provide a flexible and extensible content container with multiple variants and options.",
    code: "Card Code",
    language: "html",
    preview: (
      <div className="flex justify-center items-center mt-2">
        <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
          <div>
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="w-full object-cover"
              alt=""
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <p className="mb-1 text-sm text-white text-opacity-80">
              Andrea Felsted • <time>18 Nov 2022</time>
            </p>
            <h3 className="text-xl font-medium text-white">
              Migrating to Sailboat UI
            </h3>
            <p className="mt-1 text-white text-opacity-80">
              Sailboat UI is a modern UI component library for Tailwind CSS. Get
              started with 150+ open source components.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];
