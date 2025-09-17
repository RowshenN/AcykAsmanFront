import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../Axios";

// const baseUrl = process.env.REACT_APP_BASE_URL;

export const subscribeApi = createApi({
  reducerPath: "subscribeApi",
  baseQuery: fetchBaseQuery({
    BASE_URL,
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
