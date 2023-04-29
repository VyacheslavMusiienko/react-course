import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './layout/Layout';

import AboutPage from '../pages/about-page';
import ErrorPage from '../pages/error-page';
import FormPage from '../pages/form-page';
import MainPage from '../pages/main-page';
import './App.scss';

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/form" element={<FormPage />} />
            </Route>
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    );
};

export default App;
