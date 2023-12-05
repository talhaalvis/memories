import React, { useEffect, useState } from 'react'
import {  Container, Grid, Grow,} from '@mui/material';
import { useDispatch } from 'react-redux';
import  useStyles  from '../../Styles'
import {Posts} from '../Posts/Posts'
import Form from '../Form/Form'
import { getPostData } from '../store/actions/postActions';

const Home = () => {
    const [currentId,setCurrentId]=useState(null)
    const dispatch=useDispatch()
  
    useEffect(()=>{
  dispatch(getPostData())
    },[currentId,dispatch])
    const classes = useStyles()
  return (
    <Grow in>
    <Container>
      <Grid container className={classes.mainContainer} justify='space-between' alignItems='stretch' spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId}/>

        </Grid>
        <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default Home