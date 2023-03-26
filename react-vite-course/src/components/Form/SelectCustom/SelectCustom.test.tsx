import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import SelectCustom from './SelectCustom';

describe('SelectCustom', () => {
    it('renders SelectCustom component', () => {
        const country: React.RefObject<HTMLSelectElement> = React.createRef();
        const countryError = 'str';
        render(<SelectCustom ref={country} errorMess={countryError} />);
    });
});
