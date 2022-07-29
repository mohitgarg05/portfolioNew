import React from 'react'
import Main from './main.js'
import About from './about.js'
import Skills from './skills.js'
import Project from './myprojects.js'
import Resume from './resume.js'
import Contact from './contact'
import Fullpage , {FullPageSections  , FullpageNavigation , FullpageSection} from '@ap.cx/react-fullpage'
const fullpage = () => {
  return (
    <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
            <FullpageSection>
                <Main />
            </FullpageSection>
            <FullpageSection>
                <About />
            </FullpageSection>
            <FullpageSection>
                <Skills />
            </FullpageSection>
            <FullpageSection>
                <Project />
            </FullpageSection>
            <FullpageSection>
                <Contact />
            </FullpageSection>
        </FullPageSections>
        
    </Fullpage>
  )
}

export default fullpage