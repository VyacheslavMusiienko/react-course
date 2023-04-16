import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { IUser } from '../../interface';
import User from './User';
import { setupStore } from '../../store/store';

const store = setupStore();

describe('User', () => {
    const testUser: IUser = {
        name: 'John',
        surname: 'Doe',
        birthday: '1990-01-01',
        country: 'United States',
        gender: 'Male',
        picture: undefined,
    };

    it('renders the user details', () => {
        render(
            <Provider store={store}>
                <User user={{ ...testUser }} />
            </Provider>
        );
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Gender: Male')).toBeInTheDocument();
        expect(screen.getByText('Birthday: 1990-01-01')).toBeInTheDocument();
        expect(screen.getByText('Country: United States')).toBeInTheDocument();
    });

    it('renders default image if user picture is not available', () => {
        render(
            <Provider store={store}>
                <User user={{ ...testUser }} />
            </Provider>
        );
    });
});
