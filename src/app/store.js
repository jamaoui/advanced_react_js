import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "./services/postApi.js";

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer
    },
    // Cache, Polling , invalidate cache
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
})
//refetchOnReconnect, refetchOnFocus
// YAGNI (
//setupListeners(store.dispatch)