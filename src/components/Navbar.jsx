import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow:1}} align="left">
                    student app
                </Typography>
                <Button>
                    <Link to='/' style={{color:"black"}}>Addstudent</Link>
                </Button>
                <Button>
                    <Link to='/v' style={{color:"black"}}>Viewstudent</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar