import { signIN, signUP } from "../../api";
import { signUpD, signinD } from "../slices/AuthSlice";

export function signUp(post) {
  
    return async (dispatch) => {
      try {
        const {data} = await signUP(post);
       
  dispatch(signUpD(data))
      } catch (error) {
        console.log('error', error);
      } 
    };
  }
export function signIn(post) {
  
    return async (dispatch) => {
      try {
        const {data} = await signIN(post);
        dispatch(signinD(data))
        
 
      } catch (error) {
        console.log('error', error);
      } 
    };
  }