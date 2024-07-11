import { WithChildren } from "@/types";

function HeadingOne({ children }: WithChildren) {
  return (
    <>
      <h1 className="text-xl font-bold text-default-900 lg:text-3xl capitalize">
        {children}
      </h1>
    </>
  );
}

export default HeadingOne;
