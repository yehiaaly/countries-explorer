"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  return (
    <>
      <div className="flex justify-between px-8 items-center h-28 shadow-lg bg-element text-foreground">
        <Link href={`/`}>
          <h1 className="font-extrabold cursor-pointer hover:bg-hover transition-all duration-300 p-2 rounded-lg">
            Where in the world?
          </h1>
        </Link>
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          className="cursor-pointer "
        >
          {mounted && resolvedTheme === "light" ? (
            <div className="flex gap-2 items-center justify-center hover:bg-hover p-2 rounded-lg transition-all hover:scale-105 duration-300">
              <Moon size={20} />
              <span className="text-sm font-semibold">Dark Mode</span>
            </div>
          ) : mounted && resolvedTheme === "dark" ? (
            <div className="flex gap-2 items-center justify-center hover:bg-hover p-2 rounded-lg transition-all hover:scale-105 duration-300">
              <Sun size={20} />
              <span className="text-sm font-semibold">Light Mode</span>
            </div>
          ) : (
            <span className="flex items-center gap-2 invisible opacity-0">
              <Moon size={20} />
              <span className="text-sm font-semibold">Dark Mode</span>
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
