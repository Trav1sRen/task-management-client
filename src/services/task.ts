import { ISearchTasksParam } from '@/types/task';

export default {
  getTasks: (param: ISearchTasksParam, accessToken: string) => ({
    url: '/tasks',
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    param,
  }),

  deleteTask: (id: number, accessToken: string) => ({
    url: `/tasks/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  }),
};
