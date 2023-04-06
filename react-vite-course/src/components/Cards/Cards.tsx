import { useEffect, useState } from 'react';
import { IProducts } from '../../interface';
import Card from '../Card/Card';
import Search from '../Search/Search';
import styles from './Cards.module.scss';

const Cards = () => {
    const [products, setProducts] = useState<IProducts[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((errors) => {
                setError(errors.message);
            });
    }, []);

    const handleSearch = async (searchValue: string) => {
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
