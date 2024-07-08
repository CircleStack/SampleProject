
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSchool, faBook, faUser, faCalendar, faFileAlt } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemIcon>
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Home</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/students">
          <ListItemIcon>
            <FontAwesomeIcon icon={faSchool} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Students</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/courses">
          <ListItemIcon>
            <FontAwesomeIcon icon={faBook} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Courses</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Profile</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon>
            <FontAwesomeIcon icon={faCalendar} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Calendar</Typography>} />
        </ListItem>
        <Divider /> 
        <ListItem>
          <ListItemText primary={<Typography variant="h6">Report Cards</Typography>} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Quarterly</Typography>} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '1.5rem' }} />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1" style={{ fontSize: '1.2rem' }}>Half-Yearly</Typography>} />
        </ListItem>
        <ListItem button>
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
