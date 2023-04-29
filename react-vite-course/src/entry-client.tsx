import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

hydrateRoot(
    document.getElementById('app') as HTMLElement,
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
