import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/authSlice';


export const AuthMenu = () => {
    const login = useSelector(state => state.auth.login);
    const dispatch = useDispatch();

    return <div>{login}
    <button type='button' onClick={()=>dispatch(logOut())}>Log out</button>
    </div>;
};
