import { useEffect, useState } from 'react';
import { IProducts } from '../../interface';
import styles from './Modal.module.scss';

interface IModalProps {
    idCard: number;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ isOpen, onClose, idCard }: IModalProps) => {
    const [product, setProduct] = useState<IProducts | null>(null);
    const [errorM, setErrorM] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            fetch(`https://dummyjson.com/products/${idCard}`)
                .then((response) => response.json())
                .then((data) => {
                    setProduct(data);
                })
                .catch((errors) => {
                    setErrorM(errors.message);
                });
        }
    }, [idCard, isOpen]);

    const renderModalContent = () => {
        if (errorM) {
            return <div>{errorM}</div>;
        }

        if (!product) {
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
