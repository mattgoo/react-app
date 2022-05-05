import './App.css';
import React from 'react';

//import pages
import Home from './pages/HomePage';
import Projects from './pages/ProjectsPage';
import Gallery from './pages/GalleryPage';
import About from './pages/AboutPage';

// for routing to other pages
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// Idle Timer
import { useIdleTimer } from 'react-idle-timer';

// import other components
import Test from './components/test';

// set page header
document.title = 'Matt Goodwin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="projects" element={<Projects />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
