import { IUser } from '../../interface';
import User from '../User/User';
import styles from './Users.module.scss';

interface UsersProps {
    users: IUser[];
}

const Users = ({ users }: UsersProps) => {
    const usersLayout = users.map((user, index) => (
        <User user={user} key={index} />
    ));

    return <div className={styles.wrapper}>{usersLayout}</div>;
};
export default Users;
