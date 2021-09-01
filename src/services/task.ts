import { ICreateTaskDto, ISearchTasksParam, IUpdateTaskStatusDto } from '@/types/task';

export default {
  getTasks: (params: ISearchTasksParam, accessToken: string) => ({
    url: '/tasks',
    headers: { Authorization: `Bearer ${accessToken}` },
    params,
  }),

  createTask: (data: ICreateTaskDto, accessToken: string) => ({
    url: '/tasks',
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    data,
  }),

  updateTaskStatus: (id: number, data: IUpdateTaskStatusDto, accessToken: string) => ({
    url: `/tasks/${id}/status`,
    method: 'PATCH',
    headers: { Authorization: `Bearer ${accessToken}` },
    data,
  }),

  deleteTask: (id: number, accessToken: string) => ({
    url: `/tasks/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  }),

  getStatusDict: (accessToken: string) => ({
    url: '/tasks/statusDict',
    headers: { Authorization: `Bearer ${accessToken}` },
  }),
};
