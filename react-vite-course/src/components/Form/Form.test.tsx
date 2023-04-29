import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it, vi } from 'vitest';
import { setupStore } from '../../store/store';
import Form from './Form';

const store = setupStore();

describe('Form', () => {
    it('renders Form component', () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
    });
    it('test form in FomComponent', async () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        globalThis.URL.createObjectURL = vi.fn();

        const blob = new Blob(['image'], { type: 'image/jpeg' });
        await act(async () => {
            fireEvent.change(screen.getAllByRole('textbox')[0], {
                target: { value: 'John' },
            });
            fireEvent.change(screen.getAllByRole('textbox')[1], {
                target: { value: 'Travolta' },
            });
            const dateInput = screen.getByLabelText('Select your date of birth:');
            fireEvent.change(dateInput, { target: { value: '1990-01-01' } });

            fireEvent.change(screen.getByRole('combobox'), {
                target: { value: 'Ukraine' },
            });
            fireEvent.click(screen.getAllByRole('radio')[0]);
            const input = screen.getByLabelText('Choose a picture of something:');
            fireEvent.change(input, {
                target: { files: [blob] },
            });
            fireEvent.click(screen.getByRole('checkbox'));
            fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
        });
    });

    it('shows error message for required fields when submitting empty form', async () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
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
