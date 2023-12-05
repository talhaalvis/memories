import React, { useState } from 'react'
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import useStyles from './styles'
import { LockOutlined } from '@mui/icons-material'
import { Input } from './Input'
import GoogleLogin from 'react-google-login'
import { render } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import { signIn, signUp } from '../store/actions/auth'
import { useNavigate } from 'react-router-dom'

const initialState={firstName:'',lastName:"",email:'',password:'',confirmPassword:''}
const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData,setFormData]=useState(initialState)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const classes = useStyles()

    const handleShowPassword = () => {
        setShowPassword((prevshowpassword) => !prevshowpassword)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
       if(isSignUp){
           dispatch(signUp(formData))
           navigate('/')
           
        }else{
           dispatch(signIn(formData))
           navigate('/')

       }
    }
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})

    }
    const handleSwitchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
       setShowPassword(false)

    }
    const googleSuccess =async (res) => {
        console.log(res)
    }
    const googleFailure = (err) => {
        console.log(err)
        console.log("Google login unsuccesfull")
    }
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && <>

                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />

                                <Input name='lastName' label='Last Name' handleChange={handleChange} half />

                            </>
                        }
                        <Input name='email' label='Email' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}

                    </Grid>
                    <GoogleLogin
                        clientId='289149976470-4bnsevnqon3819r76frejemtejtpg8oo.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button sx={{ mt: '10px' }} className={classes.goggleButton}
                                color='primary'
                                fullWidth onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                variant='contained'
                            >Google Sign In</Button>
                        )}

                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Button sx={{ mt: '10px' }} fullWidth type='submit' variant='contained' color='primary' className={classes.submit}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={handleSwitchMode}>{isSignUp ? 'Al Ready have an Acoount? Sign In' : 'Dont have an Account Sign Up'}</Button>
                        </Grid>

                    </Grid>

                </form>

            </Paper>
        </Container>
    )
}

export default Auth