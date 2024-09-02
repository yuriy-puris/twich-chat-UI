import { createContext, ReactNode, useContext, useState } from 'react';
import { ECommandMessageType } from '../models/commands.model';
import { TMessage } from '../models/messages.model';
import { UserMessage } from '../consts/messagesData';
import { parseURI } from '../utils/emotes';
import { getChatTime } from '../utils/date';

type TCommandMessage = {
  type: ECommandMessageType;
  value: string;
};

interface ChatCommandsContextProp {
  commandMessage: TMessage | null;
  handleProcessCommand: (value: TCommandMessage) => void;
}

const ChatCommandsContext = createContext<ChatCommandsContextProp>({
  commandMessage: null,
  handleProcessCommand: () => {},
});

export const ChatCommandsProvider = ({ children }: { children: ReactNode }) => {
  const userId = 1; // // user should be getting from store (react-query)
  const [commandMessage, setCommandMessage] = useState<TMessage | null>(null);

  const handleProcessCommand = (data: TCommandMessage) => {
    const { type, value } = data || {};
    let message;

    switch(type) {
      case ECommandMessageType.TAG:
        message = value;
      break;
      case ECommandMessageType.SERVICE:
        message = value;
      break;
      case ECommandMessageType.EMOTE:
        message = parseURI(value);
      break;
      default:
        break;
    }

    if (message) {
      setCommandMessage({
        ...UserMessage,
        timestamp: getChatTime(),
        text: message
      })
    }
  };

  return (
    <ChatCommandsContext.Provider value={{
      commandMessage,
      handleProcessCommand,
    }}>
      {children}
    </ChatCommandsContext.Provider>
  );
};

export const useChatCommandsContext = () => useContext<ChatCommandsContextProp>(ChatCommandsContext);
