import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8080/";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Service"],
  endpoints: (builder) => ({
    // Get all services
    getAllServices: builder.query({
      query: (params) => {
        const query = new URLSearchParams({
          name: params?.name || "",
          order: params?.order || 1,
          deleted: params?.deleted || false,
        }).toString();
        return `api/service/all`;
      },
      providesTags: ["Service"],
      keepUnusedDataFor: 60, // cache for 60s
    }),

    // Get one service
    getService: builder.query({
      query: (id) => `api/service/${id}`,
      providesTags: (result, error, id) => [{ type: "Service", id }],
    }),

    // Create service
    createService: builder.mutation({
      query: (formData) => ({
        url: "api/service/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Service"],
    }),

    // Update service
    updateService: builder.mutation({
      query: (formData) => ({
        url: "api/service/update",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Service"],
    }),

    // Destroy service
    destroyService: builder.mutation({
      query: (id) => ({
        url: `api/service/destroy/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetServiceQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDestroyServiceMutation,
} = serviceApi;
