import { IProducts } from '../../interface';
import styles from './Card.module.scss';

interface IProps {
    product: IProducts;
}
const Card = ({ product }: IProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={product.images[0]} alt="product" />
            </div>
            <div className="card__title">{product.title}</div>
            <div className="card__price">{product.price}</div>
        </div>
    );
};
export default Card;
