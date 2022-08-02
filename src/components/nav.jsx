import React, { Component } from 'react';

//Stateless Functional Component 
const NavBar = ({ totalCounters }) => {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar <span className='btn btn-primary'>{totalCounters}</span></a>
                </div>
            </nav>
        </div>
    );
};
 
export default NavBar;