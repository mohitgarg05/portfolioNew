import React,{useEffect}  from 'react';
import Typed from 'react-typed';
import Navbar from './navbar.js'
import useDownloader from "react-use-downloader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter ,faFacebook ,faInstagram ,faSnapchat , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import  '../styles/navbar.module.css'
const Main = () => {

  const textLines = [
    `Full Stack Web Developer .`,
    `Freelancer .`
   
  ];

  return (
    <div className='bg_image'>
        <div className='col-md-2' >
              <div className='row follow_class '>
                <h5>Follow Me</h5>
                <div className='vline' ></div>
                <div className='row w-auto symbols' >
                 <FontAwesomeIcon icon={faTwitter}/> 
                  <FontAwesomeIcon icon={faFacebook} style = {{marginTop:"15px"}} />
                  <FontAwesomeIcon icon={faInstagram} style = {{marginTop:"15px"}} />
                  <FontAwesomeIcon icon={faSnapchat} style = {{marginTop:"15px"}} />
                  <FontAwesomeIcon icon={faLinkedin} style = {{marginTop:"15px"}} />
                 
                </div>
               
              </div>
        </div>
        <div className='col-md-6 style_row_name justify-center'>
   
            <h1 className='style_name'>Mohit Garg</h1>
            <p id="para">I &apos; m A <span > <Typed strings={textLines} typeSpeed={60} backSpeed={40}  loop /></span></p>
            <div className='row button_class'>
              <div className='col-md-3 button1'>
                <button>Hire Me</button>
              </div>
              <div className='col-md-3 offset-md-1 button2'>
              <a href='/resume_1.pdf' download><button>Download CV</button></a>
              </div>
            </div>
        </div>  
        
           
       
    </div>
  )
}

export default Main; 