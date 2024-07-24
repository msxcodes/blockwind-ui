// app/components/ThemeSwitcher.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { RiSunFill } from "react-icons/ri";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex justify-center items-center size-[30px] ">
      <button
        onClick={() => setTheme("light")}
        className="scale-0 p-1.5 transition-opacity duration-300 rounded-full hover:bg-neutral-800 absolute hover:text-yellow-500 opacity-50 hover:opacity-100 dark:scale-125 hover:rotate-[-140deg]"
      >
        <RiSunFill
          fontSize={"18px"}
          className="hover:opacity-100 transition-all duration-75"
        />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="scale-125 absolute dark:scale-0 hover:rotate-[-140deg] transition-all duration-500"
      >
        <FaMoon className="opacity-50" />
      </button>
    </div>
  );
}
