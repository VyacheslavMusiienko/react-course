import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { productsSlice } from '../../store/reducer/productSlice';
import styles from './Search.module.scss';

const Search = () => {
    const { setValue } = productsSlice.actions;
    const value = useAppSelector((state) => state.productsReducer.value);
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState(value);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newSearchValue = e.target.value.trimStart();
        setSearchValue(newSearchValue);
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(setValue(searchValue));
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
                onClick={() => dispatch(setValue(searchValue))}
            >
                Search
            </button>
        </div>
    );
};
export default Search;
