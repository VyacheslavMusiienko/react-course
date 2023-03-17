import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import AboutPage from './about-page';

describe('About page', () => {
    it('render About page', () => {
        render(<AboutPage />);
        expect(screen.getByText(/about/i)).toBeInTheDocument();
    });
});
