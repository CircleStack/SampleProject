import React from 'react';
import StudentItem from './StudentItem';

interface Student {
  id: number;
  name: string;
  std: string;
  age: number;
  address: string;
  photo: string;
  passed: string;
}

interface StudentListProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  setSelectedStudent: React.Dispatch<React.SetStateAction<Student | null>>;
}

const StudentList: React.FC<StudentListProps> = ({ students, setStudents, setSelectedStudent }) => {
 

  const deleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const selectStudent = (student: Student) => {
    setSelectedStudent(student);
  };
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Class</th>
          <th style={styles.th}>Status</th>
          <th style={styles.th}>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <StudentItem
            key={student.id}
            student={student}
            deleteStudent={deleteStudent}
            selectStudent={selectStudent}
          />
        ))}
      </tbody>
    </table>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  table: {
    width: '100%',
    maxWidth: '600px',
    borderCollapse: 'collapse' as 'collapse',
    border: '1px solid white',
  },
  th: {
    border: '1px solid white',
    padding: '8px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid white',
    padding: '8px',
    textAlign: 'left',
  }
};


export default StudentList;
