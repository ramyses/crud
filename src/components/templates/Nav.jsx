import React from 'react';
import './Nav.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/**Refatorar */}
            <a href="#/">
                <i className='fa fa-home'> Inicio</i>
            </a>
            <a href="#/">
                <i className="fa fa-users">Users</i>
            </a>
        </nav>
    </aside>