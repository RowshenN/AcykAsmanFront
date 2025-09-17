import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../Axios";

// const baseUrl = process.env.REACT_APP_BASE_URL;

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    BASE_URL,
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
