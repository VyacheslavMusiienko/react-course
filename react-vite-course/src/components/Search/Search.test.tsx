import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Search from './Search';

describe('Search', () => {
    const onSearchMock = vi.fn();
    const searchValue = 'test search value';
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render correctly', () => {
        render(<Search onSearch={onSearchMock} />);
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: 'Search' });
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('should update searchValue state on input change', () => {
        render(<Search onSearch={onSearchMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: searchValue } });
        expect(input).toHaveValue(searchValue);
    });

    it('should call onSearch function with searchValue on button click', () => {
        render(<Search onSearch={onSearchMock} />);
        const button = screen.getByRole('button', { name: 'Search' });
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: searchValue } });
        fireEvent.click(button);
        expect(onSearchMock).toHaveBeenCalledWith(searchValue);
    });

    it('should call onSearch function with searchValue on enter press', () => {
        render(<Search onSearch={onSearchMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: searchValue } });
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(onSearchMock).toHaveBeenCalledWith(searchValue);
    });
});
