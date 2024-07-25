import { WithChildren } from "@/types";

function HeadingTwo({ children }: WithChildren) {
  return (
    <>
      <h2 className="text-medium font-semibold text-default-900 lg:text-2xl capitalize">
        {children}
      </h2>
    </>
  );
}

export default HeadingTwo;
