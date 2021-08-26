import { ICreateTaskDto, ISearchTasksParam, IUpdateTaskStatusDto, TaskStatus } from '@/types/task';
import { getEnumKeyByEnumValue } from '@/tools/enum.utils';

export default {
  getTasks: ({ status, search }: ISearchTasksParam, accessToken: string) => ({
    url: '/tasks',
    headers: { Authorization: `Bearer ${accessToken}` },
    params: { status: status ? getEnumKeyByEnumValue(TaskStatus, status) : undefined, search },
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
    data: { status: getEnumKeyByEnumValue(TaskStatus, status) },
  }),

  deleteTask: (id: number, accessToken: string) => ({
    url: `/tasks/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  }),
};
