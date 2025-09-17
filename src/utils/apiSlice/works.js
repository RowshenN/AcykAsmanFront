import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../Axios";

const baseUrl = "http://localhost:8080/";

export const worksApi = createApi({
  reducerPath: "worksApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Work"],
  endpoints: (builder) => ({
    // Get all works
    getAllWorks: builder.query({
      query: () => {
        return `api/works/all`;
      },
      providesTags: ["Work"],
      keepUnusedDataFor: 60, // cache for 60s
    }),

    // Get one work
    getWork: builder.query({
      query: (id) => `api/works/${id}`,
      providesTags: (result, error, id) => [{ type: "Work", id }],
    }),

    // Create work
    createWork: builder.mutation({
      query: (formData) => ({
        url: "api/works/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Work"],
    }),

    // Update work
    updateWork: builder.mutation({
      query: (formData) => ({
        url: "api/works/update",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Work"],
    }),

    // Soft delete work
    deleteWork: builder.mutation({
      query: (id) => ({
        url: `api/works/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Work"],
    }),

    // Un-delete work
    undeleteWork: builder.mutation({
      query: (id) => ({
        url: `api/works/undelete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Work"],
    }),

    // Hard destroy work
    destroyWork: builder.mutation({
      query: (id) => ({
        url: `api/works/destroy/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Work"],
    }),
  }),
});

export const {
  useGetAllWorksQuery,
  useGetWorkQuery,
  useCreateWorkMutation,
  useUpdateWorkMutation,
  useDeleteWorkMutation,
  useUndeleteWorkMutation,
  useDestroyWorkMutation,
} = worksApi;
