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

export function LeftSideBar() {
  // Sorting function to sort the sidebar components alphabetically
  const handleSorting = (a: any, b: any) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const sortedFormComponent = FormComponentsData.sort(handleSorting);
  const sortedSidebarComponentData = SidebarComponentData.sort(handleSorting);

  return (
    <Command className="">
      <CommandInput className="" placeholder="Type a command or search..." />
      <CommandList className="">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Getting Started" className="">
          <CommandItem>
            <span>Quick Start</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Components">
          {sortedSidebarComponentData.map((data, index) => {
            return <CommandItem key={index}>{data.name}</CommandItem>;
          })}
        </CommandGroup>
        <CommandGroup heading="Forms">
          {sortedFormComponent.map((data, index) => {
            return <CommandItem key={index}>{data.name}</CommandItem>;
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
