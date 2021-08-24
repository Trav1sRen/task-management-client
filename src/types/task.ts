export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

interface ICreateTaskDto {
  title: string;
  description: string;
}

interface IUpdateTaskStatusDto {
  status: TaskStatus;
}

interface ISearchTasksParam {
  status?: TaskStatus;
  search?: string;
}

export type { ITask, ICreateTaskDto, ISearchTasksParam, IUpdateTaskStatusDto };
