import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, it } from 'vitest';
import Cards from './Cards';

describe('Cards', () => {
    const router = createMemoryRouter([
        {
            path: '/',
            element: <Cards />,
        },
    ]);
    it('renders Cards component', () => {
        const { getByText } = render(<RouterProvider router={router} />);
        expect(getByText('Loading...')).toBeInTheDocument();
    });
});
