import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styles from '../Form.module.scss';

interface IFormInput {
    country: string;
}

const SelectorCustom = React.forwardRef<HTMLSelectElement, ReturnType<UseFormRegister<IFormInput>>>(
    ({ onChange, name }, ref) => {
        return (
            <div>
                <label className={`${styles.form__input}`}>
                    Country:
                    <select name={name} id="country" ref={ref} onChange={onChange}>
                        <option value="Ukraine" defaultValue="Ukraine">
                            Ukraine
                        </option>
                        <option value="Russia">Russia</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Other country">Other country</option>
                    </select>
                </label>
            </div>
        );
    }
);
export default SelectorCustom;
