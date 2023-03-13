import React from 'react';
import styles from './Search.module.scss';

export default class Search extends React.Component {
    public render() {
        return (
            <div className="search">
                <input type="text" className={styles.search__input} />

                <button type="button" className={styles.search__button}>
                    Search
                </button>
            </div>
        );
    }
}
