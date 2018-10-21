import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <header id="header" className="header header-hide">
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active"><Link to="/">Home</Link></li>
                        <li><Link to="/map">map</Link></li>

                    </ul>
                </nav>
            </header>
        )
    }
}
export default NavBar;
