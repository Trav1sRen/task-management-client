import SignIn from '@/pages/SignIn';
import { IRouterConfig } from 'ice';
import SignUp from '@/pages/SignUp';
import Tasks from '@/pages/Tasks';
import CreateTask from '@/pages/CreateTask';

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
        children: [
          {
            path: '/',
            exact: true,
            component: Tasks,
          },
          {
            path: '/create',
            exact: true,
            component: CreateTask,
          },
        ],
      },
    ],
  },
];
export default routerConfig;
