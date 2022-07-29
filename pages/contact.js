import React,{useState} from 'react'
import style from '../styles/contact.module.css'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot ,faEnvelope , faPhone , faEarthAmerica} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {

    const [Inputs, setInputs] = useState({
        'name' : '',
        'email' : '',
        'subject' : '',
        'mssg' : ''
    })

    const handleChange =(e)=>{
        const { name, value } = e.target;

        setInputs({
        ...Inputs,
        [name]: value,
        });

        console.log(Inputs.name);
    }

    const SERVICE_ID = "service_x8zory8";
    const TEMPLATE_ID = "template_yx92sq6";
    const USER_ID = "9j-h_hmMy3hqrp83d";


    const handleSubmit = (e)=>{
        e.preventDefault();
        var templateParams = {
            subject : Inputs.subject,
            from_name: Inputs.name,
            message: Inputs.mssg,
            reply_to : Inputs.name
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams , USER_ID)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, function(error) {
        console.log('FAILED...', error);
        Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });

    }





  return (
    <div className={style.contact_bg_color}>
    <div className='container'>
        <h1 className={style.h1}>CONTACT ME</h1>
        <hr className={style.hori} style = {{height:"2px" }}/>
    </div>
    <div className={style.circle}></div>
        <div className='container' >
            <div className='row'>
                <div className={`${style.contact_about} col-md-4`}>
                    <div className={`${style.contact_location} row`}>
                        <div className={`${style.icon} col-md-2`}>
                            <p><FontAwesomeIcon icon={faLocationDot} className={style.icon_size}size='2xl' /></p>
                        </div>
                        <div className={`${style.space} col-md-auto`} >
                            <h5 className={style.h5}>Location</h5>
                            <p>Bikaner,Rajasthan</p>
                        </div>
                    </div>
                    <hr />
                    <div className={`${style.contact_location} row`}>
                        <div className={`${style.icon} col-md-2`}>
                            <p><FontAwesomeIcon icon={faEnvelope} className={style.icon_size}size='2xl' /></p>
                        </div>
                        <div className={`${style.space} col-md-auto`} >
                            <h5 className={style.h5}>Email</h5>
                            <p className={style.p}>mgarg6858@gmail.com</p>
                            <p className={style.p}>19ucc027@lnmiit.ac.in</p>
                        </div>
                        
                        
                    </div>
                    <hr />
                  
                    <div className={`${style.contact_location} row`}>
                        <div className={`${style.icon} col-md-2`}>
                            <p><FontAwesomeIcon icon={faPhone} className={style.icon_size}size='2xl' /></p>
                        </div>
                        <div className={`${style.space} col-md-auto`} >
                            <h5 className={style.h5}>Phone</h5>
                            <p>+91 8209737893</p>
                        </div>
                       
                        
                    </div>
                    <hr />
                    <div className={`${style.contact_location} row`}>
                        <div className={`${style.icon} col-md-2`}>
                            <p><FontAwesomeIcon icon={faEarthAmerica} className={style.icon_size}size='2xl' /></p>
                        </div>
                        <div className={`${style.space} col-md-auto`} >
                            <h5 className={style.h5}>Website</h5>
                            <p>XYZ.com</p>
                        </div>
                        
                      
                    </div>

                </div>
                <div className={`${style.contact_form} col-md-7`} >
                    <form className={`${style.form} row`} type='submit' onSubmit={handleSubmit}  >
                        <div className='row' >
                            <input required
                            onChange={handleChange}
                            value={Inputs.name} 
                            placeholder='Name' 
                            type='text' 
                            name = 'name'  
                            className={`${style.input}`} />
                        </div>
                        <div className='row'>
                            <input required 
                            onChange={handleChange}
                            value={Inputs.email}  
                            placeholder='Email' 
                            type='text' 
                            name = 'email' 
                            className={`${style.input}`} />
                        </div>
                        <div className='row'>
                            <input required 
                            onChange={handleChange}
                            value={Inputs.subject} 
                            placeholder='Subject' 
                            type='text' 
                            name = 'subject' 
                            className={`${style.input}`}  />
                        </div>
                        <div className='row'>
                            <textarea required 
                            onChange={handleChange}
                            value={Inputs.mssg} 
                            placeholder='Your message' 
                            type='text' 
                            name = 'mssg' 
                            className={`${style.textArea}`}  />
                        </div>
                        <button className={style.button}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact