import React, { useEffect, useRef, useState } from 'react';
import { IUser } from '../../interface';
import { getGender } from '../../utils/getGender';
import { validateFile } from '../../utils/validateFile';
import { validateRequired } from '../../utils/validateRequired';
import { validateText } from '../../utils/validationText';
import styles from './Form.module.scss';
import InputCustom from './InputCustom/InputCustom';
import SelectorCustom from './SelectCustom/SelectCustom';

interface FormProps {
    addNewUser: (user: IUser) => void;
}
const Form: React.FC<FormProps> = ({ addNewUser }) => {
    const [nameError, setNameError] = useState<string>('');
    const [surnameError, setSurnameError] = useState<string>('');
    const [birthdayError, setBirthdayError] = useState<string>('');
    const [genderError, setGenderError] = useState<string>('');
    const [countryError, setCountryError] = useState<string>('');
    const [agreementError, setAgreementError] = useState<string>('');
    const [fileError, setFileError] = useState<string>('');
    const [isSaved, setIsSaved] = useState<boolean>(false);

    const form = useRef<HTMLFormElement>(null);
    const name = useRef<HTMLInputElement>(null);
    const surname = useRef<HTMLInputElement>(null);
    const birthday = useRef<HTMLInputElement>(null);
    const file = useRef<HTMLInputElement>(null);
    const radioMale = useRef<HTMLInputElement>(null);
    const radioFemale = useRef<HTMLInputElement>(null);
    const agreement = useRef<HTMLInputElement>(null);
    const country = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSaved(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [isSaved]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nameCurr = name.current?.value || '';
        const surnameCurr = surname.current?.value || '';
        const birthdayCurr = birthday.current?.value || '';
        const countryCurr = country.current?.value || '';
        const agreementCurr = agreement.current?.checked || false;
        const genderCurr: string | null = getGender([radioMale, radioFemale]);
        const fileCurr = file.current?.files?.[0];

        const validateForm = [
            validateText(nameCurr, setNameError),
            validateText(surnameCurr, setSurnameError),
            validateRequired(birthdayCurr, setBirthdayError),
            validateRequired(agreementCurr, setAgreementError),
            validateRequired(countryCurr, setCountryError),
            validateRequired(genderCurr, setGenderError),
            validateFile(fileCurr, setFileError),
        ].includes(true);

        if (!validateForm) {
            const newUser: IUser = {
                name: nameCurr,
                surname: surnameCurr,
                birthday: birthdayCurr,
                country: countryCurr,
                gender: genderCurr,
                file: fileCurr,
            };
            addNewUser(newUser);
            setIsSaved(true);
            form.current?.reset();
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} ref={form}>
            <div className="form__name">
                <h1>Form</h1>
            </div>
            <div className={styles.form__row}>
                <InputCustom
                    title="First Name:"
                    placeholder="Enter first name"
                    ref={name}
                    errorMess={nameError}
                />
                <InputCustom
                    title="Last Name:"
                    placeholder="Enter last name"
                    ref={surname}
                    errorMess={surnameError}
                />
            </div>
            <InputCustom
                title="Select your date of birth:"
                type="date"
                ref={birthday}
                errorMess={birthdayError}
            />
            <InputCustom
                title="Choose a picture of something:"
                type="file"
                ref={file}
                errorMess={fileError}
            />
            <div className={styles.form__row}>
                <h1>Gender:</h1>
                <InputCustom
                    type="radio"
                    title="Male"
                    name="gender"
                    value="male"
                    ref={radioMale}
                />
                <InputCustom
                    type="radio"
                    title="Female"
                    name="gender"
                    value="female"
                    ref={radioFemale}
                    errorMess={genderError}
                />
            </div>
            <div className={styles.form__row}>
                <h1>You agree to your data being sent</h1>
                <InputCustom
                    title="agree"
                    type="checkbox"
                    ref={agreement}
                    errorMess={agreementError}
                />
            </div>
            <SelectorCustom ref={country} errorMess={countryError} />
            <div className="button">
                <button type="submit" className={`${styles.button_submit} btn`}>
                    Submit
                </button>
                <button type="reset" className={`${styles.button_reset} btn`}>
                    Reset
                </button>
            </div>
            {isSaved && <span>The data has been saved</span>}
        </form>
    );
};
export default Form;
