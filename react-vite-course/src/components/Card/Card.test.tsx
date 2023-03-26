import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Card from './Card';

describe('Card', () => {
    it('renders Card component', () => {
        const props = {
            id: 1,
            title: 'string',
            description: 'string',
            price: 3,
            discountPercentage: 6,
            rating: 6,
            stock: 9,
            brand: 'string',
            category: 'string',
            thumbnail: 'string',
            images: ['string', 'string', 'string'],
        };
        render(<Card product={props} />);
    });
});
