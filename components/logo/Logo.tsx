"use client";

import React from "react";
import { Link } from "@nextui-org/link";

import useThemeSwitcher from "@/libs/hooks/useThemeSwitcher";

interface Prop {
  hasHref?: boolean;
}

const Logo: React.FC<Prop> = ({ hasHref }) => {
  const { mounted, toggleTheme } = useThemeSwitcher();

  if (!mounted) return null;

  return (
    <div>
      <Link href={hasHref ? "/" : "#"}>
        <div className="inline-flex items-center space-x-1 text-2xl font-bold text-gray-900 dark:text-white">
          <span>kam</span>
          <span
            className="h-4 w-4 bg-primary rounded-full cursor-pointer"
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
          <span>mar</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
