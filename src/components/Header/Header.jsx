import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='main-nav'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/orders">Orders</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/grandpa">Grandpa</ActiveLink>
        </nav>
    );
};

export default Header;