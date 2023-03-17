import { createBrowserRouter } from 'react-router-dom';
import LayoutMain from '../layout/main/Layout-main';
import About from '../page/about-page';
import ErrorPage from '../page/error-page';
import Main from '../page/main-page';
import { pathParams } from './pathParams';

export const router = createBrowserRouter([
    {
        path: pathParams.main.path,
        element: <LayoutMain />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Main />,
                index: true,
            },
            {
                element: <About />,
                path: pathParams.about.path,
            },
        ],
    },
]);
