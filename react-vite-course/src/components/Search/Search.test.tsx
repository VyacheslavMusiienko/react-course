import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it, vi } from 'vitest';
import { setupStore } from '../../store/store';
import Search from './Search';

const store = setupStore();

describe('Search', () => {
    const onSearchMock = vi.fn();
    const searchValue = 'test search value';
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render correctly', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: 'Search' });
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('should update searchValue state on input change', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: searchValue } });
        expect(input).toHaveValue(searchValue);
    });

    it('should call onSearch function with searchValue on button click', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const button = screen.getByRole('button', { name: 'Search' });
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: searchValue } });
        fireEvent.click(button);
        expect(onSearchMock).toHaveBeenCalledWith(searchValue);
    });

    it('should call onSearch function with searchValue on enter press', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: searchValue } });
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(onSearchMock).toHaveBeenCalledWith(searchValue);
    });
});
