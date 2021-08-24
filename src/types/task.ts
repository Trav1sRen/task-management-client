export enum TaskStatus {
  NO_STATUS = 'No Status Filter',
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
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
