import React from 'react';
import { IUser } from '../../interface';

interface UserProps {
    user: IUser;
}

export class User extends React.Component<UserProps> {
    render() {
        const { first, last, data, country, gender, file } = this.props.user;
        const imgSrc = file
            ? URL.createObjectURL(file)
            : './svg/empty-user.svg';

        return (
            <article>
                <section>
                    <img src={imgSrc} alt={first} />
                </section>
                <section>
                    <h3>
                        {first} {last}
                    </h3>
                    <p>{gender}</p>
                    <p>Birthday: {data?.toString()}</p>
                    <p>Country: {country}</p>
                </section>
            </article>
        );
    }
}
