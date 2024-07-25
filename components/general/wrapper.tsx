import { WithChildren } from "@/types";

function Wrapper({ children }: WithChildren) {
  return <div className="m-auto w-full max-w-[90%] container">{children}</div>;
}

export default Wrapper;
