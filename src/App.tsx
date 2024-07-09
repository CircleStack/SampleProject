
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginForm from "./LoginForm"
import HomeScreen from "./Screens/HomeScreen"
import StudentListScreen from "./Screens/StudentListScreen"
import { useState } from "react"
import SignUp from "./Screens/SignUp"

interface Student {
  id: number;
  name: string;
  std: string;
  age: number;
  address: string;
  photo: string;
  passed: string;
}
const App = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const students: Student[] = [
    { id: 1, name: 'muthukumar', std: '10', age: 15, address: 'villupuram', photo: '1', passed: 'Yes' },
    { id: 2, name: 'arunkumar', std: '9', age: 14, address: 'villpuram', photo: '2', passed: 'Yes' },
    { id: 3, name: 'karthik', std: '11', age: 16, address: 'villupuram', photo: '3', passed: 'No' },
    { id: 4, name: 'aruna', std: '12', age: 17, address: 'villupuram', photo: '4', passed: 'Yes' },
  ];
  return (

    <div
     >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/students" element={<StudentListScreen students={students} setSelectedStudent={setSelectedStudent} />} />
          <Route path="/signup" element={<SignUp />} />     
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

