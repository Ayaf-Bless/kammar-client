import { IReview } from "@/interface/general/review";
import { AppResponse } from "@/interface/RequestResponse";
import { IPortfolio, ISeller } from "@/interface/sellers";
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

    becomeSeller: build.mutation<AppResponse<ISeller>, ISeller>({
      query(body) {
        return {
          url: `${PREFIX}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Seller"],
    }),

    becomeSponsor: build.mutation<AppResponse<ISeller>, void>({
      query() {
        return {
          url: `${PREFIX}/become-sponsor`,
          method: "PATCH",
          body: {},
        };
      },
      invalidatesTags: ["Seller"],
    }),

    getSellerReview: build.query<AppResponse<ISeller>, string>({
      query(id) {
        return {
          url: `${PREFIX}/reviews/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Seller"],
    }),

    getSellerReviews: build.query<AppResponse<ISeller>, string>({
      query(sellerId) {
        return {
          url: `${PREFIX}/${sellerId}/reviews`,
          method: "GET",
        };
      },
      providesTags: ["Seller"],
    }),

    updateReview: build.mutation<
      AppResponse<ISeller>,
      { reviewId: string; review: Partial<IReview> }
    >({
      query(data) {
        return {
          url: `${PREFIX}/reviews/${data.reviewId}`,
          method: "PATCH",
          body: data.review,
        };
      },
      invalidatesTags: ["Seller"],
    }),

    addPortfolio: build.mutation<
      AppResponse<ISeller>,
      { sellerId: string; portfolio: IPortfolio }
    >({
      query(data) {
        return {
          url: `${PREFIX}/${data.sellerId}/portfolio`,
          method: "POST",
          body: data.portfolio,
        };
      },
      invalidatesTags: ["Seller"],
    }),

    updatePortfolio: build.mutation<
      AppResponse<ISeller>,
      { sellerId: string; portfolioId: string; portfolio: Partial<IPortfolio> }
    >({
      query(data) {
        return {
          url: `${PREFIX}/${data.sellerId}/portfolio/${data.portfolioId}`,
          method: "PATCH",
          body: data.portfolio,
        };
      },
      invalidatesTags: ["Seller"],
    }),

    deletePortfolio: build.mutation<
      AppResponse<ISeller>,
      { sellerId: string; portfolioId: string }
    >({
      query(data) {
        return {
          url: `${PREFIX}/${data.sellerId}/portfolio/${data.portfolioId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Seller"],
    }),

    deleteReview: build.mutation<AppResponse<ISeller>, string>({
      query(reviewId) {
        return {
          url: `${PREFIX}/reviews/${reviewId}`,
          method: "DELETE",
          body: {},
        };
      },
      invalidatesTags: ["Seller"],
    }),

    getSellerById: build.query<AppResponse<ISeller>, string>({
      query(id) {
        return {
          url: `${PREFIX}/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Seller"],
    }),

    updateSeller: build.query<
      AppResponse<ISeller>,
      { sellerId: string; seller: Partial<ISeller> }
    >({
      query(data) {
        return {
          url: `${PREFIX}/${data.sellerId}`,
          method: "PATCH",
          body: data.seller,
        };
      },
      providesTags: ["Seller"],
    }),

    deleteSeller: build.query<AppResponse<ISeller>, string>({
      query(id) {
        return {
          url: `${PREFIX}/${id}`,
          method: "DELETE",
        };
      },
      providesTags: ["Seller"],
    }),

    getSellerOfACategory: build.query<AppResponse<ISeller>, string>({
      query(categoryId) {
        return {
          url: `${PREFIX}/category/${categoryId}`,
          method: "GET",
        };
      },
      providesTags: ["Seller"],
    }),

    getSponsoredSellerOfACategory: build.query<AppResponse<ISeller>, string>({
      query(categoryId) {
        return {
          url: `${PREFIX}/category/${categoryId}/sponsor`,
          method: "GET",
        };
      },
      providesTags: ["Seller"],
    }),
  }),
});

export const {
  useGetSellerByUsenameQuery,
  useGetSellerReviewQuery,
  useGetSellerReviewsQuery,
  useBecomeSellerMutation,
  useBecomeSponsorMutation,
  useDeleteReviewMutation,
  useDeleteSellerQuery,
  useGetSellerByIdQuery,
  useGetSellerOfACategoryQuery,
  useGetSponsoredSellerOfACategoryQuery,
  useUpdateSellerQuery,
  useUpdateReviewMutation,
  useAddPortfolioMutation,
  useDeletePortfolioMutation,
  useUpdatePortfolioMutation,
} = sellerApi;
