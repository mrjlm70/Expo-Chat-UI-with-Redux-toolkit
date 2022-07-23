import { configureStore } from "@reduxjs/toolkit";

import messagesReducer from "./messagesSlice";

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
