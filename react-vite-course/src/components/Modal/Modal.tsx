import { useEffect } from 'react';
import { productsApi } from '../../service/productService';
import styles from './Modal.module.scss';

interface IModalProps {
    idCard: number;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ isOpen, onClose, idCard }: IModalProps) => {
    const {
        data: product,
        error,
        isLoading,
    } = productsApi.useFetchSingleProductQuery(idCard, { skip: !idCard });

    const renderModalContent = () => {
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
            <>
                <div className={styles.modal__img}>
                    <img src={product?.images[0]} alt="product" />
                </div>
                <div className="card__title">Title: {product?.title}</div>
                <div className="card__brand">Brand: {product?.brand}</div>
                <div className="card__price">Price: ${product?.price}</div>
                <div className="card__description">
                    Description: {product?.description}
                </div>
            </>
        );
    };

    return isOpen ? (
        <div className={styles.modal}>
            <div className={styles.modal__overlay} />
            <div
                className={styles.modal__box}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modal__close}>
                    <button
                        className={styles.modal__close_btn}
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                <div className="modal__content">{renderModalContent()}</div>
            </div>
        </div>
    ) : null;
};

export default Modal;
