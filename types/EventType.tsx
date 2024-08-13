export type TEvent = {
  id?: string | undefined;
  eventName: string;
  eventDate: string | undefined;
  location: string;
  description: string;
  manager: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TEvents = TEvent[];

export const defaultEventData = {
  eventName: "",
  eventDate: undefined,
  location: "",
  description: "",
  manager: "",
};
