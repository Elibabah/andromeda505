"use client"

import { useState, useEffect } from 'react'
import './Navbar.css'

export const NavBar = () =>  {
    const [scrolled, setScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState('home')
    const [ menu, setMenu ] = useState(false)
    const toggleMenu = () => {
        setMenu( !menu )
    }
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    },[])

    return (
        <header  className={scrolled ? 'Cabecera-scrolled' : 'Cabecera'}>
            <h1 id='homeTog' className={activeLink === 'home' ? 'Cabecera-h1-act-link' : 'Cabecera-h1'} onClick={ () => { menu ? toggleMenu() : '';  setTimeout(() => {
                onUpdateActiveLink('home')
            }, 800)  }}>
                <a href="#home" className="Cabecera-a">Andrómeda</a>
            </h1>

            <button className="Cabecera-button" onClick={ toggleMenu } >
                { menu ? 
                    <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg> : 
                    <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                }
            </button>

            <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` } >
                <ul className="Cabecera-ul">
                    <li id='skillsTog' className={activeLink === 'skills' && !menu ? 'Cabecera-li-act-link' : 'Cabecera-li'}  onClick={ () => { menu? toggleMenu() : ''; onUpdateActiveLink('skills')} }><a href="#skills" className="Cabecera-a">Skills</a></li>
                    <li id='projectsTog' className={activeLink === 'projects' && !menu ? 'Cabecera-li-act-link' : 'Cabecera-li'}  onClick={ () => {menu? toggleMenu() : ''; onUpdateActiveLink('projects')} }><a href="#projects" className="Cabecera-a">Projectos</a></li>
                    <li id='contactTog' className={activeLink === 'contact' && !menu ? 'Cabecera-li-act-link' : 'Cabecera-li'}  onClick={ () => {menu? toggleMenu() : ''; onUpdateActiveLink('contact')} }><a href="#contact" className="Cabecera-a">Contáctame</a></li>
                </ul>
            </nav>
        </header> 
    )
  }
  