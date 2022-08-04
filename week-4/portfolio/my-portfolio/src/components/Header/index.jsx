import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import "./Header.scss";

const Header = props => {
    return (
        <header>
            <Link to='/' className='link'>Home</Link>
            <Link to='/works' className='link'>Works</Link>
            <Link to='/blogs' className='link'>Blogs</Link>
            <Link to='/contact' className='link'>Contact</Link>
        </header>
    );
};

Header.propTypes = {
    
};

export default Header;