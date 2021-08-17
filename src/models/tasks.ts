import { ISearchTasksParam, ITask } from '@/types/task';
import { request } from 'ice';
import taskService from '@/services/tasks';

interface IState {
  tasks: ITask[];
}

export default {
  state: {
    tasks: [] as ITask[],
  },

  reducers: {
    setTasks: (prevState: IState, payload: IState) => ({ ...prevState, ...payload }),
  },

  effects: ({ tasks: { setTasks } }) => ({
    getTasksWithFilter: async (param: ISearchTasksParam = {}) => {
      const tasks = await request(taskService.getTasksWithFilter(param));
      setTasks({ tasks });
    },
  }),
};
