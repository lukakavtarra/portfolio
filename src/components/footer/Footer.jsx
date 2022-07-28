import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Luka Kavtaradze</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100014463279442" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/lukakavtarra/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/luka-kavtaradze-6b3b261a1/" target="_blank">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer