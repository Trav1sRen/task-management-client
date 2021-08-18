import { ISearchTasksParam } from '@/types/task';

export default {
  getTasks: (param: ISearchTasksParam, accessToken: string) => ({
    url: '/tasks',
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    param,
  }),
};
