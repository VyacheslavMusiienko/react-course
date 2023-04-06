import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Modal from './Modal';

describe('Modal', () => {
    it('render component Modal', () => {
        const { getByText } = render(
            <Modal isOpen onClose={() => {}} idCard={1} />
        );
        expect(getByText('Loading...')).toBeInTheDocument();
    });
});
