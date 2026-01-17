"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
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
      <div className="flex justify-between px-8 items-center h-28 shadow-lg">
        <h1 className="font-extrabold">Where is in the world?</h1>
        <button
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          {mounted && resolvedTheme === "light" ? (
            <div className="flex gap-2 items-center justify-center">
              <Moon size={20} />
              <span className="text-sm font-medium">Dark Mode</span>
            </div>
          ) : mounted && resolvedTheme === "dark" ? (
            <div className="flex gap-2 items-center justify-center">
              <Sun size={20} />
              <span className="text-sm font-medium">Light Mode</span>
            </div>
          ) : (
            <span className="flex items-center gap-2 invisible opacity-0">
              <Moon size={20} />
              <span className="text-sm font-medium">Dark Mode</span>
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
