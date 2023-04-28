import React from 'react'
import { AppBar, Typography } from "@material-ui/core";
import useStyles from './styles'

function Footer() {
const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.footerHeading} variant="h4" align="center">Development of other functionality is in progress. Thanks for visiting! </Typography>
      </AppBar>
  )
}

export default Footer