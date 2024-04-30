import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ProjectDeatil from './Components/ProjectDeatil.jsx';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Changed BrowserRouter to HashRouter
import Index from './Components/Index.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:id" element={<ProjectDeatil />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
