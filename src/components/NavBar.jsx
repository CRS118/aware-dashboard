import React from 'react';

function NavBar() {
    return (
       <> 
            <h1>AWARE</h1>
            <span>Advanced Water And Rainfall Environment</span>
            <a href="/">Home</a>
            <a href="/floods">Flood Warnings</a>
            <a href="/rainfall">Rainfall</a>
            <a href="/air-quality">Air Quality</a>
        </>
    );
}

export default NavBar;

