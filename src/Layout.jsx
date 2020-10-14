import React from 'react';
import NavBar from './Contents/NavBar'
import './css/Layout.css'

const Layout = ({children}) => {
    const name="kelvin";
    return (
        <div>
            <div className="navbar-mod"><NavBar/></div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Layout;