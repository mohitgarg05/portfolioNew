import React from 'react'
import style from '../styles/myprojects.module.css'
import { FiLink } from 'react-icons/fi';
const myprojects = () => {
  return (
    <div className={style.project_bg_color}>
        <div className='container'>
            <div className='row'>
                <h1 className={style.h1}>MY PROJECTS</h1>
                <hr className={style.hori} style = {{height:"2px"}}/>  
            </div>
            <div className={style.circle}></div>
            <div className='row'>
              <div className={`${style.project_div} row`}>
                <div className='col-md-auto'>
                  <h3 className={style.head} >Codersroom  </h3>
                </div>
                <div className={`${style.icon} col-md-auto`}>
                  <a className={style.ahref} href='https://silly-hamilton-e2b0c3.netlify.app/' target="_blank" rel="noreferrer" ><FiLink /></a>
                </div>
                
                
                <p className={style.para}>Aug. 10, 2021 - Aug. 22, 2021</p>
                <p className={style.para}>This project is clone of codepen website with additional 
                feature room creation in which we can code together with our 
                friends and also can join audio room in that room you created.</p>
              </div>
              <div className={`${style.project_div} row`} >
                <div className='col-md-auto'>
                  <h3 className={style.head} >sorting visualization  </h3>
                </div>
                <div className={`${style.icon} col-md-auto`}>
                  <a href='https://mohitgarg05.github.io/' className={style.ahref} target="_blank" rel="noreferrer" ><FiLink /></a>
                </div>
                <p className={style.para}>April 20, 2021 - July 22, 2021</p>
                <p className={style.para}>This is a sorting visualization app which shows all 
                sorting algorithms by generating new array and we can adjust speed of visualization</p>
              </div>
              <div className={`${style.project_div} row`}>
                <div className='col-md-auto'>
                  <h3 className={style.head} >450 DSA CRACKER  </h3>
                </div>
                <div className={`${style.icon} col-md-auto`}>
                  <a href='https://dazzling-cat-b1a077.netlify.app/' className={style.ahref} target="_blank" rel="noreferrer" ><FiLink /></a>
                </div>
                <p className={style.para}>April. 10, 2022 - May. 15, 2022</p>
                <p className={style.para}>This website contains topicwise 450 questions of DSA. This tracks your DSA preparation
                  by giving you most important questions from particular topic</p>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default myprojects