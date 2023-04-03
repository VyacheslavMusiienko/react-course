import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { IUser } from '../../interface';
import Form from './Form';

describe('Form', () => {
    it('renders Form component', () => {
        interface ISetState {
            users: IUser[] | never;
        }
        const setState: ISetState = {
            users: [],
        };
        const addNewUser = (newUser: IUser) => {
            setState.users.push(newUser);
        };
        render(<Form addNewUser={addNewUser} />);
    });
});
