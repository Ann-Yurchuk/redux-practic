import { useLogOutRedirect } from 'hook/useLogOutRedirect';

export const DashBoardPage = () => {
  useLogOutRedirect();

  return <div>Dashboard Page</div>;
};
