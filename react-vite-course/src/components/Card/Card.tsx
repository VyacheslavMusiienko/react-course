import { useState } from 'react';
import { IProducts } from '../../interface';
import Modal from '../Modal/Modal';
import styles from './Card.module.scss';

interface IProps {
    product: IProducts;
}
const Card = (product: IProps) => {
    const { title, price, images, id } = product.product;
    const [isModalOpen, setModalState] = useState(false);
    const toggleModal = () => setModalState(!isModalOpen);

    return (
        <div className={styles.card} onClick={toggleModal}>
            <div className={styles.card__img}>
                <img src={images[0]} alt="product" />
            </div>
            <div className="card__title">Title: {title}</div>
            <div className="card__price">Price: ${price}</div>

            <Modal idCard={id} isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
};
export default Card;
