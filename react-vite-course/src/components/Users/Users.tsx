import { useAppSelector } from '../../hooks/redux';
import User from '../User/User';
import styles from './Users.module.scss';

const Users = () => {
    const { users } = useAppSelector((state) => state.userReducer);
    const usersLayout = users.map((user, index) => (
        <User user={user} key={index} />
    ));

    return <div className={styles.wrapper}>{usersLayout}</div>;
};
export default Users;
