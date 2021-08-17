import token from '@/models/token';
import tasks from '@/models/tasks';
import { createStore } from '@ice/store';

const store = createStore({ token, tasks });

export default store;
