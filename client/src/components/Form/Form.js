import React, {useState} from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
function Form() {

  const [postData, setPostData] = useState({
    creator:'',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const classes = useStyles();

  const handleSubmit = () => {

  }
  const clear=()=>{
    
  }

  return (
    <Paper>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6' >Today's Code</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidthvalue={postData.creator}onChange={ (e) => ({...postData, creator:e.target.value})}></TextField>
        <TextField name='title' variant='outlined' label='Title' fullWidthvalue={postData.creator}onChange={ (e) => ({...postData, title:e.target.value})}></TextField>
        <TextField name='message' variant='outlined' label='Message' fullWidthvalue={postData.creator}onChange={ (e) => ({...postData, message:e.target.value})}></TextField>
        <TextField name='tags' variant='outlined' label='Tags' fullWidthvalue={postData.creator}onChange={ (e) => ({...postData, tags:e.target.value})}></TextField>
        <div>
          <FileBase className={classes.fileInput} type='file' multiple={false} onDone= { (base64) => setPostData({...postData, selectedFile:base64})} />
        </div>
        <Button className={classes.buttonSubmit} variant='contained' color='primary' size="large" type='submit' >Post Code</Button>
        <Button variant='contained' color='secondary' size="small" onClick={clear} >Clear</Button>

      </form>
    </Paper>
  )
}

export default Form