import { productsApi } from '../../service/productService';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

const Cards = () => {
    const {
        data: products,
        error,
        isLoading,
    } = productsApi.useFetchAllUsersQuery(10);

    // redux state
    // const { products, isLoading, error } = useAppSelector(
    //     (state) => state.productsReducer
    // );
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(getProducts());
    // }, [dispatch]);

    // props value
    // const [products, setProducts] = useState<IProducts[] | null>(null);
    // const [error, setError] = useState<string | null>(null);

    // const initSearchValue: string = localStorage.getItem('searchValue') || '';

    // useEffect(() => {
    //     if (initSearchValue.length === 0) {
    //         fetch('https://dummyjson.com/products?limit=10')
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 setProducts(data.products);
    //             })
    //             .catch((errors) => {
    //                 setError(errors.message);
    //             });
    //     }
    //     fetch(`https://dummyjson.com/products/search?q=${initSearchValue}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProducts(data.products);
    //         })
    //         .catch((errors) => {
    //             setError(errors.message);
    //         });
    // }, [initSearchValue]);

    // const handleSearch = async (searchValue: string) => {
    //     fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProducts(data.products);
    //         })
    //         .catch((errors) => {
    //             setError(errors.message);
    //         });
    // };

    if (error) {
        return <div>eroor</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cards">
            {/* <Search onSearch={handleSearch} /> */}
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
