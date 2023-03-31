import React from 'react';
import { NavLink, useLocation, useNavigation } from 'react-router-dom';
import { pathParams } from '../../routes/pathParams';
import Search from '../Search/Search';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    const location = useLocation();

    const handlerNamePath = () => {
        return Object.values(pathParams).map((value) => {
            if (location.pathname === value.path) {
                return value.title;
            }
            return '';
        });
    };
    const navBar = Object.entries(pathParams).map(([key, value]) => {
        if (value.path === '/error') return;
        return (
            <li className={styles.navbar__item} key={key}>
                <NavLink
                    to={value.path}
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    {value.title}
                </NavLink>
            </li>
        );
    });
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__items}>{navBar}</ul>
            <span>{handlerNamePath()}</span>
            <Search />
        </nav>
    );
};
export default Navbar;
