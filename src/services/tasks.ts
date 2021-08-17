import { ISearchTasksParam } from '@/types/task';

export default {
  getTasksWithFilter: (param: ISearchTasksParam = {}) => ({
    url: '/tasks',
    param,
  }),
};
