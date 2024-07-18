import { IComponentNavMenu } from "@/interfaces/component-page.interface";
import { ISubHeaderLink } from "@/interfaces/indi-component.interface";

export const BlockwindAboutData: string[] = [
  "BlockwindUI is an UI component library built with Tailwind CSS, designed to help developers create beautiful and responsive interfaces quickly and easily. With a wide range of customizable components, BlockwindUI offers developers the flexibility they need to create interfaces that fit the unique requirements of their projects.",
  "In addition to its powerful customization options, BlockwindUI also provides easy integration with existing projects, allowing developers to get up and running in no time. With the ability to copy code directly to your clipboard and a commitment to staying up-to-date with the latest design trends and best practices, BlockwindUI is a reliable and valuable tool for any developer's toolkit.",
  "Best of all, it's free to use, meaning that you can create websites faster for no additional cost. With BlockwindUI , developers can boost their productivity and create stunning interfaces with ease. Whether you're building a new app from scratch or working on an existing project, BlockwindUI can help you save time and focus on the features that matter most. So why not give it a try and see how it can improve your workflow?",
];

export const SubHeaderLinkData: ISubHeaderLink[] = [
  {
    title: "How To Use?",
    subTitle: "All you need to use BlockwindUI is TailwindCSS",
    linkText: "Learn How To Use TailwindCSS.",
    link: "https://tailwindcss.com/docs/installation",
    id: "how-to-use",
  },
  {
    title: "Using TailwindCSS in a HTML page.",
    subTitle:
      "Tailwind css can be used via a CDN, to add tailwind css to you html page, add the script shown below in the html head tag. Tailwind can be customized by adding the tailwind config in a spearate config file. To konw more about tailwind config file.",
    linkText: "Check Out TailwindCSS CDN",
    link: "https://tailwindcss.com/docs/installation/play-cdn",
    id: "tailwind-cdn",
  },
  {
    title: "Using TailwindCSS in a React project",
    subTitle:
      "Tailwind CSS can be used in may ways in a react project, to know all the frameworks and tailwind supports and how to use them.",
    linkText: "Check Out Vite + React TailwindCSS",
    link: "https://tailwindcss.com/docs/guides/vite",
    id: "tailwind-react",
  },
];

export const GetStartedNavData: IComponentNavMenu[] = [
  {
    name: "BlockwindUI",
    id: "blockwind-ui",
    href: "#blockwind-ui",
  },
  {
    name: "How To Use",
    id: "how-to-use",
    href: "#how-to-use",
  },
  {
    name: "Tailwind CDN",
    id: "tailwind-cdn",
    href: "#tailwind-cdn",
  },
  {
    name: "Tailwind + React",
    id: "tailwind-react",
    href: "#tailwind-react",
  },
];
