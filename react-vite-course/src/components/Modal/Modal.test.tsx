import { render, screen } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { productsApi } from '../../service/productService';
import Modal from './Modal';

vi.mock('../../service/productService');

describe('Modal', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders loading state', async () => {
        (productsApi.useFetchSingleProductQuery as Mock).mockReturnValue({
            isLoading: true,
            error: null,
            data: undefined,
        });

        render(<Modal isOpen onClose={vi.fn()} idCard={1} />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('renders error state', async () => {
        (productsApi.useFetchSingleProductQuery as Mock).mockReturnValue({
            isLoading: false,
            error: new Error('An error occurred'),
            data: undefined,
        });

        render(<Modal isOpen onClose={vi.fn()} idCard={1} />);

        expect(
            screen.getByText(/sorry, an unexpected error has occurred/i)
        ).toBeInTheDocument();
    });

    it('renders product details', async () => {
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

        render(<Modal isOpen onClose={vi.fn()} idCard={1} />);

        expect(
            screen.getByText(/title: Microsoft Surface Laptop 4/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/brand: Microsoft Surface/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/price: \$1499/i)).toBeInTheDocument();
        expect(
            screen.getByText(/description: Style and speed. Stand out on .../i)
        ).toBeInTheDocument();
    });
});
