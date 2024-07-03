
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginForm from "./LoginForm"
import Home from "./Home"

const App = () => {
  return (

    <div
     >
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

