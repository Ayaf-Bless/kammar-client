import { Link } from "@nextui-org/link";
import React from "react";

interface Prop {
  hasHref?: boolean;
}

const Logo = ({ hasHref }: Prop) => {
  return (
    <div>
      <Link href={hasHref ? "/" : "#"}>
        <div className="inline-flex items-center space-x-1 text-2xl font-bold text-gray-900 dark:text-white">
          <span>kam</span>
          <span className="h-4 w-4 bg-primary rounded-full cursor-pointer" />
          <span> mar</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
