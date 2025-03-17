import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./pages/hero.jsx";
import Home from "./pages/Home.jsx"

import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />



      </Routes>
    </Router>
  )
}

export default App
