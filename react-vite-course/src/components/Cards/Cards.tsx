import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

interface IProps {
    title: string;
}

interface IState {
    products: IProducts[] | null;
    error: string | null;
}
interface IProducts {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export default class Cards extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            products: null,
            error: null,
        };
    }

    componentDidMount() {
        fetch('https://dummyjson.com/products?limit=10')
            .then((response) => response.json())
            .then((products) => {
                this.setState({ products: products.products });
            })
            .catch((error) => {
                this.setState({ error: error.message });
            });
    }

    public render(): React.ReactNode {
        const { products, error } = this.state;
        const { title } = this.props;

        if (error) {
            return <div>{error}</div>;
        }

        if (!products) {
            return <div>Loading...</div>;
        }
        return (
            <div className="cards">
                <h1 className="cards__title">{title}</h1>
                <div className={styles.cards__box}>
                    {products.map((product) => {
                        return <Card key={product.id} product={product} />;
                    })}
                </div>
            </div>
        );
    }
}
