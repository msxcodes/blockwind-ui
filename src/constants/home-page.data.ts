import componentIcon from "../../public/icons/component-icon1.png";
import serviceIcon from "../../public/icons/service-icon.png";
import fastIcon from "../../public/icons/fast-icon.png";
import { IAboutCardProps } from "@/interfaces/home-page.interface";

export const AboutCardData: IAboutCardProps[] = [
  {
    id: 1,
    title: "750+ Free Components & Examples",
    description:
      "Hundreds of component examples for all your website needs that meet accessibility criteria.",
    image: componentIcon.src,
  },
  {
    id: 2,
    title: "Universal Framework Compatibility",
    description:
      "It is fully compatible wherever Tailwind CSS is in action, from React to NextJs and beyond.",
    image: serviceIcon.src,
  },
  {
    id: 3,
    title: "Fast & Light",
    description:
      "Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.",
    image: fastIcon.src,
  },
];
