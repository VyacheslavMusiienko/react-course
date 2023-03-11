import { createBrowserRouter } from 'react-router-dom';
import LayoutMain from '../layout/layout-main';
import About from '../page/about-page';
import ErrorPage from '../page/error-page';
import Main from '../page/main-page';
import { pathParams } from './pathParams';

export const router = createBrowserRouter([
    {
        path: pathParams.main,
        element: <LayoutMain />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Main />,
                index: true,
            },
            {
                element: <About />,
                path: pathParams.about,
            },
        ],
    },
]);
