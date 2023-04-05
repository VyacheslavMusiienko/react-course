import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';

interface ISearchProps {
    onSearch: (searchValue: string) => void;
}

const Search = ({ onSearch }: ISearchProps) => {
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
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(searchValue);
        }
    };

    return (
        <div className="search">
            <input
                type="text"
                className={styles.search__input}
                value={searchValue}
                onChange={onSearchChange}
                onKeyDown={handleKeyPress}
            />

            <button
                type="button"
                className={`${styles.search__button} btn`}
                onClick={() => onSearch(searchValue)}
            >
                Search
            </button>
        </div>
    );
};
export default Search;
