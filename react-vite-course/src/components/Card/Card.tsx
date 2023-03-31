import { IProducts } from '../../interface';
import styles from './Card.module.scss';

interface IProps {
    product: IProducts;
}
const Card: React.FC<IProps> = (product) => {
    const { title, price, images } = product.product;
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={images[0]} alt="product" />
            </div>
            <div className="card__title">{title}</div>
            <div className="card__price">{price}</div>
        </div>
    );
};
export default Card;
