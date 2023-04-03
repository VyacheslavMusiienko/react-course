import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import FormPage from './form-page';

describe('form-page', () => {
    it('render form page', () => {
        render(<FormPage />);
    });
});
