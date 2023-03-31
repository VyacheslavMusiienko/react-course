import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss';

const Search = () => {
    const [search, setSearch] = useState<string>(() => {
        const savedValue = localStorage.getItem('searchValue');
        return savedValue || '';
    });

    useEffect(() => {
        localStorage.setItem('searchValue', search);
    }, [search]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <div className="search">
            <input
                type="text"
                className={styles.search__input}
                value={search}
                onChange={handleInputChange}
            />

            <button type="button" className={`${styles.search__button} btn`}>
                Search
            </button>
        </div>
    );
};
export default Search;
