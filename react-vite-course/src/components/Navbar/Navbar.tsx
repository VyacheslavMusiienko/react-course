import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathParams } from '../../routes/pathParams';
import Search from '../Search/Search';
import './Navbar.scss';

export default class Navbar extends React.Component {
    public render() {
        return (
            <nav className="navbar">
                <ul className="navbar__items">
                    <li className="navbar__item">
                        <NavLink to={pathParams.main} className="navbar__link">
                            Main
                        </NavLink>
                    </li>

                    <li className="navbar__item">
                        <NavLink to={pathParams.about} className="navbar__link">
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <Search />
            </nav>
        );
    }
}
