import React, { useState ,useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'


import memories from './images/course-1-3.png'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'
const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (

    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">CodingVilla</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId}  setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.footerHeading} variant="h4" align="center">Thanks for visiting. Development of other functionality is in porgress. Thanks!</Typography>
      </AppBar>
    </Container>
  );
}
export default App;