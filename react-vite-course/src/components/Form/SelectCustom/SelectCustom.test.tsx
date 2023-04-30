import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import SelectorCustom from './SelectCustom';

describe('SelectCustom', () => {
    it('should change the selected option value', () => {
        const registerMock = vi.fn();
        render(<SelectorCustom {...registerMock('country')} />);
        const selectElement = screen.getByRole('combobox', {
            name: 'Country:',
        }) as HTMLSelectElement;
        fireEvent.change(selectElement, { target: { value: 'Ukraine' } });
        expect(selectElement.value).toBe('Ukraine');
        expect(registerMock).toHaveBeenCalledWith('country');
    });
});
