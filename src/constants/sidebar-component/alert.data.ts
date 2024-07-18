import { IComponentNavMenu } from "@/interfaces/component-page.interface";

export const AlertStyleData = [
  {
    id: 1,
    textColor: "text-white",
    backgroundColor: "bg-blue-500",
    text: "Info alert! You should check in on some of those fields below. ",
  },
  {
    id: 2,
    textColor: "text-white",
    backgroundColor: "bg-red-500",
    text: "Danger alert! You should check in on some of those fields below. ",
  },
  {
    id: 3,
    textColor: "text-white",
    backgroundColor: "bg-yellow-500",
    text: "Danger alert! You should check in on some of those fields below. ",
  },
  {
    id: 4,
    textColor: "text-white",
    backgroundColor: "bg-green-500",
    text: "Danger alert! You should check in on some of those fields below. ",
  },
];

export const SoftAlertStyleData = [
  {
    id: 1,
    textColor: "text-blue-800",
    backgroundColor: "bg-blue-200",
    text: "Info alert! You should check in on some of those fields below. ",
  },
  {
    id: 2,
    textColor: "text-red-800",
    backgroundColor: "bg-red-200",
    text: "Danger alert! You should check in on some of those fields below. ",
  },
  {
    id: 3,
    textColor: "text-yellow-800",
    backgroundColor: "bg-yellow-200",
    text: "Danger alert! You should check in on some of those fields below. ",
  },
  {
    id: 4,
    textColor: "text-green-800",
    backgroundColor: "bg-green-200",
    text: "Danger alert! You should check in on some of those fields below. ",
  },
];

export const AlertNavMenuData: IComponentNavMenu[] = [
  {
    name: "Simple Alert",
    id: "simple-alert",
    href: "#simple-alert",
  },
  {
    name: "Soft Alert",
    id: "soft-alert",
    href: "#soft-alert",
  },
  {
    name: "Alert with icon",
    id: "icon-alert",
    href: "#icon-alert",
  },
];
