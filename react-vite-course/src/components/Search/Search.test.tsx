import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it, Mock, vi } from 'vitest';
import { setupStore } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import Search from './Search';
import { productsSlice } from '../../store/reducer/productSlice';

const store = setupStore();
vi.mock('../../hooks/redux');
describe('Search', () => {
    beforeEach(() => {
        (useAppSelector as Mock).mockReturnValue('');
    });
    const mockDispatch = vi.fn();
    (useAppDispatch as Mock).mockReturnValue(mockDispatch);
    const { setValue } = productsSlice.actions;

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
        fireEvent.change(input, { target: { value: 'test value' } });
        expect(input).toHaveValue('test value');
    });

    it('should call onSearch function with searchValue on button click', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const button = screen.getByRole('button', { name: 'Search' });
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test value' } });
        fireEvent.click(button);
        expect(mockDispatch).toHaveBeenCalledWith(setValue('test value'));
    });

    it('should call onSearch function with searchValue on enter press', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test value' } });
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(mockDispatch).toHaveBeenCalledWith(setValue('test value'));
    });
});
