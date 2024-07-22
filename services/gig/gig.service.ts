import { Igig } from "@/interface/gig";
import { AppResponse } from "@/interface/RequestResponse";
import { api } from "@/store/api";

const PREFIX = "gig";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGig: build.query<AppResponse<Igig>, string>({
      query(id) {
        return {
          url: `${PREFIX}/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),
  }),
});

export const { useGetGigQuery } = authApi;
