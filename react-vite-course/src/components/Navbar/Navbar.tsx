import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathParams } from '../../routes/pathParams';
import { withRouter, WithRouterProps } from '../../utils/withRouter';
import Search from '../Search/Search';
import styles from './Navbar.module.scss';

class Navbar extends React.Component<WithRouterProps> {
    public render() {
        const { pathname } = this.props.location;
        const pathName = pathname === '/' ? 'Home' : 'About Us';
        return (
            <nav className={styles.navbar}>
                <ul className={styles.navbar__items}>
                    <li className={styles.navbar__item}>
                        <NavLink
                            to={pathParams.main}
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                        >
                            Main
                        </NavLink>
                    </li>

                    <li className={styles.navbar__item}>
                        <NavLink
                            to={pathParams.about}
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <span>{pathName}</span>
                <Search />
            </nav>
        );
    }
}
export default withRouter(Navbar);
