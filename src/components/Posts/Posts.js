import React from 'react'
import Post from './Post/Post'
import useStyles from './style'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { Grid } from '@mui/material'
import { useGetAllMemoriesQuery } from '../store/MemoriseApi'

export const Posts = ({setCurrentId}) => {
  const classes = useStyles()
  const posts=useSelector((state)=>state.posts?.getData?.data)
  // const {data}=useGetAllMemoriesQuery()
  // console.log(data,'posts')


  return (
    <>
    {
      !posts?.length?<CircularProgress/>:(

        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
          {
            posts.map((post)=>(
              <Grid item xs={12} sm={6} key={post._id}>
                <Post post={post} setCurrentId={setCurrentId}/>
              </Grid>
            ))
          }


        </Grid> 
      )
    }

    </>
  )
}
