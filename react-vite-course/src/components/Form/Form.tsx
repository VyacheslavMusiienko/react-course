import React from 'react';
import { IUser } from '../../interface';
import startsWithCapital from '../../utils/startsWithCapital';
import styles from './Form.module.scss';
import InputCustom from './InputCustom/InputCustom';
import SelectorCustom from './SelectCustom/SelectCustom';

interface FormProps {
    addNewUser: (user: IUser) => void;
}
interface FormState {
    errorFirst: null | string;
    errorLast: null | string;
    errorData: null | string;
    errorGender: null | string;
    errorCountry: null | string;
    errorFile: null | string;
    errorAgree: null | string;
    allNotNull: boolean;
}

export default class Form extends React.Component<FormProps, FormState> {
    form: React.RefObject<HTMLFormElement>;
    first: React.RefObject<HTMLInputElement>;
    last: React.RefObject<HTMLInputElement>;
    data: React.RefObject<HTMLInputElement>;
    file: React.RefObject<HTMLInputElement>;
    radioMale: React.RefObject<HTMLInputElement>;
    radioFemale: React.RefObject<HTMLInputElement>;
    errorAgree: React.RefObject<HTMLInputElement>;
    country: React.RefObject<HTMLSelectElement>;

    constructor(props: FormProps) {
        super(props);

        this.form = React.createRef();
        this.first = React.createRef();
        this.last = React.createRef();
        this.data = React.createRef();
        this.file = React.createRef();
        this.radioMale = React.createRef();
        this.radioFemale = React.createRef();
        this.errorAgree = React.createRef();
        this.country = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            errorFirst: null,
            errorLast: null,
            errorData: null,
            errorGender: null,
            errorCountry: null,
            errorAgree: null,
            errorFile: null,
            allNotNull: false,
        };
    }

    checkAllNotNull = () => {
        const allNotNull = Object.values(this.state).some(
            (item) => item !== null
        );
        this.setState({ allNotNull });
        return allNotNull;
    };
    handlerFilter = () => {
        if (!this.first.current?.value.trim()) {
            this.setState({ errorFirst: 'Enter a name' }, this.checkAllNotNull);
        } else if (
            this.first.current !== undefined &&
            startsWithCapital(this.first.current.value.trim()) === false
        ) {
            this.setState(
                { errorFirst: 'Type with a capital letter' },
                this.checkAllNotNull
            );
        } else {
            this.setState({ errorFirst: null }, this.checkAllNotNull);
        }

        if (!this.last.current?.value.trim()) {
            this.setState({ errorLast: 'Enter a name' }, this.checkAllNotNull);
        } else if (
            this.last.current !== undefined &&
            startsWithCapital(this.last.current.value.trim()) === false
        ) {
            this.setState(
                { errorLast: 'Type with a capital letter' },
                this.checkAllNotNull
            );
        } else {
            this.setState({ errorLast: null }, this.checkAllNotNull);
        }

        if (!this.data.current?.valueAsDate) {
            this.setState(
                { errorData: 'Enter the date' },
                this.checkAllNotNull
            );
        } else {
            this.setState({ errorData: null }, this.checkAllNotNull);
        }
        if (this.country.current?.value === 'none') {
            this.setState(
                { errorCountry: 'Enter the country' },
                this.checkAllNotNull
            );
        } else {
            this.setState({ errorCountry: null }, this.checkAllNotNull);
        }

        if (!this.file.current?.files?.[0]) {
            this.setState(
                { errorFile: 'Please, upload card image' },
                this.checkAllNotNull
            );
        } else {
            this.setState({ errorFile: null }, this.checkAllNotNull);
        }

        if (
            this.radioMale.current?.checked === false &&
            this.radioFemale.current?.checked === false
        ) {
            this.setState(
                { errorGender: 'Choose a gender' },
                this.checkAllNotNull
            );
        } else {
            this.setState({ errorGender: null }, this.checkAllNotNull);
        }

        if (this.errorAgree.current?.checked === false) {
            this.setState(
                { errorAgree: 'Choose a language' },
                this.checkAllNotNull
            );
        } else {
            this.setState({ errorAgree: null }, this.checkAllNotNull);
        }
    };
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.handlerFilter();
        const genderVal = this.radioFemale.current?.checked
            ? this.radioFemale.current?.value
            : this.radioMale.current?.value;

        if (this.state.allNotNull) {
            const newUser: IUser = {
                first: this.first.current?.value,
                last: this.last.current?.value,
                data: this.data.current?.value,
                file: this.file.current?.files?.[0],
                country: this.country.current?.value,
                agree: this.errorAgree.current?.checked,
                gender: genderVal,
            };
            this.props.addNewUser(newUser);
            this.form.current?.reset();
        }
    };

    render(): React.ReactNode {
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
                        ref={this.first}
                        errorMess={this.state.errorFirst}
                    />
                    <InputCustom
                        title="Last Name:"
                        placeholder="Enter last name"
                        ref={this.last}
                        errorMess={this.state.errorLast}
                    />
                </div>
                <InputCustom
                    title="Select your date of birth:"
                    type="date"
                    ref={this.data}
                    errorMess={this.state.errorData}
                />
                <InputCustom
                    title="Choose a picture of something:"
                    type="file"
                    ref={this.file}
                    errorMess={this.state.errorFile}
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
                        errorMess={this.state.errorGender}
                    />
                </div>
                <div className={styles.form__row}>
                    <h1>You agree to your data being sent</h1>
                    <InputCustom
                        title="agree"
                        type="checkbox"
                        ref={this.errorAgree}
                        errorMess={this.state.errorAgree}
                    />
                </div>
                <SelectorCustom
                    ref={this.country}
                    errorMess={this.state.errorCountry}
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
            </form>
        );
    }
}
