import React from 'react';

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
  return (
    <div style={styles.detailsContainer}>
      <h2>Student Details</h2>
      <img src={student.photo} alt={`${student.name}'s photo`} style={styles.photo} />
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Class:</strong> {student.std}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Status:</strong> {student.passed ? 'Pass' : 'Fail'}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  detailsContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
    backgroundColor: 'black',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  photo: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
  }
};

export default StudentDetails;
