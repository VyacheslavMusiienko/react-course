import { render, screen } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { useAppSelector } from '../../hooks/redux';
import { productsApi } from '../../service/productService';
import Cards from './Cards';

vi.mock('../../hooks/redux');
vi.mock('../../service/productService');

describe('Cards component', () => {
    beforeEach(() => {
        (useAppSelector as Mock).mockReturnValue({ value: 'test' });
    });

    it('should render "Loading..." when isLoading is true', () => {
        (productsApi.useFetchAllProductQuery as Mock).mockReturnValue({
            isLoading: true,
        });

        render(<Cards />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render "No cards found" when there are no products', () => {
        (productsApi.useFetchAllProductQuery as Mock).mockReturnValue({
            data: { products: [] },
        });

        render(<Cards />);

        expect(screen.getByText('No cards found')).toBeInTheDocument();
    });

    it('renders cards', () => {
        const product = {
            products: [
                {
                    id: 1,
                    title: 'Product 1',
                    description: 'string',
                    price: 3,
                    discountPercentage: 6,
                    rating: 6,
                    stock: 9,
                    brand: 'string',
                    category: 'string',
                    thumbnail: 'string',
                    images: ['string', 'string', 'string'],
                },
                {
                    id: 2,
                    title: 'Product 2',
                    description: 'string',
                    price: 3,
                    discountPercentage: 6,
                    rating: 6,
                    stock: 9,
                    brand: 'string',
                    category: 'string',
                    thumbnail: 'string',
                    images: ['string', 'string', 'string'],
                },
            ],
        };
        (productsApi.useFetchAllProductQuery as Mock).mockReturnValue({
            data: product,
        });

        render(<Cards />);
        expect(screen.getAllByTestId('user')).toHaveLength(2);
    });

    it('should render an error message when there is an error', () => {
        (productsApi.useFetchAllProductQuery as Mock).mockReturnValue({
            error: { message: 'Error message' },
        });

        render(<Cards />);

        expect(screen.getByText('Oops!')).toBeInTheDocument();
        expect(
            screen.getByText('Sorry, an unexpected error has occurred.')
        ).toBeInTheDocument();
    });
});
