import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import { OtherProjects } from "./components/OtherProjects";
import { Contact } from "./components/Contact";
import OpContent  from "./components/OpContent";



import Me from "./components/Me";
import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import {Routes, Route} from 'react-router-dom'
import Nofile from "./components/Nofile";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App">
      <AnimatedCursor
        color='255,255,255'
        trailingSpeed={5}
        innerSize = {15}
        innerStyle = {{
          backgroundColor: 'white'
        }}
      />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="me" element={<Me/>} />
        <Route path="projects" element={<Project/>} />
        <Route path="otherprojects" element={<OtherProjects/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="opcontent" element={<OpContent />} />
        <Route path="*" element = {<Nofile/>} />
      </Routes>
    </div>
  );
}

export default App;
