import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProducts } from '../../interface';
import Card from '../Card/Card';
import Search from '../Search/Search';
import styles from './Cards.module.scss';

const Cards = () => {
    const [products, setProducts] = useState<IProducts[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const initSearchValue: string = localStorage.getItem('searchValue') || '';
    const [searchParams, setSearchParams] = useSearchParams({
        search: initSearchValue,
    });
    const getSearchParams = searchParams.get('search');

    useEffect(() => {
        const initialParams = new URLSearchParams(window.location.search);
        if (getSearchParams !== null && getSearchParams.length !== 0) {
            initialParams.set('search', getSearchParams);
            window.history.pushState(
                {},
                '',
                `${window.location.pathname}?${initialParams}`
            );
            setSearchParams(initialParams);
        }
    }, [setSearchParams, getSearchParams]);

    useEffect(() => {
        if (initSearchValue.length === 0) {
            fetch('https://dummyjson.com/products?limit=10')
                .then((response) => response.json())
                .then((data) => {
                    setProducts(data.products);
                })
                .catch((errors) => {
                    setError(errors.message);
                });
        }
        fetch(`https://dummyjson.com/products/search?q=${initSearchValue}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((errors) => {
                setError(errors.message);
            });
    }, [initSearchValue]);

    const handleSearch = async (searchValue: string) => {
        localStorage.setItem('searchValue', searchValue);

        let search;
        if (searchValue) {
            search = {
                search: searchValue,
            };
        } else {
            search = undefined;
        }
        setSearchParams(search, { replace: true });

        fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((errors) => {
                setError(errors.message);
            });
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cards">
            <Search onSearch={handleSearch} />
            <div className={styles.cards__box}>
                {products.length > 0 ? (
                    products.map((product) => {
                        return <Card key={product.id} product={product} />;
                    })
                ) : (
                    <div>No cards found</div>
                )}
            </div>
        </div>
    );
};

export default Cards;
