import React from 'react';
import { FormState, IUser } from '../../interface';
import startsWithCapital from '../../utils/startsWithCapital';
import styles from './Form.module.scss';
import InputCustom from './InputCustom/InputCustom';
import SelectorCustom from './SelectCustom/SelectCustom';

interface FormProps {
    addNewUser: (user: IUser) => void;
}

export default class Form extends React.Component<FormProps, FormState> {
    form: React.RefObject<HTMLFormElement>;
    name: React.RefObject<HTMLInputElement>;
    surname: React.RefObject<HTMLInputElement>;
    birthday: React.RefObject<HTMLInputElement>;
    file: React.RefObject<HTMLInputElement>;
    radioMale: React.RefObject<HTMLInputElement>;
    radioFemale: React.RefObject<HTMLInputElement>;
    agreement: React.RefObject<HTMLInputElement>;
    country: React.RefObject<HTMLSelectElement>;

    constructor(props: FormProps) {
        super(props);

        this.form = React.createRef();
        this.name = React.createRef();
        this.surname = React.createRef();
        this.birthday = React.createRef();
        this.file = React.createRef();
        this.radioMale = React.createRef();
        this.radioFemale = React.createRef();
        this.agreement = React.createRef();
        this.country = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            nameError: null,
            surnameError: null,
            birthdayError: null,
            genderError: null,
            countryError: null,
            agreementError: null,
            fileError: null,
            isSaved: false,
        };
    }

    validateText = (refValue: string, stateProp: string) => {
        let error = '';
        const regex = /^[ \d]+/;

        if (refValue.length < 2 || refValue.length > 10)
            error = 'Must contain 2-10 characters';

        if (refValue && startsWithCapital(refValue)) {
            error = 'First letter must be capitalized';
        }
        if (regex.test(refValue)) {
            error = 'Invalid input';
        }

        if (!refValue) error = 'Required field';

        this.setState((prevState) => ({
            ...prevState,
            [stateProp]: error,
        }));

        return !!error;
    };
    validateRequired = (
        refValue: string | boolean | null,
        stateProp: string
    ) => {
        let error = '';

        if (!refValue) error = 'Required field';

        this.setState((prevState) => ({
            ...prevState,
            [stateProp]: error,
        }));

        return !!error;
    };
    validateFile = (refValue: Blob | undefined, prop: string) => {
        let error = '';

        if (!refValue?.type.includes('image')) error = 'Must be an image';

        if (!refValue) error = 'Required field';

        this.setState((prevState) => ({
            ...prevState,
            [prop]: error,
        }));

        return !!error;
    };
    getGender = (
        genderRefArray: React.RefObject<HTMLInputElement>[]
    ): string | null => {
        let gender = null;

        genderRefArray.forEach((genderEl) => {
            if (genderEl.current?.checked) {
                gender = genderEl.current.value;
            }
        });

        return gender;
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { addNewUser } = this.props;
        const name = this.name.current?.value || '';
        const surname = this.surname.current?.value || '';
        const birthday = this.birthday.current?.value || '';
        const country = this.country.current?.value || '';
        const agreement = this.agreement.current?.checked || false;
        const gender: string | null = this.getGender([
            this.radioMale,
            this.radioFemale,
        ]);
        const file = this.file.current?.files?.[0];

        const validateForm = [
            this.validateText(name, 'nameError'),
            this.validateText(surname, 'surnameError'),
            this.validateRequired(birthday, 'birthdayError'),
            this.validateRequired(agreement, 'agreementError'),
            this.validateRequired(country, 'countryError'),
            this.validateRequired(gender, 'genderError'),
            this.validateFile(file, 'fileError'),
        ].includes(true);

        if (!validateForm) {
            const newUser = {
                name,
                surname,
                birthday,
                country,
                gender,
                file,
            };
            addNewUser(newUser);
            this.setState({ isSaved: true });
            setTimeout(() => {
                this.setState({ isSaved: false });
            }, 2000);
            this.form.current?.reset();
        }
    };

    render(): React.ReactNode {
        const { isSaved } = this.state;
        return (
            <form
                className={styles.form}
                onSubmit={this.handleSubmit}
                ref={this.form}
            >
                <div className="form__name">
                    <h1>Form</h1>
                </div>
                <div className={styles.form__row}>
                    <InputCustom
                        title="First Name:"
                        placeholder="Enter first name"
                        ref={this.name}
                        errorMess={this.state.nameError}
                    />
                    <InputCustom
                        title="Last Name:"
                        placeholder="Enter last name"
                        ref={this.surname}
                        errorMess={this.state.surnameError}
                    />
                </div>
                <InputCustom
                    title="Select your date of birth:"
                    type="date"
                    ref={this.birthday}
                    errorMess={this.state.birthdayError}
                />
                <InputCustom
                    title="Choose a picture of something:"
                    type="file"
                    ref={this.file}
                    errorMess={this.state.fileError}
                />
                <div className={styles.form__row}>
                    <h1>Gender:</h1>
                    <InputCustom
                        type="radio"
                        title="Male"
                        name="gender"
                        value="male"
                        ref={this.radioMale}
                    />
                    <InputCustom
                        type="radio"
                        title="Female"
                        name="gender"
                        value="female"
                        ref={this.radioFemale}
                        errorMess={this.state.genderError}
                    />
                </div>
                <div className={styles.form__row}>
                    <h1>You agree to your data being sent</h1>
                    <InputCustom
                        title="agree"
                        type="checkbox"
                        ref={this.agreement}
                        errorMess={this.state.agreementError}
                    />
                </div>
                <SelectorCustom
                    ref={this.country}
                    errorMess={this.state.countryError}
                />
                <div className="button">
                    <button
                        type="submit"
                        className={`${styles.button_submit} btn`}
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        className={`${styles.button_reset} btn`}
                    >
                        Reset
                    </button>
                </div>
                {isSaved && <span>The data has been saved</span>}
            </form>
        );
    }
}
