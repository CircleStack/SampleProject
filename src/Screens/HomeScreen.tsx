import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Slider } from '@mui/material';
import StudentDetails from '../components/StudentDetails';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';

interface Student {
  id: number;
  name: string;
  std: string;
  age: number;
  address: string;
  photo: string;
  passed: string;
}

const HomeScreen: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentStd, setNewStudentStd] = useState('');
  const [newStudentAge, setNewStudentAge] = useState(0);
  const [newStudentAddress, setNewStudentAddress] = useState('');
  const [newStudentPhoto, setNewStudentPhoto] = useState('');
  const [newStudentPassed, setNewStudentPassed] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);   

  const addStudent = () => {
    if (newStudentName.trim() && newStudentStd.trim()) {
      const newStudent: Student = {
        id: Date.now(),
        name: newStudentName,
        std: newStudentStd,
        age: newStudentAge,
        address: newStudentAddress,
        photo: newStudentPhoto,
        passed: newStudentPassed,
      };

      setStudents([...students, newStudent]);
      setSelectedStudent(newStudent);
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

  return (
    <div>
      <NavBar />
      <SideBar />
      <Container style={styles.container}>
        <Typography variant="h4" style={styles.title}>
          Student Details
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
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
            <Button variant="contained" color="primary" onClick={addStudent} style={styles.button}>
              Add Student
            </Button>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div style={styles.studentDetails}>
              {selectedStudent ? (
                <StudentDetails student={selectedStudent} />
              ) : (
                <Typography variant="h6">Select a student to view details</Typography>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '50px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    marginLeft: '80px',   
    marginTop: '50px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1565c0',
  },
  textField: {
    backgroundColor: '#fff',
    borderRadius: '4px',
  },
  button: {
    marginTop: '20px',   
    
  },
  studentDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default HomeScreen;
