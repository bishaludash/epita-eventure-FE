export type TTask = {
  taskId?: string | undefined;
  taskName: string;
  description: string;
  eventId: string;
  assignee: string;
  createdAt?: string;
  updatedAt?: Date;
};

export type TTasks = TTask[];

export const defaultTaskData = {
  taskName: "",
  description: "",
  eventId: "",
  assignee: "",
};
