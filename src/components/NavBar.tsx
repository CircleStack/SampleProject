import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, TextField, Slide, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

const NavBar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
   
    handleMenuClose();
  };

  return (
    <AppBar position="fixed">
      <Toolbar style={{ flexDirection: 'column', alignItems: 'flex-end', width: '100%', padding: '4px 10px' }}>
        <Box style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <Typography variant="h6" style={{ marginLeft: '200px', fontSize: '1.5rem' }}>
            Student Management App
          </Typography>
          <Box style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
            <IconButton color="inherit" onClick={handleSearchToggle}>
              <SearchIcon />
            </IconButton>
            <Typography variant="h6" align="center" sx={{ fontSize: '1rem', margin: '0 8px' }}>
              Hi, Welcome back 👋
            </Typography>
          </Box>
        </Box>
        <Box style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'center', gap: '8px' }}>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/students">Students</Button>
          <Button color="inherit">Courses</Button>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <PersonIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Slide direction="down" in={searchOpen} mountOnEnter unmountOnExit>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%', backgroundColor: 'background.paper', p: 1 }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSearchToggle}>
                  <CloseIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Slide>
    </AppBar>
  );
};

export default NavBar;
