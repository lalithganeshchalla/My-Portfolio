import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './portfolio/Home';
import Resume from './portfolio/Resume';
import Projects from './portfolio/Projects';
import Tools from './portfolio/Tools';
import ContactUs from './portfolio/ContactUs';
import About from './portfolio/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/tools" element={<Tools/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
