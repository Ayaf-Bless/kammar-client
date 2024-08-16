import React from "react";
export default function index() {
  return (
    <div className="text-center py-60 lg:py-36   ">
      <h1 className="text-7xl md:text-9xl font-bold text-primary py-2   ">
        404
      </h1>
      <h2 className="md:text-4xl text-2xl lg:text-5xl font-bold text-gray-800 py-2   ">
        Page not found
      </h2>
      <p className="text-md text-gray-600 py-2 px-12 lg:px-96">
        Sorry! We could not find you the page you are looking for. Please check
        URL in address bar and try again.
      </p>
      <div className="text-md text-primary flex justify-center cursor-pointer   ">
        <div className="hover:underline">Go back</div>
        <div>
          <svg
            className="icon icon-tabler icon-tabler-arrow-narrow-right   "
            fill="none"
            height={24}
            stroke="#4338CA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg   "
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <line x1={5} x2={19} y1={12} y2={12} />
            <line x1={15} x2={19} y1={16} y2={12} />
            <line x1={15} x2={19} y1={8} y2={12} />
          </svg>
        </div>
      </div>
    </div>
  );
}
