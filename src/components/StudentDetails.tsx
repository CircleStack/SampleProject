
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
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
      <CardMedia
        component="img"
        height="150"
        image={student.photo}
        alt={`${student.name}'s photo`}
        style={styles.photo}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {student.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Class:</strong> {student.std}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Age:</strong> {student.age}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Address:</strong> {student.address}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Status:</strong> {student.passed ? 'Pass' : 'Fail'}
        </Typography>
        <Button variant="contained" color="primary" onClick={openMarksChart} style={styles.button}>
          Marks
        </Button>
      </CardContent>  {showMarksChart && <StudentMarksChart closeCard={closeMarksChart} />}
    
    </Card>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  detailsContainer: {
    margin: '20px',
    padding: '20px',
    textAlign: 'center',
  },
  photo: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  button: {
    marginTop: '20px',
  },
};

export default StudentDetails;
