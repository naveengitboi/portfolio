import React from 'react'
import About from './About'
import meImgage from '../meImg/profile-pic.png'
import '../App.css'
import '../cssComponents/Me.css'
function Me() {
  return (
    <>
    <About/>
    <div className='page ' id="meContent">
        <div className="answerPassage">
            <h1>Hie Everyone</h1>
            <p className='paragraphElement'>Im Jangiti Naveen, <br /> a curious learner of new web, AI/ML technology. </p>
            <p className='paragraphElement'>Hyderabad, Telangana, India</p>
        </div>
        <div className="meImage">
          <img src={meImgage} alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Me