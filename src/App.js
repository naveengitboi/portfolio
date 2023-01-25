import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import { OtherProjects } from "./components/OtherProjects";
import { Contact } from "./components/Contact";
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
      <div className="vector">
        <svg
          width="1440"
          height="1024"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://  www.w3.org/2000/svg"
        >
          <path
            opacity="0.19"
            d="M-620 598.613C-398.198 672.047 1326.5 87 434.379 439.648C-457.742 792.297 489.782 -79.1604 1139.61 -95.5169C1789.43 -111.873 1935.44 292.44 1923.32 308.285C1911.2 324.13 823.351 -3.51135 559.035 1121"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </div>
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
        <Route path="*" element = {<Nofile/>} />
      </Routes>
    </div>
  );
}

export default App;
