import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import useStyles from './styles'
import memory from '../../images/memories.png'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { logOut } from '../store/slices/AuthSlice'
const Navbar = () => {
    const classes = useStyles()
    const user=JSON.parse(localStorage.getItem('profile'))
    
    
    const dispatch=useDispatch()
    const handleLogOut=()=>{
        dispatch(logOut())
        window.location.reload()
    }

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>

    <Typography component={Link} to='/' className={classes.heading}  variant='h2' align='center'>Memorise</Typography>
    <img className={classes.image} src={memory} height='60'  alt='memories' />
        </div>
        <Toolbar className={classes.toolbar}>
{
    user?(<div className={classes.profile}>
        <Avatar className={classes.purple} src={user?.result?.imageUrl}>{user?.result?.firstName}
        </Avatar>
        <Typography className={classes.userName} variant='h6'>{user?.result?.lastName}</Typography>
        <Button className={classes.logout} color='secondary' variant='contained'onClick={handleLogOut}>Logout</Button>
    </div>):(<div>
        <Button variant='contained' color='primary' component={Link} to='/auth'>Sign In</Button>
    </div>)
}

        </Toolbar>
  </AppBar>
  )
}

export default Navbar