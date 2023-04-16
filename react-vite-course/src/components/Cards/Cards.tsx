import { useAppSelector } from '../../hooks/redux';
import { productsApi } from '../../service/productService';
import Card from '../Card/Card';
import Search from '../Search/Search';
import styles from './Cards.module.scss';

const Cards = () => {
    const { value } = useAppSelector((state) => state.productsReducer);
    const {
        data: products,
        error,
        isLoading,
    } = productsApi.useFetchAllProductQuery(value, {
        refetchOnMountOrArgChange: true,
    });

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
            <Search />
            <div className={styles.cards__box} data-testid="user">
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
