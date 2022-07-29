// import React,{useEffect} from 'react'
// import style from '../styles/resume.module.css'
// import 'aos/dist/aos.css';
// import Aos from 'aos';

// const resume = () => {

//   useEffect(() => {
//     Aos.init({duration:2000});
//   }, [])
  
//   return (
//     <div className={style.resume_bg_color}>
//       <div className='container'>
//         <div className='row'>
//           <h1 className={style.h1}>MY RESUME</h1>
//           <hr className={style.hori} style = {{height:"2px"}}/>
//         </div>
//         <div className={style.circle2}></div>
//         <div className='row'>
//           <div className={`${style.resume_divide} col-md-6`}>
//             <div className={`${style.ho} col-md-auto`} >
//               <div data-aos="flip-right" className={`${style.resume_divs1} row`} >
//                 <h5 className={style.h5}>FULL STACK WEB DEVELOPER</h5>
//                 <p className={style.p}>2020-2021 | Freelance </p>
//                 <hr style={{border:"1px solid" , marginTop:"10px"}}/>
//                 <p className={style.p}>After my first year in the college I started exploring many technology related to web development
//                   and started to learn more about full stack development this includes MERN stacks</p>
//               </div>
//               <div className='col-md-auto' >
//                 <div className={style.circle}></div>
//               </div>
//             </div>
//              <div className={`${style.resume_divs} row`}  style={{marginTop:"200px"}} >
//               <div className='col-md-auto' >
//                 <div data-aos="flip-right"  className={`${style.resume_divs1} row`} >
//                   <h5 className={style.h5} >University</h5>
//                   <p className={style.p}>2019-2023 | The LNM Institute of Information Technology  </p>
//                   <hr style={{border:"1px solid" , marginTop:"10px"}}/>
//                   <p className={style.p}>I am currently pursuing my B.Tech degree from The LNM Institute of Information Technology college
//                   with CCE(Communication and Computer Science) branch with having 7.4 aggreate cgpa till now </p>
//                 </div>
//               </div>
//               <div className='col-md-auto' >
//                 <div className={style.circle}></div>
//               </div>
//             </div>
//             <div className={`${style.resume_divs} row`}   style={{marginTop:"200px"}}>
//               <div className='col-md-auto' >
//                 <div data-aos="flip-right" className={`${style.resume_divs1} row`} >
//                   <h5 className={style.h5} >Secondary Education</h5>
//                   <p className={style.p}>2015-2017 | Education </p>
//                   <hr style={{border:"1px solid" , marginTop:"10px"}}/>
//                   <p className={style.p}>I have completed my secondary education in Seth Tolaram Bafna Academy(CBSE) , Bikaner
//                   with aggreate cgpa of 10th class 8.80</p>
//                 </div>
//               </div>
//               <div className='col-md-auto' >
//                 <div className={style.circle}></div>
//               </div>
//             </div>
//           </div>
//           <div className={`${style.resume_divide2} col-md-6`} >
//             <div className={`${style.resume_divs} row`} style={{marginTop:"180px" }} >
//               <div className='col-md-auto'  >
//                 <div data-aos="flip-right" className={`${style.resume_divs1} row`} style={{marginLeft:"40px"}} >
//                   <h5 className={style.h5} >Frontend developer</h5>
//                   <p className={style.p}>2019-2020 | Freelance </p>
//                   <hr style={{border:"1px solid" , marginTop:"10px"}}/>
//                   <p className={style.p}>In my first year of college I begin to learn about HTML , CSS and JavaScript and start developing frontend pages</p>
//                 </div>
//               </div>
//               <div className='col-md-auto' >
//                 <div className={style.circle}></div>
//               </div>
//             </div>
//             <div className={`${style.resume_divs} row`}  style={{marginTop:"180px"}}>
//               <div className='col-md-auto' >
//                 <div data-aos="flip-right" className={`${style.resume_divs1} row`} style={{marginLeft:"40px"}} >
//                   <h5 className={style.h5} >Senior Secondary Education</h5>
//                   <p className={style.p}>2018-2019 | Education </p>
//                   <hr style={{border:"1px solid" , marginTop:"10px"}}/>
//                   <p className={style.p}>I have completed my senior secondary education in Government city Sr. Sec. School(RBSE) , Bikaner
//                    having PCM subject with aggreate percentage of 12th class 86.20%</p>
//                 </div>
//               </div>
//               <div className='col-md-auto' >
//                 <div className={style.circle}></div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default resume