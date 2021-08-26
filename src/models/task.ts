import { ICreateTaskDto, ISearchTasksParam, ITask, IUpdateTaskStatusDto } from '@/types/task';
import { request } from 'ice';
import taskService from '@/services/task';
import { IRootDispatch, IRootState } from '@/types/store';
import { AxiosRequestConfig } from 'axios';

interface IState {
  tasks: ITask[];
}

interface IUpdateTaskStatusPayload {
  id: number;
  data: IUpdateTaskStatusDto;
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
      const tasks = await request<ITask[]>(taskService.getTasks(param, accessToken || window.localStorage.accessToken));
      dispatch.task.update({ tasks });
    },

    deleteTask: async (id: number, { token: { accessToken }, task: { tasks } }: IRootState) => {
      await request(taskService.deleteTask(id, accessToken || window.localStorage.accessToken) as AxiosRequestConfig);
      dispatch.task.update({ tasks: tasks.filter((task) => task.id !== id) });
    },

    createTask: async (data: ICreateTaskDto, { token: { accessToken }, task: { tasks } }: IRootState) => {
      const task = await request<ITask>(
        taskService.createTask(data, accessToken || window.localStorage.accessToken) as AxiosRequestConfig,
      );

      dispatch.task.update({ tasks: [task, ...tasks] });
    },

    updateTaskStatus: async (
      { id, data }: IUpdateTaskStatusPayload,
      { token: { accessToken }, task: { tasks } }: IRootState,
    ) => {
      const updatedTask = await request<ITask>(
        taskService.updateTaskStatus(id, data, accessToken || window.localStorage.accessToken) as AxiosRequestConfig,
      );

      const idx = tasks.findIndex((task) => task.id === updatedTask.id);
      const newTasks = [...tasks];
      newTasks[idx] = updatedTask;
      dispatch.task.update({ tasks: newTasks });
    },
  }),
};
