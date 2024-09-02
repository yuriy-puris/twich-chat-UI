import { TMessage } from "../models/messages.model";

export const mockMessages: TMessage[] = [
  {
    id: 1,
    user: {
      name: 'Gamer123',
      avatar: 'https://via.placeholder.com/40?text=G',
    },
    text: 'Hey everyone! Excited for the stream!',
    timestamp: '10:05 PM',
  },
  {
    id: 2,
    user: {
      name: 'StreamLover',
      avatar: 'https://via.placeholder.com/40?text=S',
    },
    text: 'Great stream so far!',
    timestamp: '10:06 PM',
  },
  {
    id: 3,
    user: {
      name: 'ProGamer',
      avatar: 'https://via.placeholder.com/40?text=P',
    },
    text: 'Can you try the new game mode?',
    timestamp: '10:07 PM',
  },
];


export const UserMessage = {
  id: 1,
  user: {
    name: 'Gamer123',
    avatar: 'https://via.placeholder.com/40?text=G',
  },
  text: 'Hey everyone! Excited for the stream!',
  timestamp: '10:05 PM',
}