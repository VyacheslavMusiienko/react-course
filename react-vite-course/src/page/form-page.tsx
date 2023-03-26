import React from 'react';
import Form from '../components/Form/Form';
import { Users } from '../components/Users/Users';
import { IUser } from '../interface';

interface IState {
    users: IUser[];
}

export default class FormPage extends React.Component<
    Record<string, never>,
    IState
> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            users: [],
        };
    }
    addNewUser = (newUser: IUser) => {
        this.setState((prevState) => {
            return { ...prevState, users: [...prevState.users, newUser] };
        });
    };
    render(): React.ReactNode {
        return (
            <>
                <Form addNewUser={this.addNewUser} />
                <Users users={this.state.users} />
                {/* {this.state.users.map((user) => (
                    <p key={user.first}>{user.first}</p>
                ))} */}
            </>
        );
    }
}
