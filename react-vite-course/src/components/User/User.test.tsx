import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { IUser } from '../../interface';
import { User } from './User';

describe('User', () => {
    it('renders Card component', () => {
        const user: IUser = {
            name: 'str',
            surname: 'str',
            birthday: '2023-03-15',
            country: 'Ukraine',
            gender: 'female',
            file: undefined,
        };
        render(<User user={user} key={1} />);
    });
});
