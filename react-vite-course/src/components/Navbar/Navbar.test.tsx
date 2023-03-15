import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { describe, it } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders Navbar component', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route element={<Navbar />} />
                </Routes>
            </BrowserRouter>
        );
    });
});
