import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Slider, Toolbar, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, List, CssBaseline, Box, Badge } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import StudentDetails from '../components/StudentDetails';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { BarChart, Dashboard, Notifications, PeopleAlt, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Student {
  id: number;
  name: string;
  std: string;
  age: number;
  address: string;
  photo: string;
  passed: string;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const HomeScreen: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentStd, setNewStudentStd] = useState('');
  const [newStudentAge, setNewStudentAge] = useState(0);
  const [newStudentAddress, setNewStudentAddress] = useState('');
  const [newStudentPhoto, setNewStudentPhoto] = useState('');
  const [newStudentPassed, setNewStudentPassed] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const addStudent = () => {
    if (newStudentName.trim() && newStudentStd.trim()) {
      setStudents([
        ...students,
        {
          id: Date.now(),
          name: newStudentName,
          std: newStudentStd,
          age: newStudentAge,
          address: newStudentAddress,
          photo: newStudentPhoto,
          passed: newStudentPassed,
        },
      ]);
      setNewStudentName('');
      setNewStudentStd('');
      setNewStudentAge(0);
      setNewStudentAddress('');
      setNewStudentPhoto('');
      setNewStudentPassed('');
    }
  };

  const handleAgeChange = (event: any, newValue: any) => {
    setNewStudentAge(newValue);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'std', headerName: 'Class', width: 100 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'photo', headerName: 'Photo URL', width: 200 },
    { field: 'passed', headerName: 'Status', width: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setSelectedStudent(students.find(student => student.id === params.id)!)}
        >
          View Details
        </Button>
      ),
    },
  ];

  const rows = students.map((student) => ({
    id: student.id,
    name: student.name,
    std: student.std,
    age: student.age,
    address: student.address,
    photo: student.photo,
    passed: student.passed,
  }));

  return (
    <Box style={styles.container}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{flexGrow:1}}>
            Student Managemnt App
          </Typography>
          <Badge badgeContent={17} color="error" style={{marginRight:20}}>
            <Notifications />
          </Badge>
          <Button color="inherit" onClick={()=> navigate("/")} >Login</Button>
          
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5} marginLeft={10} >
          <TextField
            label="Student Name"
            fullWidth
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
            margin="normal"
            style={styles.textField}
          />
          <TextField
            label="Class"
            fullWidth
            value={newStudentStd}
            onChange={(e) => setNewStudentStd(e.target.value)}
            margin="normal"
            style={styles.textField}
          />
          <Typography gutterBottom>Age</Typography>
          <Slider
            value={newStudentAge}
            onChange={handleAgeChange}
            aria-labelledby="age-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={100}
          />
          <TextField
            label="Address"
            fullWidth
            value={newStudentAddress}
            onChange={(e) => setNewStudentAddress(e.target.value)}
            margin="normal"
            style={styles.textField}
          />
          <TextField
            label="Photo URL"
            fullWidth
            value={newStudentPhoto}
            onChange={(e) => setNewStudentPhoto(e.target.value)}
            margin="normal"
            style={styles.textField}
          />
          <TextField
            label="Status"
            fullWidth
            value={newStudentPassed}
            onChange={(e) => setNewStudentPassed(e.target.value)}
            margin="normal"
            style={styles.textField}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addStudent}
            style={styles.button}
          >
            Add Student
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} style={styles.studentList}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              onRowClick={(params) => setSelectedStudent(students.find(student => student.id === params.id)!)}
            />
          </div>
        </Grid>
      </Grid>
      {selectedStudent && <StudentDetails student={selectedStudent} />}
    </Box>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    marginTop: 70,
    display:"list-item",
    padding:20,
    
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#3f51b5',
  },
  textField: {
    backgroundColor: '#fff',
    borderRadius: '4px',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#3f51b5',
    color: '#fff',
  },
  studentList: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    marginBottom: '10px',
    cursor: 'pointer',
    backgroundColor: '#e3f2fd',
  },
  studentName: {
    color: '#3f51b5',
  },
};

export default HomeScreen;
