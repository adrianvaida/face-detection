import React from 'react';
import Tilt from 'react-tilt';
import logo from './Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa4"><img  src={logo} alt='logo'/></div>
            </Tilt>
        </div>
    );
}

export default Logo;