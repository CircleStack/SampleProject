import React from 'react';
import { BarChart } from '@mui/x-charts';
import { Card, CardHeader, CardContent, IconButton, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';  
import Chart from './Chart';
const CHART_HEIGHT = 400;
const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

interface StudentMarksChartProps {
  closeCard: () => void;
}

const StudentMarksChart: React.FC<StudentMarksChartProps> = ({ closeCard }) => {
  const theme = useTheme();
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

  const chart = {
    colors: theme.palette.chart?.colors || ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
    series: pieDataset.map((data) => ({ label: data.id, value: data.value })),
    options: {},
  };

  const { colors, series, options } = chart;
  const chartSeries = series.map((i) => i.value);

  const chartOptions = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors,
    labels: series.map((i) => i.label),
    stroke: {
      colors: [theme.palette.background.paper],
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (value: any) => value,
        title: {
          formatter: (seriesName: any) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    ...options,
  };

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
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
              series={[{ dataKey: 'marks', label: 'Marks' }]}
              width={500}
              height={300}
              barLabel="value"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledChart
              dir="ltr"
              type="pie"
              series={chartSeries}
              options={chartOptions}
              width="100%"
              height={280}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: {
    margin: '40px',
    padding: '40px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
};

export default StudentMarksChart;
