import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Users from './Users';

describe('Users', () => {
    it('renders Users component', () => {
        const props = [
            {
                name: 'str',
                surname: 'str',
                birthday: '2023-03-15',
                country: 'Ukraine',
                gender: 'female',
                file: undefined,
            },
            {
                name: 'str',
                surname: 'str',
                birthday: '2023-03-15',
                country: 'Ukraine',
                gender: 'female',
                file: undefined,
            },
        ];
        render(<Users users={props} />);
    });
});
