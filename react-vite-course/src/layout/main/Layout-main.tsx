import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default class LayoutMain extends React.Component {
    public render(): React.ReactNode {
        return (
            <>
                <header className="header">
                    <Navbar />
                </header>
                <main>
                    <Outlet />
                </main>
            </>
        );
    }
}
