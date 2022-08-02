import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>Up To 1 Year Training</small>
            </article>
            <article className="about__card">
              <FiUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small>0 Real Clients For Now</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>+20 Learning Projects</small>
            </article>
          </div>

          <p>
            Hello, welcome to my portfolio webpage. I am Luka Kavtaradze,
            I just started to learn web developing and already have learn a lot of things.
            If you want me to help you contact me.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About