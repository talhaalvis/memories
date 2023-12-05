import React, { useEffect, useState } from 'react'
import useStyles from './style'
import { Button, Paper, TextField, Typography } from '@mui/material'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost,updatePost } from '../store/actions/postActions'
const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles()
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', selectedFile: "", tags: ''
  })
  const dispatch = useDispatch()

  const posts = useSelector((state) => currentId ? state.posts?.getData?.data?.find((p) => p._id === currentId) : null)
  // const posts=JSON.parse(localStorage.getItem('profile'))
 
  useEffect(() => {
    setPostData(posts)
  }, [posts])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(postData)

    if (currentId) {

      dispatch(updatePost(currentId, postData))
      window.location.reload()


    } else {

      dispatch(createPost(postData))
    }
    clear()
  }
  const clear = () => {
    setCurrentId(null)
    setPostData({
      creator: '', title: '', message: '', selectedFile: "", tags: ''
    })

  }
  return (
    <Paper className={classes.paper}>
      <form noValidate autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'> {currentId ? 'Editing ' : 'Create'} Memory</Typography>
        <TextField name='creator' label='Creator' fullWidth variant='outlined' value={postData?.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField name='title' label='Title' fullWidth variant='outlined' value={postData?.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField name='message' label='Message' fullWidth variant='outlined' value={postData?.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField name='tags' label='Tags' fullWidth variant='outlined' value={postData?.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className={classes.fileInput}>
          <FileBase64 type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}>

          </FileBase64>
        </div>
        <Button className={classes.buttonSubmit} sx={{marginBottom:'10px'}} color='primary' size='large' type='submit' variant='contained' fullWidth>Submit</Button>
        <Button color='secondary' size='small' onClick={clear} variant='contained' fullWidth>Clear</Button>

      </form>
    </Paper>
  )
}

export default Form