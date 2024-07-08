import { useAppSelector } from "@/store/store";
import { selectCurrentUser } from "@/store/store";

export const useCurrentUser = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  return currentUser;
};
