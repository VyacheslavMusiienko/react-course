import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import InputCustom from './InputCustom';

describe('InputCustom', () => {
    it('renders InputCustom component', () => {
        const surname: React.RefObject<HTMLInputElement> = React.createRef();

        render(<InputCustom title="Last Name:" placeholder="Enter last name" ref={surname} />);
    });
});
