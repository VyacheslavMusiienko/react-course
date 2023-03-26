import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import InputCustom from './InputCustom';

describe('InputCustom', () => {
    it('renders InputCustom component', () => {
        const surname: React.RefObject<HTMLInputElement> = React.createRef();
        const surnameError = 'str';
        render(
            <InputCustom
                title="Last Name:"
                placeholder="Enter last name"
                ref={surname}
                errorMess={surnameError}
            />
        );
    });
});
