import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { setupStore } from '../../store/store';
import Users from './Users';

const store = setupStore();

describe('Users', () => {
    it('renders Users component', () => {
        render(
            <Provider store={store}>
                <Users />
            </Provider>
        );
    });
});
