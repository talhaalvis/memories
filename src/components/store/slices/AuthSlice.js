import { createSlice } from "@reduxjs/toolkit";

const initialState={
    signUpData:null,
    signInData:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        signUpD(state,action){
            state.signUpData=action.payload
            // console.log(state.signUpData)
            localStorage.setItem('profile', JSON.stringify(state.signUpData));
            
            // console.log(state.signUpData,'s')

        },
        logOut(state){
            localStorage.clear()

        },
        signinD(state,action){
            state.signInData=action.payload
            localStorage.setItem('profile', JSON.stringify(state.signInData));


        }
    }

})

export default authSlice.reducer
export const {signUpD,logOut,signinD}=authSlice.actions