"use client"

import './Page.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Contact } from '../components/Contact/Contact'
import { Foot } from '../components/Foot/Foot'
import { Home } from '../components/Home/Home'
import { NavBar } from '../components/NavBar/NavBar'
import { Projects } from '../components/Projects/Projects'
import { Skills } from '../components/Skills/Skills'
import { useEffect } from 'react'
import { useIntersection } from '../hooks/useIntersection';

export default function Portfolio() {
  
  const [ homeIsIntersecting, homeRef ] = useIntersection({ threshold:.7 })
  const [ skillsIsIntersected, skillsRef ] = useIntersection({ threshold:.7 })
  const [ projectsIsIntersected, projectsRef] = useIntersection({ threshold:.2 })
  const [ contactIsIntersected, contactRef ] = useIntersection({ threshold:.7 })

  useEffect(()=>{
    setTimeout(() => {
      if (homeIsIntersecting) {
        document.getElementById('homeTog').classList.add('Cabecera-h1-act-link')
        document.getElementById('skillsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('projectsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('contactTog').classList.remove('Cabecera-li-act-link')
      }else if(skillsIsIntersected) {
        document.getElementById('skillsTog').classList.add('Cabecera-li-act-link')
        document.getElementById('homeTog').classList.remove('Cabecera-h1-act-link')
        document.getElementById('projectsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('contactTog').classList.remove('Cabecera-li-act-link')
      }else if(projectsIsIntersected ) {
        document.getElementById('projectsTog').classList.add('Cabecera-li-act-link')
        document.getElementById('homeTog').classList.remove('Cabecera-h1-act-link')
        document.getElementById('skillsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('contactTog').classList.remove('Cabecera-li-act-link')
      }else if(contactIsIntersected) {
        document.getElementById('contactTog').classList.add('Cabecera-li-act-link')
        document.getElementById('homeTog').classList.remove('Cabecera-h1-act-link')
        document.getElementById('projectsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('skillsTog').classList.remove('Cabecera-li-act-link')
      }
    }, 175);
  },[homeIsIntersecting, skillsIsIntersected, projectsIsIntersected, contactIsIntersected ])

  return (
  <main className='mainApp'>

    <NavBar/>
    
    <section ref={homeRef}  className='Home'>
      <Home/>
    </section>

    <section ref={skillsRef}  className='Skills'>
      <Skills/>
    </section>

    <section ref={projectsRef}  className='Projects'>
      <Projects/>
    </section>

    <section ref={contactRef} className='Contact'>
      <Contact/>
    </section>

    <section className='Foot'>
      <Foot/>
    </section>

  </main>
  )
}
