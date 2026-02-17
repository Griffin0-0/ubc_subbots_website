import './App.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Members from './pages/Members/Members.tsx';
import Robots from './pages/Robots/Robots.tsx';
import Sponsors from './pages/Sponsors/Sponsors.tsx';



function App() {


  return (
    <Routes>

      <Route 
        path='/' 
        element={<Home />} 
      />

      <Route 
        path='/projects' 
        element={<Projects />} 
      />

      <Route 
        path='/members' 
        element={<Members />} 
      />

      <Route 
        path='/robots' 
        element={<Robots />} 
      />

      <Route 
        path='/sponsors' 
        element={<Sponsors />} 
      />

    </Routes>
  )
}

export default App
