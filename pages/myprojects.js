import React from 'react'
import style from '../styles/myprojects.module.css'
import { FiLink } from 'react-icons/fi';
import Link from 'next/link'

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
              <div className={`${style.project_div} `}>
                <div className='col-md-auto'>
                  <Link href='https://dazzling-cat-b1a077.netlify.app/'><h5 className={style.head}>Pintrest Clone</h5></Link>
                </div>
                <p className={style.para}>June 15, 2022 - Ongoing</p>
                <p className={style.para}>This project is basically clone of pintrest website where user's can create pins, post them , 
                follow other users , can see images of their interest . I use unsplash api to get images. Many functionalities are still incomplete but this project
                really taught me many new things for building websites</p>
              </div>
              <div className={`${style.project_div} `}>
                <div className='col-md-auto'>
                  <Link href='https://shoes-shopping-mohitgarg05.vercel.app/'><h5 className={style.head}>Shoes Shopping</h5></Link>
                </div>
                <p className={style.para}>Febrary 10, 2022 - May. 20, 2022</p>
                <p className={style.para}> BTP(B.Tech Project) . This website collects data from three different foreign websites
                by Web Scrapping using shopify API. It collects price of same shoes from different websites and compare it for user's  by productId . We worked in a team of 3 members where my role is to build frontend</p>
              </div>
              <div className={`${style.project_div} `}>

              
                <div className='col-md-auto'>
                  <Link href='https://silly-hamilton-e2b0c3.netlify.app/'><h5 className={style.head}>Codersroom</h5></Link>
                </div>
              
                <p className={style.para}>Aug. 10, 2021 - Aug. 22, 2021</p>
                <p className={style.para}>This project is clone of codepen website with additional 
                feature room creation in which we can code together with our 
                friends and also can join audio room in that room you created.</p>
              </div>
              <div className={`${style.project_div} `}>
                <div className='col-md-auto'>
                  <Link href='https://dazzling-cat-b1a077.netlify.app/'><h5 className={style.head}>450 DSA CRACKER</h5></Link>
                </div>
                <p className={style.para}>April. 10, 2022 - May. 15, 2022</p>
                <p className={style.para}>This website contains topicwise 450 questions of DSA. This tracks your DSA preparation
                  by giving you most important questions from particular topic</p>
              </div>
             
              <div className={`${style.project_div} `} >
                <div className='col-md-auto'>
                <Link href='https://mohitgarg05.github.io/'><h5 className={style.head}>Sorting visualization</h5></Link>
                </div>
                <p className={style.para}>April 20, 2021 - July 22, 2021</p>
                <p className={style.para}>This is a sorting visualization app which shows all 
                sorting algorithms by generating new array and we can adjust speed of visualization</p>
              </div>
              
             
              <div className={`${style.project_div} `}>
                <div className='col-md-auto'>
                  <Link href='https://dazzling-cat-b1a077.netlify.app/'><h5 className={style.head}>Weather App</h5></Link>
                </div>
                <p className={style.para}>Aug 2020 - Nov 2020</p>
                <p className={style.para}>This is my first project when I start learning MERN stack . I use openweather API to get temperature
                and forecast. This website is for current weather condition and weather forecast for next 5 days</p>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default myprojects