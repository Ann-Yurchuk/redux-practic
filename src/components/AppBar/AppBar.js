import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { useSelector } from 'react-redux';
import { Header, Link } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Header>
      <nav>
              <Link to="/login">Log in</Link>
               <Link to="/dashboard">Dashboard</Link>
      </nav>
      {isLoggedIn && <AuthMenu />}
    </Header>
  );
};
