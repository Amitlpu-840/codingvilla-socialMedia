import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from './styles'
import memories from '../../images/course-1-3.png'
import { Link } from 'react-router-dom'
function Navbar() {
    const classes = useStyles();
    const user = null;


    return (
        <AppBar className={classes.appBar} position="static" >
            <div className={classes.brandContainer} >
                <Typography className={classes.heading} variant="h3" component={Link} to='/' align="center">CodingVilla</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />

            </div>
            <Toolbar className={classes.toolbar} >
                {user ? (
                    <div className={classes.profile} >
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant='h6'  >{user.result.name}</Typography>
                        <Button variant='conatined' className={classes.logout} color='secondary'  >Logut</Button>
                    </div>

                ) : (
                        <Button variant='contained' component={Link} to='/auth' color='primary'  >Login/SignUp</Button>
                    
                )}
            </Toolbar>

        </AppBar>
    )
}

export default Navbar