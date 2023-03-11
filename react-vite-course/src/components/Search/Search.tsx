import React from 'react';
import './Search.scss';

export default class Search extends React.Component {
    public render() {
        return (
            <div className="search">
                <input type="text" className="search__input" />

                <button type="button" className="search__button">
                    Search
                </button>
            </div>
        );
    }
}
