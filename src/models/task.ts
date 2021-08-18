import { ISearchTasksParam, ITask } from '@/types/task';
import { request } from 'ice';
import taskService from '@/services/task';
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

  // Why using deconstructor on dispatch will cause TS error?
  effects: (dispatch: IRootDispatch) => ({
    // Why cannot set default value for payload here?
    getTasks: async (param: ISearchTasksParam, { token: { accessToken } }: IRootState) => {
      const tasks = await request<ITask[]>(taskService.getTasks(param, accessToken) as AxiosRequestConfig);
      dispatch.task.update({ tasks });
    },
  }),
};