import { IAppConfig, runApp } from 'ice';
import { Message } from '@alifd/next';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  request: {
    baseURL: 'http://localhost:3000',
    interceptors: {
      response: {
        onError: (error) => {
          if (error.response?.status) {
            const {
              response: { status },
            } = error;

            if (status === 500) {
              Message.error({ content: 'Internal Server Error occurred' });
            }

            if (status === 404) {
              Message.error({ content: 'Requested resource does not exist' });
            }
          }

          return Promise.reject(error);
        },
      },
    },
  },
};

runApp(appConfig);
