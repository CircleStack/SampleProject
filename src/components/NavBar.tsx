
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, marginLeft: '80px',    fontSize: '1.5rem' }}>
          Student Management App
        </Typography>
        <Button color="inherit" component={Link} to="/home">Home</Button> 
        <Button color="inherit" component={Link} to="/students">Students</Button> 
        <Button color="inherit">Courses</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
