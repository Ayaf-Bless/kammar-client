import { Igig } from "@/interface/gig";
import { IGigcategory } from "@/interface/gig/category";
import { AppResponse } from "@/interface/RequestResponse";
import { api } from "@/store/api";

const PREFIX = "gig";

export const gigApi = api.injectEndpoints({
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

    getGigBySlug: build.query<AppResponse<Igig>, string>({
      query(slug) {
        return {
          url: `${PREFIX}/slug/${slug}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getGigCategory: build.query<AppResponse<IGigcategory[]>, void>({
      query() {
        return {
          url: `${PREFIX}/categories`,
          method: "GET",
        };
      },
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetGigQuery, useGetGigCategoryQuery, useGetGigBySlugQuery } =
  gigApi;
