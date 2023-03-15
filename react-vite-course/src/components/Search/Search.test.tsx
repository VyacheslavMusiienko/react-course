import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Search from './Search';

describe('Card', () => {
    it('renders Search component', () => {
        render(<Search />);
    });
});
