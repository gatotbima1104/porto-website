import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Services from './pages/services';
import Projects from './pages/projects';

ReactDOM.render(
  <Router>  
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

