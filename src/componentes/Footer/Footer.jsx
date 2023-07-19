import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import "./Footer.css"

function Footer() {
  return (
  <div className='Footer'>
    <p>Site feito por Patrick Oliveira de Brito</p>
    <div className='Social'>
    <a href="https://github.com/patrickodev" target="_blank" rel="noopener noreferrer">
      <AiFillGithub size={30} className="iconS" />
    </a>
    <a href="https://www.linkedin.com/in/patrick-oliveira-de-brito-067766269/" target="_blank" rel="noopener noreferrer">
      <AiFillLinkedin size={30} className="iconS" />
    </a>  
    </div>
    <p>Ilutrações de <a className='linkRef' href="https://storyset.com/web" target="_blank" rel="noopener noreferrer">Web illustrations by Storyset</a></p>
  </div>
  );
}

export default Footer;