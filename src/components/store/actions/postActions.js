


import { getPosts } from '../slices/PostSlice';
import { fetchData,createPostData, updatePostData, deletePostData, likePostData } from '../../api';


export function getPostData() {
  return async (dispatch) => {
    try {
      const response = await fetchData;
      dispatch(getPosts(response.data));
    } catch (error) {
      console.log('error', error);
    } 
  };
}
export function createPost(post) {
  console.log(post,'postaction')
  
  return async (dispatch) => {
    try {
      const response = await createPostData(post);
console.log(response)
     
      // dispatch(getPosts(response.data));
    } catch (error) {
      console.log('error', error);
    } 
  };
}
export function updatePost(id,post) {

  return async (dispatch) => {
    try {
      const response = await updatePostData(id,post);
      console.log(response)
     
      

     
      // dispatch(getPosts(response.data));
    } catch (error) {
      console.log('error', error);
    } 
  };
}
export function deletePost(id) {
 
  return async (dispatch) => {
    try {
      await deletePostData(id);
     
      

     
      // dispatch(getPosts(response.data));
    } catch (error) {
      console.log('error', error);
    } 
  };
}
export function likePost(id) {
 
  return async (dispatch) => {
    try {
      await likePostData(id);
     
      

     
      // dispatch(getPosts(response.data));
    } catch (error) {
      console.log('error', error);
    } 
  };
}