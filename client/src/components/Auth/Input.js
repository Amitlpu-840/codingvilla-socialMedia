import { TextField, Grid,InputAdornment, IconButton } from '@material-ui/core'
import React from 'react'
import Visibility from '@material-ui/icons/Visibility'
import Visibilityoff from '@material-ui/icons/VisibilityOff'

function Input( { name, half, handleChange, handleShowPassword, label, autoFocus,type} ) {
  return (
    <Grid item xs={12} sm={half? 6:12}  >
        <TextField
            name = {name}
            onChange={handleChange}
            variant='outlined'
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            inputProps={name === 'password' && {
                endAdornment:(
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword} >
                            {type === 'password' ? <Visibility /> : <Visibilityoff />  }
                        </IconButton>
                    </InputAdornment>
                )
            }}

        />
    </Grid>
  )
}

export default Input