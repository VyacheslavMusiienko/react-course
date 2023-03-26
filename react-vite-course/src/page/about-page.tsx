import React from 'react';

export default class AboutPage extends React.Component {
    render(): React.ReactNode {
        const title = 'About';
        return (
            <div>
                <h1>{title}</h1>
            </div>
        );
    }
}
