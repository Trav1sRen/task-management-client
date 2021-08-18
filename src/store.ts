import token from '@/models/token';
import tasks from '@/models/tasks';
import { createStore } from '@ice/store';
import { IAppStoreModels } from '@/types/store';

export const appModels: IAppStoreModels = {
  token,
  tasks,
};

const store = createStore(appModels);

export default store;
