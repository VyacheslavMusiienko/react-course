import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ErrorPage from './error-page';

describe('Error page', () => {
    it('render Error page', () => {
        render(<ErrorPage />);
        expect(screen.getByText(/oops!/i)).toBeInTheDocument();
    });
});
