export interface IAvatarImage {
  id: number;
  src: string;
  width: number;
  height: number;
}

export interface IAvatarPlaceHolderIcon {
  id: number;
  width: number;
  height: number;
  size: number;
}

export interface IComponentTypeHeader {
  title: string;
  description: string;
}
export interface ISwitchTab {
  preview: any;
  html: any;
  language: string;
}

export interface IComponentBreadcrumb {
  title: string;
  link: string;
}

export interface IComponentBreadcrumbProps {
  data: IComponentBreadcrumb[];
  pageTitle: string;
}
export interface ISubHeaderLink {
  title: string;
  subTitle: string;
  linkText: string;
  link: string;
  id: string;
}

export interface IMainContentComponent {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  preview: any;
}
