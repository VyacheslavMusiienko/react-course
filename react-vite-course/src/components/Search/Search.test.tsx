import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Search from './Search';

describe('Card', () => {
    it('renders Search component', () => {
        render(<Search />);
    });
    it('input value changes on user input', () => {
        const { getByRole } = render(<Search />);
        const input = getByRole('textbox');

        fireEvent.change(input, { target: { value: 'new value' } });
        expect((input as HTMLInputElement).value).toBe('new value');
    });
    it('render search component with data from localstorage', () => {
        localStorage.setItem('searchValue', 'test');
        render(<Search />);
        expect(screen.getByDisplayValue('test')).toBeInTheDocument();
    });
});
