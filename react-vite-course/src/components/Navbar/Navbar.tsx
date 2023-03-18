import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathParams } from '../../routes/pathParams';
import { withRouter, WithRouterProps } from '../../utils/withRouter';
import Search from '../Search/Search';
import styles from './Navbar.module.scss';

class Navbar extends React.Component<WithRouterProps> {
    handlerNamePath = () => {
        const { pathname } = this.props.location;

        return Object.values(pathParams).map((value) => {
            if (pathname === value.path) {
                return value.title;
            }
            return '';
        });
    };

    public render() {
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
                <span>{this.handlerNamePath()}</span>
                <Search />
            </nav>
        );
    }
}
export default withRouter(Navbar);
