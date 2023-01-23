import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authSlice';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    //   console.log(form.elements.login.value);
    dispatch(logIn(form.elements.login.value));
    form.reset();
    navigate('/dashboard', { replace: true });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <br />
        <button type="submit"> Log in</button>
      </form>
    </div>
  );
};
