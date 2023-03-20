import React from 'react';
import styles from './Card.module.scss';

interface IProps {
    product: IProducts;
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

export default class Card extends React.Component<IProps> {
    render(): React.ReactNode {
        const { product } = this.props;
        return (
            <div className={styles.card}>
                <div className={styles.card__img}>
                    <img src={product.images[0]} alt="product" />
                </div>
                <div className="card__title">{product.title}</div>
                <div className="card__price">{product.price}</div>
            </div>
        );
    }
}
