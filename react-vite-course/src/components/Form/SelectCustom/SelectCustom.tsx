import React from 'react';
import styles from '../Form.module.scss';

interface IProps extends React.HTMLProps<HTMLInputElement> {
    errorMess?: string | null;
}

const SelectorCustom = React.forwardRef<HTMLSelectElement, IProps>(
    (props, ref) => {
        const countries = ['Ukraine', 'Russia', 'Belarus', 'Other country'];

        const countriesLayout = countries.map((country, index) => (
            <option value={country} key={index}>
                {country}
            </option>
        ));
        const { errorMess } = props;

        return (
            <label className={`${styles.form__input}`}>
                Country:
                <select
                    name="country"
                    id="country"
                    ref={ref}
                    defaultValue="none"
                >
                    <option disabled value="none" style={{ display: 'none' }}>
                        -- select an option --
                    </option>
                    {countriesLayout}
                </select>
                {errorMess && <span>{errorMess}</span>}
            </label>
        );
    }
);
export default SelectorCustom;
