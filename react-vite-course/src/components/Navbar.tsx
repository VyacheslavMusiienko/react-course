import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathParams } from '../routes/pathParams';

export default class Navbar extends React.Component {
    public render() {
        return (
            <>
                <NavLink to={pathParams.main}>main</NavLink>
                <NavLink to={pathParams.about}>about</NavLink>
            </>
        );
    }
}
