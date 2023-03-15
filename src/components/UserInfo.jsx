import UserContext from '../context/UserContext';

export default function UserInfo() {
    return (
        <UserContext.Consumer>
            {value => <h1>{value}</h1>}
        </UserContext.Consumer>
    );
}