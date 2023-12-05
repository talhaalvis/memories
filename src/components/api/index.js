import axios from "axios"



const API=axios.create({baseURL:'http://localhost:5000'})
API.interceptors.request.use((req)=>{

    if(localStorage.getItem('profile')){

        req.headers.Authorization=`Bearer ${JSON.parse(localStorage?.getItem('profile'))?.token}`
    }
    return req

})


export const fetchData=API.get('/posts')
export const createPostData=(post)=>API.post('/posts',post)
export const updatePostData=(id,updatePost)=>API.patch(`/posts/${id}`,updatePost)
export const deletePostData=(id)=>API.delete(`/posts/${id}`)
export const likePostData=(id)=>API.patch(`/posts/${id}/likePost`)

export const signUP=(post)=>API.post(`/users/signup`,post)
export const signIN=(post)=>API.post(`users/signin`,post)
