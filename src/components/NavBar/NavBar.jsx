import React from 'react';
import PropTypes from 'prop-types';

import './navbar.css';

export const NavBar = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <>
    <div className='editionSwitch_editionSwitch'>
      <nav className='editionSwitch_navigation'></nav>

      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        class='editionSwitch_closeIcon__igZEW'
        data-testid='editionSwitch-close'
      >
        <rect
          width='20.7913'
          height='1.78204'
          transform='matrix(0.705419 0.708791 -0.705419 0.708791 5.33301 4)'
          fill='#121212'
        ></rect>
        <rect
          width='20.7913'
          height='1.78204'
          transform='matrix(0.705419 -0.708791 0.705419 0.708791 4 18.7363)'
          fill='#121212'
        ></rect>
      </svg>
    </div>
    <nav className='navigation_navigation'>
      <ul class='navigation_menu'>
        <li data-testid='navLink' class='navigation_menuItem'>

            <a href='/de'>
              <font>
                <font>Home</font>
              </font>
            </a>
     
        </li>
      </ul>
      <ul class='navigation_menu'>
  
          <li data-testid='navLink' class='navigation_menuItem'>
            <a href='/de'>
              <font>
                <font>Home</font>
              </font>
            </a>
      
        </li>
      </ul>
      <ul class='navigation_menu'>
        <li data-testid='navLink' class='navigation_menuItem'>
       
            <a href='/de'>
              <font>
                <font>Home</font>
              </font>
            </a>
       
        </li>
      </ul>
    </nav>
    <div className='drawer_drawer'>
      <div className='drawer_header'></div>
      <div className='drawer_navSections'></div>
    </div>
  </>
);

NavBar.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  user: null,
};
