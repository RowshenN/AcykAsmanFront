// store.js
import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "./utils/apiSlice/contact";
import { bannerApi } from "./utils/apiSlice/banner";
// import { worksApi } from "./utils/apiSlice/works";
// import { aboutApi } from "./utils/apiSlice/about";
// import { newsApi } from "./utils/apiSlice/news";
// import { serviceApi } from "./utils/apiSlice/service";
import { subscribeApi } from "./utils/apiSlice/subscribe";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    // [worksApi.reducerPath]: worksApi.reducer,

    // [aboutApi.reducerPath]: aboutApi.reducer,
    // [newsApi.reducerPath]: newsApi.reducer,
    // [serviceApi.reducerPath]: serviceApi.reducer,
    [subscribeApi.reducerPath]: subscribeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannerApi.middleware,
      contactApi.middleware,
      //   worksApi.middleware,
      //   aboutApi.middleware,
      //   newsApi.middleware,
      //   serviceApi.middleware,
      subscribeApi.middleware
    ),
});
