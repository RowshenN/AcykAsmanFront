import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "http://localhost:8080/";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Contact"],

  endpoints: (builder) => ({
    // Create a contact
    createContact: builder.mutation({
      query: ({ title, name, email, text }) => ({
        url: "api/contact/create",
        method: "POST",
        body: { title, name, email, text },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
