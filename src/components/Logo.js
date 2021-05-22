import React from 'react';
import './Logo.css';
import logoImg from '../images/logo.svg';

function Logo({alt}) {
    return (
        <img 
        className='Logo'
        src={logoImg}
        alt={alt}
        />
    );
}

export default Logo;