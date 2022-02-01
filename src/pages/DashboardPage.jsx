import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const DashboardPage = () => {
  useLogOutRedirect();

  return <div>Dashboard Page</div>;
};
