import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { pathParams } from '../../routes/pathParams';
import Navbar from './Navbar';

describe('Navbar component', () => {
    it('renders all navbar items', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const navbarItems = screen.getAllByRole('link');
        expect(navbarItems).toHaveLength(Object.keys(pathParams).length - 1);
    });

    it('displays the correct path name', () => {
        render(
            <MemoryRouter initialEntries={[pathParams.about.path]}>
                <Navbar />
            </MemoryRouter>
        );
        const pathName = screen.getAllByText(pathParams.about.title)[0];
        expect(pathName).toBeInTheDocument();
    });
});
