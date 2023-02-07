import React from "react";
import About from "./About";
import meImgage from "../meImg/profile-pic.png";
import "../App.css";
import "../cssComponents/Me.css";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

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
    </div>
  );
}

export default Me;
