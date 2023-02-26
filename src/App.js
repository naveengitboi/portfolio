import {React, lazy, Suspense} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import {Routes, Route} from 'react-router-dom'
import Loader from './components/Loader';
import Artwork from './components/Artwork';
const LazyHome = lazy(()=> import('./components/Home'))
const Me = lazy(()=> import('./components/Me'))
const Project = lazy(()=> import('./components/Project'))
const OtherProjects = lazy(()=> import('./components/OtherProjects'))
const Contact = lazy(()=>import('./components/Contact'))
const NoFile = lazy(()=> import('./components/Nofile'))
const Photography = lazy(()=>import('./components/Photography'))
const Photoshop = lazy(()=> import('./components/Photoshop'))
const OpContent = lazy(()=> import('./components/OpContent')) 


function App() {
  return (
    <div className="App">
      <AnimatedCursor
        color='255,255,255'
        trailingSpeed={1}
        innerSize = {30}
        innerStyle = {{
          backgroundColor: 'white'
        }}
      />
      <Navbar />

      <Routes>
          <Route path="/" element={ 
            <Suspense fallback={<Loader/>}>
              <LazyHome/>
            </Suspense>} />

        <Route path="me" element={
          <Suspense fallback={<Loader/>}>
              <Me/>
          </Suspense>} />

        <Route path="projects" element={
          <Suspense fallback={<Loader/>}>
              <Project/>
          </Suspense>
        } />

        <Route path="otherprojects" element={
          <Suspense fallback={<Loader/>}>
              <OtherProjects/>
          </Suspense>
        } />

        <Route path="contact" element={
          <Suspense fallback={<Loader/>}>
              <Contact/>
          </Suspense>
        } />

        <Route path="opcontent" element={
          <Suspense fallback={<Loader/>}>
            <OpContent/>
          </Suspense>
        } >
          <Route index element={ 
          <Suspense fallback={<Loader/>}>
            <Photography/>
          </Suspense>} />
          <Route path='photography' element={ 
          <Suspense fallback={<Loader/>}>
            <Photography/>
          </Suspense>}/>
          <Route path='photoshop' element={
             <Suspense fallback={<Loader/>}>
            <Photoshop/>
          </Suspense>
          } />
          <Route path='artwork' element={
             <Suspense fallback={<Loader/>}>
            <Artwork/>
          </Suspense>
          } />
        </Route>

        <Route path="*" element = {
          <Suspense fallback={<Loader/>}>
              <NoFile/>
          </Suspense>
        } />


      </Routes>
    </div>
  );
}

export default App;
