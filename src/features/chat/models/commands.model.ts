export type TCommand = {
  id: number;
  command: string;
  description: string;
}

export enum ECommandType {
  TAG = '@',
  SERVICE = '/',
  EMOTE = ':',
};

export enum ECommandMessageType {
  TAG = 'TAG',
  SERVICE = 'SERVICE',
  EMOTE = 'EMOTE',
};