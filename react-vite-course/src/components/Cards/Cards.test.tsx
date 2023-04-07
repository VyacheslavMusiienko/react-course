import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import Cards from './Cards';

describe('Cards', () => {
    it('renders Cards', () => {
        render(
            <BrowserRouter>
                <Cards />
            </BrowserRouter>
        );
        expect(screen.getByText('Loading...')).toBeInTheDocument();
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
