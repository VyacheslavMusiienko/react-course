import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import FormPage from './form-page';

describe('form-page', () => {
    it('renders with no cards', () => {
        render(<FormPage />);
        const cardsElement = screen.queryByRole('listitem');
        expect(cardsElement).toBeNull();
    });
});
