import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "http://localhost:8080/";

export const subscribeApi = createApi({
  reducerPath: "subscribeApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Subscribe"],

  endpoints: (builder) => ({
    // Create a subscription
    createSubscribe: builder.mutation({
      query: ({ name, email }) => ({
        url: "api/subscribe/create",
        method: "POST",
        body: { name, email },
      }),
      invalidatesTags: ["Subscribe"],
    }),
  }),
});

export const { useCreateSubscribeMutation } = subscribeApi;
