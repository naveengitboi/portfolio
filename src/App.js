import {React, lazy, Suspense} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
// import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import {Routes, Route} from 'react-router-dom'


const LazyHome = lazy(()=> import('./components/Home'))
const Me = lazy(()=> import('./components/Me'))
const Project = lazy(()=> import('./components/Project'))
const OtherProjects = lazy(()=> import('./components/OtherProjects'))
const Contact = lazy(()=>import('./components/Contact'))
const OpContent = lazy(()=> import('./components/OpContent'))
const NoFile = lazy(()=> import('./components/Nofile'))
function App() {
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
       
          <Route path="/" element={ 
            <Suspense fallback='Loading....'>
              <LazyHome/>
            </Suspense>} />

        <Route path="me" element={
          <Suspense fallback='Loading....'>
              <Me/>
          </Suspense>} />

        <Route path="projects" element={
          <Suspense fallback='Loading....'>
              <Project/>
          </Suspense>
        } />

        <Route path="otherprojects" element={
          <Suspense fallback='Loading....'>
              <OtherProjects/>
          </Suspense>
        } />

        <Route path="contact" element={
          <Suspense fallback='Loading....'>
              <Contact/>
          </Suspense>
        } />

        <Route path="opcontent" element={
          <Suspense fallback='Loading....'>
              <OpContent/>
          </Suspense>
        } />

        <Route path="*" element = {
          <Suspense fallback='Loading....'>
              <NoFile/>
          </Suspense>
        } />

      </Routes>
    </div>
  );
}

export default App;
