import styles from './Modal.module.scss';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModalProps) => {
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
                <div className="modal__content">{children}</div>
            </div>
        </div>
    ) : null;
};

export default Modal;
