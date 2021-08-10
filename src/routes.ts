import SignIn from '@/pages/SignIn';
import { IRouterConfig } from 'ice';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        exact: true,
        component: SignIn,
      },
    ],
  },
];
export default routerConfig;
