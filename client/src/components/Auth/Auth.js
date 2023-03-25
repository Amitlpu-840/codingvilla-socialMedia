import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './styles'
import LockOutLinedIcon from '@material-ui/icons/LockOpenOutlined'
 import {GoogleLogin, googleLogout} from '@react-oauth/google'
import Input from './Input';
import Icon from './Icon';
import { useDispatch } from 'react-redux';

import jwtDecode from 'jwt-decode';


function Auth() {
  
  const classes = useStyles();
  const state = null;
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {

  }
  const handleChange = () => {

  }

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const switchMode = () => {
    setIsSignUp((prev) => !prev);
    handleShowPassword(false);

  }
  const googleSuccess = async (res) => {
    const result = jwtDecode(res?.credential)  // if we use ? only, we can get error "cannot get property of undefined"
    const token = res?.tokenId;
    try {
      dispatch({type:'AUTH', data:{result, token}});
    } catch (error) {
      console.log(error);
    }
    
  }
  const googleFailure = (err) => {
    console.log(err);
    console.log('google sign in unsuccessfull');
  }
  


  return (

    <Container component='main' maxWidth='xs' >
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar} >
          <LockOutLinedIcon />
        </Avatar>

        <Typography variant='h5' > {isSignUp ? 'Sign up' : 'Sign in'} </Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2} >
            {
              isSignUp && (
                <>

                  <Input name='FirstName' label='First Name' handleChange={handleChange} autoFocus half />
                  <Input name='LastName' label='last Name' handleChange={handleChange} half />

                </>
              )
            }
            <Input name='email' label='Email address' handleChange={handleChange} type='email' autoFocus />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword />
            {isSignUp && <Input name='confirmPassword' label='Repeat password' handleChange={handleChange} type='password' />}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} >
            {isSignUp ? 'Sign up ' : 'Sign in'}
          </Button>
          <GoogleLogin          
            
            // render={(renderProps) =>(
            //   <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant='contained' >Google sign in</Button>
            // )}
            onSuccess={googleSuccess}
            onError={googleFailure}
            cookiePolicy='single_host_origin'
            

            
          />
          <Grid container justifyContent='space-around'>
            <Grid item>
              <Button onClick={switchMode} >
                {isSignUp ? 'Already have an account? Sign In' : 'Not have an account? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>

      </Paper>
    </Container>
  )
}

export default Auth