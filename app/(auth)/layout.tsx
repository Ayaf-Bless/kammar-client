import { WithChildren } from "@/types";

function Layout({ children }: WithChildren) {
  return (
    <div className="w-screen h-screen p-2 flex items-start justify-center">
      {children}
    </div>
  );
}

export default Layout;
