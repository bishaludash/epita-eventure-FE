export type TEvent = {
  id?: string | undefined;
  eventName: string;
  eventDate: string | undefined | any;
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

export type TUser = {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
  sid: string;
};

export type TUsers = TUser[] | undefined;
