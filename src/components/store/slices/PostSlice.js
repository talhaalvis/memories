import { createSlice } from "@reduxjs/toolkit";


const initialState={
    getData:[]
}

const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        getPosts(state,action){
            state.getData=action.payload

        }
    }
})

export default postSlice.reducer
export const{getPosts} =postSlice.actions   