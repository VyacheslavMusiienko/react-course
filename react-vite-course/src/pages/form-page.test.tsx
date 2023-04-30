import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { setupStore } from '../store/store';
import FormPage from './form-page';

const store = setupStore();

describe('form-page', () => {
    it('renders with no cards', () => {
        render(
            <Provider store={store}>
                <FormPage />
            </Provider>
        );
        const cardsElement = screen.queryByRole('listitem');
        expect(cardsElement).toBeNull();
    });
});
