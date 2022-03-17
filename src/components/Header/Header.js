import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome My React Website</h1>
            <nav className="menu">
                <a href="home">Home</a>
                <a href="shop">Shop</a>
                <a href="about">About</a>
            </nav>
        </div>
    );
};

export default Header;