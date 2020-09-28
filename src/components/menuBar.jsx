import React, { Component } from 'react';
import {   NavLink } from 'react-router-dom';

export default class MenuBar extends Component {
    render() {

        return (
            <div className="menubar" data-color="">
                 <nav className="navbar  navbar-light">
                    <ul className="navbar-nav mr-auto"  >
                        <li><NavLink to={'/'} className="nav-link">Home</NavLink></li>
                        <li><NavLink to={'/about'} className="nav-link">About</NavLink></li>
                        <li><NavLink to={'/contact'} className="nav-link">Contact US</NavLink></li>
                        <li><NavLink to={'/blog/2'} className="nav-link">Blog</NavLink></li> 
                        <li><NavLink to={'/shoppingCart'} className="nav-link">ShoppingCart</NavLink></li> 
                    </ul>
                </nav> 
            </div>
        )

    }
}