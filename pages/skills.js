import React from 'react'
import style from '../styles/skills.module.css'
import Progress from './progress.js'
const skills = () => {
  return (
    <div className={style.skill_bg_color}>
        <div className='container'>
            <div className='row'>
                <h1 className={style.h1}>MY SKILLS</h1>
                <hr className={style.hori} style = {{height:"2px"}}/>  
            </div>
            <div className={style.circle}></div>
            <div className='row'>
            <div className={`${style.skill_div} row`}>
                    <div className='col-md-auto'>
                        <h3 className={style.h3}>HTML</h3>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <Progress done={75} />
                    </div>
                </div>
                <div className={`${style.skill_div} row`}>
                    <div className='col-md-auto'>
                        <h3 className={style.h3}>CSS</h3>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <Progress done={60} />
                    </div>
                </div>
                <div className={`${style.skill_div} row`}>
                    <div className='col-md-auto'>
                        <h3 className={style.h3}>Reactjs</h3>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <Progress done={50} />
                    </div>
                </div>
                <div className={`${style.skill_div} row`}>
                    <div className='col-md-auto'>
                        <h3 className={style.h3}>JavaScript</h3>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <Progress done={60} />
                    </div>
                </div>
                <div className={`${style.skill_div} row`}>
                    <div className='col-md-auto'>
                        <h3 className={style.h3}>Node.js</h3>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <Progress done={40} />
                    </div>
                </div>
                <div className={`${style.skill_div} row`}>
                    <div className='col-md-auto'>
                        <h3 className={style.h3}>MongoDB</h3>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <Progress done={40} />
                    </div>
                </div>
                <div className={`${style.skill_div} row`}>
                    <div className='col-md-auto'>
                        <h3 className={style.h3}>Express.js</h3>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <Progress done={40} />
                    </div>
                </div>
                <div className={`${style.skill_div} row`}>
                    <div className='col-md-auto'>
                        <h3 className={style.h3}>C++</h3>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <Progress done={70} />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default skills