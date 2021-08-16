import SignIn from '@/pages/SignIn';
import { IRouterConfig } from 'ice';
import SignUp from '@/pages/SignUp';
import Tasks from '@/pages/Tasks';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        exact: true,
        component: SignIn,
      },
      {
        path: '/sign-up',
        exact: true,
        component: SignUp,
      },
      {
        path: '/tasks',
        exact: true,
        component: Tasks,
      },
    ],
  },
];
export default routerConfig;
