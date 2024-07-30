import { Link } from '@mui/material'
import React from 'react'

const FooterLink = ({ text }) => {
  return (
    <Link 
    href="#"
    variant='p'
    component='a'
    sx={{
      fontSize: '0.9rem',
      fontWeight: '400',
      textDecoration: 'none',
      color: 'lightgray',
      textTransform: 'capitalize',
      "&:hover": {
        color: 'white',
      }
    }}
    >
      {text}
    </Link>
  )
}

export default FooterLink