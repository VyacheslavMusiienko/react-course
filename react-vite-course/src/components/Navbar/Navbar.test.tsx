import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, it } from 'vitest';
import LayoutMain from '../../layout/main/Layout-main';
import About from '../../page/about-page';
import ErrorPage from '../../page/error-page';
import Main from '../../page/main-page';
import { pathParams } from '../../routes/pathParams';

describe('Navbar', () => {
    const router = createMemoryRouter(
        [
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
        ],
        {
            initialEntries: ['/'],
        }
    );
    it('click navbar', async () => {
        render(<RouterProvider router={router} />);
        const linkEl = screen.getByRole('link', { name: 'Home' });
        expect(linkEl.getAttribute('class')).toMatch(/active/i);
    });
});
