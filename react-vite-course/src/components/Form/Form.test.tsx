import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Form from './Form';

describe('Form', () => {
    it('renders Form component', () => {
        render(<Form addNewUser={vi.fn()} />);
    });
    it('test form in FomComponent', async () => {
        render(<Form addNewUser={vi.fn()} />);
        globalThis.URL.createObjectURL = vi.fn();

        const file = new File(['image'], 'image.jpeg', { type: 'image/jpeg' });
        await act(async () => {
            fireEvent.change(screen.getAllByRole('textbox')[0], {
                target: { value: 'John' },
            });
            fireEvent.change(screen.getAllByRole('textbox')[1], {
                target: { value: 'Travolta' },
            });
            const dateInput = screen.getByLabelText(
                'Select your date of birth:'
            );
            fireEvent.change(dateInput, { target: { value: '1990-01-01' } });

            fireEvent.change(screen.getByRole('combobox'), {
                target: { value: 'Ukraine' },
            });
            fireEvent.click(screen.getAllByRole('radio')[0]);
            const input = screen.getByLabelText(
                'Choose a picture of something:'
            );
            fireEvent.change(input, {
                target: { files: [file] },
            });
            fireEvent.click(screen.getByRole('checkbox'));
            fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
        });
    });

    it('shows error message for required fields when submitting empty form', async () => {
        render(<Form addNewUser={vi.fn()} />);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        const requiredFields = await screen.findAllByText(/required field/i, {
            selector: 'span',
        });
        expect(requiredFields).toHaveLength(6);
        requiredFields.forEach((field) => {
            expect(field).toBeInTheDocument();
        });
    });
});
