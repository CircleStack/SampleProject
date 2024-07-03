import React, { useState, CSSProperties } from 'react';
import StudentDetails from '../components/StudentDetails';
import StudentList from '../components/StudentList';

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
  const [newStudentPass, setNewStudentPass] = useState('');
  const [newStudentAge, setNewStudentAge] = useState(0);
  const [newStudentAddress, setNewStudentAddress] = useState('');
  const [newStudentPhoto, setNewStudentPhoto] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const addStudent = () => {
    if (newStudentName.trim() && newStudentStd.trim()) {
      setStudents([...students, { id: Date.now(), name: newStudentName, std: newStudentStd, age: newStudentAge, address: newStudentAddress, photo: newStudentPhoto, passed: newStudentPass }]);
      setNewStudentName('');
      setNewStudentStd('');
      setNewStudentAge(0);
      setNewStudentAddress('');
      setNewStudentPhoto('');
      setNewStudentPass('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Student Management App</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Student Name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Class"
          value={newStudentStd}
          onChange={(e) => setNewStudentStd(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          value={newStudentAge}
          onChange={(e) => setNewStudentAge(parseInt(e.target.value))}
          placeholder="Age"
          style={styles.input}
        />
        <input
          type="text"
          value={newStudentAddress}
          onChange={(e) => setNewStudentAddress(e.target.value)}
          placeholder="Address"
          style={styles.input}
        />
        <input
          type="text"
          value={newStudentPhoto}
          onChange={(e) => setNewStudentPhoto(e.target.value)}
          placeholder="Photo URL"
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Status"
          value={newStudentPass}
          onChange={(e) => setNewStudentPass(e.target.value)}
          style={styles.input}
        />
        <button onClick={addStudent} style={styles.button}>Add Student</button>
      </div>
      <StudentList students={students} setStudents={setStudents} setSelectedStudent={setSelectedStudent} />
      {selectedStudent && <StudentDetails student={selectedStudent} />}
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid #ccc',
    padding: '75px',
    borderRadius: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    padding: '15px',
    fontSize: '1rem',   
    width: '100%',
    maxWidth: '750px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default HomeScreen;
