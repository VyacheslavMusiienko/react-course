import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default class LayoutMain extends React.Component {
    public render(): React.ReactNode {
        return (
            <>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Outlet />
                </main>
            </>
        );
    }
}
