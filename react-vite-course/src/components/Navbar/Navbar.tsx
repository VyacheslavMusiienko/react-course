import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathParams } from '../../routes/pathParams';
import Search from '../Search/Search';
import styles from './Navbar.module.scss';

interface IProps {}
interface IState {
    title: string;
}

export default class Navbar extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            title: '',
        };
    }

    componentDidMount(): void {
        if (window.location.pathname === '/') this.setState({ title: 'Main' });
        if (window.location.pathname === '/about')
            this.setState({ title: 'About Us' });
    }

    handleClick = () => {
        if (window.location.pathname === '/')
            this.setState({ title: 'About Us' });
        if (window.location.pathname === '/about')
            this.setState({ title: 'Main' });
    };

    public render() {
        return (
            <nav className={styles.navbar}>
                <ul className={styles.navbar__items}>
                    <li className={styles.navbar__item}>
                        <NavLink
                            to={pathParams.main}
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                            onClick={this.handleClick}
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
                            onClick={this.handleClick}
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <span>{this.state.title}</span>
                <Search />
            </nav>
        );
    }
}
