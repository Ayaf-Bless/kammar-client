"use client";

import React from "react";
import { Link } from "@nextui-org/link";

import useThemeSwitcher from "@/libs/hooks/useThemeSwitcher";

const Logo: React.FC = () => {
  const { mounted, toggleTheme } = useThemeSwitcher();

  if (!mounted) return null;

  return (
    <div>
      <div className="flex items-center min-w-max">
        <Link
          className="text-xl font-semibold text-gray-800 dark:text-gray-200"
          href="/"
        >
          <span className="relative after:absolute after:inset-0 after:rotate-3 after:border after:border-emerald-600 text-emerald-800 dark:text-white">
            Kammar
          </span>
          ket
          <span
            className="mx-1 h-4 w-4 bg-emerald-800 rounded-full cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleTheme();
              }
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
