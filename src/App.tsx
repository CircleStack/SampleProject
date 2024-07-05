
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginForm from "./LoginForm"
import HomeScreen from "./Screens/HomeScreen"

const App = () => {
  return (

    <div
     >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

