import React, {useState, useRef} from 'react'
import '../cssComponents/Contact.css'
import { bigH1 } from './About'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {FaLinkedin, FaTwitter} from 'react-icons/fa'
function Contact(){
    const [click, setClick] = useState('Get In Touch')
    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const form = useRef();
    const [btnActive, setBtnActive ] = useState(false)

    function dataHandler(e){
        e.preventDefault()
        console.log(name,email,message)
        if(!name || !email || !message){
            setClick('Enter Valid Info')
            setTimeout(() => {
                setClick('Get In Touch')
            }, 3000);
        }
        else{
            if(email.includes("gmail.com")){
                 emailjs.sendForm('service_tx0don8', 'template_xge5djo', form.current, 'IlKeLPTkvF_MI80sU')
                    .then((result) => {
                        setClick(prev => prev = `I Heard You`)
                        setBtnActive(true)
                        setTimeout(() => {
                            setClick(prev => prev = "Get In Touch")
                            setBtnActive(false)
                        }, 5000);
                        setName('')
                        setEmail('')
                        setMessage('')
                        
                    }, (error) => {
                        console.log(error.text);
                    });
                    e.target.reset()
            }
            else{
                setClick("Check GMail")
                setTimeout(() => {
                    setClick("Get In Touch")
                }, 3000);
            }
        }
    }

    return(
        <div id="contactPage">
            <div className="page">
                <motion.h1 variants={bigH1} initial="hidden" whileInView={"show"} viewport={{once:true}} className="middleHeading">Contact Now</motion.h1>
            </div>

            <div className="contactForm" >
                <form  ref={form}>
                   <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Example' name="user_name" value={name} onChange={(e)=> setName(e.target.value)} id="name"/>
                   </div>
                   <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='example@gmail.com' name="user_email" value={email} onChange={(e)=> setEmail(e.target.value)}  id="email"/>
                   </div>
                   <div>
                        <label htmlFor="phone">Message</label>
                        <textarea rows={3} columns={100} wrap="hard" maxLength={"100"} className='inputArea' placeholder='This is an example text' name="message" value={message} onChange={(e)=> setMessage(e.target.value)} id='message'  />
                   </div>
                   <button className="sendBtn"
                    style={{background:btnActive ? "green" :"linear-gradient(180deg,rgba(210, 210, 210, 0.14) 0%,rgba(217, 217, 217, 0.08) 100%)"}} 
                    onClick={(e) => dataHandler(e)} >{click}</button>
                </form>
            

                <div className="socialLinks">
                    <div className="linkedIn">
                        <a href="https://www.linkedin.com/in/naveen-jangiti-1a1b86235/" target='_blank'><FaLinkedin className='svg' /></a>
                    </div>

                    <div className="twitter">
                       <a href="https://twitter.com/navetwets" target="_blank"><FaTwitter/></a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact