import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import About from './about-page';

describe('About', () => {
    it('renders About component', () => {
        render(<About />);
        screen.debug();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
    });
});
