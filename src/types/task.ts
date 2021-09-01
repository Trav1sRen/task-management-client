interface ITask {
  id: number;
  title: string;
  description: string;
  status: number;
}

interface ICreateTaskDto {
  title: string;
  description: string;
}

interface IUpdateTaskStatusDto {
  status: string;
}

interface ISearchTasksParam {
  status?: string;
  search?: string;
}

export type { ITask, ICreateTaskDto, ISearchTasksParam, IUpdateTaskStatusDto };
