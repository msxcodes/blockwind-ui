// app/components/ThemeSwitcher.tsx
"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
        className="scale-0 absolute  dark:scale-125"
      >
        <SunIcon fontSize={"18px"} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="scale-125 absolute dark:scale-0"
      >
        <MoonIcon />
      </button>
    </div>
  );
}
