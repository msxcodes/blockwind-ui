"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  FormComponentsData,
  SidebarComponentData,
} from "@/constants/component-page.data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LeftSideBar() {
  // Sorting function to sort the sidebar components alphabetically
  const handleSorting = (a: any, b: any) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const path = usePathname();
  console.log(path);

  const sortedFormComponent = FormComponentsData.sort(handleSorting);
  const sortedSidebarComponentData = SidebarComponentData.sort(handleSorting);

  return (
    <Command className="">
      <CommandInput className="" placeholder="Type a command or search..." />
      <CommandList className="">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Getting Started" className="">
          <CommandItem
            className={`${
              path === "/component/quick-start" &&
              "opacity-100 font-semibold border-l-4 border-blue-500 bg-accent text-accent-foreground"
            }`}
          >
            <Link className="px-4 py-1.5 size-full" href={"quick-start"}>
              Quick Start
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Components">
          {sortedSidebarComponentData.map((data, index) => {
            return (
              <CommandItem
                key={index}
                className={` ${
                  path === data.link &&
                  "opacity-100 font-semibold border-l-4 border-blue-500 bg-accent text-accent-foreground"
                }`}
              >
                <Link className="px-4 py-1.5 size-full" href={data.link}>
                  {data.name}
                </Link>
              </CommandItem>
            );
          })}
        </CommandGroup>
        <CommandGroup heading="Forms">
          {sortedFormComponent.map((data, index) => {
            return (
              <CommandItem
                key={index}
                className={` ${
                  path === data.link &&
                  "opacity-100 font-semibold border-l-4 border-blue-500 bg-accent text-accent-foreground"
                }`}
              >
                <Link className="px-4 py-1.5 size-full" href={data.link}>
                  {data.name}
                </Link>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
