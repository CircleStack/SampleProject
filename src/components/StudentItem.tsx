import React from 'react';

interface StudentItemProps {
  student: { id: number; name: string; std: string;age: number;
    address: string;
    photo: string; passed: string };
  deleteStudent: (id: number) => void;
  selectStudent: (student: { id: number; name: string; std: string; age: number; address: string; photo: string; passed: string }) => void;
}

const StudentItem: React.FC<StudentItemProps> = ({ student,  deleteStudent , selectStudent}) => {
  return (
    <tr onClick={() => selectStudent(student)}>
      <td style={styles.td}>{student.name}</td>
      <td style={styles.td}>{student.std}</td>
      <td style={styles.td}>{student.passed}</td>
      <td>
        <button onClick={() => deleteStudent(student.id)} style={styles.deleteButton}>X</button>
      </td>
    </tr>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  td: {
    border: '1px solid white',
    padding: '8px',
    textAlign: 'left',
  }
};

export default StudentItem;
