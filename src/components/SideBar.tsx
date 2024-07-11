
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSchool, faBook, faUser, faCalendar, faFileAlt } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem component={Link} to="/home" >
          <ListItemIcon>
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' , color:"#000"}}>Home</Typography>} />
        </ListItem>
        <ListItem  component={Link} to="/students">
          <ListItemIcon>
            <FontAwesomeIcon icon={faSchool} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem', color:"#000" }}>Students</Typography>} />
        </ListItem>
        <ListItem  component={Link} to="/courses">
          <ListItemIcon>
            <FontAwesomeIcon icon={faBook} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem', color:"#000" }}>Courses</Typography>} />
        </ListItem>
        <ListItem  component={Link} to="/profile">
          <ListItemIcon>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem', color:"#000" }}>Profile</Typography>} />
        </ListItem>
        <ListItem  component={Link} to="/calendar">
          <ListItemIcon>
            <FontAwesomeIcon icon={faCalendar} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem', color:"#000" }}>Calendar</Typography>} />
        </ListItem>
        <Divider /> 
        <ListItem>
          <ListItemText primary={<Typography variant="h6">Report Cards</Typography>} />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Quarterly</Typography>} />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Half-Yearly</Typography>} />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Annual</Typography>} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
