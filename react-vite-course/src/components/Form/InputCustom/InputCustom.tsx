import React from 'react';
import styles from '../Form.module.scss';

interface IProps extends React.HTMLProps<HTMLInputElement> {
    title: string;
}
const InputCustom = React.forwardRef<HTMLInputElement, IProps>((props, ref) => {
    const { title, ...restProps } = props;

    return (
        <div className={`${styles.form__input}`}>
            <label>
                {title}
                <input {...restProps} ref={ref} />
            </label>
        </div>
    );
});
export default InputCustom;
