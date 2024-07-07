import Logo from "../../logo/Logo";

import GoBackOnboarding from "./goBack";

import { WithChildren } from "@/types";

export const OnboardingUserSideBar = ({ children }: WithChildren) => {
  return (
    <div className="flex flex-col justify-between h-[90vh]">
      <div className="flex flex-col gap-14">
        <Logo />
        {children}
      </div>

      <GoBackOnboarding />
    </div>
  );
};
