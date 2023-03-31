import React, { useEffect, useState } from 'react';
import { IProducts } from '../../interface';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

const Cards: React.FC = () => {
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

    if (error) {
        return <div>{error}</div>;
    }

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cards">
            <div className={styles.cards__box}>
                {products.map((product) => {
                    return <Card key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default Cards;
