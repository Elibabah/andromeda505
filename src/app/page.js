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
  
  const isActive = homeIsIntersecting ? 'homeIsIntersecting' : skillsIsIntersected ? 'skillsIsIntersected' : projectsIsIntersected ? 'projectsIsIntersected' : contactIsIntersected ? 'contactIsIntersected' : null

  useEffect(() => {
    const getHomeById = document.getElementById('homeTog');
    const getAllActiveElemByClass = document.querySelectorAll('.Cabecera-li-act-link');
  
    const removeActiveClassHome = () => getAllActiveElemByClass.forEach(el => el.classList.replace('Cabecera-li-act-link', 'Cabecera-li'));
    const disableHomeActive = () => getHomeById.classList.replace('Cabecera-h1-act-link', 'Cabecera-h1');
  
    const disableAllElem = () => {
      removeActiveClassHome();
      disableHomeActive();
    }
    
    const isIntersected = {
      'homeIsIntersecting': () => { getHomeById.classList.replace('Cabecera-h1', 'Cabecera-h1-act-link'); removeActiveClassHome() },
      'skillsIsIntersected': () => { disableAllElem(); document.getElementById('skillsTog').classList.replace('Cabecera-li', 'Cabecera-li-act-link')},
      'projectsIsIntersected': () => { disableAllElem(); document.getElementById('projectsTog').classList.replace('Cabecera-li', 'Cabecera-li-act-link') },
      'contactIsIntersected': () => { disableAllElem(); document.getElementById('contactTog').classList.replace('Cabecera-li', 'Cabecera-li-act-link') }
    }
  
    if(isActive) isIntersected[isActive]();
  }, [ isActive ])
  
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
