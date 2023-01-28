import React, {useState} from 'react'
import '../cssComponents/Contact.css'
import { bigH1 } from './About'
import {motion} from 'framer-motion'
export function Contact(){
    const [msg, setMsg] = React.useState('Send')
    
    function btnHandler(event){
        event.preventDefault()
        setMsg(prevMsg => prevMsg = 'Sent')
            event.target.style.backgroundColor = 'green'
            console.log('Hello')
        setTimeout(() => {
            event.target.style.background = 'linear-gradient(180deg, rgba(210, 210, 210, 0.14) 0%, rgba(217, 217, 217, 0.08) 100%)'
            setMsg(prevMsg => prevMsg = 'Send')
        }, 2000);
        
    }

    return(
        <div id="contactPage">
            <div className="page">
                <motion.h1 variants={bigH1} initial="hidden" whileInView={"show"} viewport={{once:true}} className="middleHeading">Contact Now</motion.h1>
            </div>

            <div className="contactForm" >
                <form action="submit">
                   <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name"/>
                   </div>
                   <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"/>
                   </div>
                   <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="phone" id = "phone"/>
                   </div>
                   <button className="sendBtn" onClick={btnHandler} >{msg}</button>
                </form>
            

                <div className="socialLinks">
                    <div className="linkedIn">
                        <a href="https://www.linkedin.com/in/naveen-jangiti-1a1b86235/" target='_blank'><svg width="49" height="49" viewBox="0 0 49 49" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 0C10.9689 0 0 10.9689 0 24.5C0 38.0311 10.9689 49 24.5 49C38.0311 49 49 38.0311 49 24.5C49 10.9689 38.0311 0 24.5 0ZM18.5026 34.6547H13.5414V18.6889H18.5026V34.6547ZM15.9914 16.7289C14.4244 16.7289 13.4112 15.6187 13.4112 14.2457C13.4112 12.8446 14.455 11.7677 16.0552 11.7677C17.6553 11.7677 18.6353 12.8446 18.6659 14.2457C18.6659 15.6187 17.6553 16.7289 15.9914 16.7289ZM36.6224 34.6547H31.6611V25.8067C31.6611 23.7471 30.9415 22.3486 29.1473 22.3486C27.7769 22.3486 26.9628 23.2954 26.6029 24.2065C26.4702 24.5306 26.437 24.99 26.437 25.4468V34.6522H21.4732V23.7803C21.4732 21.7871 21.4094 20.1206 21.3431 18.6864H25.6535L25.8807 20.9041H25.9802C26.6335 19.8629 28.2337 18.3265 30.9108 18.3265C34.1749 18.3265 36.6224 20.5136 36.6224 25.2146V34.6547Z" />
                        </svg></a>
                    </div>

                    <div className="twitter">
                       <a href="https://twitter.com/navetwets" target="_blank"> <svg width="50" height="49" viewBox="0 0 50 49" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3511 0C11.8214 0 0.851074 10.9703 0.851074 24.5C0.851074 38.0297 11.8214 49 25.3511 49C38.8808 49 49.8511 38.0297 49.8511 24.5C49.8511 10.9703 38.8808 0 25.3511 0ZM37.1253 18.468C37.1417 18.725 37.1417 18.993 37.1417 19.2555C37.1417 27.2836 31.0276 36.5312 19.855 36.5312C16.4097 36.5312 13.2159 35.5305 10.5253 33.8078C11.0175 33.8625 11.4878 33.8844 11.9909 33.8844C14.8347 33.8844 17.4487 32.9219 19.5323 31.2922C16.8636 31.2375 14.6214 29.4875 13.8558 27.0813C14.7909 27.218 15.6331 27.218 16.5956 26.9719C15.2215 26.6927 13.9863 25.9464 13.1001 24.8598C12.2138 23.7731 11.7311 22.4132 11.7339 21.0109V20.9344C12.5378 21.3883 13.4839 21.6672 14.4737 21.7055C13.6416 21.1509 12.9592 20.3996 12.487 19.5181C12.0148 18.6367 11.7674 17.6523 11.7667 16.6523C11.7667 15.5203 12.062 14.4867 12.5925 13.5898C14.1177 15.4675 16.021 17.0031 18.1786 18.097C20.3362 19.1909 22.6999 19.8185 25.1159 19.9391C24.2573 15.8102 27.3417 12.4688 31.0495 12.4688C32.7995 12.4688 34.3745 13.2016 35.4847 14.3828C36.8573 14.1258 38.1698 13.6117 39.3401 12.9227C38.8862 14.3281 37.9347 15.5148 36.6714 16.2641C37.8964 16.1328 39.0776 15.7938 40.1714 15.318C39.3456 16.532 38.312 17.6094 37.1253 18.468Z" />
                        </svg></a>

                    </div>
                </div>
            </div>
        </div>
    )
}