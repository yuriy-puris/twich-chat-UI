import { TCommand } from "../models/commands.model";

export const commandData: TCommand[] = [
  {
    id: 1,
    command: '/help',
    description: 'Show the list of available commands',
  },
  {
    id: 2,
    command: '/ban [username]',
    description: 'Ban a user from the chat',
  },
  {
    id: 3,
    command: '/timeout [username] [seconds]',
    description: 'Temporarily timeout a user for the specified time',
  },
  {
    id: 4,
    command: '/cheer [amount]',
    description: 'Send bits to support the streamer',
  },
  {
    id: 5,
    command: '/emote [emote-name]',
    description: 'Send a specific emote in the chat',
  },
  {
    id: 6,
    command: '/whisper [username] [message]',
    description: 'Send a private message to a user',
  },
  {
    id: 7,
    command: '/mod [username]',
    description: 'Give moderator privileges to a user',
  },
  {
    id: 8,
    command: '/unmod [username]',
    description: 'Remove moderator privileges from a user',
  },
  {
    id: 9,
    command: '/raid [channel]',
    description: 'Raid another channel with your',
  },
];
