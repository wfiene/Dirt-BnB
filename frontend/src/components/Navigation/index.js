// frontend/src/components/Navigation/index.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false);



  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div className='login-sign-up-row'>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className='nav-frame'>
      <div>
        <NavLink exact to="/"><img src="https://i.postimg.cc/FHhXQCYf/dirt-bnb.png"
        alt="logo" style={{ margin:'0px', padding:'0px', height: '100px', width: '180px', marginBottom: '10px' }} /></NavLink>
      </div>
      <div className='free-div'>
        <button className='free-button' onClick={() => openInNewTab('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>
          Click here for a free rental
        </button>
      </div>
      <div>
        {isLoaded && sessionLinks}
      </div>

    </div>
  );
}

export default Navigation;