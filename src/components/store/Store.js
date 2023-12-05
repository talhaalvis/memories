import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './Reducers'
import { allMemories } from "./MemoriseApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store=configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allMemories.middleware),

})

setupListeners(store.dispatch)
export {store}