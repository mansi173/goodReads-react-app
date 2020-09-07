/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div className="header">
        <nav className="headerMenu">
        <a href="#">Home</a>
          <a href="#">About Us</a>
            <a href="#">ContactUs</a>
            <a href="#">Posts</a>
        </nav>
        <div>
            Social Media Link
        </div>

    </div>
   )

 }

export default Header;