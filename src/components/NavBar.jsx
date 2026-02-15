import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo-section">
                    <h1>AWARE</h1>
                    <span>Advanced Water And Rainfall Environment</span>
                </div>
                
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/floods">Flood Warnings</a>
                    <a href="/rainfall">Rainfall</a>
                    <a href="/air-quality">Air Quality</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;