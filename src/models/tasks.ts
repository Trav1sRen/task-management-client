import { ISearchTasksParam, ITask } from '@/types/task';
import { request } from 'ice';
import taskService from '@/services/tasks';
import { IRootDispatch, IRootState } from '@/types/store';
import { AxiosRequestConfig } from 'axios';

interface IState {
  tasks: ITask[];
}

export default {
  state: {
    tasks: [] as ITask[],
  },

  reducers: {
    update: (prevState: IState, payload: IState) => ({ ...prevState, ...payload }),
  },

  effects: ({ tasks: { update } }: IRootDispatch) => ({
    getTasks: async (param: ISearchTasksParam = {}, { token: { accessToken } }: IRootState) => {
      const tasks = await request<ITask[]>(taskService.getTasks(param, accessToken) as AxiosRequestConfig);
      update({ tasks });
    },
  }),
};
