import React from 'react';
import { IUser } from '../../interface';
import styles from './User.module.scss';

interface UserProps {
    user: IUser;
}

export class User extends React.Component<UserProps> {
    render() {
        const { name, surname, birthday, country, gender, file } =
            this.props.user;
        const imgSrc = file ? URL.createObjectURL(file) : '';

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
    }
}
