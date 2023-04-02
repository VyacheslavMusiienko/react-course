import { IUser } from '../../interface';
import styles from './User.module.scss';

interface UserProps {
    user: IUser;
}

const User = ({ user }: UserProps) => {
    const { name, surname, birthday, country, gender, picture } = user;
    const imgSrc = picture ? URL.createObjectURL(picture) : '';

    return (
        <article className={styles.wrapper}>
            <section className={styles.wrapper__img}>
                <img src={imgSrc} alt={name} />
            </section>
            <section>
                <h3>
                    {name} {surname}
                </h3>
                <p>Gender: {gender}</p>
                <p>Birthday: {birthday?.toString()}</p>
                <p>Country: {country}</p>
            </section>
        </article>
    );
};
export default User;
