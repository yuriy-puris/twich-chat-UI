export type TUser = {
  id: string;
  name: string;
  avatar: string;
  firstName: string;
  lastName: string;
};

export type TUserMessage = Pick<TUser, 'name' | 'avatar'>;
