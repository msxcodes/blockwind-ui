"use client";
import { ThemeSwitcher } from "@/common/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { navItems } from "@/constants/header.data";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const NavMenu = () => {
  const path = usePathname();
  return (
    <nav
      aria-labelledby="header-navigation"
      className=" peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-max flex-col items-center overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-center "
    >
      <h2 className="sr-only" id="header-navigation">
        Header navigation
      </h2>

      <ul className="flex flex-col items-end mx-4 sm:flex-row">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              className={`${
                item.link === path
                  ? "opacity-100 font-semibold"
                  : "opacity-50 font-medium"
              } text-sm sm:ml-6 hover:opacity-100  transition-all duration-300`}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="h-5 border-l mx-2 dark:opacity-20 rounded-full" />
      <ul className="mt-4 flex sm:mt-0 items-center opacity-70">
        <li className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-all duration-300">
          <a href="https://github.com/msxcodes" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-all duration-300">
          <a href="https://twitter.com/msxcodes" target="_blank">
            <FaTwitter />
          </a>
        </li>
      </ul>
      <div className="h-5 border-l mx-2 dark:opacity-20 w-0" />
      <span className="hidden md:block p-1 hover:bg-gray-200 dark:hover:bg-neutral-800 transition-all duration-300 rounded-full">
        <ThemeSwitcher />
      </span>
    </nav>
  );
};

export default NavMenu;
