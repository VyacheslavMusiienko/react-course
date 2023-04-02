import { SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from '../../interface';
import styles from './Form.module.scss';
import InputCustom from './InputCustom/InputCustom';
import SelectorCustom from './SelectCustom/SelectCustom';

interface FormProps {
    addNewUser: (user: IUser) => void;
}
type TUserCard = Omit<IUser, 'picture'> & {
    agreement: string;
    picture: FileList;
};
const Form = ({ addNewUser }: FormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TUserCard>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {
            name: '',
            surname: '',
            birthday: '',
            gender: '',
            agreement: '',
            picture: undefined,
            country: '',
        },
    });
    const onSubmit: SubmitHandler<TUserCard> = async (data: TUserCard) => {
        const newUser: IUser = {
            name: data.name,
            surname: data.surname,
            birthday: data.birthday,
            country: data.country,
            gender: data.gender,
            picture: data?.picture?.[0],
        };
        addNewUser(newUser);
        reset();
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <div className="form__name">
                <h1>Form</h1>
            </div>
            <div className={styles.form__row}>
                <InputCustom
                    title="First Name:"
                    placeholder="Enter first name"
                    {...register('name', {
                        required: 'Required field',
                        minLength: {
                            value: 3,
                            message: 'minimum of 3 characters',
                        },
                    })}
                />
                {errors.name && <span>{errors.name.message}</span>}

                <InputCustom
                    title="Last Name:"
                    placeholder="Enter last name"
                    {...register('surname', {
                        required: 'Required field',
                        minLength: {
                            value: 3,
                            message: 'minimum of 3 characters',
                        },
                    })}
                />
                {errors.surname && <span>{errors.surname.message}</span>}
            </div>
            <InputCustom
                title="Select your date of birth:"
                type="date"
                {...register('birthday', {
                    required: 'Required field',
                })}
            />
            {errors.birthday && <span>{errors.birthday.message}</span>}

            <InputCustom
                title="Choose a picture of something:"
                type="file"
                accept="image/*"
                {...register('picture')}
            />
            {errors.picture && <span>{errors.picture.message}</span>}
            <div className={styles.form__row}>
                <h1>Gender:</h1>
                <InputCustom
                    type="radio"
                    title="Male"
                    value="male"
                    {...register('gender', {
                        required: 'Required field',
                    })}
                />
                <InputCustom
                    type="radio"
                    title="Female"
                    value="female"
                    {...register('gender', {
                        required: 'Required field',
                    })}
                />
                {errors.gender && <span>{errors.gender.message}</span>}
            </div>
            <div className={styles.form__row}>
                <h1>You agree to your data being sent</h1>
                <InputCustom
                    title="agree"
                    type="checkbox"
                    {...register('agreement', {
                        required: 'Required field',
                    })}
                />
                {errors.agreement && <span>{errors.agreement.message}</span>}
            </div>
            <SelectorCustom
                {...register('country', {
                    required: 'Required field',
                })}
            />
            {errors.country && <span>{errors.country.message}</span>}

            <div className="button">
                <button type="submit" className={`${styles.button_submit} btn`}>
                    Submit
                </button>
                <button type="reset" className={`${styles.button_reset} btn`}>
                    Reset
                </button>
            </div>
        </form>
    );
};
export default Form;
