import React from 'react'
import Logo from '../images/mohit.jpeg'
import Image from 'next/image'
import style from '../styles/about.module.css'
const about = () => {
  return (
    <div className={style.bg_color_about}>
        <div className={`${style.about_con} container`} >
            <div className='row'>

                <div className={`${style.about_image} col-md-6 col-lg-5`} >
                        <Image className={style.Image}   src={Logo} alt="Picture" />
                </div>
                <div className={`${style.about_mydetails} col-md-6 col-lg-7 text-white`} >
                    <div className={`${style.about_mydetail_aboutMe} row`}>
                        <h2>ABOUT ME</h2>
                        <hr className={style.hori} style = {{height:"2px" }}/>
                    </div>
                    <div className={style.circle}></div>
                    <div className={`${style.about_mydetail_name} row`}>
                        <h3>I am Mohit Garg</h3>
                    </div>
                    <div className={`${style.about_mydetail_skill} row`}>
                        <h5>I am a Full-Stack Web Developer</h5>
                    </div>
                    <div className={`${style.about_mydetails_parag} row`}>
                        <p>I am a final year student at The LNM Institute of Information Technology and pursing B.Tech degree 
                        in CCE(Communication and Computer engineering) branch . I started learning about web Technology in my 
                        2nd year and from that day I have acquired the skills necessary to build great and premium websites. </p>

                        <p> I started with very basic technologies like HTML , CSS etc
                        than I learned JavaScript . As time passes I start getting curious about these technologies than i started 
                        learning React.js and dive into MERN technology. Recently I shifted to next.js from React.js</p>
                    </div>
                    <div className={`${style.about_mydetails_alldetails} row`}>
                        <div className='col-md-5'>
                            <div className='row'>
                                <p className={style.p}><span className={style.span}>Name:</span>Mohit Garg</p>
                            </div>
                            <div className='row'>
                                <p className={style.p}><span className={style.span}>Phone:</span>+91 8209737893</p>
                            </div>
                            <div className='row'>
                                <p className={style.p}><span className={style.span}>WebSite:</span>XYZ.com</p>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='row'>
                               <p className={style.p}><span className={style.span}>Age:</span>21</p>
                            </div>
                            <div className='row'>
                               <p className={style.p}><span className={style.span}>Address:</span>Bikaner , Rajasthan</p>
                            </div>
                            <div className='row'>
                                <p className={style.p}><span className={style.span}>Email:</span>mgarg6858@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
          
        </div>
    </div>
  )
}

export default about