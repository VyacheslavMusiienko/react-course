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
            product: {
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
                images: [
                    'https://via.placeholder.com/150x150.png',
                    'https://via.placeholder.com/150x150.png',
                    'https://via.placeholder.com/150x150.png',
                ],
            },
        };

        (productsApi.useFetchSingleProductQuery as Mock).mockReturnValue({
            isLoading: false,
            error: null,
            data: product,
        });

        render(<Modal isOpen onClose={vi.fn()} idCard={1} />);

        expect(screen.getByAltText(/product/i)).toBeInTheDocument();
        expect(screen.getByText(/title: product 1/i)).toBeInTheDocument();
        expect(screen.getByText(/brand: string/i)).toBeInTheDocument();
        expect(screen.getByText(/price: \$3/i)).toBeInTheDocument();
        expect(screen.getByText(/description: string/i)).toBeInTheDocument();
    });
});
