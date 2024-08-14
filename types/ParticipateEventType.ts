export type TParticipateEvent = {
  id?: string;
  eventId?: string;
  eventName: string;
  userId: string;
  userName: string;
  status: string;
};

export type TParticipateEvents = TParticipateEvent[];
