import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { setupStore } from './store/store';

const store = setupStore();

export const render = (url: string, options?: object) => {
    return renderToPipeableStream(
        <React.StrictMode>
            <Provider store={store}>
                <StaticRouter location={url} />
            </Provider>
        </React.StrictMode>,
        options
    );
};
