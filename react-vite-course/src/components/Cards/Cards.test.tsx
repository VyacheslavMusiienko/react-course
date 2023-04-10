import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import Cards from './Cards';

describe('Cards', () => {
    it('Render characters', async () => {
        render(
            <BrowserRouter>
                <Cards />
            </BrowserRouter>
        );

        const characters = await screen.findAllByText(/title/i);
        const characters1 = await screen.findAllByText(/price/i);
        characters.forEach((character) => {
            expect(character).toBeInTheDocument();
        });
        characters1.forEach((character) => {
            expect(character).toBeInTheDocument();
        });
    });

    it('renders Cards', () => {
        render(
            <BrowserRouter>
                <Cards />
            </BrowserRouter>
        );
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should write to localstorage', async () => {
        localStorage.setItem('searchValue', 'iphone');
        render(
            <BrowserRouter>
                <Cards />
            </BrowserRouter>
        );

        await waitFor(async () => {
            const characters = screen.findAllByText(/iphone/i);
            (await characters).forEach((character) => {
                expect(character).toBeInTheDocument();
            });
        });
    });

    it('should render an error message when there is an error', async () => {
        const errorMessage = 'An error occurred';
        vi.spyOn(global, 'fetch').mockRejectedValue(new Error(errorMessage));
        render(
            <BrowserRouter>
                <Cards />
            </BrowserRouter>
        );
        await waitFor(() =>
            expect(screen.getByText(errorMessage)).toBeInTheDocument()
        );
    });
});
