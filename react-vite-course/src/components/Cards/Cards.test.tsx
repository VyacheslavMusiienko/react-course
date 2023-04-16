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
            id: 1,
            title: 'Microsoft Surface Laptop 4',
            description: 'Style and speed. Stand out on ...',
            price: 1499,
            discountPercentage: 10.23,
            rating: 4.43,
            stock: 68,
            brand: 'Microsoft Surface',
            category: 'laptops',
            thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
            images: [
                'https://i.dummyjson.com/data/products/8/1.jpg',
                'https://i.dummyjson.com/data/products/8/2.jpg',
                'https://i.dummyjson.com/data/products/8/3.jpg',
                'https://i.dummyjson.com/data/products/8/4.jpg',
                'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
            ],
        };
        (productsApi.useFetchSingleProductQuery as Mock).mockReturnValue({
            isLoading: false,
            error: null,
            data: product,
        });

        render(<Cards />);
        expect(screen.getAllByTestId('user')).toHaveLength(1);
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
