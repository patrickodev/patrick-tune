import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi'
import disco  from "../../images/disco-icon.png";
import "./Header.css"

function Header() {
  const handleNomeClick = () => {
    window.location.reload();
  };

  return (
    <div className='Header'>
      <img onClick={handleNomeClick} className="Logo" src={ disco } alt="Logo" />
      <Link onClick={handleNomeClick}><h1>PatrickTunes</h1></Link>
      <div className='PerfilInfo'>
        <Link to="/"><BiLogIn className='Navegation' size={30} /></Link>
      </div>
    </div>
  );
}

export default Header;