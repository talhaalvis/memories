import React from 'react'
import useStyles from './style'
import { useDispatch} from 'react-redux'
import { Button, Card, CardActions, CardContent,  Typography } from '@mui/material'
import moment from 'moment/moment'
import { Delete, MoreHoriz, ThumbUpAlt } from '@mui/icons-material'
import { CardMedia } from '@material-ui/core'
import { deletePost, likePost } from '../../store/actions/postActions'
const Post = ({ post,setCurrentId }) => {
  const classes = useStyles()
  const dispatch=useDispatch()
const handleDelete=()=>{
  dispatch(deletePost(post._id))
  window.location.reload()
}
const handleLike=()=>{
  dispatch(likePost(post._id))
  // window.location.reload()
}
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} ></CardMedia>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size='small' style={{color:'white'}} onClick={()=>{setCurrentId(post._id)}}><MoreHoriz fontSize='default'/></Button>
      </div>
      <div className={classes.detail}>
      <Typography variant='body2' color='textSecondary'>{post.tags?.map((tag)=>(`#${tag}` ))}</Typography>

      </div>

      <Typography variant='h5'  gutterBottom>{post.title}</Typography>
      <CardContent>

      <Typography variant='body2' color='textSecondary' className={classes.title} component='p'>{post.message}</Typography>
      </CardContent>
<CardActions className={classes.cardActions}>
  <Button size='small' color='primary' onClick={handleLike}><ThumbUpAlt fontSize='small'/> Like {post.likeCount}  </Button>
  <Button size='small' color='primary' onClick={ handleDelete}><Delete fontSize='small'/> Delete   </Button>

</CardActions>
    </Card>
  )
}

export default Post