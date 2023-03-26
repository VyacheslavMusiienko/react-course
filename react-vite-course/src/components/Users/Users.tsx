import React from 'react';
import { IUser } from '../../interface';
import { User } from '../User/User';

interface UsersProps {
    users: IUser[];
}

export class Users extends React.Component<UsersProps> {
    render() {
        const usersLayout = this.props.users.map((user, index) => (
            <User user={user} key={index} />
        ));

        return <div>{usersLayout}</div>;
    }
}
