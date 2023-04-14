import { useState } from 'react';
import { productsApi } from '../../service/productService';
import Card from '../Card/Card';
import Search from '../Search/Search';
import styles from './Cards.module.scss';

const Cards = () => {
    const [input, setInput] = useState('');
    const {
        data: products,
        error,
        isLoading,
    } = productsApi.useFetchAllProductQuery(input, {
        refetchOnMountOrArgChange: true,
    });

    const handleSearch = (searchValue: string) => {
        setInput(searchValue);
    };

    if (error) {
        return (
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        );
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cards">
            <Search onSearch={handleSearch} />
            <div className={styles.cards__box}>
                {products && products.products.length > 0 ? (
                    products.products.map((product) => {
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
