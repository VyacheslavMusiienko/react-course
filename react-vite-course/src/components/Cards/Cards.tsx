import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

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

export default class Cards extends React.Component<
    Record<string, never>,
    IState
> {
    constructor(props: Record<string, never>) {
        super(props);

        this.state = {
            products: null,
            error: null,
        };
    }

    componentDidMount(): void {
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
    }
}
