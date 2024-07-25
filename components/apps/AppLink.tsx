import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { WithChildren } from "@/types";

export interface Prop {
  href: string;
  size?: "sm" | "md" | "lg" | undefined;
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  isExternal?: boolean;
  showAnchorIcon?: boolean;
  className: string;
}

function AppLink({
  children,
  href,
  size,
  color,
  isExternal,
  showAnchorIcon,
  className,
}: WithChildren & Prop) {
  return (
    <Link
      as={NextLink}
      className={className}
      color={color}
      href={href}
      isExternal={isExternal}
      showAnchorIcon={showAnchorIcon}
      size={size}
    >
      {children}
    </Link>
  );
}

export default AppLink;
