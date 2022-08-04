import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Header.scss";


const Header = props => {
    const [toogleMenu, setToogleMenu] = useState(true);
    return (
        <header className='header'>
    
            <div className="menu"
            style={{display:toogleMenu?'flex':'none'}}
            >
                <Link to='/' className='link'>Home</Link>
                <Link to='/works' className='link'>Works</Link>
                <Link to='/blogs' className='link'>Blogs</Link>
                <Link to='/contact' className='link'>Contact</Link>
            </div>
            <a href="#" className="bars" onClick={()=>setToogleMenu(!toogleMenu)}>
                <i className={toogleMenu? 'fas fa-times':'fas fa-bars' }></i>
            </a>
        </header>
    );
};

Header.propTypes = {

};

export default Header;