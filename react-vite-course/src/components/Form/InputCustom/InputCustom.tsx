import React from 'react';
import styles from '../Form.module.scss';

interface IProps extends React.HTMLProps<HTMLInputElement> {
    title: string;
    errorMess?: string | null;
}
const InputCustom = React.forwardRef<HTMLInputElement, IProps>((props, ref) => {
    const { title, errorMess, ...restProps } = props;

    return (
        <div className={`${styles.form__input}`}>
            <label>
                {title}
                <input {...restProps} ref={ref} />
            </label>
            {errorMess && <span>{errorMess}</span>}
        </div>
    );
});
export default InputCustom;
