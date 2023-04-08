import { fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, it } from 'vitest';
import SelectorCustom from './SelectCustom';

describe('SelectCustom', () => {
    it('should change the selected option value', () => {
        interface IFormInput {
            country: string;
        }
        const { register } = useForm<IFormInput>();
        render(<SelectorCustom {...register('country')} />);
        const selectElement = screen.getByRole('combobox', {
            name: 'Country:',
        }) as HTMLSelectElement;
        fireEvent.change(selectElement, { target: { value: 'Ukraine' } });
        expect(selectElement.value).toBe('Ukraine');
    });
});
