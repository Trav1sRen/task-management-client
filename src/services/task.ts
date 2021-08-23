import { ICreateTaskDto, ISearchTasksParam } from '@/types/task';

export default {
  getTasks: (param: ISearchTasksParam, accessToken: string) => ({
    url: '/tasks',
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    param,
  }),

  createTask: (data: ICreateTaskDto, accessToken: string) => ({
    url: '/tasks',
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    data,
  }),

  deleteTask: (id: number, accessToken: string) => ({
    url: `/tasks/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  }),
};
