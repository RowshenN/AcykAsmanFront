import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../Axios";

const baseUrl = BASE_URL;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    // Get all news
    getAllNews: builder.query({
      query: (params) => {
        const query = new URLSearchParams({
          name: params?.name || "",
          order: params?.order || 1,
          deleted: params?.deleted || false,
        }).toString();
        return `api/news/all`;
      },
      providesTags: ["News"],
      keepUnusedDataFor: 60,
    }),

    // Get one news
    getNews: builder.query({
      query: (id) => `api/news/${id}`,
      providesTags: (result, error, id) => [{ type: "News", id }],
    }),

    // Create news
    createNews: builder.mutation({
      query: (formData) => ({
        url: "api/news/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["News"],
    }),

    // Update news
    updateNews: builder.mutation({
      query: (formData) => ({
        url: "api/news/update",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["News"],
    }),

    // Delete news (soft delete)
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `api/news/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),

    // Un-delete news
    unDeleteNews: builder.mutation({
      query: (id) => ({
        url: `api/news/undelete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),

    // Destroy news (hard delete)
    destroyNews: builder.mutation({
      query: (id) => ({
        url: `api/news/destroy/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetNewsQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
  useUnDeleteNewsMutation,
  useDestroyNewsMutation,
} = newsApi;
