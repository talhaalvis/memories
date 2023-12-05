import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'

export const Input = ({name,label,autoFocus,half,handleChange,type,handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half?6:12}>
        <TextField
        name={name}
        label={label}
        onChange={handleChange}
        required
        variant='outlined'
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name==='password'&&{endAdornment:(<InputAdornment position='end'>
            <IconButton onClick={handleShowPassword}>{type==='password'?<Visibility/>:<VisibilityOff/>}</IconButton>
        </InputAdornment>)}}
        
        
        
        
        />
         
    </Grid>
  )
}
