import { combineReducers } from "@reduxjs/toolkit";
import PostSlice from "./slices/PostSlice";
import AuthSlice from "./slices/AuthSlice";
import { allMemories } from "./MemoriseApi";


const reducer=combineReducers({
    posts:PostSlice,
    auth:AuthSlice,
    [allMemories.reducerPath]:allMemories.reducer

})
export default reducer