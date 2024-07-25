import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { WithChildren } from "@/types";

const badgeStyles = {
  success: "bg-green-50 text-green-700 ring-green-600/20",
  danger: "bg-red-50 text-red-700 ring-red-600/10",
  warning: "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
  info: "bg-blue-50 text-blue-700 ring-blue-700/10",
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-700/10",
  purple: "bg-purple-50 text-purple-700 ring-purple-700/10",
  pink: "bg-pink-50 text-pink-700 ring-pink-700/10",
  gray: "bg-gray-50 text-gray-600 ring-gray-500/10",
};

interface Prop {
  type:
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "indigo"
    | "purple"
    | "pink"
    | "gray";
}

const Badge = ({ type, children }: Prop & WithChildren) => {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
        badgeStyles[type],
      )}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  type: PropTypes.oneOf([
    "success",
    "danger",
    "warning",
    "info",
    "indigo",
    "purple",
    "pink",
    "gray",
  ]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Badge;
