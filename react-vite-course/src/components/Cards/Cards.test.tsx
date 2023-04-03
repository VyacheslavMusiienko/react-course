import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Cards from './Cards';

describe('Cards', () => {
    it('renders Cards component', () => {
        render(<Cards />);
    });
});
