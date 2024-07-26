import { HomeIcon } from "@heroicons/react/24/outline";
import React from "react";

export interface BreadcrumbItem {
  text: string;
  link: string;
}
interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="mx-auto flex items-center space-x-2 px-4 sm:px-6 lg:px-8">
        <li>
          <div className="flex items-center">
            <a
              className="mr-2 text-sm flex font-medium hover:text-default-500"
              href="/"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              <span>Home</span>
            </a>
            <svg
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
              fill="currentColor"
              height={20}
              viewBox="0 0 16 20"
              width={16}
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <div className="flex items-center">
              {index < breadcrumbs.length - 1 ? (
                <>
                  <a
                    className="mr-2 text-sm flex font-medium hover:text-default-500"
                    href={breadcrumb.link}
                  >
                    {breadcrumb.text}
                  </a>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                    fill="currentColor"
                    height={20}
                    viewBox="0 0 16 20"
                    width={16}
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </>
              ) : (
                <span className="mr-2 text-sm flex font-medium text-default-500">
                  {breadcrumb.text}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
