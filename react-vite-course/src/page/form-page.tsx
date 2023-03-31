import React, { useState } from 'react';
import Form from '../components/Form/Form';
import { Users } from '../components/Users/Users';
import { IUser } from '../interface';

const FormPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const addNewUser = (newUser: IUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };
    return (
        <>
            <Form addNewUser={addNewUser} />
            <Users users={users} />
        </>
    );
};
export default FormPage;
