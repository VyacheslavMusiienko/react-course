import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { Provider } from 'react-redux';

import App from './app/App';

import { setupStore } from './store/store';

const store = setupStore();

export function render(url: string, options: RenderToPipeableStreamOptions) {
    const stream = renderToPipeableStream(
        <Provider store={store}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </Provider>,
        options
    );
    return stream;
}
