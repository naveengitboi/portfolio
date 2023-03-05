import React from "react";
import About from "./About";
import meImgage from "../meImg/profile-pic.png";
import "../App.css";
import "../cssComponents/Me.css";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


import {FaHtml5, FaJs,FaCss3Alt, FaBootstrap, FaFigma, FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

import {DiMongodb, DiPhotoshop, DiIllustrator} from 'react-icons/di'

import {SiExpress, SiPostman, SiC, SiTypescript, SiDjango, SiFramer} from 'react-icons/si'

import {BsCodeSlash} from 'react-icons/bs'

import {HiPhotograph} from 'react-icons/hi'
import {MdDraw} from 'react-icons/md'
function Me() {
  const [quote, setQuote] = useState("Is that a DREAM or WISH?");
  const [name, setName] = useState("J Naveen");
  function outPutApi(jsonData) {
    const length = jsonData.length;
    const random = parseInt(Math.random() * length);
    setQuote((prev) => {
      return (prev = jsonData[random].text);
    });
    setName((prev) => {
      return prev = jsonData[random].author
    })
  }

  const fetchingApi = () => {
    const url = `https://type.fit/api/quotes`;
    const options = {
      method: "GET",
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        outPutApi(jsonData);
      });
  };

  useEffect(() => {
    fetchingApi();
  }, []);

  return (
    <div className="mePage">
      <About />
      <div className="page " id="meContent">
        <div className="answerPassage">
          <h1>Hie Everyone</h1>
          <p className="paragraphElement">
            Im Jangiti Naveen, <br /> a curious learner of new web, AI/ML
            technology.{" "}
          </p>
          <p className="paragraphElement">Hyderabad, Telangana, India</p>
          <div className="quoteDiv">
            <p className="paragraphElement" id="quote">
             &quot; {quote} &quot;   <br /> -----<span>{name}</span>
            </p>
          </div>
        </div>
        <div className="meImage">
          <LazyLoadImage effect="blur" src={meImgage} alt="" />
        </div>
      </div>

      <div className="technicalInfoDiv">
        <h1 className="techH1">What I know</h1>
        <div className="iconsDiv">
         <div className="subIconDiv">
          <h1>Web Dev:-</h1>
           <FaHtml5 className="icons" />
          <FaCss3Alt className="icons" />
          <FaJs className="icons" />
          <FaBootstrap className="icons" />
          <FaReact className="icons" />
          <FaNodeJs className="icons" />
          <SiExpress className="icons" />
          <DiMongodb className="icons" />
          <SiPostman className="icons" />
         </div>

         <div className="subIconDiv">
            <h1>CP</h1>
            <FaPython className='icons'/>
            <SiC className='icons'/>
            <FaJs className='icons'/>
         </div>

         <div className="subIconDiv">
            <h1>Currently Learning</h1>
            <SiTypescript className='icons'/>
            <SiDjango className='icons'/>
            <BsCodeSlash className='icons'/>
         </div>

         <div className="subIconDiv">
            <h1>Other Skills</h1>
            <DiPhotoshop className='icons'/>
            <DiIllustrator className='icons'/>
            <SiFramer className='icons'/>
             <FaFigma className="icons" />
             <HiPhotograph className="icons" />
             <MdDraw className="icons" />
         </div>

         <div className="subIconDiv">
            <h1>Links</h1>
            <a href="https://github.com/naveengitboi" target={"_blank"} ><FaGithub className='icons'/></a>
            <a href="https://www.linkedin.com/in/naveen-jangiti-1a1b86235/" target={"_blank"} ><FaLinkedin className='icons'/></a>
            <a href="https://twitter.com/navetwets" target={"_blank"} ><FaTwitter className='icons'/></a>
            
            
         </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
