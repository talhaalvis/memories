import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const allMemories=createApi({
    reducerPath:'allMemories',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(bulider)=>({
        getAllMemories:bulider.query({
            query:()=>'posts',
            method:'GET'
        })
    })
})

export const {useGetAllMemoriesQuery}=allMemories