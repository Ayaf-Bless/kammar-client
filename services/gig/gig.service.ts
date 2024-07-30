import { IGig } from "@/interface/gig";
import { IGigcategory } from "@/interface/gig/category";
import { AppResponse } from "@/interface/RequestResponse";
import { api } from "@/store/api";

const PREFIX = "gig";

export const gigApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGig: build.query<AppResponse<IGig>, string>({
      query(id) {
        return {
          url: `${PREFIX}/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getGigBySlug: build.query<AppResponse<IGig>, string>({
      query(slug) {
        return {
          url: `${PREFIX}/slug/${slug}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getPopularGig: build.query<AppResponse<IGig[]>, number>({
      query(limit = 5) {
        return {
          url: `${PREFIX}/popular?limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getTrendingGigs: build.query<AppResponse<IGig[]>, number>({
      query(limit = 5) {
        return {
          url: `${PREFIX}/trending?limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getTopRatedGigs: build.query<AppResponse<IGig[]>, number>({
      query(limit = 5) {
        return {
          url: `${PREFIX}/top-rated?limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getNewGig: build.query<AppResponse<IGig[]>, number>({
      query(limit = 5) {
        return {
          url: `${PREFIX}/new?limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getFlashGigs: build.query<AppResponse<IGig[]>, number>({
      query(limit = 5) {
        return {
          url: `${PREFIX}/flash?limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getMostLikedGigs: build.query<AppResponse<IGig[]>, number>({
      query(limit = 5) {
        return {
          url: `${PREFIX}/most-liked?limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getPendingGig: build.query<AppResponse<IGig[]>, string>({
      query(sellerId) {
        return {
          url: `${PREFIX}/seller/${sellerId}/pending`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getRejectedGig: build.query<AppResponse<IGig[]>, string>({
      query(sellerId) {
        return {
          url: `${PREFIX}/seller/${sellerId}/rejected`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    getArchivedGig: build.query<AppResponse<IGig[]>, string>({
      query(sellerId) {
        return {
          url: `${PREFIX}/seller/${sellerId}/archived`,
          method: "GET",
        };
      },
      providesTags: ["Gig"],
    }),

    createGig: build.mutation<AppResponse<IGig>, IGig>({
      query(body) {
        return {
          url: `${PREFIX}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Gig"],
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
