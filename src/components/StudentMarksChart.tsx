import React from 'react';
import { BarChart, PieChart } from '@mui/x-charts';
import { Card, CardHeader, CardContent, IconButton, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface StudentMarksChartProps {
  closeCard: () => void;
}

const StudentMarksChart: React.FC<StudentMarksChartProps> = ({ closeCard }) => {
  const dataset = [
    { month: 'January', marks: 65 },
    { month: 'February', marks: 59 },
    { month: 'March', marks: 80 },
    { month: 'April', marks: 81 },
    { month: 'May', marks: 56 },
    { month: 'June', marks: 55 },
    { month: 'July', marks: 40 },
  ];

  const pieDataset = dataset.map(data => ({ id: data.month, value: data.marks }));

  return (
    <Card style={styles.card}>
      <CardHeader
        title="Student Marks"
        action={
          <IconButton onClick={closeCard}>
            <FontAwesomeIcon icon={faTimes} style={{ color: '#000' }} />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
              series={[{ dataKey: 'marks', label: 'Marks' }]}
              width={500}
              height={300}
              barLabel="value"
            />
          </Grid>
         
        </Grid>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: {
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
};

export default StudentMarksChart;
