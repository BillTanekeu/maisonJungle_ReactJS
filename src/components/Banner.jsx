import React from 'react';
import '../styles/Banner.css';
import logo from '../assets/logo.png';
const Banner = () => {
    const Title = 'La maison jungle';
    return (
        
        <div className='Banner'>
            <img src={logo} alt="logo" className='imgLogo' />
            <h2 className='Title'>{Title}</h2>
        </div>
    );
};

export default Banner;