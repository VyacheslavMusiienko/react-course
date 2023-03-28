import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const LayoutMain = () => {
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
};
export default LayoutMain;
