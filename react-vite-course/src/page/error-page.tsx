import React from 'react';

export default class ErrorPage extends React.Component {
    render(): React.ReactNode {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        );
    }
}
