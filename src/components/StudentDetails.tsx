
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import StudentMarksChart from './StudentMarksChart';

interface StudentDetailsProps {
  student: {
    id: number;
    name: string;
    std: string;
    age: number;
    address: string;
    photo: string;
    passed: string;
  };
}

const StudentDetails: React.FC<StudentDetailsProps> = ({ student }) => {
  const [showMarksChart, setShowMarksChart] = useState(false);

  const openMarksChart = () => {
    setShowMarksChart(true);
  };

  const closeMarksChart = () => {
    setShowMarksChart(false);
  };

  return (
    <Card style={styles.detailsContainer}>
      <div style={styles.photoContainer}>
        <img
          src={student.photo} 
          alt={`${student.name}'s photo`}
          style={styles.photo}
        />
      </div>
      <CardContent style={styles.content}>
        <Typography variant="h5" style={styles.name}>
          {student.name}
        </Typography>
        <Typography variant="body1" style={styles.details}>
          <strong>Class:</strong> {student.std}
        </Typography>
        <Typography variant="body1" style={styles.details}>
          <strong>Age:</strong> {student.age}
        </Typography>
        <Typography variant="body1" style={styles.details}>
          <strong>Address:</strong> {student.address}
        </Typography>
        <Typography variant="body1" style={styles.details}>
          <strong>Status:</strong> {student.passed ? 'Pass' : 'Fail'}
        </Typography>
        <Button variant="contained" color="primary" onClick={openMarksChart} style={styles.button}>
          View Marks
        </Button>
      </CardContent>
      {showMarksChart && <StudentMarksChart closeCard={closeMarksChart} />}
    </Card>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  detailsContainer: {
    margin: '30px',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  photoContainer: {
    marginBottom: '20px',
  },
  photo: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    marginBottom: '10px',
    color: '#3f51b5', 
    fontWeight: 'bold',
  },
  details: {
    marginBottom: '8px',
  },
  button: {
    marginTop: '20px',
  },
};

export default StudentDetails;
