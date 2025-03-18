import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./pages/hero.jsx";
import Home from "./pages/Home.jsx"

import './App.css'
import Update from './pages/Update.jsx';
import View from './pages/View.jsx';
import Dlte from './pages/dlte.jsx';
import Add from './pages/add.jsx';

function App() {
  

  return (
    <Router>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/update" element={<Update />} />
        <Route path="/view" element={<View />} />
        <Route path="/delete" element={<Dlte />} />
        <Route path="/add" element={<Add />} />



      </Routes>
    </Router>
  )
}

export default App
