import { TUserMessage } from "./user.model";

export type TMessage = {
  id: number;
  user: TUserMessage;
  text: string;
  timestamp: string;
};
