import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import StudentMarksChart from '../components/StudentMarksChart';

interface Student {
  id: number;
  name: string;
  std: string;
  age: number;
  address: string;
  photo: string;
  passed: string;
}

interface StudentListScreenProps {
  students: Student[];
  setSelectedStudent: (student: Student | null) => void;
}

const StudentListScreen: React.FC<StudentListScreenProps> = ({ students, setSelectedStudent }) => {
  const [selectedStudent, setSelectedStudentState] = useState<Student | null>(null);
 

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'std', headerName: 'Class', width: 100 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'photo', headerName: 'Photo URL', width: 200 },
    { field: 'passed', headerName: 'Status', width: 100 },
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

  const handleRowClick = (params: any) => {
    const selectedStudent = students.find(student => student.id === params.id);
    if (selectedStudent) {
      setSelectedStudent(selectedStudent);
      setSelectedStudentState(selectedStudent);
    }
  };

  return (
    <div>
      <NavBar position="fixed" />
      <Container style={styles.container}>
        <SideBar />
        <Typography variant="h4" style={styles.title}>
          Student List
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                onRowClick={handleRowClick}
              />
            </div>
          </Grid>
        </Grid>
       
      </Container>
      <div>
      {selectedStudent && (
          <Container style={styles.chartContainer}>
            <StudentMarksChart closeCard={() => setSelectedStudentState(null)} />
          </Container>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    paddingTop: '50px', 
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    marginTop: '20px',
    marginLeft: '70px' ,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  chartContainer: {
    marginTop: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1565c0',
  },
};

export default StudentListScreen;
