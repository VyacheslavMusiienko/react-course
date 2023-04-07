import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Modal from './Modal';

describe('Modal', () => {
    it('render component Modal', () => {
        const { getByText } = render(
            <Modal isOpen onClose={vi.fn()} idCard={1} />
        );
        expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('renders error message when fetch fails', async () => {
        vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Fetch failed'));

        render(<Modal isOpen onClose={vi.fn()} idCard={1} />);

        await waitFor(() => {
            expect(screen.getByText('Fetch failed')).toBeInTheDocument();
        });

        (global.fetch as jest.MockedFunction<typeof fetch>).mockRestore();
    });

    const productMock = {
        id: 1,
        title: 'Product Title',
        brand: 'Product Brand',
        price: 100,
        description: 'Product Description',
        images: ['image1.jpg', 'image2.jpg'],
    };
    it('renders modal with product information when isOpen is true and fetch is successful', async () => {
        const mockedResponse: Partial<Response> = {
            json: vi.fn().mockResolvedValue(productMock),
        };
        vi.spyOn(global, 'fetch').mockResolvedValue(mockedResponse as Response);

        render(<Modal isOpen onClose={vi.fn()} idCard={1} />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await waitFor(() => {
            expect(
                screen.getByText('Title: Product Title')
            ).toBeInTheDocument();
            expect(
                screen.getByText('Brand: Product Brand')
            ).toBeInTheDocument();
            expect(screen.getByText('Price: $100')).toBeInTheDocument();
            expect(
                screen.getByText('Description: Product Description')
            ).toBeInTheDocument();
            expect(screen.getByAltText('product')).toBeInTheDocument();
        });

        (global.fetch as jest.MockedFunction<typeof fetch>).mockRestore();
    });
});
