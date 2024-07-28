import { AppResponse } from "@/interface/RequestResponse";
import { ISeller } from "@/interface/sellers";
import { api } from "@/store/api";

const PREFIX = "seller";

export const sellerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSellerByUsename: build.query<AppResponse<ISeller>, string>({
      query(username) {
        return {
          url: `${PREFIX}/username/${username}`,
          method: "GET",
        };
      },
      providesTags: ["Seller"],
    }),
  }),
});

export const { useGetSellerByUsenameQuery } = sellerApi;
