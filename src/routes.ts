import SignIn from '@/pages/SignIn';
import { IRouterConfig } from 'ice';
import SignUp from '@/pages/SignUp';

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
    ],
  },
];
export default routerConfig;
