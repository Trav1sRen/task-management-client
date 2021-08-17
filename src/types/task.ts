enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

interface ITask {
  title: string;
  description: string;
  status: TaskStatus;
}

interface ISearchTasksParam {
  status?: TaskStatus;
  search?: string;
}

export type { ITask, ISearchTasksParam };
