import { ThemeSwitcher } from "@/common/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { navItems } from "@/constants/header.data";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const NavMenu = () => {
  return (
    <nav
      aria-labelledby="header-navigation"
      className="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-center "
    >
      <h2 className="sr-only" id="header-navigation">
        Header navigation
      </h2>

      <ul className="flex flex-col items-center sm:flex-row">
        {navItems.map((item) => {
          return (
            <li className="font-semibold text-md sm:mr-6 opacity-50 hover:opacity-100 transition-all duration-300">
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <ul className="mt-4 gap-3 flex sm:mt-0 items-center">
        <li>
          <div className="flex items-center px-3 rounded-md border border-neutral-700 p-1 ">
            <IoSearch className="opacity-60" />
            <Input
              type="text"
              className="border-none size-full"
              placeholder="Search"
            />
          </div>
        </li>
        <li className="hidden md:block p-1 hover:bg-gray-200 dark:hover:bg-neutral-800 transition-all duration-300 rounded-full">
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
