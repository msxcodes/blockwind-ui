import { ThemeSwitcher } from "@/common/components/theme-toggle";
import Link from "next/link";
import NavMenu from "./nav-menu";

const Header = () => {
  return (
    <header className="mb-2 shadow bg-white/30 dark:bg-black dark:shadow-neutral-800 fixed z-30 w-full ">
      <div className="relative flex max-w-screen-2xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
        {/* <img className="h-8 w-8" src="" alt="" /> */}
        <div className="cursor-pointer font-semibold text-2xl">
          <Link href={"/"}>
            <span className="cursor-pointer">BlockwindUI</span>
          </Link>
        </div>

        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute flex items-center gap-3 right-4 top-5 cursor-pointer sm:hidden"
          htmlFor="navbar-open"
        >
          <span>
            <ThemeSwitcher />
          </span>
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
