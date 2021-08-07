import React from 'react';
import './Header.css';
import image from '../../../image/banner.jpg';
const Header = () => {
    return (
        <div>
            <img style={{width:'100%', height:'400px'}} src={image} alt="" />
        </div>
    );
};

export default Header;