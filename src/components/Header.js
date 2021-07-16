import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
function Header() {
    return (
        <div style={{padding: '1rem', background: 'black'}}>
            <div style={{ display: 'flex', marginLeft: '11.7rem' }}>
            <img src={logo} alt="logo" height= '40px' />
            <Link to='/' style={{textDecoration:"none"}}>
            <h1 style={{ color: 'white'}}>
                 Pizza-Maker
            </h1>
            </Link>
            </div>
        </div>
    )
}

export default Header;
