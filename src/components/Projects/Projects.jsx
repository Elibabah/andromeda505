import './Projects.css'

import Image from 'next/image'
import dash1 from './../../assets/projects_screen_images/dash1.png';
import dash4 from './../../assets/projects_screen_images/dash4.jpg';
import dash9 from './../../assets/projects_screen_images/dash99.png';

export const Projects = () => {
  return (
    <main id='projects'>
      <section className="projectsBox">
        <header>Mis proyectos</header>

        <div className='projectsContent'>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash9}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash9}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash9}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash1}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash1}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash4}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

        </div>

      </section>
    </main>
  )
}
