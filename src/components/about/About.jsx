import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { IoDocument } from "react-icons/io5";


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
              <small>Up To 3 Year Training</small>
            </article>
            <article className="about__card">
              <IoDocument  className='about__icon'/>
              <h5>Certificates</h5>
              <small>4+ Certificates</small>
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