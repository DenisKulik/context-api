import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function ChangeUser() {
    const { user, setUser } = useContext(UserContext);

    return (
        <button
            onClick={() => setUser(user === 'Denis' ? 'Anna' : 'Denis')}>
            Change user
        </button>
    );
}