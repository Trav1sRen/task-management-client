import token from '@/models/token';
import task from '@/models/task';
import { createStore } from '@ice/store';
import { IAppStoreModels } from '@/types/store';

export const appModels: IAppStoreModels = {
  token,
  task,
};

const store = createStore(appModels);

export default store;
