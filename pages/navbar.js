import React from 'react'
import styles from  '../styles/navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-regular-svg-icons'
const navbar = () => {
  return (
    <div className={styles.wrap}>
        <ul className={styles.link}>
            <div className={styles.div}>
               <li className={styles.link1} >
               <Link href="#"><p className={styles.circleani}></p></Link>
                </li>
                <p className={styles.p}>Home</p>
            </div>
            <div className={styles.div}>
                <li className={styles.link1} >
                    <p className={styles.circleani}></p> 
                </li>
                <p className={styles.p}>About</p>
            </div>
            <div className={styles.div}>
                <li className={styles.link1} >
                    <p className={styles.circleani}></p> 
                </li>
                <p className={styles.p}>Services</p>
            </div>
            <div className={styles.div}>
                <li className={styles.link1} >
                    <p className={styles.circleani}></p> 
                </li>
                <p className={styles.p}>Resume</p>
            </div>
            <div className={styles.div}>
                <li className={styles.link1} >
                    <p className={styles.circleani}></p> 
                </li>
                <p className={styles.p}>Contact</p>
            </div>
            <li className='link_nav'></li>
        </ul>
    </div>
  )
}

export default navbar