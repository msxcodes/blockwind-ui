import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  IComponentBreadcrumb,
  IComponentBreadcrumbProps,
} from "@/interfaces/indi-component.interface";

export function ComponentNavMenu({
  data,
  pageTitle,
}: IComponentBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <BreadcrumbItem>
                <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          );
        })}

        <BreadcrumbItem className="cursor-pointer">
          <BreadcrumbPage className="font-semibold">{pageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
