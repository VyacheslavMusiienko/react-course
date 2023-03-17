import { createBrowserRouter } from 'react-router-dom';
import LayoutMain from '../layout/main/Layout-main';
import AboutPage from '../page/about-page';
import ErrorPage from '../page/error-page';
import MainPage from '../page/main-page';
import { pathParams } from './pathParams';

export const router = createBrowserRouter([
    {
        path: pathParams.main.path,
        element: <LayoutMain />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <MainPage />,
                index: true,
            },
            {
                element: <AboutPage />,
                path: pathParams.about.path,
            },
        ],
    },
]);
