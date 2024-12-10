import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Constants/Routes';
const Header = () => {
  const navigate=useNavigate()
    return (
      <header className="blog-header">
        <div className="header-container">
          <div className="logo" onClick={()=>{navigate(ROUTES.HOME)}}>Blog App</div>
  
        </div>
      </header>
    );
  };

export default Header;