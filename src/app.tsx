import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  request: {
    baseURL: 'https://localhost:3000',
  },
};

runApp(appConfig);
