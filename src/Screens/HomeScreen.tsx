import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid,  Slider } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import StudentDetails from '../components/StudentDetails';

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
    <Container style={styles.container}>
      <Typography variant="h2" gutterBottom style={styles.title}>
        Student Management App
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
    </Container>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
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
