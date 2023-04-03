import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';

const Search = () => {
    const initSearchValue: string = localStorage.getItem('searchValue') || '';
    const [searchValue, setSearchValue] = useState(initSearchValue);
    const searchRef = useRef<string>(searchValue);

    useEffect(() => {
        return function saveToLS() {
            const currentSearchValue = searchRef?.current || '';
            localStorage.setItem('searchValue', currentSearchValue);
        };
    }, []);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newSearchValue = e.target.value.trimStart();
        setSearchValue(newSearchValue);
        searchRef.current = newSearchValue;
    };

    return (
        <div className="search">
            <input
                type="text"
                className={styles.search__input}
                value={searchValue}
                onChange={onSearchChange}
            />

            <button type="button" className={`${styles.search__button} btn`}>
                Search
            </button>
        </div>
    );
};
export default Search;
