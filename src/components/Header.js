import React from 'react';
import '../index.css';
import logoImg from '../images/logo.svg';

function Header({alt}) {
    return (
        <header className="header root__section">
        <img 
        className='header__logo'
        src={logoImg}
        alt={alt}
        />
        </header>
    );
}

export default Header;