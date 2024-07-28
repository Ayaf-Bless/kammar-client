import { createContext } from "react";

const innitialGig: any = null;
const innitialSeller: any = null;

export const GigContext = createContext({
  gig: innitialGig,
  seller: innitialSeller,
  isLoading: true,
});
