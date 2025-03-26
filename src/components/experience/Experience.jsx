import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaCertificate} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      {/* front end */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Excellent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Excellent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Mid-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React</h4>
              <small className='text-light'>Mid-Level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Sass</h4>
              <small className='text-light'>Mid-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Mid-level</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>Tailwind CSS</h4>
            <small className='text-light'>Mid-level</small>
            </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
          <h4>Electron.js</h4>
          <small className='text-light'>Low-level</small>
          </div>
        </article>
          </div>
        </div>
        {/* Back end */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Entry-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Express.js</h4>
              <small className='text-light'>Entry-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Entry-level</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>C#</h4>
            <small className='text-light'>Entry-level</small>
            </div>
          </article>
        </div>
      </div>
      {/* Data Bases */}
      <div className="experience__backend">
          <h3>Databases</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Postgres</h4>
              <small className='text-light'>Entry-level</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Entry-level</small>
            </div>
          </article>
        </div>
      </div>
      {/* Web Services */}
      <div className="experience__backend">
          <h3>Web services</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Devtools</h4>
              <small className='text-light'>Excellent</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>Postman</h4>
            <small className='text-light'>Mid-level</small>
            </div>
          </article>
        </div>
      </div>
      </div>
      {/* Certificates */}
      <h2 className='certificates__header'>My Certificates</h2>
      <div className="container certificate__container">
          <div >
            <article className='experience__details'>
              <FaCertificate className="experience__details-icon" />
              <div>
              <h4><a href="https://www.freecodecamp.org/certification/Lukakavtaradze/javascript-algorithms-and-data-structures" target='_blank'>Freecodecamp Javascript Algorithms & Data Structures</a></h4>
              <small className='text-light'>Skills required: JS Algorithms / Data Structures<br />Aug 2022</small>
              <small></small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCertificate className="experience__details-icon" />
              <div>
              <h4><a href="https://www.freecodecamp.org/certification/Lukakavtaradze/responsive-web-design" target='_blank'>Freecodecamp Responsive Web Design</a></h4>
              <small className='text-light'>Skills required: HTML5 / CSS<br />Jan 2022</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCertificate className="experience__details-icon" />
              <div>
              <h4><a href="https://certification.w3schools.com/w3certified.asp?id=12896962" target='_blank'>W3Schools Programming Programming in HTML5 with JavaScript and CSS3</a></h4>
              <small className='text-light'>Skills required: HTML5 / CSS / JS<br /> Mar 2021</small>
              </div>
            </article>
        </div>
      </div>

    </section>
  )
}

export default Experience