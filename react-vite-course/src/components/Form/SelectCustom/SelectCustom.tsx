import React from 'react';
import styles from '../Form.module.scss';

interface IProps extends React.HTMLProps<HTMLInputElement> {
    errorMess?: string | null;
}

const SelectorCustom = React.forwardRef<HTMLSelectElement, IProps>(
    (props, ref) => {
        const { errorMess } = props;
        const countries = ['Ukraine', 'Russia', 'Belarus', 'Other country'];
        const countriesLayout = countries.map((country, index) => (
            <option value={country} key={index}>
                {country}
            </option>
        ));

        return (
            <div>
                <label className={`${styles.form__input}`}>
                    Country:
                    <select
                        name="country"
                        id="country"
                        ref={ref}
                        defaultValue=""
                    >
                        <option disabled value="" style={{ display: 'none' }}>
                            -- select an option --
                        </option>
                        {countriesLayout}
                    </select>
                </label>
                {errorMess && <span>{errorMess}</span>}
            </div>
        );
    }
);
export default SelectorCustom;
