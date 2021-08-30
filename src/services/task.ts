import { ICreateTaskDto, ISearchTasksParam, IUpdateTaskStatusDto } from '@/types/task';
import { getKeyByValue } from '@/tools/object.utils';

const { statusDict } = window.localStorage;

export default {
  getTasks: ({ status, search }: ISearchTasksParam, accessToken: string) => ({
    url: '/tasks',
    headers: { Authorization: `Bearer ${accessToken}` },
    params: { status: status ? getKeyByValue(statusDict, status) : undefined, search },
  }),

  createTask: (data: ICreateTaskDto, accessToken: string) => ({
    url: '/tasks',
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    data,
  }),

  updateTaskStatus: (id: number, { status }: IUpdateTaskStatusDto, accessToken: string) => ({
    url: `/tasks/${id}/status`,
    method: 'PATCH',
    headers: { Authorization: `Bearer ${accessToken}` },
    data: { status: getKeyByValue(statusDict, status) },
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
